import { ImageResponse } from 'next/og';
import { projectsData } from '../../../src/features/projects/data/projectsData';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.id,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  const title = project?.title || 'Project | Sayan Ghosh';
  const tag = project?.tag || 'Web Application';
  const subtitle = project?.subtitle || 'Full-Stack Software Architecture';

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
            'radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(245, 158, 11, 0.15) 0%, transparent 45%)',
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
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#60a5fa',
              }}
            >
              <span>{tag}</span>
            </div>
            <div style={{ display: 'flex', fontSize: '16px', color: '#9ca3af' }}>
              <span>Built by Sayan Ghosh</span>
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
            <span>thesayan.vercel.app/projects</span>
          </div>
        </div>

        {/* Center: Project Title & Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            style={{
              display: 'flex',
              fontSize: '64px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              display: 'flex',
              fontSize: '26px',
              color: '#d1d5db',
              margin: 0,
              maxWidth: '960px',
              lineHeight: 1.35,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom Tags */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {(project?.tags || ['Next.js', 'React', 'TypeScript', 'Node.js']).slice(0, 5).map((tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '15px',
                  color: '#9ca3af',
                }}
              >
                <span>{tech}</span>
              </div>
            ))}
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
            <span>View Project Architecture →</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
