"use client";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "../Divider";
import { products } from "@/data/products";

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-[-50px] z-50 cursor-pointer w-12 h-12 bg-[#B3CB02] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#009136] transition"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-[-50px] z-50 cursor-pointer w-12 h-12 bg-[#B3CB02] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#009136] transition"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
}

export default function AyurvedicProducts() {
  const settings = {
    infinite: true, // infinite loop
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // auto slide
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-16 px-4 bg-[#EFF5FA] relative">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Ayurvedic & Herbal Products</h2>
        <Divider />
      </div>

      <div className="max-w-5xl mx-auto relative px-2">
        <Slider {...settings}>
          {products.filter((product) => product.category === "ayurvedic")
            .map((product) => (
              <div key={product.id} className="px-3">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded cursor-pointer">
                    <Link
                      href={`/products/${product.slug}`}
                      className="block w-full h-full"
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover transform transition duration-500 ease-in-out hover:scale-110"
                      />
                    </Link>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <Link href={`/products/${product.slug}`} className="block">
                      <h3 className="text-lg font-semibold mb-2 cursor-pointer hover:text-[#009136] truncate">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-600 mb-4">
                      {product.description.length > 60
                        ? product.description.substring(0, 60) + "..."
                        : product.description}
                    </p>

                    <Link
                      href={`/products/${product.category}/${product.slug}`}
                      className="inline-block px-4 py-2 bg-[#009136] text-white rounded hover:bg-[#B3CB02] transition"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      {/* Explore More Button */}
      <div className="mt-8 text-center">
        <Link href="/products?category=ayurvedic">
          <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
}
