
import { Link } from 'react-router-dom';
import { Church, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Giving', path: '/giving' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-gold" />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-lg leading-tight">Grace Community</span>
                <span className="font-inter text-sm text-gray-300">Church</span>
              </div>
            </div>
            <p className="font-inter text-gray-300 text-sm leading-relaxed">
              A place where everyone belongs, hope is found, and lives are transformed through God's love.
            </p>
            <div className="pt-4">
              <p className="font-inter text-gold italic">
                "Love one another as I have loved you." - John 13:34
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-inter text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <div className="font-inter text-gray-300 text-sm">
                  <p>123 Community Way</p>
                  <p>Your City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <a 
                  href="mailto:hello@gracecommunity.org" 
                  className="font-inter text-gray-300 text-sm hover:text-gold transition-colors duration-300"
                >
                  hello@gracecommunity.org
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-6">
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <p className="font-inter text-gray-400 text-sm">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-inter text-gray-400 text-sm">
            © {currentYear} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
