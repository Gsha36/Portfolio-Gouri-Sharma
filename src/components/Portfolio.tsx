import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Server, Award, Trophy, Users, Target, Download, MapPin, Calendar, Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Type declarations for Vanta.js
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const vantaRef = useRef<HTMLElement>(null);

  const fonts = [
    'font-mono',
    'font-serif',
    'font-sans',
    'font-bold',
    'font-light',
    'tracking-widest',
    'tracking-tight font-bold',
    'italic font-serif',
    'font-mono tracking-wide',
    'font-sans font-black'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Font cycling effect
    const fontInterval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 2500); // Change font every 2.5 seconds
    
    // Load Vanta.js scripts
    const loadVanta = () => {
      if (window.VANTA && window.THREE) {
        const vantaEffect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x222222,
          color: 0xff8820,
          color2: 0xff8820,
          size: 3,
          spacing: 35,
          showLines: true
        });
        
        return () => {
          if (vantaEffect) vantaEffect.destroy();
        };
      }
    };

    // Load Three.js first
    if (!window.THREE) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        // Load Vanta.js after Three.js
        if (!window.VANTA) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js';
          vantaScript.onload = loadVanta;
          document.head.appendChild(vantaScript);
        } else {
          loadVanta();
        }
      };
      document.head.appendChild(threeScript);
    } else if (!window.VANTA) {
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js';
      vantaScript.onload = loadVanta;
      document.head.appendChild(vantaScript);
    } else {
      loadVanta();
    }

    // Cleanup font interval
    return () => {
      clearInterval(fontInterval);
    };
  }, []);

  const skills = [
    "Java", "Python", "JavaScript", "TypeScript", "C", "HTML", "CSS",
    "ReactJS", "React Native", "AngularJS", "Spring Boot", "Flask", "FastAPI",
    "MongoDB", "MySQL", "Firebase", "PostgreSQL", "Git", "GitHub", "VS Code",
    "Postman", "Docker", "Figma", "Firebase Console", "Tailwind CSS",
    "LangGraph", "Autogen", "Node.js", "Express.js"
  ];

  const projects = [
    {
      name: "BrailleBEE | DELL Technologies Hackathon",
      description: "A user-friendly solution that extracts and processes text and images from scanned academic textbooks, converting them into Braille-ready format with contextual descriptions for visually challenged students.",
      longDescription: "Built for the DELL Technologies Hackathon, BrailleBEE addresses digital inclusivity by providing a comprehensive solution for converting academic materials to Braille format. The platform implements robust WebApp architecture with advanced security features and WCAG compliance for accessibility.",
      tech: ["MERN Stack", "Layout Parser", "Tesseract OCR", "Hugging Face", "OpenCV", "Salesforce IMC", "Node.js", "Python", "Bcrypt Security"],
      features: [
        "Multiple PDF uploads and batch processing support",
        "Multilingual capabilities for diverse academic content",
        "Berypt security implementation for data protection",
        "WCAG compliance for digital inclusivity",
        "30-second processing time for 10-page PDFs",
        "Download and viewing options for generated documents",
        "Contextual descriptions for images and visual content"
      ],
      github: "https://github.com/Gsha36/Image-to-BRF",
      demo: "#"
    },
    {
      name: "TimeCop – AI Productivity Coach",
      description: "An intelligent productivity management system that leverages artificial intelligence to help users optimize their time and task management.",
      longDescription: "TimeCop represents the next generation of productivity tools, combining AI agents with natural language processing to create a seamless user experience. The system employs AutoGen for multi-agent coordination and Google Gemini LLM for intelligent responses.",
      tech: ["FastAPI", "React", "AutoGen", "Google Gemini LLM", "Whisper", "ChromaDB", "RAG Architecture", "Vector Database"],
      features: [
        "Voice-to-text task logging with Whisper integration",
        "RAG-based intelligent memory querying",
        "Real-time productivity analytics and insights",
        "Multi-agent system for task coordination",
        "Personalized coaching recommendations"
      ],
      github: "https://github.com/Gsha36/TimeCop-Productivity-Coach",
      demo: "#"
    },
    {
      name: "Movie Review Application",
      description: "A full-featured movie review platform that enables users to discover, browse, and review movies with an intuitive and engaging interface.",
      longDescription: "This platform combines the power of Java Spring Boot backend with a dynamic React frontend to deliver a robust movie review experience. The application features advanced search capabilities, user authentication, and social features.",
      tech: ["Java Spring Boot", "React.js", "MongoDB", "RESTful APIs", "JWT Authentication", "Spring Security"],
      features: [
        "Comprehensive movie database integration",
        "Advanced search and filtering capabilities",
        "User authentication and profile management",
        "Review and rating system with moderation",
        "Social features and user interactions"
      ],
      github: "https://github.com/Gsha36/movie-review-application-frontend",
      demo: "#"
    }
  ];

  const experiences = [
    {
      role: "Undergraduate Intern",
      company: "Dell Technologies",
      location: "Bengaluru",
      duration: "May 2025 - July 2025",
      description: "Re-architected core components of an agentic SRE system using a LangGraph-based agent framework, creating ReAct agents for autonomous decision-making and implementing Model Context Protocol (MCP) servers for seamless agent-environment interaction.",
      achievements: [
        "Re-architected core components using LangGraph-based agent framework with ReAct agents for autonomous decision-making, boosting system throughput by 45%",
        "Set up and configured Model Context Protocol (MCP) servers with tools for seamless agent-environment interaction",
        "Built scalable frontend enhancements using AngularJS, optimizing component rendering to boost responsiveness and usability for internal enterprise tools",
        "Collaborated with cross-functional teams on enterprise-level solutions"
      ],
      skills: ["AngularJS", "LangGraph", "MCP", "ReAct Agents", "System Architecture", "Performance Optimization", "Generative AI", "Python"]
    },
    {
      role: "MERN Developer",
      company: "Carbon Crunch",
      location: "Noida",
      duration: "Aug 2024 - Feb 2025",
      description: "Led full-stack development initiatives, creating scalable MERN applications with custom React dashboards and robust backend APIs.",
      achievements: [
        "Built and deployed full-stack MERN application with custom React dashboards",
        "Integrated MongoDB for scalable data handling across 3+ modules",
        "Delivered 5+ key features in collaboration with product and design teams",
        "Implemented RESTful Node.js APIs with comprehensive error handling"
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Dashboard Development"]
    },
    {
      role: "Full Stack Development Intern",
      company: "Intudo Consulting",
      location: "Gurugram",
      duration: "June 2024 - Aug 2024",
      description: "Developed responsive web and mobile applications using React and React Native, focusing on user experience optimization and backend service development.",
      achievements: [
        "Built responsive web and mobile UIs using React/React Native",
        "Boosted user engagement by 25% through improved UX design",
        "Developed scalable backend services with Spring Boot",
        "Implemented cross-platform compatibility solutions"
      ],
      skills: ["React", "React Native", "Spring Boot", "Mobile Development", "UX Design"]
    }
  ];

  const achievements = [
    {
      title: "Dean's Academic Excellence Award",
      description: "Awarded for achieving the highest GPA in the 4th semester among all Bachelor of Technology students at Manipal University Jaipur",
      icon: <Award className="w-6 h-6" />,
      year: "2024"
    },
    {
      title: "2nd Place, MUJ HackX 2.0 Hackathon",
      description: "Developed a blockchain-based verification system in 36 hours, demonstrating expertise in distributed systems and rapid prototyping",
      icon: <Trophy className="w-6 h-6" />,
      year: "2024"
    },
    {
      title: "Semi-Finalist, Hack-On by Amazon",
      description: "Selected among top 100 participants from 13,000+ applicants in Amazon HackOn season 5, showcasing problem-solving and innovation skills",
      icon: <Users className="w-6 h-6" />,
      year: "2025"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const navItems = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <div className="min-h-screen w-full bg-background font-sk-pro overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-border shadow-soft">
        <div className="section-container">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* Logo or brand space - currently empty */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-orange-500 transition-colors relative font-medium ${
                    activeSection === item.id ? 'text-orange-500' : 'text-foreground'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/Gsha36" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/gouri-sharma-1b7911236" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-medium text-foreground hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={vantaRef} id="about" className="pt-20 md:pt-24 pb-20 relative overflow-hidden" style={{minHeight: '100vh'}}>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="space-y-4 md:space-y-6">

                <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight drop-shadow-2xl transition-all duration-500 ${fonts[currentFontIndex]}`}>
                  Gouri Sharma
                </h1>
                
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-normal">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">Developer from</span>
                  </h2>
                  <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-normal">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">Gurugram, India</span>
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                  <a 
                    href="/Gouri Sharma-Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 border border-orange-400/30"
                  >
                    <span>VIEW RESUME</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-white/10 backdrop-blur-sm border border-orange-400/30 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-orange-500/20 hover:shadow-2xl"
                  >
                    Get In Touch
                  </button>
                </div>

                <div className="pt-4 md:pt-6 flex items-center space-x-1 text-orange-200">
                  <span>Scroll Down</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Right - Hero Illustration */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="relative">
                <div className="floating-element">
                  <div className="w-full max-w-sm md:max-w-lg mx-auto h-64 md:h-80 lg:h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden border border-orange-400/30">
                    <img 
                      src="/prof.jpg" 
                      alt="Gouri Sharma - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute top-10 left-10 w-12 h-12 md:w-16 md:h-16 bg-orange-400/25 rounded-full blur-xl floating-element animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 md:w-20 md:h-20 bg-amber-400/20 rounded-full blur-xl floating-element animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 md:w-12 md:h-12 bg-orange-300/30 rounded-full blur-xl floating-element animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 md:mb-8">About Me</h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A tireless developer that works against the clock to squeeze as much learning into a day.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I ventured into software and web development early, driven by an insatiable urge to build, break, and rebuild. Currently pursuing Computer and Communications Engineering at Manipal University Jaipur, I thrive on exploring new technologies, mastering diverse tools, and pushing projects from idea to impact.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">2026</div>
                    <div className="text-sm md:text-base text-muted-foreground">Expected Graduation</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">3+</div>
                    <div className="text-sm md:text-base text-muted-foreground">Internships</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">5+</div>
                    <div className="text-sm md:text-base text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm md:text-base text-muted-foreground">Hackathons</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-strong">
                  <img 
                    src="/me.jpg" 
                    alt="Gouri Sharma - About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white px-3 md:px-4 py-2 rounded-2xl shadow-medium">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                    <span className="font-semibold text-foreground text-sm md:text-base">Jaipur, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20" style={{backgroundColor: '#222222'}}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A journey through impactful internships and technical contributions across leading technology companies
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-soft card-hover border border-orange-400/20">
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-orange-400 font-semibold text-sm mb-2">{exp.duration}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-orange-400 font-semibold text-lg mb-1">{exp.company}</p>
                    <p className="text-gray-300 text-sm">{exp.location}</p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4">Key Achievements</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm border border-orange-400/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovative solutions combining cutting-edge technologies to solve real-world problems
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-orange-500 hover:text-white group"
              style={{ marginLeft: '-20px' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-orange-500 hover:text-white group"
              style={{ marginRight: '-20px' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Project Display */}
            <div className="bg-gradient-card rounded-3xl p-8 shadow-soft card-hover transition-all duration-500">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-4">{projects[currentProjectIndex].name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{projects[currentProjectIndex].description}</p>
                  <p className="text-muted-foreground/80 mb-8 leading-relaxed">{projects[currentProjectIndex].longDescription}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-foreground font-semibold mb-4 text-lg">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {projects[currentProjectIndex].features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={projects[currentProjectIndex].github} className="bg-foreground text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:bg-foreground/90 flex items-center space-x-2">
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-muted/50 rounded-2xl p-6 h-full">
                    <h4 className="text-foreground font-semibold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProjectIndex].tech.map((tech, i) => (
                        <span key={i} className="px-3 py-2 bg-orange-100 text-orange-600 rounded-lg text-sm border border-orange-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20" style={{backgroundColor: '#222222'}}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-300 text-lg">
              A comprehensive toolkit spanning multiple programming languages, frameworks, and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-soft card-hover text-center group border border-orange-400/20">
                <span className="text-white group-hover:text-orange-400 transition-colors font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic excellence and competitive programming achievements that demonstrate consistent performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-soft card-hover group border border-orange-100">
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">{achievement.title}</h3>
                  <span className="text-orange-500 text-sm font-semibold">{achievement.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: '#222222'}}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's discuss how we can build something amazing together.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold">gouri.sharma0003@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91 9319001421</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Linkedin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">LinkedIn</p>
                    <a href="https://linkedin.com/in/gouri-sharma-1b7911236" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-400 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Github className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">GitHub</p>
                    <a href="https://github.com/Gsha36" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-400 transition-colors">
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-orange-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Available for internships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Open to collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Learning new technologies</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-orange-500/10 rounded-2xl border border-orange-400/30">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "I'm passionate about creating innovative solutions that bridge the gap between technology and human needs. 
                    Let's build something extraordinary together!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-orange-400/30" style={{backgroundColor: '#222222'}}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-6">
              <a href="https://github.com/Gsha36" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/gouri-sharma-1b7911236" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;