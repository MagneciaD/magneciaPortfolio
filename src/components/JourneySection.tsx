
import { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Rocket, Star } from 'lucide-react';

const journeySteps = [
  {
    title: "2016",
    subtitle: "Gedlembane Secondary School",
    description: "The year I matriculated — closing one chapter and stepping boldly into a world of possibilities, ready to chase my dreams.",
    icon: Star,
    color: "neon-gold"
  },
  {
    title: "2019", 
    subtitle: "University of Mpumalanga",
    description: "Found my calling in software development. The first 'Hello World' felt like unlocking a secret language of creation and possibility.",
    icon: Lightbulb,
    color: "neon-cyan"
  },
  {
    title: "2022",
    subtitle: "Kayise IT...Software Developer Intern", 
    description: "Built mobile and web apps with Java, Android Studio, Laravel, and React. Improved UX, optimized performance, and boosted SEO while collaborating with clients on user-focused solutions.",
    icon: Code,
    color: "neon-gold"
  },
  {
    title: "2023-2025",
    subtitle: "Infinite Possibilities",
    description: "Developed Ecormmerce websites, Invoicing App, Homework Helper, Personal websites  - each project a step closer to my vision of technology serving humanity.",
    icon: Rocket,
    color: "neon-pink"
  }
];

export const JourneySection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const steps = sectionRef.current?.querySelectorAll('[data-step]');
    steps?.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-deep-space to-dark-matter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 gradient-text">
            The Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Every line of code tells a story. Here's how I transformed from dreams to reality, 
            one algorithm at a time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-gold transform -translate-x-1/2 hidden md:block" />
          
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                data-step={index}
                className={`relative flex items-center mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`cosmic-card p-8 rounded-xl transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${step.color}/20 flex items-center justify-center mr-4`}>
                        <Icon className={`w-6 h-6 text-${step.color}`} />
                      </div>
                      <div>
                        <h3 className="font-orbitron text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className={`text-${step.color} text-sm font-medium`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-deep-space border-2 border-neon-purple rounded-full items-center justify-center z-10">
                  <Icon className={`w-8 h-8 text-${step.color} ${isVisible ? 'animate-pulse-glow' : ''}`} />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
