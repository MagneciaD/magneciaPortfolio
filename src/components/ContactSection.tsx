
import { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-matter to-deep-space relative overflow-hidden">
      {/* Portal background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-cyan/15 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-gold/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Open Communication Portal
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on something extraordinary? Send a transmission through the digital cosmos 
            and let's create the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="cosmic-card p-8 rounded-xl">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="w-6 h-6 text-neon-cyan mr-3" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-neon-cyan"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-neon-cyan"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-neon-cyan resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon-gradient hover:opacity-80 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Transmitting...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info and social */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="cosmic-card p-8 rounded-xl">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
                Contact Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-neon-cyan mr-4" />
                  <span className="text-gray-300">Magneciadladla@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-neon-gold mr-4" />
                  <span className="text-gray-300">Mpumalanga, South Africa</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="cosmic-card p-8 rounded-xl">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
                Connect Across Dimensions
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.linkedin.com/in/magnecia-dladla-031587209/"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-neon-purple/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-8 h-8 text-neon-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">LinkedIn</span>
                </a>
                
                <a
                  href="#"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-neon-purple/20 transition-all duration-300 group"
                >
                  <Github className="w-8 h-8 text-neon-gold group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">GitHub</span>
                </a>
                
                <a
                  href="#"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-neon-purple/20 transition-all duration-300 group"
                >
                  <Twitter className="w-8 h-8 text-neon-pink group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
