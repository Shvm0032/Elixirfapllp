"use client";
import Divider from "../Divider";

export default function Accredition() {
  const cards = [
    { title: "ISO 9001:2015", image: "/Assets/home/iso-image.webp" },
    { title: "WHO GMP", image: "/Assets/home/who-certificate.webp" },
    { title: "HACCP Certified", image: "/Assets/home/Haccp.webp" },
    { title: "FSSAI Certified", image: "/Assets/home/fssai-certificate.webp" },
    { title: "Member of FIEO", image: "/Assets/home/FIEO.webp" },
    { title: "FDA Certified", image: "/Assets/home/fda.webp" },
  ];

  return (
    <section
      className="relative py-16 bg-no-repeat bg-right bg-contain text-center"
      style={{ backgroundImage: "url('/Assets/logos/elixir-logo-main.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EDF4FA]/90"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">
          Accreditations
        </h2>

        {/* Divider */}
        <Divider />

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200  overflow-hidden bg-white/90 backdrop-blur-sm 
                         shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                         transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-auto h-auto overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-content"
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
