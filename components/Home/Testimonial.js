"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Divider from "../Divider";
import { Star } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Aman Verma",
      designation: "Student",
      comment:
        "Mahatma Gandhi International School has one of the best infrastructure and environment for holistic education.",
      rating: 5,
      color: "bg-yellow-100",
    },
    {
      name: "Priya Sharma",
      designation: "Parent",
      comment:
        "The teachers are dedicated and genuinely care about each student’s growth. Highly recommended!",
      rating: 4,
      color: "bg-blue-100",
    },
    {
      name: "Rahul Mehta",
      designation: "Alumni",
      comment:
        "My experience here shaped my future and gave me lifelong memories. Great atmosphere!",
      rating: 5,
      color: "bg-green-100",
    },
    {
      name: "Neha Gupta",
      designation: "Teacher",
      comment:
        "A perfect place to inspire young minds. Excellent leadership and collaborative environment.",
      rating: 4,
      color: "bg-pink-100",
    },
  ];

  return (
    <section className="py-16 text-center bg-[#EFF5FA]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Testimonials
      </h2>

      {/* Divider */}
      <Divider />

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${item.color} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-[300px] flex flex-col justify-between p-6`}
              >
                {/* Rating */}
                <div className="flex justify-center mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-sm md:text-base flex-1 italic">
                  “{item.comment}”
                </p>

                {/* Name & Designation */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
