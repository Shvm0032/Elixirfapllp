"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Divider from "../Divider";
import { categories } from "@/data/category";

export default function OurProducts() {
  return (
    <section className="py-16 px-4 bg-[#EFF5FA] relative">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Product</h2>
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
          {categories.map((cat) => (
            <SwiperSlide key={cat.slug}>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden cursor-pointer">
                  <Link href={`/products/${cat.slug}`} className="block w-full h-full">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      className="object-cover transform transition duration-500 ease-in-out hover:scale-110"
                    />
                  </Link>
                </div>

                {/* Title + Button */}
                <div className="p-4 text-center">

                  <Link href={`/products/${cat.slug}`} className="block">
                    <h3 className="text-lg font-semibold mb-3 cursor-pointer hover:text-[#009136] truncate">
                      {cat.title}
                    </h3>
                  </Link>

                  <Link
                    href={cat.buttonLink}
                    className="inline-block px-4 py-2 bg-[#009136] text-white rounded hover:bg-[#B3CB02] transition"
                  >
                    View Products
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Explore More Button */}
      <div className="mt-8 text-center">
        <Link href="/product-categories">
          <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95">
            Explore All Categories
          </button>
        </Link>
      </div>

    </section>
  );
}
