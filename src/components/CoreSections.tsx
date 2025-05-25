
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Heart, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoreSections = () => {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "Main Sanctuary"
    },
    {
      title: "Community Bible Study",
      date: "Wednesdays",
      time: "7:00 PM",
      location: "Fellowship Hall"
    },
    {
      title: "Youth Group Meeting",
      date: "Fridays",
      time: "6:30 PM",
      location: "Youth Center"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2731&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=6052&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=7360&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop"
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 space-y-20">
        {/* About Us Preview */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Users className="h-12 w-12 text-gold" />
          </div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">About Our Community</h2>
          <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
            We are a diverse family of believers committed to growing in faith, serving our community, 
            and sharing God's love. Whether you're new to faith or have been walking with God for years, 
            you'll find a warm welcome here.
          </p>
          <Link to="/about">
            <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full">
              Learn More
            </Button>
          </Link>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Calendar className="h-12 w-12 text-gold" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Upcoming Events</h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Join us for worship, fellowship, and community events throughout the week.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-navy mb-3">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="font-inter"><span className="font-medium">Date:</span> {event.date}</p>
                    <p className="font-inter"><span className="font-medium">Time:</span> {event.time}</p>
                    <p className="font-inter"><span className="font-medium">Location:</span> {event.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-full">
                View All Events
              </Button>
            </Link>
          </div>
        </section>

        {/* Giving Section */}
        <section className="bg-cream rounded-3xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-gold" />
          </div>
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">Your Generosity Makes a Difference</h2>
          <p className="font-inter text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Every gift, no matter the size, helps us serve our community, support those in need, 
            and spread God's love throughout our city and beyond.
          </p>
          <Link to="/giving">
            <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 rounded-full">
              Give Now
            </Button>
          </Link>
        </section>

        {/* Gallery Preview */}
        <section>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <ImageIcon className="h-12 w-12 text-gold" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Our Community in Action</h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into the life of our church family through these moments of worship, fellowship, and service.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/gallery">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-full">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-navy rounded-3xl p-12 text-white">
          <h2 className="font-playfair text-4xl font-bold mb-6">We'd Love to Hear from You</h2>
          <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Have questions? Want to connect? Need prayer? Our team is here for you. 
            Reach out and let us know how we can support you on your journey.
          </p>
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 rounded-full">
              Get in Touch
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CoreSections;
