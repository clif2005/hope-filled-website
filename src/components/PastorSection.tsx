
import { useState, useEffect } from 'react';

const PastorSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    "We believe in transformation through love.",
    "You matter to God, and you matter to us.",
    "Hope lives here.",
    "Everyone has a place in God's family.",
    "Grace changes everything.",
    "Come as you are, leave transformed.",
    "Your story matters here."
  ];

  const images = [
    "/lovable-uploads/b9233848-e8fa-48be-aa9c-8c6004d91ad6.png",
    "/lovable-uploads/361ddaaa-999e-4351-8c04-a1312f491338.png",
    "/lovable-uploads/383cc066-c7a8-47f4-be3a-04084dbe8556.png",
    "/lovable-uploads/15d85831-4c9e-451b-83bd-3b0bc1c3455f.png",
    "/lovable-uploads/ff2fc01d-f0e9-43c3-9b87-ae69def4c560.png",
    "/lovable-uploads/819cdfc9-7154-419a-a58f-af73cae0343b.png"
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
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible, messages.length, images.length]);

  // Handle scroll-based message changes
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible) return;
      
      const scrollY = window.scrollY;
      const sectionElement = document.getElementById('pastor-section');
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const relativeScroll = scrollY - sectionTop;
        
        if (relativeScroll > 0 && relativeScroll < sectionHeight) {
          const progress = relativeScroll / sectionHeight;
          const newMessageIndex = Math.floor(progress * messages.length);
          const newImageIndex = Math.floor(progress * images.length);
          
          if (newMessageIndex !== currentMessageIndex && newMessageIndex < messages.length) {
            setCurrentMessageIndex(newMessageIndex);
          }
          if (newImageIndex !== currentImageIndex && newImageIndex < images.length) {
            setCurrentImageIndex(newImageIndex);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, currentMessageIndex, currentImageIndex, messages.length, images.length]);

  return (
    <section id="pastor-section" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Messages */}
          <div className="space-y-8">
            <div className="relative h-40 flex items-center">
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
              <p className="font-inter text-gray-700 mb-2 font-semibold">Pastor Sarah Johnson</p>
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

          {/* Cycling Images */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-12'
          }`}>
            <div className="relative">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Church image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain bg-white transition-all duration-1000 ${
                      index === currentImageIndex 
                        ? 'opacity-100 transform scale-100' 
                        : 'opacity-0 transform scale-105'
                    }`}
                  />
                ))}
              </div>
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
