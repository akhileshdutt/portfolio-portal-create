
import { ExternalLink, Figma, Github } from "lucide-react";

export const Projects = () => {
  const designProjects = [
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
      figma: "https://www.figma.com/design/DoedTdrhA2upKLZrACpFyi/CA4-High-Fidelity?node-id=0-1&t=VA9TmK5nmkzDvYgO-1",
      logo: "/lovable-uploads/24da526e-65a7-4d13-911e-03307e0bf87c.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        
        {/* UI/UX Design Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">UI/UX Design Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {designProjects.map((project, index) => (
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
                      <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
