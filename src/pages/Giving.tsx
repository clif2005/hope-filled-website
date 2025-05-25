
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Giving as GivingIcon, Users, Church, Contact } from 'lucide-react';

const Giving = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Generous Living</h1>
          <p className="font-inter text-xl max-w-3xl mx-auto opacity-90">
            Your generosity creates lasting impact in our community and around the world.
          </p>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-6">Why We Give</h2>
            <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
              Giving is an act of worship and a way to participate in God's work in the world. 
              Every gift, regardless of size, makes a meaningful difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Community Impact</h3>
                <p className="font-inter text-gray-700">
                  Support local families, food banks, and community outreach programs that make a real difference.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Church className="h-8 w-8 text-navy" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Church Ministry</h3>
                <p className="font-inter text-gray-700">
                  Enable worship services, youth programs, and pastoral care that strengthen our church family.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Contact className="h-8 w-8 text-navy" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Global Missions</h3>
                <p className="font-inter text-gray-700">
                  Partner with missionaries and organizations worldwide to spread hope and love globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-6">Ways to Give</h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
              We've made it easy and secure to give in the way that works best for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Online Giving</h3>
                <p className="font-inter text-gray-700 mb-6">
                  Give securely online with a one-time gift or set up recurring donations. 
                  It's fast, easy, and secure.
                </p>
                <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-3 rounded-full w-full">
                  Give Online Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">In-Person Giving</h3>
                <p className="font-inter text-gray-700 mb-6">
                  Bring your offering during Sunday worship service or visit our church office 
                  during the week.
                </p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-full w-full">
                  Visit Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Funds */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-6">Special Giving Opportunities</h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
              In addition to regular tithes and offerings, you can contribute to these special funds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-lightBlue/20 rounded-xl p-6 text-center">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-3">Building Fund</h3>
              <p className="font-inter text-gray-700 text-sm">
                Help us maintain and improve our church facilities for future generations.
              </p>
            </div>
            
            <div className="bg-gold/20 rounded-xl p-6 text-center">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-3">Benevolence Fund</h3>
              <p className="font-inter text-gray-700 text-sm">
                Support church members and community members facing financial hardship.
              </p>
            </div>
            
            <div className="bg-cream rounded-xl p-6 text-center">
              <h3 className="font-playfair text-xl font-semibold text-navy mb-3">Youth Ministry</h3>
              <p className="font-inter text-gray-700 text-sm">
                Fund youth programs, camps, and activities that shape the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <GivingIcon className="h-12 w-12 text-gold" />
          </div>
          <h2 className="font-playfair text-4xl font-bold mb-6">Ready to Give?</h2>
          <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Thank you for your generous heart. Your giving creates lasting impact and helps us 
            serve our community better.
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-3 rounded-full text-lg">
            Start Giving Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Giving;
