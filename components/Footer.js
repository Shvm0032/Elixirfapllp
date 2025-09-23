import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const usefulLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
  ];

  return (
    <footer id="contact" className="bg-white text-gray-700 border-t-2 relative">
      {/* Background Overlay Image */}
      <div
        className="absolute bottom-10 right-0 w-40 h-40 bg-no-repeat bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/Assets/logos/elixir-logo-main.png')" }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  className="h-[100px] w-auto cursor-pointer mx-auto md:mx-0"
                />
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              Elixir Far LLP offers trusted medical solutions ensuring health,
              safety, and care.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                href="#"
                className="bg-[#0AA0DD] text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-[#009136] text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-[#B3CB02] text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Useful Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-[#0AA0DD] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={18} className="text-[#009136]" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={18} className="text-[#009136]" />
                <span className="text-gray-700">info@yourcompany.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={18} className="text-[#009136]" />
                <span className="text-gray-700">
                  123 Business Street, Suite 100
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0AA0DD] mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center">
            <p className="text-white text-sm text-center">
              © 2025 Elixir Far LLP. All Rights Reserved. | Designed & Developed
              by Rank Mantra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
