import { useState } from 'react';
import { ExternalLink, Github, Smartphone, GraduationCap, FileText, Calculator, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "EduHelp MP",
    description: "An educational platform that empowers students with interactive learning tools and resources, making education accessible and engaging.",
    icon: GraduationCap,
    tech: ["React", "Node.js", "MongoDB"],
    color: "neon-cyan",
    status: "Live",
    screenshots: [
      "/screenshots/eduhelp-1.png",
      "/screenshots/eduhelp-2.png"
    ]
  },
  {
    title: "Phone Tracker App",
    description: "A sophisticated location tracking application that helps families stay connected and ensures safety through real-time location sharing.",
    icon: Smartphone,
    tech: ["React Native", "Firebase", "Google Maps API"],
    color: "neon-purple",
    status: "In Development",
    screenshots: [
      "/screenshots/tracker-1.png",
      "/screenshots/tracker-2.png"
    ]
  },
  {
    title: "Homework Helper",
    description: "An AI-powered study companion that helps students organize, track, and complete their assignments with smart reminders and progress tracking.",
    icon: FileText,
    tech: ["React", "Python", "OpenAI API"],
    color: "neon-gold",
    status: "Beta",
    screenshots: [
      "/screenshots/homework-1.png",
      "/screenshots/homework-2.png"
    ]
  },
  {
    title: "Invoicing App",
    description: "A streamlined business solution for freelancers and small businesses to create, manage, and track invoices with automated payment reminders.",
    icon: Calculator,
    tech: ["Vue.js", "Express", "PostgreSQL"],
    color: "neon-pink",
    status: "Live",
    screenshots: ["/src/img/loginApp.png", "/src/img/dashbrd.png","/src/img/addClients.png","/src/img/createInv.png","/src/img/chooseInvoice.png","/src/img/downloadInvoice.png","/src/img/UpdateInvoice.png"]

  }
];

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;
  const activeImage = activeProject?.screenshots[activeImageIndex];

  const nextImage = () => {
    if (activeProject) {
      setActiveImageIndex((prev) => (prev + 1) % activeProject.screenshots.length);
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setActiveImageIndex((prev) => (prev - 1 + activeProject.screenshots.length) % activeProject.screenshots.length);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-matter to-deep-space">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Digital Creations
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Each project is a piece of my soul translated into code - solutions that bridge 
            the gap between imagination and reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === index;
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`cosmic-card p-8 rounded-xl h-full transition-all duration-500 transform ${
                  isHovered ? 'scale-105 border-glow' : ''
                }`}>
                  {/* Project header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-xl bg-${project.color}/20 flex items-center justify-center mr-4 transition-all duration-300 ${
                        isHovered ? 'scale-110' : ''
                      }`}>
                        <Icon className={`w-7 h-7 text-${project.color}`} />
                      </div>
                      <div>
                        <h3 className="font-orbitron text-xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full bg-${project.color}/20 text-${project.color} font-medium`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button onClick={() => { setActiveProjectIndex(index); setActiveImageIndex(0); }} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl w-full bg-deep-space p-6 rounded-xl shadow-xl">
            <button onClick={() => setActiveProjectIndex(null)} className="absolute top-4 right-4 text-white hover:text-red-500">
              <X className="w-6 h-6" />
            </button>

            <div className="flex justify-center items-center mb-4">
              <button onClick={prevImage} className="text-white hover:text-neon-cyan p-2">
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={activeImage}
                alt="Project Screenshot"
                className="max-h-[70vh] object-contain mx-4 rounded-lg cursor-pointer"
                onClick={() => setFullscreen(true)}
              />

              <button onClick={nextImage} className="text-white hover:text-neon-cyan p-2">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <p className="text-center text-gray-300">{activeProject.description}</p>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {fullscreen && activeProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button onClick={() => setFullscreen(false)} className="absolute top-4 right-4 text-white hover:text-red-500">
            <X className="w-6 h-6" />
          </button>

          <button onClick={prevImage} className="absolute left-4 text-white hover:text-neon-cyan">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img src={activeImage} alt="Fullscreen Project" className="max-h-[90vh] object-contain rounded-lg" />

          <button onClick={nextImage} className="absolute right-4 text-white hover:text-neon-cyan">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};
