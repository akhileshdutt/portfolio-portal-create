
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:shivangimaurya3002@gmail.com" className="text-gray-600 hover:text-blue-600">
                    shivangimaurya3002@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:+918318671623" className="text-gray-600 hover:text-blue-600">
                    +91 8318671623
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Lucknow, Uttar Pradesh 226002</p>
                </div>
              </div>

              <div className="flex items-center">
                <Linkedin className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium text-gray-800">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/shivangi-maurya-925644251/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    linkedin.com/in/shivangi-maurya-925644251
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Github className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-medium text-gray-800">GitHub</p>
                  <a 
                    href="https://github.com/shivangimaurya30" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    github.com/shivangimaurya30
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/lovable-uploads/56c4f483-f01d-4c87-bab1-da9f4a253baa.png"
                download="Shivangi_Maurya_Resume.png"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h4 className="text-lg font-medium mb-4 text-gray-800">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/shivangi-maurya-925644251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/shivangimaurya30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="mailto:shivangimaurya3002@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
