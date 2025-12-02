import React from 'react';
import { Layout, ShoppingCart, Smartphone, Gauge, Database, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom theme development, plugin integration, and Elementor pro expertise tailored to your brand."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Full-scale WooCommerce setups with secure payment gateways, inventory management, and sales tracking."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your site looks perfect on desktops, tablets, and smartphones."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Speed Optimization",
      description: "Enhancing website performance to achieve high Core Web Vitals scores and faster load times."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building interactive SPAs using React.js, TypeScript, and Tailwind CSS for modern user experiences."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Best Practices",
      description: "Implementing semantic HTML and SEO-friendly structures to help you rank higher on Google."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">My Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services I Offer</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Specialized in high-quality web solutions, from simple portfolios to complex e-commerce platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;