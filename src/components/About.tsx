
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="w-48 h-48 mb-6 border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
              <AvatarImage 
                src="/lovable-uploads/9f12728a-1941-48a5-b088-b49742cadbe5.png" 
                alt="Shivangi Maurya"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                SM
              </AvatarFallback>
            </Avatar>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Computer Science and Engineering student at Lovely Professional University Punjab, 
              with a strong foundation in full-stack development and a CGPA of 7.03.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My expertise spans across modern web technologies including React.js, Node.js, MongoDB, and TypeScript. 
              I love creating responsive, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600">
              Based in Lucknow, Uttar Pradesh, I'm always eager to learn new technologies and take on challenging 
              projects that push the boundaries of what's possible on the web.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Facts</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Computer Science & Engineering Student
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                CGPA: 7.03 at LPU Punjab
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                Full-Stack Developer
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                React.js & Node.js Specialist
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
