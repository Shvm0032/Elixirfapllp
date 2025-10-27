"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/Assets/product-img/nutra.jpeg" 
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Contact
        </h1>
        
      </div>
    </section>
  );
}
