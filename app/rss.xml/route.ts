import { GET as feedGet } from '../feed.xml/route';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  return feedGet();
}
