
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { JourneySection } from '@/components/JourneySection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-space text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="journey">
          <JourneySection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-deep-space border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Magnecia Dladla. Crafted with passion and code.
          </p>
          <p className="text-sm text-gray-500">
            "Dreams are the blueprints of reality" - Made in South Africa 🇿🇦
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
