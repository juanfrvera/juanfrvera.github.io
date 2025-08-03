"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState("finances");

  // Calculate years that have passed since January of 2020
  const calculateYearsOfExperience = () => {
    const now = new Date();
    const start = new Date(2020, 0, 1);
    const diff = now.getTime() - start.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365));
  };

  const yearsOfExperience = calculateYearsOfExperience();

  // Handle scroll to update active project
  useEffect(() => {
    const handleScroll = () => {
      const projectSections = ['finances', 'encarga', 'finances-next', 'mini-order', 'aws-lambda-proxy'];
      
      for (const projectId of projectSections) {
        const element = document.getElementById(projectId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveProject(projectId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <Image
              src="/mountains-cut.jpg"
              alt="Juan Vera profile picture"
              width={200}
              height={200}
              className="w-48 h-48 object-cover rounded-full flex-shrink-0"
              priority
            />
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Hello, I&apos;m Juan, a{" "}
                <span className="font-medium">Full Stack Engineer</span>{" "}
                with {yearsOfExperience} years of experience
              </h1>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl md:max-w-none">
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
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link 
              href="https://github.com/juanfrvera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors mr-6"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link 
              href="mailto:juanfrvera.work@gmail.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Projects Summary */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Finances Project */}
            <div className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <h3 className="text-2xl font-medium mb-4 p-6 pb-0">Finances</h3>
              <Link 
                href="https://juanvera.dev/finances"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
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
            </div>

            {/* Encarga Project */}
            <div className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <h3 className="text-2xl font-medium mb-4 p-6 pb-0">Encarga</h3>
              <Link 
                href="https://encargarpedido.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
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
        <div className="max-w-6xl mx-auto">
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
              <p className="text-gray-600">Unit tests with Mocha, Chai, Sinon</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Tools</h3>
              <p className="text-gray-600">Git, Jira, Figma, Confluence, Postman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
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
      </section>

      {/* Detailed Projects Section with Navigation */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center">All Projects</h2>
          
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1">
              
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
                            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
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
                            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
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
                    <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Enhanced version of the Finances app rebuilt with Next.js for improved performance, 
                    SEO, and modern React features. Includes server-side rendering and static generation.
                  </p>
                  <h4 className="font-medium mb-2">Improvements:</h4>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• Better performance with Next.js optimization</li>
                    <li>• Server-side rendering for SEO</li>
                    <li>• Modern React hooks and patterns</li>
                    <li>• Improved TypeScript integration</li>
                    <li>• Enhanced build and deployment pipeline</li>
                  </ul>
                  <div className="flex gap-4">
                    <Link 
                      href="https://github.com/juanfrvera/finances-next"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span className="mr-2">View Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  </div>
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
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Sidebar */}
            <div className="hidden lg:block w-64 sticky top-8 self-start">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-medium mb-4 text-gray-900">Projects</h4>
                <nav className="space-y-3">
                  {[
                    { id: 'finances', name: 'Finances', color: 'bg-blue-500' },
                    { id: 'encarga', name: 'Encarga', color: 'bg-red-500' },
                    { id: 'finances-next', name: 'Finances-Next', color: 'bg-black' },
                    { id: 'mini-order', name: 'Mini-order', color: 'bg-green-500' },
                    { id: 'aws-lambda-proxy', name: 'AWS Lambda Proxy', color: 'bg-orange-500' }
                  ].map((project) => (
                    <button
                      key={project.id}
                      onClick={() => scrollToProject(project.id)}
                      className={`flex items-center w-full text-left p-3 rounded-lg transition-all ${
                        activeProject === project.id 
                          ? 'bg-gray-100 shadow-sm' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div 
                        className={`w-3 h-3 rounded-full mr-3 ${project.color} ${
                          activeProject === project.id ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                        }`}
                      />
                      <span className={`${
                        activeProject === project.id ? 'font-medium text-gray-900' : 'text-gray-600'
                      }`}>
                        {project.name}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-8">Education</h2>
          <div className="bg-gray-50 p-8 rounded-lg inline-block">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Information Systems Engineer</h3>
            <p className="text-gray-600">2016 - 2021</p>
          </div>
        </div>
      </section>
    </div>
  );
}
