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

export default function MedicalProducts() {
  return (
    <section className="py-16 px-4 bg-white relative">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Medical Devices & Other Product
        </h2>
        <Divider />
      </div>

      {/* Slider Section */}
      <div className="max-w-6xl mx-auto relative px-4">
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
            1280: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            0: { slidesPerView: 1, spaceBetween: 12 },
          }}
          className="relative py-6"
        >
          {/* Custom Arrows (Inside Slider) */}
          <div className="swiper-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer w-9 h-9 sm:w-10 sm:h-10 bg-[#B3CB02] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#009136] transition">
            <ChevronLeft size={20} />
          </div>

          <div className="swiper-next absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer w-9 h-9 sm:w-10 sm:h-10 bg-[#B3CB02] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#009136] transition">
            <ChevronRight size={20} />
          </div>

          {products
            .filter((product) => product.category === "medical-devices")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                  {/* Image */}
                  <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden cursor-pointer">
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
                      <h3 className="text-base sm:text-lg font-semibold mb-2 hover:text-[#009136] truncate">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-600 mb-4">
                      {product.description.length > 60
                        ? product.description.substring(0, 60) + "..."
                        : product.description}
                    </p>

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-block px-4 py-2 bg-[#009136] text-white text-sm rounded hover:bg-[#B3CB02] transition"
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
        <Link href="/products?category=medical-devices">
          <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95">
            Explore More
          </button>
        </Link>
      </div> */}
    </section>
  );
}
