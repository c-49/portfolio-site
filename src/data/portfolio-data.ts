import type { PortfolioData } from "./types";
import profile from '../assets/profile.png';

// data.ts
export const portfolioData: PortfolioData = {
    navItems: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "certifications", label: "Certifications" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" }
    ],
    about: {
      name: "Chris Reith",
      role: "Senior Front End Developer",
      description: "Dynamic Senior Front End Developer with proven expertise in developing enterprise-level web applications for industry leaders including Google, Amazon, MotorTrend, and NBC Universal. Demonstrated success in leading high-value projects, including the $5.7M PadSquad initiative.",
      imageUrl: profile
    },
    experience: [
      {
        company: "Source Digital",
        period: "2020 - 2024",
        role: "Senior Front End Developer",
        achievements: [
          "Drove development of high-level web solutions and interfaces tailored to client specifications",
          "Architected and deployed front-end applications using Vue.js and integrated with headless CMS platforms",
          "Collaborated with interdisciplinary teams to ensure successful delivery of complex projects",
          "Contributed to the $5.7M PadSquad initiative, directly influencing its successful sale",
          "Developed SDK deployed on Google's platform, enhancing integration functionality",
          "Led key solutions for MotorTrend and NBC Universal, contributing to revenue generation estimated at over $1M",
          "Designed and implemented scalable front-end architectures, elevating efficiency and maintainability"
        ]
      },
      {
        company: "Transactive",
        period: "2019 - 2019",
        role: "Software Engineer",
        achievements: [
          "Engineered robust web applications leveraging JavaScript and advanced frontend technologies",
          "Streamlined development processes and enhanced application efficiency",
          "Coordinated with engineering teams to refine software and hardware interfaces",
          "Architected scalable, modular infrastructures with an API-centric approach",
          "Employed methodical testing practices, including test plans and scripts",
          "Optimized application architectures for high-traffic environments"
        ]
      },
      {
        company: "NFairy Studios",
        period: "2014 - 2016",
        role: "CDO & UX Designer",
        achievements: [
          "Analyzed and synthesized large datasets to uncover trends, patterns, and narratives",
          "Translated complex data into comprehensible text, charts, and graphs for stakeholder communication",
          "Collaborated with engineering teams to identify data sources and answers to critical business questions",
          "Developed reporting mechanisms to extract and interpret data from various solutions",
          "Designed intuitive charts and admin panels for medical applications",
          "Led initiatives to enhance and innovate medical and legal applications",
          "Advanced proficiency in Python contributing to innovative solutions"
        ]
      }
    ],
    skills: [
      {
        category: "Frontend Development",
        description: "JavaScript, TypeScript, React, Vue.js, HTML5, CSS3"
      },
      {
        category: "Backend Technologies",
        description: "Node.js, Python, RESTful APIs"
      },
      {
        category: "Databases",
        description: "SQL, Headless CMS (Strapi, Directus)"
      },
      {
        category: "Tools & Architecture",
        description: "Git, Object-oriented programming, User testing, Project Management, Performance Optimization"
      },
      {
        category: "Additional Expertise",
        description: "Machine Learning, Data Analysis, Business Intelligence"
      }
    ],
    certifications: [
      {
        title: "CS50 Computer Science",
        issuer: "Harvard Certificate",
        tags: ["Computer Science", "Programming"],
        certificateUrl: "https://certificates.cs50.io/7662cdf4-73cd-4f39-a64f-3ae8c402c421.pdf?size=letter"
      },
      {
        title: "Career Essentials in Software Development",
        issuer: "Microsoft & LinkedIn",
        tags: ["Software Development"],
        certificateUrl: "https://www.linkedin.com/learning/certificates/20d626639dd5e36a491f45af31562c84db92e8a9e25b0498e01b3ab4dbee67d07"
      },
      {
        title: "JavaScript Essential Training",
        issuer: "LinkedIn",
        tags: ["JavaScript", "Programming"],
        certificateUrl: "https://www.linkedin.com/learning/certificates/6ed01fa6cab5d031820215428c01bf4e33db8ee09cbe88e1cb88e0fa8d4bf3"
      },
      {
        title: "Docker Foundations Professional",
        issuer: "LinkedIn",
        tags: ["Docker", "DevOps"],
        certificateUrl: "https://www.linkedin.com/learning/certificates/515bb8947548c3e5b5796e0a0b507ef17b4fa593a4bb896351b7eaa5cd39325a"
      },
      {
        title: "Learning JavaScript Language",
        issuer: "LinkedIn",
        tags: ["JavaScript"],
        certificateUrl: "https://www.linkedin.com/learning/certificates/6ed01fa6cab5d031820215428c01bf4e33db8ee09cbe88e1cb88e0fa8d4bf3"
      }
    ],
    projects: [
      {
        title: "PadSquad Initiative",
        description: "Led successful $5.7M project implementation with advanced integration features",
        technologies: ["Vue.js", "Node.js", "API Integration"],
        demoUrl: "https://padsquad.com/demo-gallery"
      },
      {
        title: "Portfolio Site",
        description: "Personal portfolio site built with modern web technologies",
        technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
        githubUrl: "https://github.com/c-49/portfolio-site"
      },
      {
        title: "Text Tone Analyzer",
        description: "AI project that analyzes input text sentiment",
        technologies: ["Vue", "Python", "Machine Learning"],
        githubUrl: "https://github.com/c-49/text-tone-analyzer",
        demoUrl: "https://text-tone-analyzer.vercel.app/"
      }
    ],
    social: [
      {
        platform: "email",
        icon: "Mail",
        url: "mailto:reithc4@gmail.com",
        label: "reithc4@gmail.com"
      },
      {
        platform: "github",
        icon: "Github",
        url: "https://github.com/c-49",
        label: "GitHub"
      },
      {
        platform: "linkedin",
        icon: "Linkedin",
        url: "https://www.linkedin.com/in/christopherreith/",
        label: "LinkedIn"
      }
    ]
  };