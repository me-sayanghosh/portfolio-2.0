export const projectsData = [
  {
    id: 'hoopit',
    title: 'Hoopit',
    tag: 'web',
    tagBg: 'bg-purple-600 text-white font-bold',
    subtitle: 'A full-stack URL shortener with real-time analytics, folder organization, and geolocation tracking.',
    bannerBg: 'from-[#EA580C] to-[#C2410C]',
    bannerImg: '/assets/a3d295e02ea0c5a89aa612766ca75feaf88c9620.jpg',
    icon: '🔗',
    tags: ['Node.js', 'Express', 'React 19', 'Vite', 'MongoDB', 'Mongoose', 'JWT', 'geoip-lite', 'Leaflet', 'Tailwind CSS'],
    overview: 'Hoopit combines a Node.js + Express backend with a React + Vite frontend to turn long, unwieldy URLs into clean, shareable links — while giving you a full analytics dashboard to track clicks, devices, browsers, referrers, and geolocation in real time.',
    features: [
      '🔗 Shorten & Custom Aliases: Turn long URLs into clean links with optional custom alias support.',
      '📁 Folder Organization: Group links into structured folders for easy management.',
      '📊 Deep Analytics: Track clicks by device, browser, country, city, referrer, and timestamp.',
      '🗺️ Interactive Map Visualization: Pinpoint visitor click origins on an interactive map powered by Leaflet.',
      '🔐 Secure Authentication: Cookie-based session handling with JWT-protected dashboard routes.',
      '🌍 High-Precision Location Tracking: IP-based geolocation via edge headers or geoip-lite.'
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
    title: 'PrepDost — AI Interviewer',
    tag: 'web',
    tagBg: 'bg-purple-600 text-white font-bold',
    subtitle: 'A full-stack career platform designed to help job seekers build confidence with AI mock interviews.',
    bannerBg: 'from-[#F59E0B] to-[#D97706]',
    bannerImg: '/assets/b91090124f830732de45724a6f591436543ed934.jpg',
    icon: '🎓',
    tags: ['React.js', 'GSAP', 'CSS Modules', 'OpenAI API', 'MongoDB'],
    overview: 'PrepDost is a full-stack career platform designed to help students and job seekers build confidence with real-time AI mock interviews.',
    features: [
      'Interactive voice & text AI mock technical interview simulator.',
      'Role-specific coding challenges for Frontend, Backend, and Full-Stack.',
      'Comprehensive scoring reports with actionable performance metrics.'
    ],
    github: 'https://github.com/me-sayanghosh/prepdost',
    live: 'https://github.com/me-sayanghosh/prepdost'
  },
  {
    id: 'codereviewer-ai',
    title: 'CodeReviewer AI',
    tag: 'Developer Tools',
    tagBg: 'bg-white/20 text-white font-medium',
    subtitle: 'Engineered an automated agent that reviews PRs and code submissions in real-time.',
    bannerBg: 'from-[#E11D48] to-[#BE123C]',
    bannerImg: '/assets/a3d295e02ea0c5a89aa612766ca75feaf88c9620.jpg',
    icon: '🤖',
    tags: ['FastAPI', 'Node.js', 'Vite', 'Python', 'Docker', 'OpenAI'],
    overview: 'Engineered a full-stack AI automated agent that reviews pull requests and code submissions in real-time with granular static analysis and refactoring tips.',
    features: [
      'Automated security vulnerability detection & static code analysis.',
      'Code refactoring recommendations directly on pull requests.',
      'FastAPI + Node.js background pipeline.'
    ],
    github: 'https://github.com/me-sayanghosh',
    live: 'https://github.com/me-sayanghosh'
  },
  {
    id: 'veritas-weather',
    title: 'Veritas AI Weather Engine',
    tag: 'Analytics',
    tagBg: 'bg-slate-700/80 text-white font-medium',
    subtitle: 'Engineered a weather forecasting engine displaying complex meteorological datasets.',
    bannerBg: 'from-[#1E293B] to-[#0F172A]',
    bannerImg: '/assets/b91090124f830732de45724a6f591436543ed934.jpg',
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
