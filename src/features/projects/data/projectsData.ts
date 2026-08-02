export interface ArchitectureItem {
  name: string;
  tech: string;
}

export interface ApiEndpointItem {
  method: string;
  path: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  tagBg: string;
  subtitle: string;
  bannerBg: string;
  bannerImg: string;
  logoImg?: string;
  icon: string;
  tags: string[];
  overview: string;
  features: string[];
  architecture?: ArchitectureItem[];
  apiEndpoints?: ApiEndpointItem[];
  setupGuide?: string[];
  liveUrl?: string;
  githubUrl?: string;
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: 'hoopit',
    title: 'Hoopit',
    tag: 'web',
    tagBg: 'bg-purple-600 text-white font-bold',
    subtitle: 'A full-stack URL shortener with real-time analytics, folder organization, and geolocation tracking.',
    bannerBg: 'from-[#EA580C] to-[#C2410C]',
    bannerImg: '/assets/hoopit-banner.webp',
    logoImg: '/assets/hoopit-logo.webp',
    icon: '🔗',
    tags: ['Node.js', 'Express', 'React 19', 'Vite', 'MongoDB', 'Mongoose', 'JWT', 'geoip-lite', 'Leaflet', 'Tailwind CSS'],
    overview: 'Hoopit combines a Node.js + Express backend with a React + Vite frontend to turn long, unwieldy URLs into clean, shareable links — while giving you a full analytics dashboard to track clicks, devices, browsers, referrers, and geolocation in real time.',
    features: [
      'Shorten & Custom Aliases: Turn long URLs into clean links with optional custom alias support.',
      'Folder Organization: Group links into structured folders for easy management.',
      'Deep Analytics: Track clicks by device, browser, country, city, referrer, and timestamp.',
      'Interactive Map Visualization: Pinpoint visitor click origins on an interactive map powered by Leaflet.',
      'Secure Authentication: Cookie-based session handling with JWT-protected dashboard routes.',
      'High-Precision Location Tracking: IP-based geolocation via edge headers or geoip-lite.'
    ],
    architecture: [
      { name: 'Backend Pipeline', tech: 'Node.js + Express, MongoDB + Mongoose, JWT + cookie-parser' },
      { name: 'Frontend Suite', tech: 'React 19 + Vite, React Router, Axios, Tailwind CSS' },
      { name: 'Analytics & Geolocation', tech: 'geoip-lite, UAParser, Leaflet / react-leaflet' }
    ],
    apiEndpoints: [
      { method: 'POST', path: '/api/auth/register', desc: 'Register a new user account' },
      { method: 'POST', path: '/api/auth/login', desc: 'Authenticate user & issue JWT' },
      { method: 'POST', path: '/api/create', desc: 'Create a new short URL with optional alias' },
      { method: 'GET', path: '/r/:shortCode', desc: 'Redirect to original URL & log click metadata' },
      { method: 'GET', path: '/api/user/analytics/:shortUrl', desc: 'Fetch click analytics for a specific URL' },
      { method: 'POST', path: '/api/folder', desc: 'Create a new link organization folder' }
    ],
    setupGuide: [
      'git clone https://github.com/me-sayanghosh/Hoopit',
      'cd Hoopit/Backend && npm install && npm run dev',
      'cd ../Frontend && npm install && npm run dev'
    ],
    github: 'https://github.com/me-sayanghosh/Hoopit',
    live: 'https://github.com/me-sayanghosh/Hoopit'
  },
  {
    id: 'prepdost',
    title: 'PrepDost',
    tag: 'web',
    tagBg: 'bg-purple-600 text-white font-bold',
    subtitle: 'AI-powered interview preparation platform built with MERN + Gemini AI.',
    bannerBg: 'from-[#F59E0B] to-[#D97706]',
    bannerImg: '/assets/prepdost-banner.webp',
    logoImg: '/assets/prepdost-logo.webp',
    icon: '🎓',
    tags: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'Gemini AI', 'JWT', 'Multer', 'pdf-parse', 'Vite', 'Sass', 'Nodemailer'],
    overview: 'PrepDost helps job seekers prepare for technical and behavioral interviews by generating structured AI interview reports from PDF resume uploads, self-declarations, and job descriptions using Google Gemini AI.',
    features: [
      'Authentication: Register, login, logout, protected routes, and JWT-based session flow.',
      'Password Recovery: Forgot password, verify reset code, and reset password via SMTP Nodemailer.',
      'AI Interview Analysis: Upload PDF resume + context to generate AI-powered interview reports via Google Gemini SDK.',
      'Report History: Fetch all reports and open detailed report by interview ID in private dashboard.',
      'Full Stack MERN Architecture: React 19 frontend, Express 5 backend, and MongoDB Atlas persistence.'
    ],
    architecture: [
      { name: 'Backend Pipeline', tech: 'Node.js, Express 5, MongoDB + Mongoose, Google Gemini SDK, Multer + pdf-parse' },
      { name: 'Frontend Suite', tech: 'React 19, React Router, Axios, Sass, Vite' },
      { name: 'Auth & Email', tech: 'JWT + bcryptjs, Nodemailer SMTP' }
    ],
    apiEndpoints: [
      { method: 'POST', path: '/api/auth/register', desc: 'Register a new user account' },
      { method: 'POST', path: '/api/auth/login', desc: 'Authenticate user & issue JWT' },
      { method: 'POST', path: '/api/auth/forgot-password', desc: 'Send password reset verification code via email' },
      { method: 'POST', path: '/api/interview/generate-report', desc: 'Upload PDF resume & generate AI interview report' },
      { method: 'GET', path: '/api/interview', desc: 'Fetch user interview report history' },
      { method: 'GET', path: '/api/interview/report/:interviewId', desc: 'Fetch single interview report details' }
    ],
    setupGuide: [
      'git clone https://github.com/me-sayanghosh/PrepDost.git',
      'cd PrepDost/Backend && npm install && npm run dev',
      'cd ../Frontend && npm install && npm run dev'
    ],
    github: 'https://github.com/me-sayanghosh/PrepDost',
    live: 'https://prep-dost.vercel.app'
  },
  {
    id: 'codereviewer-ai',
    title: 'CodeReviewer AI',
    tag: 'Developer Tools',
    tagBg: 'bg-white/20 text-white font-medium',
    subtitle: 'Full-stack AI code review web app that analyzes submitted code and returns structured feedback with verdicts, scores, and refactored code.',
    bannerBg: 'from-[#E11D48] to-[#BE123C]',
    bannerImg: '/assets/codereviewer-banner.webp',
    logoImg: '/assets/codereviewer-logo.webp',
    icon: '🤖',
    tags: ['React 19', 'Vite', 'Node.js', 'Express', '@google/genai', 'Gemini 2.5 Flash', 'GSAP', 'Axios', 'React Router'],
    overview: 'CodeReviewer is a full-stack AI code review application engineered with React 19 and Express that analyzes submitted code in real time, delivering structured feedback across Bugs, Security, Performance, Style, Refactored Code, and risk scoring (0-100) with PASS/WARN/FAIL verdicts.',
    features: [
      'Structured Feedback Sections: Detailed analysis breakdown across Bugs, Security, Performance, Code Style, and Refactored Code.',
      'Verdict & Scoring Engine: Automated PASS, WARN, and FAIL verdicts paired with granular scores out of 100.',
      'Smart Language Directive Parsing: Auto-detects programming languages via payload tags or first-line comment directives (/python, /c++, lang=java).',
      'Interactive Review Workspace: Real-time code paste workspace with parsed section views and readable syntax output.',
      'Resilient API Pipeline: Graceful backend validation, quota handling (429), and service fallback mechanisms.'
    ],
    architecture: [
      { name: 'Backend Pipeline', tech: 'Node.js, Express, @google/genai SDK, Gemini 2.5 Flash, dotenv, cors' },
      { name: 'Frontend Suite', tech: 'React 19, Vite, React Router, Axios, GSAP' },
      { name: 'AI Engine', tech: 'Google Gemini AI REST API, Language Directive Lexer' }
    ],
    apiEndpoints: [
      { method: 'POST', path: '/ai/ai-review', desc: 'Submit code payload for real-time AI code review analysis & verdict' }
    ],
    setupGuide: [
      'git clone https://github.com/me-sayanghosh/CodeReviewer.git',
      'cd CodeReviewer/Backend && npm install && npm start',
      'cd ../Frontend && npm install && npm run dev'
    ],
    github: 'https://github.com/me-sayanghosh/CodeReviewer',
    live: 'https://github.com/me-sayanghosh/CodeReviewer'
  },
  {
    id: 'veritas-weather',
    title: 'Veritas AI Weather Engine',
    tag: 'Analytics',
    tagBg: 'bg-slate-700/80 text-white font-medium',
    subtitle: 'Engineered a weather forecasting engine displaying complex meteorological datasets.',
    bannerBg: 'from-[#1E293B] to-[#0F172A]',
    bannerImg: '/assets/b91090124f830732de45724a6f591436543ed934.webp',
    icon: '🌧️',
    tags: ['React', 'Chart.js', 'Framer Motion', 'TailwindCSS'],
    overview: 'Veritas AI is a weather forecasting engine displaying complex meteorological datasets with dynamic interactive charts, 7-day predictions, and atmospheric pressure metrics.',
    features: [
      'Interactive meteorological data visualization using Chart.js & Framer Motion.',
      'Geolocation-based 7-day weather forecasting.',
      'Fast client-side caching & responsive UI.'
    ],
    github: 'https://github.com/me-sayanghosh',
    live: 'https://github.com/me-sayanghosh'
  }
];
