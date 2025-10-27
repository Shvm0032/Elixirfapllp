"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Divider from "../Divider";
import { products } from "@/data/products";

export default function AllProducts() {
  return (
    <section className="py-16 px-4 bg-[#EFF5FA] relative">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Products</h2>
        <Divider />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
          <button className="swiper-button-prev-custom bg-[#B3CB02] text-white p-3 rounded-full hover:bg-[#009136] transition">
            <ChevronLeft size={22} />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
          <button className="swiper-button-next-custom bg-[#B3CB02] text-white p-3 rounded-full hover:bg-[#009136] transition">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          speed={800}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-6"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden cursor-pointer">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
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
                <div className="p-4 text-center sm:text-left">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="block"
                  >
                    <h3 className="text-lg font-semibold mb-2 cursor-pointer hover:text-[#009136] truncate">
                      {product.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-gray-600 mb-4">
                    {product.description.length > 60
                      ? product.description.substring(0, 60) + "..."
                      : product.description}
                  </p>

                  <p className="text-sm text-[#B3CB02] mb-4">
                    {product.category === "ayurvedic"
                      ? "Ayurvedic & Herbal Products"
                      : product.category === "medical-devices"
                      ? "Medical Devices & Other Products"
                      : product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
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
      <div className="mt-8 text-center">
        <Link href="/products">
          <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
}
