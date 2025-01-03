// types.ts
export interface NavItem {
    id: string;
    label: string;
  }
  
  export interface Experience {
    company: string;
    period: string;
    role: string;
    achievements: string[];
  }
  
  export interface Skill {
    category: string;
    description: string;
  }
  
  export interface Certification {
    title: string;
    issuer: string;
    tags: string[];
    certificateUrl: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
  }
  
  export interface SocialLink {
    platform: string;
    icon: string;
    url: string;
    label: string;
  }
  
  export interface PortfolioData {
    navItems: NavItem[];
    about: {
      name: string;
      role: string;
      description: string;
      imageUrl: string;
    };
    experience: Experience[];
    skills: Skill[];
    certifications: Certification[];
    projects: Project[];
    social: SocialLink[];
  }
