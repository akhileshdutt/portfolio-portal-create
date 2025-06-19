
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "SkyVoyage - Flight Booking System",
      description: "A fully responsive, modern flight booking website frontend using React.js with TypeScript and Tailwind CSS for seamless UX across devices. Implemented features like flight search, passenger form, booking confirmation, and dynamic booking ID generation.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      date: "May 2025",
      github: "#",
      live: "#"
    },
    {
      title: "ShopNow - E-commerce Platform",
      description: "Developed a user-centric E-commerce platform using HTML, CSS and JavaScript, scalable to accommodate many users shopping simultaneously. Implemented essential features like product browsing, shopping cart management, and checkout.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Sass"],
      date: "Feb 2025 - Mar 2025",
      github: "#",
      live: "#"
    },
    {
      title: "Doctor Appointment Booking System",
      description: "Developed a Doctor Appointment System to schedule and manage patient appointments. Implemented secure user authentication and real-time appointment booking using MongoDB, Express, React, and Node.js.",
      tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      date: "Nov 2024 - Dec 2025",
      github: "#",
      live: "#"
    },
    {
      title: "To-Do-List Application",
      description: "Developed an interactive To-Do List application with task management features. Implemented dynamic task addition, deletion, and completion using JavaScript. Designed a responsive and user-friendly interface using HTML and CSS.",
      tech: ["HTML", "CSS", "JavaScript"],
      date: "Sep 2024",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
