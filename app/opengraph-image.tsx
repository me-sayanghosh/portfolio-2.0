import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Sayan Ghosh | Full-Stack & AI Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%)',
          padding: '64px 72px',
          color: 'white',
          fontFamily: 'sans-serif',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Top Header Pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 20px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '18px',
              fontWeight: 600,
              color: '#f59e0b',
            }}
          >
            <span>●</span>
            <span style={{ color: '#e5e7eb' }}>Full-Stack Developer & AI Engineer</span>
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#9ca3af',
              letterSpacing: '0.05em',
            }}
          >
            thesayan.vercel.app
          </div>
        </div>

        {/* Center Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Sayan Ghosh
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#d1d5db',
              margin: 0,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Transforming complex problems into elegant, scalable solutions.
          </p>
        </div>

        {/* Bottom Tech Stack Tags */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'AI Systems'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '16px',
                  color: '#9ca3af',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div style={{ fontSize: '16px', color: '#6b7280' }}>
            Kalyani, India
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
