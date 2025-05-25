
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="font-inter text-xl max-w-3xl mx-auto opacity-90">
            We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-navy mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block font-inter font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-inter font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-inter font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-inter font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full"
                        placeholder="How can we help you today?"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full w-full font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-6">Visit Us</h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gold rounded-full p-3">
                          <MapPin className="h-6 w-6 text-navy" />
                        </div>
                        <div>
                          <h3 className="font-playfair text-xl font-semibold text-navy mb-2">Our Location</h3>
                          <div className="font-inter text-gray-700">
                            <p>123 Community Way</p>
                            <p>Your City, State 12345</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gold rounded-full p-3">
                          <Mail className="h-6 w-6 text-navy" />
                        </div>
                        <div>
                          <h3 className="font-playfair text-xl font-semibold text-navy mb-2">Email Us</h3>
                          <div className="font-inter text-gray-700 space-y-1">
                            <p>General: hello@gracecommunity.org</p>
                            <p>Pastor: pastor@gracecommunity.org</p>
                            <p>Prayer: prayer@gracecommunity.org</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Service Times */}
              <div>
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">Service Times</h3>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="space-y-3 font-inter">
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday Worship</span>
                        <span className="text-gray-600">10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Wednesday Bible Study</span>
                        <span className="text-gray-600">7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Friday Youth Group</span>
                        <span className="text-gray-600">6:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-navy text-center mb-8">Find Us</h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="font-inter text-gray-600">Interactive Map Coming Soon</p>
              <p className="font-inter text-sm text-gray-500 mt-2">
                123 Community Way, Your City, State 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
