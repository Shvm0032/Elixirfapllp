"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/Assets/product-img/Apis.jpeg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Heading Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Empowering Health Through Technology and Tradition
        </h1>
        <p className="text-white text-base md:text-lg mt-3 opacity-90">
          Delivering Health, Naturally and Scientifically
        </p>
      </div>
    </section>
  );
}
