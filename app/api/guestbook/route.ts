import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../src/lib/auth';
import { connectToDatabase } from '../../../src/lib/mongodb';
import GuestbookEntry from '../../../src/models/GuestbookEntry';

// In-memory fallback if MONGODB_URI is not yet provided
let memoryEntries: Array<{
  _id: string;
  name: string;
  email: string;
  image?: string;
  message: string;
  createdAt: string;
}> = [
  {
    _id: 'sample-1',
    name: 'Akash Nath',
    email: 'akash@example.com',
    image: 'https://avatars.githubusercontent.com/u/100131577?v=4',
    message: 'One of the coolest developers ever 🔥 inspiration material! Amazing portfolio 🚀',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
  },
  {
    _id: 'sample-2',
    name: 'Subhadip Saha',
    email: 'subhadip@example.com',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKpibfOP8NZm9_lJuZ4fEAivmxX_FpemLY5c54_6IIFYnFa0Qm7=s96-c',
    message: 'Awesome portfolio and clean UI execution! Keep building and inspiring <3',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120).toISOString(),
  },
];

export async function GET() {
  try {
    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const entries = await GuestbookEntry.find({})
        .sort({ createdAt: -1 })
        .limit(100)
        .lean();
      return NextResponse.json({ entries });
    }

    // Return in-memory entries if MONGODB_URI is not yet configured
    return NextResponse.json({ entries: memoryEntries, isDemo: true });
  } catch (error: any) {
    console.error('Error fetching guestbook entries:', error);
    return NextResponse.json(
      { error: 'Failed to load guestbook entries', entries: memoryEntries, isDemo: true },
      { status: 200 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { error: 'You must be signed in with Google to leave a message.' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const message = body.message?.trim();

    if (!message || message.length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty.' },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Message cannot exceed 500 characters.' },
        { status: 400 }
      );
    }

    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const newEntry = await GuestbookEntry.create({
        name: session.user.name || 'Anonymous',
        email: session.user.email,
        image: session.user.image || '',
        message,
      });

      return NextResponse.json({ success: true, entry: newEntry }, { status: 201 });
    }

    // Fallback for development without MONGODB_URI set
    const fallbackEntry = {
      _id: `mem-${Date.now()}`,
      name: session.user.name || 'Anonymous',
      email: session.user.email,
      image: session.user.image || '',
      message,
      createdAt: new Date().toISOString(),
    };
    memoryEntries.unshift(fallbackEntry);

    return NextResponse.json({ success: true, entry: fallbackEntry }, { status: 201 });
  } catch (error: any) {
    console.error('Error submitting guestbook entry:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit message.' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing entry ID' },
        { status: 400 }
      );
    }

    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const entry = await GuestbookEntry.findById(id);

      if (!entry) {
        return NextResponse.json(
          { error: 'Entry not found' },
          { status: 404 }
        );
      }

      if (entry.email.toLowerCase() !== session.user.email.toLowerCase()) {
        return NextResponse.json(
          { error: 'You are only allowed to delete your own messages.' },
          { status: 403 }
        );
      }

      await GuestbookEntry.findByIdAndDelete(id);
      return NextResponse.json({ success: true });
    }

    // Fallback memory delete
    memoryEntries = memoryEntries.filter(
      (e) => !(e._id === id && e.email.toLowerCase() === session.user.email!.toLowerCase())
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting guestbook entry:', error);
    return NextResponse.json(
      { error: 'Failed to delete entry.' },
      { status: 500 }
    );
  }
}
