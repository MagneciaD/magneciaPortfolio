
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating stars animation
    const createStars = () => {
      if (!starsRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'absolute w-1 h-1 bg-white rounded-full animate-star-twinkle';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsRef.current.appendChild(star);
      }
    };

    createStars();

    // Mouse movement effect for orb
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient">
      {/* Animated background stars */}
      <div ref={starsRef} className="absolute inset-0" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-neon-gold/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Central glowing orb */}
        <div className="relative mb-12 flex justify-center">
          <div 
            ref={orbRef}
            className="relative w-32 h-32 transition-transform duration-300 ease-out"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-full animate-pulse-glow" />
            <div className="absolute inset-2 bg-deep-space rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-neon-gradient rounded-full animate-pulse" />
            </div>
            {/* Orbit rings */}
            <div className="absolute inset-0 border border-neon-purple/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-4 border border-neon-cyan/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
        </div>

        {/* Hero text */}
        <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">MAGNECIA</span>
          <br />
          <span className="text-white">DLADLA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Fullstack Developer • Visionary • Creative Technologist
        </p>
        
        <p className="text-lg md:text-xl text-neon-cyan mb-8 animate-fade-in font-medium" style={{ animationDelay: '0.6s' }}>
          "Where Vision Meets Code."
        </p>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.9s' }}>
         Developer passionate about creating efficient, user-focused web and mobile apps. 
         Skilled in front-end and back-end development, API integration, and databases. 
         Creative problem-solver and team player dedicated to building smart, impactful solutions.
        </p>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-transparent border-2 border-neon-purple text-white font-medium rounded-lg transition-all duration-300 hover:bg-neon-purple/10 hover:scale-105 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <span className="relative z-10">Explore My Universe</span>
          <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-neon-cyan" />
      </div>
    </section>
  );
};
