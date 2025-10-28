"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import Divider from "../Divider";
import { products } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AyurvedicProducts() {
  return (
    <section className="py-16 px-4 bg-[#EFF5FA] relative">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Ayurvedic & Herbal Products</h2>
        <Divider />
      </div>

      {/* Slider Container */}
      <div className="max-w-5xl mx-auto relative px-4">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-[-45px] -translate-y-1/2 z-10 cursor-pointer swiper-prev w-12 h-12 bg-[#B3CB02] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#009136] transition">
          <ChevronLeft size={24} />
        </div>

        <div className="absolute top-1/2 right-[-45px] -translate-y-1/2 z-10 cursor-pointer swiper-next w-12 h-12 bg-[#B3CB02] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#009136] transition">
          <ChevronRight size={24} />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="py-4"
        >
          {products
            .filter((product) => product.category === "ayurvedic")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden cursor-pointer">
                    <Link href={`/products/${product.slug}`}>
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
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-lg font-semibold mb-2 hover:text-[#009136] truncate">
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Explore More Button */}
      {/* <div className="mt-8 text-center">
        <Link href="/products?category=ayurvedic">
          <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95">
            Explore More
          </button>
        </Link>
      </div> */}
    </section>
  );
}
