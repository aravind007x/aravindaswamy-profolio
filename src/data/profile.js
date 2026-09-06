// Personal profile data
export const profile = {
  name: 'ARAVINDASWMY',
  title: 'Core CSE Student',
  subtitle: 'Full-Stack Developer',
  role: 'Startup Founder',
  tagline: 'Building software, exploring AI, and turning ambitious ideas into real-world technology.',
  
  bio: 'I am a Core Computer Science Engineering student and aspiring technology entrepreneur focused on building practical technology solutions. My interests span full-stack development, backend engineering, frontend development, app development, AI/ML, and emerging technologies. I enjoy turning ideas into working products and experimenting with technologies that can solve real-world problems. I am also building Neyoks, an AI-powered drone food delivery technology concept, while continuing to develop my software engineering skills.',
  
  education: {
    degree: 'B.Tech – Computer Science & Engineering (CSE)',
    institution: 'Nalla Narasimha Reddy Education Society Group of Institutions',
    graduation: '2029'
  },
  
  socials: {
    email: 'mudurukolllaaravind@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aravind-mudurukolla-622116381/',
    github: 'https://github.com/aravind007x',
    instagram: 'https://instagram.com/aravind.ontext',
    x: 'https://x.com/aravind_009'
  }
}

// Navigation items
export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Events', href: '#events' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
]

// Skills
export const skills = {
  frontend: [
    { name: 'HTML', icon: '🏗️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' }
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' }
  ],
  databases: [
    { name: 'MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' }
  ],
  programming: [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' }
  ],
  apis: [
    { name: 'REST APIs', icon: '🔗' },
    { name: 'JSON', icon: '📋' },
    { name: 'Postman', icon: '📬' }
  ],
  tools: [
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Firebase', icon: '🔥' }
  ],
  mobile: [
    { name: 'Flutter', icon: '📱' }
  ],
  other: [
    { name: 'AI/ML Fundamentals', icon: '🤖' },
    { name: 'Emerging Technologies', icon: '🌌' }
  ]
}

// Experience
export const experience = [
  {
    id: 1,
    position: 'Software Developer Intern',
    company: 'Belvo',
    startDate: 'August 30, 2026',
    endDate: 'Present',
    description: 'Selected as a Software Developer Intern and gaining hands-on exposure to real-world software development and project work.',
    isCurrently: true
  }
]

// Projects
export const projects = [
  {
    id: 1,
    name: 'Neyoks',
    category: 'AI + Drone Technology + Food Delivery',
    description: 'An AI-powered drone food delivery technology concept focused on exploring autonomous drone-based food delivery.',
    role: 'Founder & Lead Developer',
    status: 'Prototype in Development',
    technologies: ['AI/ML', 'Drone Technology', 'Food Delivery', 'Autonomous Systems'],
    github: null,
    demo: null,
    featured: true,
    image: 'neyoks'
  },
  {
    id: 2,
    name: 'EcoDNA',
    category: 'AI + Sustainability',
    description: 'An AI-powered sustainability platform designed to help analyze environmental impact and provide sustainability-focused insights and recommendations.',
    role: 'Backend Developer',
    status: 'In Development',
    technologies: ['AI/ML', 'Sustainability', 'Analytics', 'Backend'],
    github: null,
    demo: null,
    featured: false,
    image: 'ecodna'
  },
  {
    id: 3,
    name: 'College Club Website',
    category: 'Web Development',
    description: 'A college club website project focused on creating a modern online presence for a student/community organization.',
    role: 'Developer',
    status: 'Completed',
    technologies: ['React', 'Tailwind CSS', 'Web Development'],
    github: null,
    demo: null,
    featured: false,
    image: 'club'
  }
]

// Hackathon
export const hackathon = {
  name: 'Quantum Arena',
  type: 'National Level Hackathon',
  duration: '36 hours',
  team: 'ELLIPSE ♾️',
  teamSize: 5,
  progress: 'Reached Level 4',
  description: 'Participated in an intensive hackathon involving continuous brainstorming, development, debugging, testing, and improving solutions under time pressure. A valuable learning experience in rapid prototyping and team collaboration.'
}

// Technical Events
export const events = [
  {
    id: 1,
    name: 'GENOS\'26',
    type: 'National Level Technical Symposium',
    organizer: 'Department of Chemical Engineering, JNTUH UCESTH',
    participation: 'Trivia Quiz',
    description: 'Participated in the technical trivia quiz, tested technical knowledge, learned new concepts, and interacted with students from different technical backgrounds.',
    recognition: 'Certificate of Participation'
  },
  {
    id: 2,
    name: 'Tech Samprathi 2026',
    type: 'National-Level Students\' Technical Symposium',
    organizer: 'School of Engineering, Nalla Narasimha Reddy Group of Institutions',
    participation: 'Paper Presentation',
    description: 'Presented a technical paper and gained experience in communicating ideas, learning from others, and exploring technical innovation.',
    recognition: 'Certificate of Participation'
  },
  {
    id: 3,
    name: 'PARAMPARA 2026',
    type: 'National Level Management Fest',
    organizer: 'School of Management Sciences, Nalla Narasimha Reddy Group of Institutions, Hyderabad',
    participation: 'Event Participation',
    description: 'Participated and gained insights into management and business concepts.',
    recognition: 'Certificate of Participation',
    quote: 'Ideas don\'t change the world — execution does.'
  }
]

// Certifications
export const certifications = [
  {
    id: 1,
    name: 'Oracle Certified Foundations Associate – Agentic AI',
    issuer: 'Oracle',
    description: 'Strengthened understanding of Agentic AI, AI foundations, and intelligent AI systems.',
    date: '2024',
    certificateUrl: null,
    icon: '🤖'
  },
  {
    id: 2,
    name: 'Get started with Microsoft Copilot',
    issuer: 'Microsoft Learn',
    type: 'Badge',
    date: '2024',
    certificateUrl: null,
    icon: '🚀'
  },
  {
    id: 3,
    name: 'Using Voyage Models with MongoDB',
    issuer: 'MongoDB',
    description: 'Learning focused on AI/Generative AI concepts and MongoDB.',
    date: '2024',
    certificateUrl: null,
    icon: '🍃'
  }
]

// Footer
export const footer = {
  name: 'ARAVINDASWMY',
  title: 'Core CSE Student | Full-Stack Developer | Startup Founder',
  copyright: `© 2026 ARAVINDASWMY. All rights reserved.`
}
