"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const usefulLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Product Category", href: "#" },
  ];

  const categories = [
    { name: "Ayurvedic & Herbal Products", href: "/products?category=ayurvedic" },
    { name: "Medical Devices & Other Product", href: "/products?category=medical-devices" },
    { name: "Surgical Products", href: "/products?category=surgical" },
    { name: "Test Cards & Test Strips", href: "/products?category=test-card" },
  ];

  return (
    <footer id="contact" className="bg-white text-gray-700 border-t-2 relative">
      {/* Background Overlay Image */}
      <div
        className="absolute bottom-10 right-0 w-40 h-40 bg-no-repeat bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/Assets/logos/elixir-logo-main.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-left">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  className="h-[100px] w-auto cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm text-justify sm:text-left">
              Elixir Far LLP offers trusted medical solutions ensuring health,
              safety, and care.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
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
          <div className="space-y-4 text-left">
            <h4 className="text-2xl font-semibold">Useful Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {usefulLinks.map((link, index) =>
                link.name === "Product Category" ? (
                  <div key={index} className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center text-gray-700 hover:text-[#0AA0DD] transition-colors duration-200"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {categories.map((cat, i) => (
                          <Link
                            key={i}
                            href={cat.href}
                            className="block text-sm text-gray-600 hover:text-[#0AA0DD] transition-colors duration-200"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-700 hover:text-[#0AA0DD] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 text-left">
            <h4 className="text-2xl font-semibold">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#009136]" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#009136]" />
                <span className="text-gray-700">info@elixirllp.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#009136] mt-1" />
                <span className="text-gray-700">
                  Address
                  <br />
                  123 Business Avenue, Mumbai, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0AA0DD] mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-white text-sm text-center">
            © 2025 Elixir Far LLP. All Rights Reserved. | Designed & Developed by
            Rank Mantra
          </p>
        </div>
      </div>
    </footer>
  );
}
