
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('pastor-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome Home
        </h1>
        <p className="font-inter text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Join us this Sunday and be part of something greater.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
