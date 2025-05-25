
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for worship, fellowship, and inspiring messages.",
      recurring: true
    },
    {
      title: "Community Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      description: "Dive deeper into God's word with our community study groups.",
      recurring: true
    },
    {
      title: "Youth Group Meeting",
      date: "Every Friday",
      time: "6:30 PM",
      location: "Youth Center",
      description: "Fun, games, and spiritual growth for teens and young adults.",
      recurring: true
    },
    {
      title: "Community Service Day",
      date: "March 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Various Locations",
      description: "Join us as we serve our local community with various outreach projects.",
      recurring: false
    },
    {
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Celebrate the resurrection with special music, drama, and fellowship.",
      recurring: false
    },
    {
      title: "Summer Family Camp",
      date: "July 12-14, 2024",
      time: "All Weekend",
      location: "Camp Sunshine",
      description: "A weekend retreat for families with activities, worship, and fun.",
      recurring: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Church Events</h1>
          <p className="font-inter text-xl max-w-3xl mx-auto opacity-90">
            Join us for worship, fellowship, and community events throughout the year.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-playfair text-xl font-semibold text-navy">{event.title}</h3>
                    {event.recurring && (
                      <span className="bg-gold text-navy text-xs px-2 py-1 rounded-full font-semibold">
                        Weekly
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gold" />
                      <span className="font-inter text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-4 h-4 mr-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <span className="font-inter text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gold" />
                      <span className="font-inter text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-6">Want to Get Involved?</h2>
          <p className="font-inter text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We have many opportunities for you to connect, serve, and grow. From volunteer roles to 
            small groups, there's a place for everyone in our church family.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a 
              href="/" 
              className="inline-block border-2 border-navy text-navy px-8 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-colors duration-300"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
