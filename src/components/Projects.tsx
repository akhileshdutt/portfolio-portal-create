
import { ExternalLink, Figma } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "RideBee - Ride Sharing App",
      description: "A comprehensive UI/UX design for a ride-sharing platform featuring intuitive user flows, modern interface design, and seamless booking experience. Designed with user-centric approach focusing on accessibility and ease of use.",
      tech: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      date: "2024",
      figma: "https://www.figma.com/design/K16A8ElAJoGuCJelsnNeoD/RIDE-SHARING-APP?m=auto&t=ZloqZkpxhult0W2H-6",
      logo: "/lovable-uploads/491ce08a-4b19-48b6-9ffc-0f07d605a2c4.png"
    },
    {
      title: "Food Delivery App",
      description: "Complete information architecture and UI/UX design for a food delivery platform. Features comprehensive user journey mapping, intuitive navigation, and engaging visual design to enhance the food ordering experience.",
      tech: ["UI/UX Design", "Information Architecture", "Figma", "User Journey Mapping"],
      date: "2024",
      figma: "https://www.figma.com/board/c9hnlpnuf5wD0qtnVLBR9q/INFORMATION-ARCHITECTURE-FOR-FOOD-DELIVERY-APP--Community---Community-?t=ZloqZkpxhult0W2H-6",
      logo: "/lovable-uploads/24da526e-65a7-4d13-911e-03307e0bf87c.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          UI/UX Design Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                </div>
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
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Figma size={16} />
                  View Design
                </a>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <ExternalLink size={16} />
                  Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
