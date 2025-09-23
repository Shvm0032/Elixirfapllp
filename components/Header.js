"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Topbar - Desktop Only */}
      <div className="hidden lg:block bg-[#0AA0DD] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">info@elixirfarllp.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook
                size={18}
                className="hover:text-blue-400 cursor-pointer transition-colors"
              />
              <Twitter
                size={18}
                className="hover:text-blue-400 cursor-pointer transition-colors"
              />
              <Instagram
                size={18}
                className="hover:text-pink-400 cursor-pointer transition-colors"
              />
              <Linkedin
                size={18}
                className="hover:text-blue-600 cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 z-50 ${
          isSticky ? "fixed top-0 bg-white shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-auto">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  className="h-20 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav className="hidden md:flex space-x-8 mx-auto">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0AA0DD] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right: Button + Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Desktop Button */}
              <button
                className="bg-[#B3CB02] text-white px-4 py-2 rounded-md 
  transform transition-transform duration-300 ease-in-out 
  hover:scale-90 hover:bg-[#009136] mt-2"
              >
                Enquiry Now
              </button>

              {/* Mobile Hamburger */}
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-[#0AA0DD] p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-2 flex flex-col items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#0AA0DD] py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Button */}
              <button
                className="bg-[#B3CB02] text-white px-4 py-2 rounded-md 
  transform transition-transform duration-300 ease-in-out 
  hover:scale-90 hover:bg-[#009136] mt-2"
              >
                Enquiry Now
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
