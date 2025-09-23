import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const usefulLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">YourCompany</h3>
            <p className="text-gray-300 leading-relaxed">
              We are dedicated to providing exceptional products and services 
              that exceed our customers' expectations. Our commitment to innovation 
              and quality has made us a trusted partner for businesses worldwide.
            </p>
            <p className="text-gray-300">
              Join thousands of satisfied customers who have chosen us as their 
              preferred solution provider.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Useful Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">info@yourcompany.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">
                  123 Business Street, Suite 100<br />
                  City, State 12345
                </span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="pt-4">
              <h5 className="text-lg font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 YourCompany. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed with ❤️ for excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}