
"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Divider from "../Divider";
import { products } from "@/data/products";

export default function VetInjection() {
  return (
    <section className="py-16 px-4 bg-white relative">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Veterinary Injection</h2>
        <Divider />
      </div>

      {/* Swiper Slider */}
      <div className="max-w-5xl mx-auto relative">
        {/* Custom Arrows */}
        <div className="absolute top-1/2 -left-6 z-50 transform -translate-y-1/2">
          <div className="swiper-button-prev-custom w-10 h-10 bg-[#B3CB02] text-white rounded-full flex items-center justify-center hover:bg-[#009136] cursor-pointer shadow-lg">
            <ChevronLeft size={20} />
          </div>
        </div>

        <div className="absolute top-1/2 -right-6 z-50 transform -translate-y-1/2">
          <div className="swiper-button-next-custom w-10 h-10 bg-[#B3CB02] text-white rounded-full flex items-center justify-center hover:bg-[#009136] cursor-pointer shadow-lg">
            <ChevronRight size={20} />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          loop
          className="px-6"
        >
          {products
            .filter((product) => product.category === "veterinary-injection")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden cursor-pointer">
                    <Link
                      href={`/products/${product.slug}`}
                      className="block w-full h-full"
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover transform transition duration-500 hover:scale-110"
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
                      href={`/products/${product.slug}`}
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
      {/* <div className="mt-10 text-center">
        <Link href="/products?category=surgical">
          <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95">
            Explore More
          </button>
        </Link>
      </div> */}
    </section>
  );
}
