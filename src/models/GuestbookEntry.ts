import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGuestbookEntry extends Document {
  name: string;
  email: string;
  image?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const GuestbookEntrySchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    image: { type: String, default: '' },
    message: { type: String, required: true, trim: true, maxlength: 500 },
  },
  { timestamps: true }
);

const GuestbookEntry: Model<IGuestbookEntry> =
  mongoose.models.GuestbookEntry ||
  mongoose.model<IGuestbookEntry>('GuestbookEntry', GuestbookEntrySchema);

export default GuestbookEntry;
