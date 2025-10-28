"use client";
import Divider from "../Divider";

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-5 text-center">
        Mission & Vision
      </h2>
      <Divider/>

      {/* Card Layout */}
      <div className="grid md:grid-cols-2 mt-5 gap-8">
        {/* Mission Card */}
        <div className="bg-[#36f07a] p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            To provide safe, effective, and innovative healthcare solutions that integrate modern
            science with the ancient wisdom of Ayurveda.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#d5e845] p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            To become a trusted global brand known for delivering quality health products that inspire
            natural healing and long-term wellness.
          </p>
        </div>
      </div>
    </section>
  );
}
