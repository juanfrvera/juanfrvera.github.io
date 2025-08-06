"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState("orilla-arquitectura");
  const [isGameSection, setIsGameSection] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [isInProjectsSection, setIsInProjectsSection] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(32); // 32px = top-8

  // Calculate years that have passed since January of 2020
  const calculateYearsOfExperience = () => {
    const now = new Date();
    const start = new Date(2020, 0, 1);
    const diff = now.getTime() - start.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365));
  };

  const yearsOfExperience = calculateYearsOfExperience();

  // Handle scroll to update active project and game section state
  useEffect(() => {
    const handleScroll = () => {
      const projectSections = ['orilla-arquitectura', 'finances', 'encarga', 'finances-next', 'mini-order', 'aws-lambda-proxy', 'hard-roots', 'karts', 'rpg', 'tenis', 'nightmare-2d'];

      // Check if we're in the "All Projects" section
      const allProjectsSection = document.getElementById('all-projects-section');
      if (allProjectsSection) {
        const rect = allProjectsSection.getBoundingClientRect();
        
        // Check if we've scrolled past the All Projects section into Education or Contact
        const educationSection = document.getElementById('education-section');
        const contactSection = document.getElementById('contact-section');
        
        let isInEducationOrContact = false;
        
        // Check if Education section is visible in viewport
        if (educationSection) {
          const educationRect = educationSection.getBoundingClientRect();
          if (educationRect.top <= window.innerHeight * 0.5) {
            isInEducationOrContact = true;
          }
        }
        
        // Check if Contact section is visible in viewport
        if (contactSection) {
          const contactRect = contactSection.getBoundingClientRect();
          if (contactRect.top <= window.innerHeight * 0.5) {
            isInEducationOrContact = true;
          }
        }
        
        // Show sidebar when in All Projects section and not in Education/Contact sections
        const isInProjects = rect.top <= window.innerHeight * 0.5 && rect.bottom >= -100 && !isInEducationOrContact;
        setIsInProjectsSection(isInProjects);

        // Calculate dynamic top position for sidebar
        if (isInProjects) {
          const sectionTop = rect.top;
          const minTop = 32; // Minimum distance from top (2rem)
          const maxTop = Math.min(200, window.innerHeight * 0.1); // Maximum offset
          
          if (sectionTop > 0) {
            // Section is below viewport top, use dynamic positioning
            const dynamicTop = Math.max(minTop, Math.min(maxTop, sectionTop + minTop));
            setSidebarTop(dynamicTop);
          } else {
            // Section has scrolled past top, stick to minimum
            setSidebarTop(minTop);
          }
        }
        
        // Debug logging (remove in production)
        console.log('All Projects Section:', {
          top: rect.top,
          bottom: rect.bottom,
          windowHeight: window.innerHeight,
          isInProjects,
          sidebarTop: isInProjects ? sidebarTop : 'hidden'
        });
      }

      // Check if we're in the game section
      const gameSection = document.getElementById('games-section');
      if (gameSection) {
        const rect = gameSection.getBoundingClientRect();
        const isInGameSection = rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
        setIsGameSection(isInGameSection);
      }

      // Find the active project section based on scroll position
      let activeProjectFound = false;
      const viewportCenter = window.innerHeight / 2;
      
      for (const projectId of projectSections) {
        const element = document.getElementById(projectId);
        if (element && !activeProjectFound) {
          const rect = element.getBoundingClientRect();
          // Check if element is in the center viewport area
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            setActiveProject(projectId);
            activeProjectFound = true;
          }
        }
      }
    };

    // Call handleScroll initially to set the correct active project on page load
    handleScroll();

    // Use both scroll and resize events for better reliability
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sidebarTop]);

  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className={`min-h-screen text-gray-900 transition-all duration-1000 ease-in-out relative overflow-hidden ${isGameSection
      ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'
      : 'bg-white'
      }`}>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Particles */}
        <div className={`absolute transition-opacity duration-1000 ${isGameSection ? 'opacity-30' : 'opacity-10'}`}>
          {/* Left side particles */}
          <div className="absolute left-4 top-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute left-12 top-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute left-6 top-1/2 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute left-16 top-2/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute left-8 top-3/4 w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
          
          {/* Right side particles */}
          <div className="absolute right-4 top-1/6 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.2s'}}></div>
          <div className="absolute right-12 top-1/4 w-1 h-1 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '2.2s', animationDuration: '4.8s'}}></div>
          <div className="absolute right-6 top-2/5 w-3 h-3 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '1.8s', animationDuration: '3.8s'}}></div>
          <div className="absolute right-16 top-3/5 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse" style={{animationDelay: '0.3s', animationDuration: '5.2s'}}></div>
          <div className="absolute right-8 top-4/5 w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '3.3s'}}></div>
        </div>

        {/* Gradient Orbs */}
        <div className={`absolute transition-opacity duration-1000 ${isGameSection ? 'opacity-20' : 'opacity-5'}`}>
          <div className="absolute left-0 top-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute right-0 top-2/3 w-40 h-40 bg-gradient-to-l from-pink-400 to-orange-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
          <div className="absolute left-0 bottom-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s', animationDuration: '7s'}}></div>
          <div className="absolute right-0 top-1/6 w-36 h-36 bg-gradient-to-l from-violet-400 to-indigo-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s', animationDuration: '9s'}}></div>
        </div>

        {/* Floating Lines */}
        <div className={`absolute transition-opacity duration-1000 ${isGameSection ? 'opacity-15' : 'opacity-8'}`}>
          <div className="absolute left-2 top-1/3 w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute right-2 top-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute left-4 bottom-1/3 w-px h-12 bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute right-4 bottom-1/4 w-px h-18 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
        </div>

        {/* Moving Dots Trail */}
        <div className={`absolute transition-opacity duration-1000 ${isGameSection ? 'opacity-25' : 'opacity-12'}`}>
          <div className="absolute left-0 top-1/2 w-full h-px">
            <div className="w-2 h-2 bg-blue-400 rounded-full absolute animate-pulse" style={{
              left: '2%',
              animationDelay: '0s',
              animationDuration: '8s'
            }}></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute animate-pulse" style={{
              left: '4%',
              animationDelay: '0.5s',
              animationDuration: '8s'
            }}></div>
            <div className="w-1 h-1 bg-pink-400 rounded-full absolute animate-pulse" style={{
              left: '6%',
              animationDelay: '1s',
              animationDuration: '8s'
            }}></div>
          </div>
          
          <div className="absolute right-0 top-1/3 w-full h-px">
            <div className="w-2 h-2 bg-cyan-400 rounded-full absolute animate-pulse" style={{
              right: '2%',
              animationDelay: '2s',
              animationDuration: '7s'
            }}></div>
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full absolute animate-pulse" style={{
              right: '4%',
              animationDelay: '2.5s',
              animationDuration: '7s'
            }}></div>
            <div className="w-1 h-1 bg-indigo-400 rounded-full absolute animate-pulse" style={{
              right: '6%',
              animationDelay: '3s',
              animationDuration: '7s'
            }}></div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <Image
              src="/mountains-cut.jpg"
              alt="Juan Vera profile picture"
              width={200}
              height={200}
              className="w-48 h-48 object-cover rounded-full flex-shrink-0"
              priority
            />
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Hello, I&apos;m Juan Vera, a{" "}
                <span className="font-medium">Full Stack Engineer</span>{" "}
                with {yearsOfExperience} years of experience
              </h1>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl md:max-w-none text-center mx-auto">
            Senior Full Stack Developer specializing in contact center automation and web applications.
            I create minimalist websites focusing on functionality and performance,
            keeping the essence of each application.
          </p>

          <div className="flex justify-center mb-16">
            <Link
              href="https://www.linkedin.com/in/juan-vera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors mr-6"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/juanfrvera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors mr-6"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="mailto:juanfrvera.work@gmail.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Projects Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Orilla Arquitectura Project */}
            <Link
              href="https://orillaarquitectura.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-2xl font-medium mb-4 p-6 pb-0 group-hover:text-blue-600 transition-colors">Orilla Arquitectura</h3>
              <div className="mb-4 px-6">
                <Image
                  src="/orilla.jpg"
                  alt="Orilla Arquitectura website screenshot"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="px-6 pb-6">
                <p className="text-gray-600 mb-2">Next.js and Google Cloud Platform</p>
                <p className="text-gray-600">Professional architecture firm website with admin-managed content</p>
              </div>
            </Link>

            {/* Finances Project */}
            <Link
              href="https://juanvera.dev/finances"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-2xl font-medium mb-4 p-6 pb-0 group-hover:text-blue-600 transition-colors">Finances</h3>
              <div className="mb-4 px-6">
                <Image
                  src="/finances.png"
                  alt="Finances app screenshot"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="px-6 pb-6">
                <p className="text-gray-600 mb-2">SvelteKit and GitHub Pages</p>
                <p className="text-gray-600">Manage your accounts, set reminders for debts and services</p>
              </div>
            </Link>

            {/* Encarga Project */}
            <Link
              href="https://encargarpedido.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-2xl font-medium mb-4 p-6 pb-0 group-hover:text-blue-600 transition-colors">Encarga</h3>
              <div className="mb-4 px-6">
                <Image
                  src="/encarga.webp"
                  alt="Encarga app screenshot"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="px-6 pb-6 space-y-1 text-gray-600">
                <p>Create your shop</p>
                <p>Let your clients order</p>
                <p>Receive automatic messages</p>
              </div>
            </Link>

          </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Frontend</h3>
              <p className="text-gray-600">Angular, Vue, React, Next.js, Ionic, JavaScript, TypeScript, Tailwind, Sass</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Backend</h3>
              <p className="text-gray-600">Node.js, .NET, TypeScript, C#, NestJS, TypeORM, Next.js, Mongoose</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Database</h3>
              <p className="text-gray-600">MongoDB, SQL Server, PostgreSQL, MySQL, Oracle, Neon</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">DevOps</h3>
              <p className="text-gray-600">AWS, GCP, Digital Ocean, GitHub Actions, Docker, Firebase</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Testing</h3>
              <p className="text-gray-600">End-to-end testing, Unit testing, Integration testing with Mocha, Chai, Sinon</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Tools</h3>
              <p className="text-gray-600">Git, Jira, Figma, Confluence, Postman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">

            {/* Intelepeer */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Senior Full Stack Developer</h3>
                  <p className="text-lg text-blue-600">Intelepeer</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">April 2022 - Present</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Developed contact center automation web applications</li>
                <li>• Implemented math-heavy features to extend core graphics engine capabilities</li>
                <li>• Improved UX with features like lasso selection, zoom, canvas auto-scaling, and sheet resize</li>
                <li>• Delivered fast-paced MVPs in collaboration with product managers</li>
                <li>• Created internal tools to improve development speed and code readability</li>
              </ul>
            </div>

            {/* Blaise */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Full Stack Developer & Project Manager</h3>
                  <p className="text-lg text-blue-600">Blaise</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">December 2020 - March 2022</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Managed client communications, requirements gathering, and budget estimations</li>
                <li>• Developed multiple applications: discount coupons, e-commerce platforms, body sensor integrations</li>
                <li>• Enhanced security by implementing JSON Web Tokens for user authentication</li>
                <li>• Applied Clean Architecture patterns to improve development experience</li>
                <li>• Led development teams by assigning tasks based on individual strengths</li>
              </ul>
            </div>

            {/* ITsynch */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Full Stack Developer</h3>
                  <p className="text-lg text-blue-600">ITsynch</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">January 2020 - November 2020</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Built cruiser maintenance applications</li>
                <li>• Implemented multi-language support based on user region and preferences</li>
                <li>• Enabled user customization for landing pages and dashboards</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Detailed Projects Section with Navigation */}
      <section id="all-projects-section" className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">All Projects</h2>

          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1">

              {/* Orilla Arquitectura Detailed */}
              <div id="orilla-arquitectura" className="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4">Orilla Arquitectura</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Google Cloud</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src="/orilla.jpg"
                        alt="Orilla Arquitectura website screenshot"
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        Professional architecture firm website built with Next.js and deployed on Google Cloud Platform. 
                        Features a dynamic content management system allowing admin users to update project information, 
                        portfolios, and company details through a secure admin interface.
                      </p>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="text-gray-600 space-y-1 mb-4">
                        <li>• Database-driven content management</li>
                        <li>• Admin panel for content updates</li>
                        <li>• Responsive design for all devices</li>
                        <li>• SEO-optimized architecture portfolio</li>
                        <li>• Automated deployment with GitHub Actions</li>
                        <li>• Professional project showcase</li>
                      </ul>
                      <div className="flex gap-4">
                        <Link
                          href="https://orillaarquitectura.com.ar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <span className="mr-2">Visit Website</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finances Detailed */}
              <div id="finances" className="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4">Finances</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SvelteKit</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">GitHub Pages</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src="/finances.png"
                        alt="Finances app screenshot"
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        A comprehensive personal finance management application built with SvelteKit.
                        Features account management, debt tracking, service reminders, and financial analytics.
                      </p>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="text-gray-600 space-y-1 mb-4">
                        <li>• Account balance tracking</li>
                        <li>• Debt and payment reminders</li>
                        <li>• Service subscription management</li>
                        <li>• Financial goal setting</li>
                        <li>• Data export and import</li>
                      </ul>
                      <div className="flex gap-4">
                        <Link
                          href="https://juanvera.dev/finances"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <span className="mr-2">Live Demo</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encarga Detailed */}
              <div id="encarga" className="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4">Encarga</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Firebase</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src="/encarga.webp"
                        alt="Encarga app screenshot"
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        A complete e-commerce solution for small businesses. Allows shop owners to create their
                        online presence, manage inventory, and receive orders with automatic notifications.
                      </p>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="text-gray-600 space-y-1 mb-4">
                        <li>• Shop creation and customization</li>
                        <li>• Product catalog management</li>
                        <li>• Customer ordering system</li>
                        <li>• Automatic WhatsApp notifications</li>
                        <li>• Order tracking and management</li>
                      </ul>
                      <div className="flex gap-4">
                        <Link
                          href="https://encargarpedido.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <span className="mr-2">Live Demo</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finances-Next Detailed */}
              <div id="finances-next" className="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4">Finances-Next</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Next.js 14</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React 18</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">AWS Lambda</span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    A comprehensive financial management application built with Next.js, featuring debt tracking, 
                    payment management, multi-currency support, and automatic AWS deployment with full authentication system.
                  </p>

                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• Multi-Currency Account Management</li>
                    <li>• Advanced Debt Tracking with Payment Status</li>
                    <li>• JWT Authentication with HTTP-Only Cookies</li>
                    <li>• Interactive Charts and Data Visualization</li>
                    <li>• Dark/Light Mode with System Preference Detection</li>
                    <li>• Serverless Deployment on AWS Lambda</li>
                  </ul>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <Link
                      href="https://github.com/juanfrvera/finances-next"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span className="mr-2">View Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                    
                    <button
                      onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span className="mr-2">
                        {showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${showTechnicalDetails ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Technical Details - Expandable Section */}
                  {showTechnicalDetails && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="text-xl font-semibold mb-4 text-gray-900">Technical Architecture & Implementation</h4>
                      
                      {/* Core Technologies */}
                      <div className="mb-6">
                        <h5 className="font-medium mb-3 text-gray-800">🛠️ Core Technologies</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h6 className="font-medium text-sm text-gray-700 mb-2">Frontend</h6>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Next.js 14 with App Router</li>
                              <li>• React 18 with Concurrent Features</li>
                              <li>• TypeScript for Type Safety</li>
                              <li>• Tailwind CSS + Shadcn/ui Components</li>
                              <li>• Lucide React Icons</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-sm text-gray-700 mb-2">Backend & Database</h6>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• MongoDB with Flexible Schema</li>
                              <li>• Next.js Server Actions</li>
                              <li>• JWT Authentication</li>
                              <li>• Bcrypt Password Hashing</li>
                              <li>• HTTP-Only Cookie Security</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Advanced Features */}
                      <div className="mb-6">
                        <h5 className="font-medium mb-3 text-gray-800">✨ Advanced Features</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h6 className="font-medium text-sm text-gray-700 mb-2">Financial Management</h6>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Multi-currency account tracking</li>
                              <li>• Automatic payment status calculation</li>
                              <li>• Debt grouping by person/direction</li>
                              <li>• Transaction history with notes</li>
                              <li>• Service subscription monitoring</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-sm text-gray-700 mb-2">User Experience</h6>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Dark/Light mode with system detection</li>
                              <li>• Drag & drop custom ordering</li>
                              <li>• Archive/unarchive system</li>
                              <li>• Interactive charts & visualization</li>
                              <li>• Responsive mobile-first design</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Architecture */}
                      <div className="mb-6">
                        <h5 className="font-medium mb-3 text-gray-800">🏗️ System Architecture</h5>
                        <div className="bg-white p-4 rounded border">
                          <div className="text-sm text-gray-600 space-y-2">
                            <p><strong>Authentication Flow:</strong> JWT tokens → HTTP-only cookies → Server middleware validation</p>
                            <p><strong>Data Flow:</strong> React Client → Next.js Server Actions → MongoDB → Real-time UI updates</p>
                            <p><strong>Security:</strong> Protected routes, session management, automatic token refresh</p>
                          </div>
                        </div>
                      </div>

                      {/* Deployment */}
                      <div className="mb-4">
                        <h5 className="font-medium mb-3 text-gray-800">🚀 AWS Serverless Deployment</h5>
                        <div className="bg-white p-4 rounded border">
                          <div className="text-sm text-gray-600 space-y-2">
                            <p><strong>CI/CD Pipeline:</strong> GitHub Actions → AWS CloudFormation → Lambda + API Gateway</p>
                            <p><strong>Infrastructure:</strong> AWS Lambda (serverless) + CloudFront CDN + API Gateway</p>
                            <p><strong>Cost Efficiency:</strong> Pay-per-use model (~$5-15/month) with automatic scaling</p>
                            <p><strong>Performance:</strong> Global CDN distribution with zero server maintenance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mini-order Detailed */}
              <div id="mini-order" className="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4">Mini-order</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Express</span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    A lightweight ordering system designed for small businesses and restaurants.
                    Simple setup with minimal configuration required to get started.
                  </p>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• Simple product management</li>
                    <li>• Quick order processing</li>
                    <li>• Minimal setup requirements</li>
                    <li>• Mobile-friendly interface</li>
                    <li>• Basic analytics and reporting</li>
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/juanfrvera/mini-order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span className="mr-2">View Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AWS Lambda Proxy Detailed */}
              <div id="aws-lambda-proxy" className="mb-16 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <h3 className="text-3xl font-medium mb-4">AWS Lambda Proxy</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">AWS Lambda</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    A serverless proxy solution using AWS Lambda for handling API requests,
                    CORS management, and request/response transformation.
                  </p>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• Serverless architecture</li>
                    <li>• CORS handling</li>
                    <li>• Request transformation</li>
                    <li>• Cost-effective scaling</li>
                    <li>• Easy deployment</li>
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/juanfrvera/aws-lambda-proxy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span className="mr-2">View Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Game Projects Section */}
              <div id="games-section" className="mb-16">
                <div className="text-center mb-12">
                  <h3 className={`text-4xl font-bold mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                    }`}>
                    Game Development
                  </h3>
                  <p className={`text-lg transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                    }`}>
                    Indie games developed with Unlucky Dwarf team
                  </p>
                </div>

                {/* Hard Roots */}
                <div id="hard-roots" className={`mb-16 rounded-lg shadow-sm overflow-hidden transition-colors duration-1000 ${isGameSection ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
                  }`}>
                  <div className="p-8">
                    <h3 className={`text-3xl font-medium mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Hard Roots</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Unity</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Indie Game</span>
                    </div>

                    <p className={`mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      An adventure game exploring deep underground roots and nature&apos;s mysteries.
                      Navigate through challenging environments while uncovering the secrets beneath the earth.
                    </p>
                    <h4 className={`font-medium mb-2 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Key Features:</h4>
                    <ul className={`space-y-1 mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      <li>• Exploration-based gameplay</li>
                      <li>• Environmental storytelling</li>
                      <li>• Unique underground setting</li>
                      <li>• Puzzle-solving mechanics</li>
                    </ul>
                    <div className="flex gap-4">
                      <Link
                        href="https://unlucky-dwarf.web.app/games/hardRoots.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <span className="mr-2">View Game</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Karts */}
                <div id="karts" className={`mb-16 rounded-lg shadow-sm overflow-hidden transition-colors duration-1000 ${isGameSection ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
                  }`}>
                  <div className="p-8">
                    <h3 className={`text-3xl font-medium mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Karts</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Unity</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Racing</span>
                    </div>

                    <p className={`mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      High-speed kart racing game with dynamic tracks and competitive gameplay.
                      Experience thrilling races with customizable karts and challenging opponents.
                    </p>
                    <h4 className={`font-medium mb-2 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Key Features:</h4>
                    <ul className={`space-y-1 mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      <li>• Fast-paced racing mechanics</li>
                      <li>• Multiple track layouts</li>
                      <li>• Kart customization</li>
                      <li>• Competitive AI opponents</li>
                    </ul>
                    <div className="flex gap-4">
                      <Link
                        href="https://unlucky-dwarf.web.app/games/karts.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span className="mr-2">View Game</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RPG */}
                <div id="rpg" className={`mb-16 rounded-lg shadow-sm overflow-hidden transition-colors duration-1000 ${isGameSection ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
                  }`}>
                  <div className="p-8">
                    <h3 className={`text-3xl font-medium mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>RPG</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Unity</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Role Playing</span>
                    </div>

                    <p className={`mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      Classic role-playing game with character progression, quests, and immersive storytelling.
                      Build your character, explore vast worlds, and engage in strategic combat.
                    </p>
                    <h4 className={`font-medium mb-2 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Key Features:</h4>
                    <ul className={`space-y-1 mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      <li>• Character progression system</li>
                      <li>• Quest-driven narrative</li>
                      <li>• Strategic turn-based combat</li>
                      <li>• Expansive world exploration</li>
                    </ul>
                    <div className="flex gap-4">
                      <Link
                        href="https://unlucky-dwarf.web.app/games/rpg.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <span className="mr-2">View Game</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Tenis */}
                <div id="tenis" className={`mb-16 rounded-lg shadow-sm overflow-hidden transition-colors duration-1000 ${isGameSection ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
                  }`}>
                  <div className="p-8">
                    <h3 className={`text-3xl font-medium mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Tenis</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Unity</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Sports</span>
                    </div>

                    <p className={`mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      Realistic tennis simulation with accurate physics and competitive gameplay.
                      Master your serves, volleys, and court positioning in this engaging sports game.
                    </p>
                    <h4 className={`font-medium mb-2 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Key Features:</h4>
                    <ul className={`space-y-1 mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      <li>• Realistic tennis physics</li>
                      <li>• Multiple court surfaces</li>
                      <li>• Tournament progression</li>
                      <li>• Skill-based gameplay</li>
                    </ul>
                    <div className="flex gap-4">
                      <Link
                        href="https://unlucky-dwarf.web.app/games/tenis.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <span className="mr-2">View Game</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Nightmare 2.5D */}
                <div id="nightmare-2d" className={`mb-16 rounded-lg shadow-sm overflow-hidden transition-colors duration-1000 ${isGameSection ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
                  }`}>
                  <div className="p-8">
                    <h3 className={`text-3xl font-medium mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Nightmare 2.5D</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Unity</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Horror</span>
                    </div>

                    <p className={`mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      Atmospheric horror game with 2.5D perspective delivering psychological thrills.
                      Navigate through haunting environments while uncovering the mysteries of your nightmares.
                    </p>
                    <h4 className={`font-medium mb-2 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                      }`}>Key Features:</h4>
                    <ul className={`space-y-1 mb-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-200' : 'text-gray-600'
                      }`}>
                      <li>• Atmospheric 2.5D graphics</li>
                      <li>• Psychological horror elements</li>
                      <li>• Immersive sound design</li>
                      <li>• Mystery-driven narrative</li>
                    </ul>
                    <div className="flex gap-4">
                      <Link
                        href="https://unlucky-dwarf.web.app/games/nightmare.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <span className="mr-2">View Game</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Sidebar */}
            <div 
              className={`hidden lg:block w-64 fixed right-8 transition-all duration-300 ${
                isInProjectsSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
              }`}
              style={{ top: `${sidebarTop}px` }}
            >
              <div className={`rounded-lg shadow-sm p-6 transition-colors duration-1000 ${isGameSection ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
                }`}>
                <h4 className={`font-medium mb-4 transition-colors duration-1000 ${isGameSection ? 'text-white' : 'text-gray-900'
                  }`}>Projects</h4>
                <nav className="space-y-3">
                  {[
                    { id: 'orilla-arquitectura', name: 'Orilla Arquitectura', color: 'bg-indigo-500', category: 'web' },
                    { id: 'finances', name: 'Finances', color: 'bg-blue-500', category: 'web' },
                    { id: 'encarga', name: 'Encarga', color: 'bg-red-500', category: 'web' },
                    { id: 'finances-next', name: 'Finances-Next', color: 'bg-black', category: 'web' },
                    { id: 'mini-order', name: 'Mini-order', color: 'bg-green-500', category: 'web' },
                    { id: 'aws-lambda-proxy', name: 'AWS Lambda Proxy', color: 'bg-orange-500', category: 'web' },
                    { id: 'hard-roots', name: 'Hard Roots', color: 'bg-green-600', category: 'game' },
                    { id: 'karts', name: 'Karts', color: 'bg-blue-600', category: 'game' },
                    { id: 'rpg', name: 'RPG', color: 'bg-indigo-600', category: 'game' },
                    { id: 'tenis', name: 'Tenis', color: 'bg-green-600', category: 'game' },
                    { id: 'nightmare-2d', name: 'Nightmare 2.5D', color: 'bg-red-600', category: 'game' }
                  ].map((project) => (
                    <div key={project.id}>
                      {project.id === 'hard-roots' && (
                        <div className={`text-xs font-medium mb-2 mt-4 transition-colors duration-1000 ${isGameSection ? 'text-purple-300' : 'text-gray-500'
                          }`}>
                          GAMES
                        </div>
                      )}
                      <button
                        onClick={() => scrollToProject(project.id)}
                        className={`flex items-center w-full text-left p-3 rounded-lg transition-all ${activeProject === project.id
                          ? (isGameSection ? 'bg-purple-800/50 shadow-sm' : 'bg-gray-100 shadow-sm')
                          : (isGameSection ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50')
                          }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full mr-3 ${project.color} ${activeProject === project.id ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                            }`}
                        />
                        <span className={`transition-colors duration-1000 ${activeProject === project.id
                          ? (isGameSection ? 'font-medium text-white' : 'font-medium text-gray-900')
                          : (isGameSection ? 'text-purple-200' : 'text-gray-600')
                          }`}>
                          {project.name}
                        </span>
                      </button>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-12 text-center">Education</h2>
            <div className="space-y-8">

              {/* Information Systems Engineer */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">Information Systems Engineer</h3>
                    <p className="text-lg text-blue-600">Universidad Tecnológica Nacional, Argentina</p>
                  </div>
                  <span className="text-gray-600 mt-2 md:mt-0">2016 - 2021</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Graduated with a degree in Information Systems Engineering</li>
                  <li>• Comprehensive curriculum covering software development, systems analysis, and project management</li>
                  <li>• Specialized in modern programming languages, databases, and software architecture</li>
                  <li>• Completed advanced coursework in web technologies, mobile development, and cloud computing</li>
                  <li>• Advanced networking protocols, security concepts, and encryption techniques</li>
                  <li>• Extensive mathematics including derivatives, integrals, mathematical analysis, and algebra</li>
                  <li>• Operations research and optimization techniques for function optimization</li>
                  <li>• Database design and normalization principles for efficient data management</li>
                </ul>
              </div>

              {/* Computer Technician */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">Computer Technician</h3>
                    <p className="text-lg text-blue-600">Technical High School</p>
                  </div>
                  <span className="text-gray-600 mt-2 md:mt-0">2009 - 2015</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Graduated as a Computer Technician with a strong foundation in technology</li>
                  <li>• Learned programming basics including logic, algorithms, and problem-solving</li>
                  <li>• Extensive training in computer hardware, assembly, and troubleshooting</li>
                  <li>• Early exposure to networking, databases, and system administration</li>
                  <li>• Built solid foundation that led to pursuing university-level computer science education</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-8">Contact me!</h2>
            <p className="text-lg text-gray-600 mb-12">
              Let's connect and discuss opportunities to work together
            </p>
            <div className="flex justify-center gap-8">
              <Link
                href="mailto:juanfrvera.work@gmail.com"
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-blue-600 group-hover:text-blue-700 transition-colors">juanfrvera.work@gmail.com</p>
              </Link>

              <Link
                href="https://www.linkedin.com/in/juan-vera/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-blue-600 group-hover:text-blue-700 transition-colors">Connect with me</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
