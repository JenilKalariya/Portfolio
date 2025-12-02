import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Corporate Landing Page",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "A high-converting, professional landing page built using WordPress and Elementor, focused on speed and SEO.",
      tags: ["WordPress", "Elementor"]
    },
    {
      id: 2,
      title: "Music Academy Website",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      description: "A dynamic website for a music academy featuring class schedules, instructor profiles, and student galleries.",
      tags: ["WordPress", "Education"]
    },
    {
      id: 3,
      title: "Digital Visiting Card App",
      category: "Flutter",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      description: "A cross-platform mobile application developed with Flutter for creating, storing, and sharing smart digital visiting cards.",
      tags: ["Flutter", "Mobile App"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">My Work</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Recent Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-auto">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h4>
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;