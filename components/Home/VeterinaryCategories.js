"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/category";
import Divider from "../Divider";

// Filter only veterinary categories
const vetCategories = categories.filter((cat) =>
  cat.slug.startsWith("veterinary")
);

export default function VeterinaryProducts() {
  return (
    <section className="py-16 px-4 bg-[#F7F9FC]">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-[#1a1a1a]">
          Veterinary Categories
        </h2>
       <Divider/>
      </div>

      {/* Cards */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 
  justify-center"
      >
        {vetCategories.map((item) => (
          <div
            key={item.slug}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-32">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-md font-semibold text-[#1a1a1a] mb-4">
                {item.title}
              </h3>

              <Link
                href={item.buttonLink}
                className="inline-block text-sm px-5 py-2 bg-[#009136] text-white font-medium rounded-lg
          transform transition-all duration-300 hover:scale-95"
              >
                View Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
