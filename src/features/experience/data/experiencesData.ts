export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  description?: string;
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
    description: 'Working as an SDE Intern at PHICSIT InfoTech Pvt. Ltd., building robust software features and scalable backend services.',
    bullets: [
      'Engineered scalable full-stack web applications and high-performance server APIs.',
      'Collaborated with cross-functional engineering teams to implement production features and optimize database queries.'
    ],
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
    description: "Improved Sewakunj Technologies's web application platform by resolving critical performance bottlenecks, squashing complex bugs, and optimizing server-side APIs for production launch readiness.",
    bullets: [
      'Engineered backend optimizations and database query refinements, improving API response times significantly.',
      'Identified and resolved critical UI/UX bugs across core customer-facing features.',
      'Collaborated closely with cross-functional engineering teams in an Agile environment to ensure web app scalability and launch readiness.'
    ],
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
    description: 'Delivering end-to-end full-stack web solutions and API architectures for diverse clients worldwide.',
    bullets: [
      'Designed and developed user-centric interfaces focused on performance, usability, accessibility, and scalability.',
      'Architected RESTful backend services, database schemas, and seamless third-party API integrations.',
      'Collaborated directly with clients to translate business requirements into reliable, production-ready digital products.'
    ],
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
    description: 'Leading community initiatives, organizing developer events, and facilitating technical knowledge-sharing workshops for over 2,000+ developers.',
    bullets: [
      'Coordinated over 5+ major tech events and hackathons to foster developer engagement and hands-on learning.',
      'Implemented a structured participant feedback system, boosting overall event satisfaction scores by 25%.',
      'Mentored emerging developers, conducted code reviews, and managed community outreach.'
    ],
    skills: ['Community Building', 'Leadership', 'Event Management', 'Communication', 'Team Collaboration', 'Mentorship']
  }
];
