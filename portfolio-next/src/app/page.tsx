import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Calculate years that have passed since January of 2020
  const calculateYearsOfExperience = () => {
    const now = new Date();
    const start = new Date(2020, 0, 1);
    const diff = now.getTime() - start.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365));
  };

  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/mountains-cut.jpg"
              alt="Mountain landscape"
              width={800}
              height={300}
              className="w-full h-64 object-cover rounded-lg"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Hello, I&apos;m Juan, a{" "}
            <span className="font-medium">Full Stack Engineer</span>{" "}
            with {yearsOfExperience} years of experience
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I like to make minimalist websites, focusing on functionality and performance,
            keeping the essence of each application
          </p>
          
          <div className="flex justify-center mb-16">
            <Link 
              href="https://www.linkedin.com/in/juan-vera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Finances Project */}
            <div className="group">
              <h2 className="text-2xl font-medium mb-4">Finances</h2>
              <Link 
                href="https://juanvera.dev/finances"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="mb-4">
                  <Image
                    src="/finances.png"
                    alt="Finances app screenshot"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <p className="text-gray-600">
                  Manage your accounts, set reminders for debts and services
                </p>
              </Link>
            </div>

            {/* Encarga Project */}
            <div className="group">
              <h2 className="text-2xl font-medium mb-4">Encarga</h2>
              <Link 
                href="https://encargarpedido.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="mb-4">
                  <Image
                    src="/encarga.webp"
                    alt="Encarga app screenshot"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="space-y-1 text-gray-600">
                  <p>Create your shop</p>
                  <p>Let your clients order</p>
                  <p>Receive automatic messages</p>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
