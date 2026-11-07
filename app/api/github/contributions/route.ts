import { NextRequest, NextResponse } from 'next/server';

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'me-sayanghosh';
  const year = searchParams.get('year') || 'last';

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${encodeURIComponent(year)}`,
      {
        next: { revalidate: 3600 }, // Server-side ISR cache: 1 hour
        headers: { 'User-Agent': 'PortfolioBot/1.0' },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: `GitHub contributions API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const days: ContributionDay[] = data.contributions || [];

    if (!days.length) {
      return NextResponse.json(
        { success: false, error: 'No contribution records found' },
        { status: 404 }
      );
    }

    const total: number =
      data.total?.lastYear ??
      data.total?.[year] ??
      days.reduce((acc: number, curr: ContributionDay) => acc + (curr.count || 0), 0);

    return NextResponse.json({
      success: true,
      username,
      year,
      total,
      contributions: days,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}
