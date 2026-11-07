import { ImageResponse } from 'next/og';
import { blogsData } from '../../../src/features/blogs/data/blogsData';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateStaticParams() {
  return blogsData.map((b) => ({
    id: b.id,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id || b.slug === id);

  const title = blog?.title || 'Engineering Blog | Sayan Ghosh';
  const tag = blog?.tags[0] || 'Software Engineering';
  const readTime = blog?.readTime || '5 min read';
  const date = blog?.date || '2026';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0c0d11',
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(245, 158, 11, 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(59, 130, 246, 0.15) 0%, transparent 45%)',
          padding: '64px 72px',
          color: 'white',
          fontFamily: 'sans-serif',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#fbbf24',
              }}
            >
              <span>{tag}</span>
            </div>
            <div style={{ display: 'flex', fontSize: '16px', color: '#9ca3af' }}>
              <span>{readTime} • {date}</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '18px',
              color: '#9ca3af',
              letterSpacing: '0.04em',
            }}
          >
            <span>thesayan.vercel.app/blogs</span>
          </div>
        </div>

        {/* Center: Blog Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            style={{
              display: 'flex',
              fontSize: title.length > 55 ? '48px' : '56px',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              margin: 0,
              color: '#ffffff',
              lineHeight: 1.18,
              maxWidth: '1050px',
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom Author Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#1f2937',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 700,
                color: '#f59e0b',
              }}
            >
              <span>SG</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#f3f4f6' }}>Sayan Ghosh</span>
              <span style={{ fontSize: '14px', color: '#9ca3af' }}>Full-Stack & AI Engineer</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '15px',
              color: '#d1d5db',
            }}
          >
            <span>Read Technical Article →</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
