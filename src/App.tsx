import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from './assets/profile.png';

const ResponsivePortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const scrollToSection = (sectionId: string) => {
    let element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['About', 'Experience', 'Skills', 'Certifications', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen flex items-center w-full">
      <div className="w-full px-6">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-gray-800/70 backdrop-blur-sm shadow-md z-50 w-full">
          <div className="container max-w-4xl mx-auto px-6 py-4 flex md:justify-center items-center">
            <div className="md:flex space-x-6 hidden">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`capitalize transition-colors bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none ${item === hoveredItem ? 'text-blue-400' : 'text-white hover:text-blue-400'
                    }`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="md:hidden capitalize transition-colors bg-gray-700/0 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="md:hidden p-6 bg-gray-800/70 backdrop-blur-sm shadow-md z-50 w-full rounded space-y-4 absolute top-16 left-0 right-0"
              >
                {navItems.map((item) => (
                  <button
                    key={item}
                    className={`block capitalize transition-colors w-full text-left bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 ${item === hoveredItem ? 'text-blue-400' : 'text-white hover:text-blue-400'
                      }`}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <div className="pt-32 w-full">
          {/* About */}
          <section id="about" className="py-32 px-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="w-[200px] h-[200px] mb-8 md:mb-0">
                <img
                  src={profile}
                  alt="Chris Reith"
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-center md:text-left">Chris Reith</h1>
                <h2 className="text-2xl text-gray-300/80 mb-6 text-center md:text-left">Senior Front End Developer</h2>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed text-center md:text-left">
                  Dynamic developer with proven expertise in developing enterprise-level web applications
                  for industry leaders including Google, Amazon, MotorTrend, and NBC Universal.
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                  <h3 className="text-xl font-semibold">Source Digital</h3>
                  <span className="text-gray-400">2020 - 2024</span>
                </div>
                <h4 className="text-lg text-blue-400 mb-4">Senior Front End Developer</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Led development of high-level web solutions and interfaces for industry leaders including Google, Amazon, MotorTrend, and NBC Universal</li>
                  <li>Contributed to $5.7M PadSquad initiative, directly influencing its successful sale</li>
                  <li>Architected scalable front-end applications using Vue.js and integrated with headless CMS platforms</li>
                  <li>Developed SDK deployed on Google's platform, enhancing integration functionality</li>
                  <li>Led key solutions for MotorTrend and NBC Universal, significantly contributing to revenue generation estimated at over $1M</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                  <h3 className="text-xl font-semibold">Transactive</h3>
                  <span className="text-gray-400">2019</span>
                </div>
                <h4 className="text-lg text-blue-400 mb-4">Software Engineer</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Engineered robust web applications leveraging JavaScript and advanced frontend technologies</li>
                  <li>Streamlined development processes and enhanced application efficiency</li>
                  <li>Architected scalable, modular infrastructures with an API-centric approach</li>
                  <li>Employed methodical testing practices, including test plans and scripts</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                  <h3 className="text-xl font-semibold">NFairy Studios</h3>
                  <span className="text-gray-400">2014 - 2016</span>
                </div>
                <h4 className="text-lg text-blue-400 mb-4">CDO & UX Designer</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Analyzed and synthesized large datasets to uncover trends and patterns</li>
                  <li>Designed intuitive charts and admin panels for medical applications</li>
                  <li>Led initiatives to enhance and innovate medical and legal applications</li>
                  <li>Advanced proficiency in Python contributing to innovative solutions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend Development</h3>
                <p className="text-gray-300">JavaScript, TypeScript, React, Vue.js, HTML5, CSS3, SASS, Webpack, Responsive Design, Performance Optimization</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend Technologies</h3>
                <p className="text-gray-300">Node.js, Python, C#, RESTful APIs, Express.js, Database Design, API Development, Server Architecture</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Development Tools</h3>
                <p className="text-gray-300">Git, CI/CD, Docker, AWS, SQL, Headless CMS (Strapi, Directus), Testing Frameworks, Agile Methodologies</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Additional Expertise</h3>
                <p className="text-gray-300">Machine Learning, Data Analysis, Business Intelligence, Cross-functional Team Leadership, Technical Mentoring</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section id="certifications" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* cs50 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">CS50 Computer Science</h3>
                <p className="text-gray-300 mb-4">Harvard Certificate</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Computer Science</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Programming</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">C</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">SQL</span>
                </div>
                <a href="https://certificates.cs50.io/7662cdf4-73cd-4f39-a64f-3ae8c402c421.pdf?size=letter" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View Certificate →
                </a>
              </div>
              {/* Github */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Career Essentials in GitHub Professional Certificate</h3>
                <p className="text-gray-300 mb-4">LinkedIn Certification</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Github</span>
                </div>
                <a href="https://www.linkedin.com/learning/certificates/5dba0e849a257e587b73ba135ac1ea6f4308c5bb62b5989481c2374020ff2aca?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEtX9y703S3iYeuFDLf5SCQ%3D%3D" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View Certificate →
                </a>
              </div>
              {/* micrsoft 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Career Essentials in Software Development by Microsoft and LinkedIn</h3>
                <p className="text-gray-300 mb-4">LinkedIn Certification</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Programming</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Software Development</span>
                </div>
                <a href="https://www.linkedin.com/learning/certificates/20d626639dd5e36a491f45af31562c84db92e8a9e25b0498e01b3ab4dbe67d07?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3dfNdksnSYePamSTTIS9aA%3D%3D">
                  View Certificate →
                </a>
              </div>
              {/* Docker */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Docker Foundations Professional Certificate</h3>
                <p className="text-gray-300 mb-4">LinkedIn Certification</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Containerization</span>
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">Docker Products</span>
                </div>
                <a href="https://www.linkedin.com/learning/certificates/515bb8947548c3e5b5796e0a0b507ef17b4fa593a4bb896351b7eaa5cd39325a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3dfNdksnSYePamSTTIS9aA%3D%3D">
                  View Certificate →
                </a>
              </div>
              {/* Microsoft 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Foundational C# with Microsoft</h3>
                <p className="text-gray-300 mb-4">freeCodeCamp Certification</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">C#</span>
                </div>
                <a href="https://www.freecodecamp.org/certification/fccd5ab434e-1d6e-42e3-9d03-92d399ff518d/foundational-c-sharp-with-microsoft">
                  View Certificate →
                </a>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">PadSquad Initiative</h3>
                <p className="text-gray-300 mb-4">Led successful $5.7M project implementation</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Vue.js', 'Node.js', 'API Integration'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href="https://padsquad.com/demo-gallery" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Demo →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <a href="mailto:reithc4@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Mail size={24} />
                <span>reithc4@gmail.com</span>
              </a>
              <a href="https://github.com/c-49" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/christopherreith/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePortfolio;