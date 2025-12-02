import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "WordPress Theme Dev", "Elementor Pro", "WooCommerce", "Speed Optimization",
    "React.js & Tailwind", "Website Migration", "Bug Fixing", "SEO Best Practices"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" 
              alt="Website Development Setup" 
              className="relative rounded-3xl shadow-2xl z-10 w-full object-cover aspect-square"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm">About Me</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              I'm Jenil Kalariya. <br/>
              <span className="text-gray-500 dark:text-gray-400">I make websites that work.</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a Web Developer specializing in <strong>Frontend Development</strong> and <strong>WordPress</strong>. I help small businesses and individuals launch professional websites without the headache. From simple portfolios to complex online stores, I handle the tech so you can focus on your business.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I pride myself on clear communication, fast delivery, and clean code. Whether you need a brand new site or fixes for an existing one, I'm here to help.
            </p>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 group">
                  <div className="text-green-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;