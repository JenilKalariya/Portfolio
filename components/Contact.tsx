import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Start a Project</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a WordPress project in mind or want to discuss a custom web application? 
            Reach out to me directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-indigo-500/30 transition-colors group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Call Me</h4>
            <p className="text-gray-600 dark:text-gray-400 font-medium">+91 7069835429</p>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-indigo-500/30 transition-colors group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Me</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm break-all">jenilkalariya2312@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;