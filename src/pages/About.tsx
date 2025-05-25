
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Church, Contact } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">About Our Church</h1>
          <p className="font-inter text-xl max-w-3xl mx-auto opacity-90">
            We are a community united by faith, hope, and love, committed to serving God and each other.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Church className="h-10 w-10 text-gold mr-4" />
                <h2 className="font-playfair text-4xl font-bold text-navy">Our Story</h2>
              </div>
              <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
                <p>
                  Grace Community Church was founded in 1985 with a simple vision: to create a place where 
                  everyone feels welcomed, loved, and valued regardless of their background or where they are 
                  in their faith journey.
                </p>
                <p>
                  Over the past decades, we've grown from a small gathering of 20 people to a vibrant 
                  community of over 800 members. Yet, we've never lost sight of our core values: 
                  authenticity, community, and service.
                </p>
                <p>
                  Today, we continue to be a beacon of hope in our city, reaching out to those in need, 
                  supporting local families, and creating lasting friendships that extend far beyond 
                  Sunday mornings.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2731&auto=format&fit=crop"
                alt="Church interior"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-navy text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Community</h3>
              <p className="font-inter text-gray-700">
                We believe in the power of authentic relationships and genuine community where everyone belongs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Church className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Worship</h3>
              <p className="font-inter text-gray-700">
                Our worship is heartfelt, engaging, and designed to connect people with God in meaningful ways.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Contact className="h-8 w-8 text-navy" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Service</h3>
              <p className="font-inter text-gray-700">
                We are called to serve others, both within our church family and in the broader community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-navy text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=400&auto=format&fit=crop"
                alt="Pastor Sarah Johnson"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-2">Pastor Sarah Johnson</h3>
              <p className="font-inter text-gold mb-2">Senior Pastor</p>
              <p className="font-inter text-gray-600 text-sm">
                15 years of ministry experience, passionate about community building and authentic faith.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=400&auto=format&fit=crop"
                alt="Pastor Michael Chen"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-2">Pastor Michael Chen</h3>
              <p className="font-inter text-gold mb-2">Associate Pastor</p>
              <p className="font-inter text-gray-600 text-sm">
                Youth ministry specialist with a heart for mentoring the next generation of leaders.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop"
                alt="Maria Rodriguez"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-2">Maria Rodriguez</h3>
              <p className="font-inter text-gold mb-2">Worship Director</p>
              <p className="font-inter text-gray-600 text-sm">
                Gifted musician and worship leader who creates space for authentic encounters with God.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
