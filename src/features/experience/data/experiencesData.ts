export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  description?: string;
  outroDescription?: string;
  bullets?: string[];
  skills?: string[];
  type?: 'Full-time' | 'Internship' | 'Freelance' | 'Community';
  logo?: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'phicsit',
    title: 'SDE Intern',
    role: 'SDE Intern',
    company: 'PHICSIT InfoTech Pvt. Ltd.',
    dates: 'Aug 2, 2026 - Present',
    location: 'Remote',
    type: 'Internship',
    logo: '/assets/phicsit-logo.webp',
    description: 'At **PHICSIT InfoTech**, I work primarily on [Open Source Connect](https://www.osconnect.org/), focusing on reliability, automation, and internal tooling. My role sits at the intersection of backend automation, product stability, and operational efficiency.',
    bullets: [
      'Worked primarily on [Open Source Connect](https://www.osconnect.org/) production systems.',
      'Fixed critical **automation bugs**, improving reliability and reducing failures.',
      'Managed and enhanced the **Platform Admin Panel** for internal operations.',
      'Built **automation workflows** to speed up developer & support workflows.',
      'Collaborated with product and support teams to ship fast, stable fixes.'
    ],
    outroDescription: 'This role sharpened my ability to work on real, high-impact systems where downtime and bugs directly affect users. I developed a strong bias toward shipping stable automation, building internal tools that teams actually rely on, and solving unglamorous but critical engineering problems that keep products running.',
    skills: ['Software Engineering', 'FullStack Development', 'REST APIs', 'Node.js', 'React', 'Database Design']
  },
  {
    id: 'sewakunj',
    title: 'FullStack Developer Intern',
    role: 'FullStack Developer Intern',
    company: 'Sewakunj Technologies',
    dates: 'Feb 13, 2025 - Jun 20, 2026',
    location: 'Remote, Gujarat',
    type: 'Internship',
    logo: '/assets/sewakunj-logo.webp',
    description: 'At **Sewakunj Technologies** (a service-based IT company), I worked as a FullStack Developer Intern focusing on web application optimization, system stability, and client-facing features. My role centered on backend refactoring, bug fixes, and performance engineering.',
    bullets: [
      'Worked on production systems for client web applications at **Sewakunj Technologies**.',
      'Engineered backend optimizations and **database query refinements**, improving API response times.',
      'Fixed critical **UI/UX & backend bugs**, ensuring smooth functionality across core platform features.',
      'Managed and enhanced **server-side APIs** for production launch readiness.',
      'Collaborated with cross-functional engineering teams in an Agile workflow to ship fast, stable releases.'
    ],
    outroDescription: 'This internship sharpened my ability to work on client-driven software where performance, clean architecture, and timely delivery directly impact business operations. I gained valuable experience in production debugging and scaling web services.',
    skills: ['FullStack Development', 'Bug Fixing', 'Backend Optimization', 'Node.js', 'React', 'Team Collaboration', 'Scalability']
  },
  {
    id: 'freelance',
    title: 'Freelance FullStack Developer',
    role: 'FullStack Developer',
    company: 'Self-Employed / Client Projects',
    dates: 'Oct 2025 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'As a **Freelance FullStack Developer**, I collaborate directly with diverse global clients to design, build, and deploy production-ready web applications. My work spans custom API architectures, high-performing frontend interfaces, and database optimization.',
    bullets: [
      'Engineered custom full-stack web applications, focusing on **performance, usability, and scalability**.',
      'Architected RESTful **backend API services**, authentication flows, and third-party integrations.',
      'Built responsive **React & Next.js web applications** with optimized state management and UI components.',
      'Optimized **database schemas and queries** across MongoDB and PostgreSQL for speed and reliability.',
      'Collaborated directly with founders and teams to translate product requirements into **production-ready software**.'
    ],
    outroDescription: 'Freelancing has sharpened my end-to-end ownership—from initial system architecture to deployment and maintenance. It developed my ability to write clean, maintainable code quickly while delivering software that directly solves business problems.',
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'devdotcommunity',
    title: 'Core Member',
    role: 'Core Member & Event Coordinator',
    company: 'DevDotCommunity',
    dates: 'Jan 2025 - Present',
    location: 'Remote',
    type: 'Community',
    logo: '/assets/devdotcommunity-logo.webp',
    description: 'At **DevDotCommunity**, I lead community initiatives, organize developer hackathons, and facilitate technical knowledge-sharing workshops for a growing network of 2,000+ developers.',
    bullets: [
      'Coordinated over 5+ major **tech events & hackathons** to foster developer engagement and hands-on learning.',
      'Implemented a structured **participant feedback system**, boosting overall event satisfaction scores by 25%.',
      'Mentored emerging developers, conducted **code reviews**, and managed community outreach.'
    ],
    outroDescription: 'This leadership role has strengthened my communication, team coordination, and mentorship skills while building active developer communities around open technology.',
    skills: ['Community Building', 'Leadership', 'Event Management', 'Communication', 'Team Collaboration', 'Mentorship']
  }
];
