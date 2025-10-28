"use client";

import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/Assets/about/cta-bg.jpg" // apni image ka path change karein
        alt="Call to Action Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Ready to Experience Holistic Wellness?
        </h2>
        <p className="text-white text-base md:text-lg mt-4 opacity-90 max-w-2xl mx-auto">
          Discover the power of Ayurveda and modern technology — all in one place.
        </p>

        {/* Button */}
        <Link
          href="/products"
          className="inline-block mt-6 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition duration-300 hover:bg-black hover:text-white"
        >
          Explore Our Products
        </Link>
      </div>
    </section>
  );
}
