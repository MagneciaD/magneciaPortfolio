
import { useState } from 'react';
import { Brain, Palette, Globe, Zap, Heart, Target } from 'lucide-react';

const dreamItems = [
  {
    id: 1,
    title: "AI-Powered Education",
    description: "Creating intelligent tutoring systems that adapt to each student's learning style, making quality education accessible to every child in Africa.",
    icon: Brain,
    position: { x: 20, y: 30 },
    color: "neon-cyan"
  },
  {
    id: 2, 
    title: "Digital Art Platform",
    description: "Building a creative marketplace where African artists can showcase their work, connect with global audiences, and monetize their talents.",
    icon: Palette,
    position: { x: 70, y: 20 },
    color: "neon-gold"
  },
  {
    id: 3,
    title: "Global Impact Apps",
    description: "Developing applications that solve real-world problems, from healthcare accessibility to sustainable agriculture in developing communities.",
    icon: Globe,
    position: { x: 15, y: 70 },
    color: "neon-purple"
  },
  {
    id: 4,
    title: "Tech Innovation Hub",
    description: "Establishing a technology incubator in South Africa to nurture the next generation of African tech entrepreneurs and innovators.",
    icon: Zap,
    position: { x: 80, y: 65 },
    color: "neon-pink"
  },
  {
    id: 5,
    title: "Community Empowerment",
    description: "Creating digital literacy programs that empower communities with technology skills, bridging the digital divide one person at a time.",
    icon: Heart,
    position: { x: 50, y: 15 },
    color: "neon-cyan"
  },
  {
    id: 6,
    title: "Sustainable Tech",
    description: "Developing eco-friendly technology solutions that promote environmental sustainability while driving economic growth in Africa.",
    icon: Target,
    position: { x: 40, y: 80 },
    color: "neon-gold"
  }
];

export const DreamSpaceSection = () => {
  const [selectedDream, setSelectedDream] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-deep-space via-cosmic-950 to-dark-matter relative overflow-hidden">
      {/* Background galaxy effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-gold/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 gradient-text">
            The Dream Galaxy
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Welcome to the constellation of my aspirations. Click on any star to explore 
            the visions that drive my code and fuel my passion for creating a better world.
          </p>
        </div>

        {/* Interactive galaxy map */}
        <div className="relative h-96 md:h-[600px] bg-cosmic-gradient rounded-3xl overflow-hidden border border-neon-purple/30">
          {/* Floating stars */}
          {dreamItems.map((dream) => {
            const Icon = dream.icon;
            const isSelected = selectedDream === dream.id;
            const isHovered = hoveredStar === dream.id;
            
            return (
              <div key={dream.id} className="absolute">
                {/* Star */}
                <button
                  className={`absolute w-6 h-6 md:w-8 md:h-8 transition-all duration-300 transform ${
                    isHovered || isSelected ? 'scale-150' : 'scale-100'
                  }`}
                  style={{
                    left: `${dream.position.x}%`,
                    top: `${dream.position.y}%`,
                    transform: `translate(-50%, -50%) scale(${isHovered || isSelected ? 1.5 : 1})`
                  }}
                  onClick={() => setSelectedDream(selectedDream === dream.id ? null : dream.id)}
                  onMouseEnter={() => setHoveredStar(dream.id)}
                  onMouseLeave={() => setHoveredStar(null)}
                >
                  <div className={`w-full h-full bg-${dream.color} rounded-full animate-star-twinkle relative`}>
                    <div className={`absolute inset-0 bg-${dream.color} rounded-full animate-pulse-glow`} />
                    <Icon className="w-3 h-3 md:w-4 md:h-4 text-deep-space absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-${dream.color}/30 rounded-full blur-md scale-150 opacity-0 ${
                    isHovered || isSelected ? 'opacity-100' : ''
                  } transition-opacity duration-300`} />
                </button>

                {/* Connection lines when selected */}
                {isSelected && (
                  <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                    style={{
                      left: `${dream.position.x}%`,
                      top: `${dream.position.y + 5}%`,
                      transform: 'translateX(-50%)'
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Constellation lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>
            {dreamItems.map((dream, index) => {
              const nextDream = dreamItems[(index + 1) % dreamItems.length];
              return (
                <line
                  key={index}
                  x1={`${dream.position.x}%`}
                  y1={`${dream.position.y}%`}
                  x2={`${nextDream.position.x}%`}
                  y2={`${nextDream.position.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              );
            })}
          </svg>
        </div>

        {/* Dream details panel */}
        {selectedDream && (
          <div className="mt-8 cosmic-card p-8 rounded-xl animate-slide-up">
            {(() => {
              const dream = dreamItems.find(d => d.id === selectedDream);
              if (!dream) return null;
              
              const Icon = dream.icon;
              return (
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-xl bg-${dream.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 text-${dream.color}`} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-white mb-3">
                      {dream.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {dream.description}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};
