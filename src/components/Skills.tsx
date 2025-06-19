
export const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX Design",
      skills: ["Figma", "User Research", "Prototyping", "Information Architecture", "User Journey Mapping", "Wireframing", "Visual Design", "Responsive Design"]
    },
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Technologies/Frameworks",
      skills: ["React JS", "Node JS", "Express", "MongoDB", "Git", "GitHub"]
    },
    {
      title: "Core Skills",
      skills: ["Data Structures and Algorithms", "Problem-Solving", "Full-Stack Development", "User-Centered Design"]
    }
  ];

  const certifications = [
    {
      title: "Server-side JavaScript with Node.js",
      provider: "Coursera",
      date: "Sep 2024"
    },
    {
      title: "HTML, CSS and JavaScript for Web Developers",
      provider: "Coursera",
      date: "Aug 2024"
    },
    {
      title: "Data Structure and AlgorithmX- Self Placed",
      provider: "GeeksForGeek",
      date: "Jul 2024"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Certifications
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Technical Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium mb-4 text-gray-700">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{cert.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">{cert.provider}</span>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
