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
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  


  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const medicines = [
  { name: "Antibiotics", href: "/products?category=antibiotics" },
  { name: "Antidiabetics", href: "/products?category=antidiabetic" },
  { name: "Cardio-Vascular", href: "/products?category=cardiovascular" },
  { name: "Analgesics", href: "/products?category=analgesics" },
  { name: "EYE/EAR & NASAL DROPS", href: "/products?category=eye-ear-and-nasal-drops" },
  { name: "INJECTABLE (ANTIBIOTIC)", href: "/products?category=injectable-antibiotic" },
  { name: "TABLETS", href: "/products?category=tablets" },
  { name: "ANTACID", href: "/products?category=antacid" },
  { name: "ANTIMALARIAL", href: "/products?category=antimalarial" },
  { name: "LIQUID/DRY SYP.", href: "/products?category=liquid-dry-syp" },
  { name: "OINTMENT", href: "/products?category=ointment" },
];


  const navigation = [
    // { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Products", href: "/products" },
    {
      name: "Ayurvedic & Herbal Products",
      href: "/products?category=ayurvedic",
    },
    {
      name: "Medical & Other Product",
      href: "/products?category=medical-devices",
    },
    { name: "Surgical Products", href: "/products?category=surgical" },
    { name: "Test Cards & Test Strips", href: "/products?category=test-card" },
    { name: "Medicines", href: "#" },
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
          isSticky
            ? "fixed top-0 bg-white shadow-lg"
            : "bg-white border shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <nav className="hidden md:flex gap-[4px] mx-auto relative">
              {navigation.map((item) =>
                item.name === "Medicines" ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-[#0AA0DD] px-3 py-2 text-sm font-medium transition-colors duration-200">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-0 py-5 px-3 w-52 bg-white shadow-lg border rounded-md z-50">
                        <Link
                          href="/products?category=antibiotics"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Antibiotics
                        </Link>
                        <Link
                          href="/products?category=antidiabetic"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Antidiabatics
                        </Link>
                        <Link
                          href="/products?category=cardiovascular"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Cardio-Vascular
                        </Link>
                        <Link
                          href="/products?category=analgesics"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Analgesics
                        </Link>
                        <Link
                          href="/products?category=eye-ear-and-nasal-drops"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Eye/Ear & Nasal Drops
                        </Link>
                        <Link
                          href="/products?category=injectable-antibiotic"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Injectable(Antibiotic)
                        </Link>
                        <Link
                          href="/products?category=injectable"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                         Injectable
                        </Link>
                        <Link
                          href="/products?category=tablets"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                          Tablets
                        </Link>
                        <Link
                          href="/products?category=antacid"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                         Antacid
                        </Link>
                        <Link
                          href="/products?category=antimalarial"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                         Antimalarial
                        </Link>
                        <Link
                          href="/products?category=liquid-dry-syp"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                         Liquid/Dry Syp.
                        </Link>
                        <Link
                          href="/products?category=ointment"
                          className="block text-sm px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-[#0AA0DD]"
                        >
                         Ointment
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#0AA0DD] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>

            {/* Right: Button + Hamburger */}
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <button
                  className="bg-[#B3CB02] text-white px-4 py-2 rounded-md 
        transform transition-transform duration-300 ease-in-out 
        hover:scale-90 hover:bg-[#009136] mt-2"
                >
                  Enquiry Now
                </button>
              </Link>

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
            <nav className="px-4 py-4 space-y-2 flex flex-col items-left">
              {navigation.map((item) =>
                item.name === "Products" ? (
                  <div key={item.name} className="w-full text-center">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-gray-700 hover:text-[#0AA0DD] py-2 text-base font-medium flex justify-center items-center"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`ml-2 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="flex flex-col space-y-2 mt-1">
                        <Link
                          href="/products/ayurvedic"
                          className="block text-gray-600 hover:text-[#0AA0DD] py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Ayurvedic Products
                        </Link>
                        <Link
                          href="/products/medical-devices"
                          className="block text-gray-600 hover:text-[#0AA0DD] py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Medical Devices
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-[#0AA0DD] py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}

              <Link href="/contact">
                <button
                  className="bg-[#B3CB02] text-white px-4 py-2 rounded-md 
        transform transition-transform duration-300 ease-in-out 
        hover:scale-90 hover:bg-[#009136] mt-2"
                >
                  Enquiry Now
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
