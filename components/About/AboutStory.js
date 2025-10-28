"use client";

import Image from "next/image";
import Divider from "../Divider";

export default function AboutStory() {
  return (
    <section className="py-16 bg-[#EFF5FA] px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-5 text-center">
        Our Story
      </h2>
      <Divider/>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            At <span className="font-semibold">Elixir LLP</span>, we believe true wellness is
            achieved when science and nature work together. Founded with a vision to make healthcare
            more accessible, holistic, and reliable, we combine advanced{" "}
            <span className="font-semibold">medical devices</span> with the pure power of{" "}
            <span className="font-semibold">Ayurvedic formulations</span> to promote complete wellbeing.
          </p>
          <p className="text-gray-600 text-base md:text-lg text-justify leading-relaxed mt-4">
            Our journey began with a simple idea — to bridge the gap between traditional healing and
            modern innovation. Today, our products empower individuals and professionals alike to monitor,
            manage, and improve health with confidence.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/Assets/product-img/Food.jpeg" 
            alt="Our Story Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
