import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <main className="relative bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      
      <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">Jenil <span className="text-indigo-600">Kalariya</span></span>
            <span className="text-gray-400 mx-2">|</span>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jenil Kalariya.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;