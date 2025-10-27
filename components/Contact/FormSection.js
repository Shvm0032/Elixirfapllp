"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function FormSection() {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side: Contact Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center md:text-left">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone size={24} className="text-[#009136]" />
              <p className="text-gray-700 text-lg">+1 (555) 123-4567</p>
            </div>

            <div className="flex items-center space-x-4">
              <Mail size={24} className="text-[#009136]" />
              <p className="text-gray-700 text-lg">info@elixirfarllp.com</p>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin size={24} className="text-[#009136] mt-1" />
              <p className="text-gray-700 text-lg">
                123 Medical Street, Suite 200,
                <br />
                New Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col justify-center">
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#009136]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#009136]"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#009136]"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#009136]"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#009136] text-white font-semibold py-3 rounded-md transform transition-transform duration-200 hover:scale-95"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
