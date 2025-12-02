import React from 'react';
import { Code2, FileCode, Database, Server, Smartphone, Layout, Wind, Globe, Cloud, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { 
      name: "React.js", 
      icon: <Code2 className="w-8 h-8" />, 
      color: "text-blue-500", 
      bg: "bg-blue-50 dark:bg-blue-900/20",
      description: "Building interactive UIs"
    },
    { 
      name: "HTML5", 
      icon: <FileCode className="w-8 h-8" />, 
      color: "text-orange-500", 
      bg: "bg-orange-50 dark:bg-orange-900/20",
      description: "Structural semantic markup"
    },
    { 
      name: "CSS3", 
      icon: <Layout className="w-8 h-8" />, 
      color: "text-blue-600", 
      bg: "bg-blue-50 dark:bg-blue-900/20",
      description: "Responsive styling & animations"
    },
    { 
      name: "WordPress", 
      icon: <Globe className="w-8 h-8" />, 
      color: "text-indigo-600", 
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      description: "CMS & custom theme dev"
    },
    { 
      name: "JavaScript", 
      icon: <FileCode className="w-8 h-8" />, 
      color: "text-yellow-500", 
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      description: "Dynamic functionality"
    },
    { 
      name: "Flutter", 
      icon: <Smartphone className="w-8 h-8" />, 
      color: "text-cyan-500", 
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      description: "Cross-platform mobile apps"
    },
    { 
      name: "Node.js", 
      icon: <Server className="w-8 h-8" />, 
      color: "text-green-600", 
      bg: "bg-green-50 dark:bg-green-900/20",
      description: "Backend runtime env"
    },
    { 
      name: "Tailwind CSS", 
      icon: <Wind className="w-8 h-8" />, 
      color: "text-teal-500", 
      bg: "bg-teal-50 dark:bg-teal-900/20",
      description: "Utility-first styling"
    },
    { 
      name: "MySQL", 
      icon: <Database className="w-8 h-8" />, 
      color: "text-blue-800", 
      bg: "bg-blue-50 dark:bg-blue-900/20",
      description: "Relational database management"
    },
    { 
      name: "Firebase", 
      icon: <Cloud className="w-8 h-8" />, 
      color: "text-orange-400", 
      bg: "bg-orange-50 dark:bg-orange-900/20",
      description: "Real-time backend services"
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Technical Proficiency</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Tech Stack</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies I use to build robust, scalable, and high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`p-4 rounded-full mb-4 ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">{skill.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;