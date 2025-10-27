"use client";

import Link from "next/link";

export default function FeatureSection() {
  const cards = [
    {
      title: "Ayurvedic & Herbal Products",
      button: "View >",
      bg: "bg-[#0AA0DD]",
      buttonBg: "bg-[#009136]",
      link: "/products?category=ayurvedic",
    },
    {
      title: "Medical Devices & Other Product",
      button: "View >",
      bg: "bg-[#009136]",
      buttonBg: "bg-[#0AA0DD]",
      link: "products?category=medical-devices",
    },
    {
      title: "Surgical Products",
      button: "View >",
      bg: "bg-[#B3CB02]",
      buttonBg: "bg-[#009136]",
      link: "/products?category=surgical",
    },
    {
      title: "Test Cards & Test Strips",
      button: "View >",
      bg: "bg-[#009136]",
      buttonBg: "bg-[#0AA0DD]",
      link: "/products?category=test-card",
    },
  ];

  return (
    <section className="relative">
      {/* Background Image Section */}
      <div className="w-full h-[500px] relative flex flex-col justify-center items-center text-center px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Assets/home-img/elixir-1.jpg')" }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Trusted Medical Solutions for a Healthier Tomorrow
          </h2>
          <h3 className="text-xl md:text-2xl text-white mb-4">
            Quality Medicines Delivered with Care and Reliability
          </h3>
          <p className="text-white">
            At Elixir Far LLP, we are committed to providing safe and effective
            medical solutions. Our wide range of pharmaceutical products ensures
            the health and well-being of every individual. Experience trusted
            service, timely delivery, and exceptional care with us.
          </p>
        </div>
      </div>

      {/* Overlay Cards Section */}
      <div className="relative w-full max-w-5xl mx-auto px-4 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-0 rounded-lg">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between items-center p-5 hover:shadow-xl transition-shadow duration-300 ${card.bg}`}
            >
              <h4 className="text-xl text-white font-semibold mb-4 text-center">
                {card.title}
              </h4>

              {/* Button with Link */}
              <Link href={card.link}>
                <button
                  className={`px-4 py-2 rounded-full mt-10 text-white ${card.buttonBg} hover:scale-95 transition-transform duration-200`}
                >
                  {card.button}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
