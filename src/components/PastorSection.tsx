
import { useState, useEffect } from 'react';

const PastorSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    "We believe in transformation through love.",
    "You matter to God, and you matter to us.",
    "Hope lives here.",
    "Everyone has a place in God's family.",
    "Grace changes everything."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('pastor-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, messages.length]);

  return (
    <section id="pastor-section" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Messages */}
          <div className="space-y-8">
            <div className="relative h-32 flex items-center">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center transition-all duration-1000 ${
                    index === currentMessageIndex 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-4'
                  }`}
                >
                  <blockquote className="font-playfair text-2xl md:text-3xl font-medium text-navy leading-relaxed">
                    "{message}"
                  </blockquote>
                </div>
              ))}
            </div>
            
            <div className="border-l-4 border-gold pl-6">
              <p className="font-inter text-gray-700 mb-2">Pastor Sarah Johnson</p>
              <p className="font-inter text-sm text-gray-600">
                "After 15 years in ministry, I've learned that church isn't a building—it's a family. 
                Our community is built on authenticity, love, and the belief that everyone belongs."
              </p>
            </div>

            {/* Message indicators */}
            <div className="flex space-x-2">
              {messages.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === currentMessageIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentMessageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Pastor Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
          }`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop"
                alt="Pastor Sarah Johnson"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gold rounded-full animate-float"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-lightBlue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
