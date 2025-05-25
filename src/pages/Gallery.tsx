
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
      alt: "Sunday worship service with congregation",
      category: "Worship"
    },
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2731&auto=format&fit=crop",
      alt: "Beautiful church interior",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=7360&auto=format&fit=crop",
      alt: "Community gathering outdoors",
      category: "Community"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
      alt: "Peaceful nature scene",
      category: "Events"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
      alt: "Youth group activities",
      category: "Youth"
    },
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2731&auto=format&fit=crop",
      alt: "Prayer and reflection space",
      category: "Worship"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=7360&auto=format&fit=crop",
      alt: "Community service project",
      category: "Service"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
      alt: "Fellowship dinner",
      category: "Community"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
      alt: "Christmas celebration",
      category: "Events"
    }
  ];

  const categories = ["All", "Worship", "Community", "Events", "Youth", "Service", "Facilities"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="font-inter text-xl max-w-3xl mx-auto opacity-90">
            Capturing moments of worship, fellowship, and community life at Grace Community Church.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gold text-navy'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gold text-navy px-4 py-2 rounded-full font-semibold text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
              <p className="font-inter text-sm">{filteredImages[selectedImage].alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">Be Part of Our Story</h2>
          <p className="font-inter text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            These photos capture just a glimpse of life at Grace Community Church. 
            Come visit us and create your own memories with our church family.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="/" 
              className="inline-block bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors duration-300"
            >
              Plan Your Visit
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-navy text-navy px-8 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
