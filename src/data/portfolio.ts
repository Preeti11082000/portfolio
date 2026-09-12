export const personal = {
  name: "Preeti Satsangi",
  role: "Front End Developer / React.js Developer",
  shortRole: "Frontend Engineer",
  tagline: "Front End Developer | React.js | Next.js",
  description: "Experienced React Developer with 4+ years of experience building scalable, high-performance web applications, dashboards, and modern digital products.",
  location: "Gurgaon, Haryana, India",
  phone: "9634565543",
  email: "p19.satsangi@gmail.com",
  github: "https://github.com/Preeti11082000",
  resumePath: "/Preeti-Satsangi-Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "Multiple", label: "Production Projects" },
  { value: "Frontend", label: "Engineering Focus" },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Appinventiv",
    role: "Software Engineer",
    period: "Oct 2023 – Present",
    location: "Noida",
    points: [
      "Engineered scalable, high-performance web applications using React.js and Next.js.",
      "Developed Wealth Software, a FinTech platform focused on secure onboarding, risk assessment, and investment education.",
      "Architected AVATUS, an avatar-based social media platform using high-fidelity digital avatars for privacy-first interactions.",
      "Optimized ReelTrack, a rental platform for movie equipment with complex listing and booking workflows.",
      "Enhanced LogiNext, a SaaS platform automating supply-chain deliveries for global eCommerce and retail brands.",
      "Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives.",
      "Conducted code reviews and helped improve code quality and maintainability.",
      "Led internal knowledge-sharing sessions on Redux, SASS, and coding standards.",
      "Integrated third-party APIs and media playback.",
      "Worked on performance optimization.",
      "Built responsive and accessible user interfaces.",
      "Implemented robust error handling.",
    ],
  },
  {
    company: "mFilterIt",
    role: "Software Engineer",
    period: "Jan 2022 – Oct 2023",
    location: "Noida",
    points: [
      "Designed dynamic dashboards using React.js, Bootstrap, and MUI.",
      "Integrated real-time data through Python and Node.js APIs.",
      "Built report modules and interactive graphs using Chart.js and React ApexCharts.",
      "Developed validated form systems using Formik and Yup.",
      "Worked on a greenfield product.",
      "Integrated multiple APIs for user verification.",
      "Implemented lazy loading to improve application load times.",
      "Managed complex application state using Redux.",
      "Worked with Git and established team development workflows.",
    ],
  },
  {
    company: "Genisup India Private Limited",
    role: "Software Intern",
    period: "Jun 2021 – Aug 2021",
    location: "Bangalore",
    points: [
      "Developed a responsive weather application using React.js.",
      "Integrated OpenWeatherMap API.",
      "Implemented city search.",
      "Displayed real-time weather conditions and temperature.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlight: string;
  github?: string;
  demo?: string;
  icon: string;
};

export const projects: Project[] = [
  {
    title: "React Cart Application",
    description: "An interactive e-commerce/cart application built using React.js with Redux Toolkit for efficient state management.",
    tech: ["React.js", "Redux Toolkit", "JavaScript", "Responsive UI"],
    highlight: "Efficient global state management using Redux Toolkit.",
    icon: "🛒",
    github: "https://github.com/Preeti11082000/react-cart",
    demo: "https://react-cart-eight.vercel.app/",
  },
  {
    title: "Daily News Website",
    description: "A responsive news application integrated with a real-time news API to provide users with up-to-date news content.",
    tech: ["React.js", "REST API", "JavaScript", "Responsive Design"],
    highlight: "Real-time API integration and dynamic news content.",
    icon: "📰",
  },
  {
    title: "Crypto Hunter",
    description: "A responsive cryptocurrency tracking application built with React.js.",
    tech: ["React.js", "Material UI", "Chart.js", "Context API", "CoinGecko API"],
    highlight: "Interactive cryptocurrency tracking and data visualization.",
    icon: "₿",
    github: "https://github.com/Preeti11082000/Cryptohunter",
    demo: "https://cryptocurrency-d3c87.web.app/",
  },
];

export type ProProject = {
  title: string;
  category: string;
  description: string;
  accent: string;
};

export const professionalProjects: ProProject[] = [
  { title: "Wealth Software", category: "FinTech", description: "Secure onboarding, risk assessment, and investment education platform.", accent: "from-violet-600 to-indigo-600" },
  { title: "AVATUS", category: "Social Platform", description: "Avatar-based social media platform focused on privacy-first interactions.", accent: "from-fuchsia-600 to-violet-600" },
  { title: "ReelTrack", category: "Rental Platform", description: "Movie equipment rental platform with listing and booking workflows.", accent: "from-cyan-600 to-blue-600" },
  { title: "LogiNext", category: "SaaS / Supply Chain", description: "Supply-chain delivery automation platform for global eCommerce and retail brands.", accent: "from-emerald-600 to-teal-600" },
];

export const skills = {
  Frontend: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive Web Design"],
  "State Management": ["Redux.js", "Redux Toolkit", "React Query", "Context API"],
  "UI / Styling": ["Tailwind CSS", "MUI", "Bootstrap", "SASS"],
  "Data Visualization": ["Chart.js", "React ApexCharts"],
  "Backend / Data": ["Node.js", "Python APIs", "MongoDB", "Firebase"],
  Tools: ["Git", "Webpack"],
};

export const education = [
  {
    degree: "Bachelor of Technology",
    institute: "Dayalbagh Educational Institute",
    location: "Agra",
    period: "2018 – 2022",
    detail: "GPA: 8/10",
  },
  {
    degree: "Intermediate",
    institute: "Shri Gulab Rai Montessori Senior Secondary School",
    location: "Bareilly",
    period: "2017 – 2018",
    detail: "Percentage: 93.4%",
  },
  {
    degree: "High School",
    institute: "Shri Gulab Rai Montessori Senior Secondary School",
    location: "Bareilly",
    period: "2015 – 2016",
    detail: "CGPA: 10/10",
  },
];

export const whyWork = [
  { title: "Scalable Frontend Development", desc: "Build maintainable and scalable React applications with clean architecture.", icon: "Layers" },
  { title: "Performance Focused", desc: "Experience with lazy loading, optimization and efficient application architecture.", icon: "Zap" },
  { title: "Product Experience", desc: "Experience across FinTech, SaaS, social platforms and rental platforms.", icon: "Boxes" },
  { title: "Clean Code", desc: "Strong focus on software principles, code reviews and maintainability.", icon: "Code2" },
  { title: "Collaboration", desc: "Experience working with cross-functional teams and Agile workflows.", icon: "Users" },
  { title: "Continuous Learning", desc: "Actively involved in knowledge sharing and learning modern frontend technologies.", icon: "BookOpen" },
];
