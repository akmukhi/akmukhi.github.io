export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Stats {
  yearsExperience?: number;
  projectsCompleted?: number;
  happyClients?: number;
  customStat?: {
    value: string;
    label: string;
  };
}

export interface PortfolioConfig {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    bio: string[];
    email: string;
    location?: string;
  };
  social: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  stats: Stats;
  about: {
    heading: string;
    paragraphs: string[];
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Aakash Mukhi",
    firstName: "Aakash",
    lastName: "Mukhi",
    title: "DevOps Engineer",
    bio: [
      "I'm a passionate developer who loves turning ideas into reality through clean, efficient code. My journey in web development started years ago, and I've been hooked ever since.",
      "I specialize in building responsive web applications using modern technologies. I believe in writing code that's not just functional, but also maintainable and scalable.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
    ],
    email: "your.email@example.com",
    location: "Your Location",
  },
  social: [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", url: "https://twitter.com/yourusername" },
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Linux"],
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/yourusername/project-name",
      liveUrl: "https://yourproject.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
      technologies: ["TypeScript", "Next.js", "Prisma"],
      githubUrl: "https://github.com/yourusername/project-name",
      liveUrl: "https://yourproject.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and customizable widgets.",
      technologies: ["React", "OpenWeather API", "Mapbox"],
      githubUrl: "https://github.com/yourusername/project-name",
      liveUrl: "https://yourproject.com",
    },
    {
      title: "Portfolio Generator",
      description:
        "A CLI tool that generates beautiful developer portfolios from a simple configuration file.",
      technologies: ["Node.js", "Handlebars", "CLI"],
      githubUrl: "https://github.com/yourusername/project-name",
    },
  ],
  stats: {
    yearsExperience: 5,
    projectsCompleted: 50,
    happyClients: 20,
    customStat: {
      value: "∞",
      label: "Cups of Coffee",
    },
  },
  about: {
    heading: "Crafting digital experiences with code and creativity.",
    paragraphs: [
      "Hello! I'm a passionate developer who loves turning ideas into reality through clean, efficient code. My journey in web development started years ago, and I've been hooked ever since.",
      "I specialize in building responsive web applications using modern technologies. I believe in writing code that's not just functional, but also maintainable and scalable.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
    ],
  },
};

