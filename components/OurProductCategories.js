"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";
import { categories } from "@/data/category";

export default function OurProductCategories() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categories.slice(startIndex, startIndex + itemsPerPage);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="py-16 px-4 bg-[#EFF5FA]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Our Product Categories</h2>
        <Divider />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((cat) => (
          <div
            key={cat.slug}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title + Button */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold mb-3 truncate">
                {cat.title}
              </h3>

              <Link href={cat.buttonLink}>
                <button className="px-5 py-2 bg-[#009136] text-white rounded-lg transition transform hover:scale-95 hover:bg-[#B3CB02]">
                  View Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-lg font-medium ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#009136] text-white hover:bg-[#B3CB02]"
          }`}
        >
          Previous
        </button>

        <span className="font-semibold text-lg">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-lg font-medium ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#009136] text-white hover:bg-[#B3CB02]"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
