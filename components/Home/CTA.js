"use client";

export default function CTASection() {
  return (
    <section className="bg-[#60C1E9] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Side: Heading + Description */}
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted Medicines, Trusted <span className="text-[#009136]">Care</span>
          </h2>
          <p className="text-base md:text-lg opacity-90">
            Elixir Far LLP brings you safe, effective medicines and advanced healthcare products for a healthier tomorrow.
          </p>
        </div>

        {/* Right Side: Button */}
        <div>
          <a
            href="/contact"
            className="inline-block bg-[#009136] text-white font-semibold px-8 py-3 rounded-full 
                       shadow-md transition-transform duration-300 hover:scale-90"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}
