import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-gray-900">
      
      {/* Simplified Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-100 dark:border-indigo-800">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Web Developer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            I build <span className="text-indigo-600">Simple</span> & <br/>
            <span className="text-indigo-600">Effective</span> Websites.
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            Hi, I'm <strong>Jenil Kalariya</strong>. I create fast, SEO-friendly WordPress websites that help your business grow. No clutter, just results.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
            >
              Start Project
              <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-3.5 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              My Work
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
             <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-3 opacity-10"></div>
             {/* Slider Container */}
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 overflow-hidden bg-gray-200 dark:bg-gray-800">
               {images.map((img, index) => (
                 <img 
                   key={index}
                   src={img} 
                   alt={`Slide ${index + 1}`}
                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                     index === currentSlide ? 'opacity-100' : 'opacity-0'
                   }`}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;