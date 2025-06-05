import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

// NavButton Component
const NavButton = ({ item, isHovered, onMouseEnter, onMouseLeave, onClick }) => (
  <button
    className={`capitalize transition-colors bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none ${isHovered ? 'text-blue-400' : 'text-white hover:text-blue-400'
      }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {item.label}
  </button>
);

// MobileMenu Component
const MobileMenu = ({ items, isOpen, onToggle, onItemClick }) => (
  <>
    <button
      className="md:hidden capitalize transition-colors bg-gray-700/0 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
      onClick={onToggle}
    >
      {isOpen ? (
        <X size={24} className="text-white" />
      ) : (
        <Menu size={24} className="text-white" />
      )}
    </button>
    {isOpen && (
      <div className="md:hidden p-6 bg-gray-800/70 backdrop-blur-sm shadow-md z-50 w-full rounded space-y-4 absolute top-16 left-0 right-0">
        {items.map((item) => (
          <button
            key={item.id}
            className="block capitalize transition-colors w-full text-left bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 text-white hover:text-blue-400"
            onClick={() => onItemClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  </>
);

// Navigation Component
const Navigation = ({ items, onItemClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800/70 backdrop-blur-sm shadow-md z-50 w-full">
      <div className="container max-w-4xl mx-auto px-6 py-4 flex md:justify-center items-center">
        <div className="md:flex space-x-6 hidden">
          {items.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isHovered={hoveredItem === item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => onItemClick(item.id)}
            />
          ))}
        </div>
        <MobileMenu
          items={items}
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          onItemClick={onItemClick}
        />
      </div>
    </nav>
  );
};

// Section Component
const Section = ({ id, title, children }) => (
  <section id={id} className="py-20">
    {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
    {children}
  </section>
);

// Card Component
const Card = ({ title, subtitle, children, className = "" }) => (
  <div className={`bg-gray-800 p-6 rounded-lg shadow-md ${className}`}>
    {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
    {subtitle && <p className="text-gray-300 mb-4">{subtitle}</p>}
    {children}
  </div>
);

// Tag Component
const Tag = ({ text }) => (
  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">
    {text}
  </span>
);

// About Section
const About = ({ data }) => (
  <Section id="about" className="py-32 px-8">
    <div className="flex flex-col md:flex-row items-center md:space-x-12">
      <div className="w-[200px] h-[200px] mb-8 md:mb-0">
        {/* <img src={data.imageUrl} alt={data.name} className="w-full h-full object-contain" /> */}
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center md:text-left">{data.name}</h1>
        <h2 className="text-2xl text-gray-300/80 mb-6 text-center md:text-left">{data.role}</h2>
        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed text-center md:text-left">
          {data.description}
        </p>
      </div>
    </div>
  </Section>
);

// Experience Section
const Experience = ({ experiences }) => (
  <Section id="experience" title="Professional Experience">
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="experience-card"
          title={undefined}
          subtitle={undefined}
        >
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <span className="text-gray-400">{exp.period}</span>
          </div>
          <h4 className="text-lg text-blue-400 mb-4">{exp.role}</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

// Skills Section
const Skills = ({ skills }) => (
  <Section id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 gap-6">
      {skills.map((skill, index) => (
        <Card
          key={index}
          title={skill.category}
          className="skill-card"
          subtitle={undefined}
        >
          <p className="text-gray-300">{skill.description}</p>
        </Card>
      ))}
    </div>
  </Section>
);

// Certifications Section
const Certifications = ({ certifications }) => (
  <Section id="certifications" title="Certifications">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <Card
          key={index}
          title={cert.title}
          subtitle={cert.issuer}
          className="certification-card"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <a href={cert.certificateUrl} className="text-blue-400 hover:text-blue-300 transition-colors">
            View Certificate →
          </a>
        </Card>
      ))}
    </div>
  </Section>
);

// Projects Section
const Projects = ({ projects }) => (
  <Section id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          subtitle={project.description}
          className="project-card"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Tag key={tech} text={tech} />
            ))}
          </div>
          <div className="flex space-x-4">
            {project.demoUrl && (
              <a href={project.demoUrl} className="text-blue-400 hover:text-blue-300 transition-colors">
                Demo →
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} className="text-blue-400 hover:text-blue-300 transition-colors">
                Github →
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

// Contact Section
const Contact = ({ social }) => (
  <Section id="contact" title="Contact">
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      {social.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-300 hover:text-blue-400"
        >
          {link.icon === 'Mail' && <Mail size={24} />}
          {link.icon === 'Github' && <Github size={24} />}
          {link.icon === 'Linkedin' && <Linkedin size={24} />}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  </Section>
);

// Main Portfolio Component
const Portfolio = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center w-full bg-transparent">
      <div className="w-full px-6 bg-transparent">
        <Navigation items={data.navItems} onItemClick={scrollToSection} />
        <div className="pt-32 w-full">
          <About data={data.about} />
          <Experience experiences={data.experience} />
          <Skills skills={data.skills} />
          <Certifications certifications={data.certifications} />
          <Projects projects={data.projects} />
          <Contact social={data.social} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;