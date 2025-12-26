"use client";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import Link from "next/link";


const allowedCategories = [
  "veterinary-bolus",
  "veterinary-injection",
  "veterinary-liquid",
  "veterinary-powder",
  "veterinary-tablet",
];

const categories = [
  { label: "All", value: "all" },
  { label: "Veterinary Bolus", value: "veterinary-bolus" },
  { label: "Veterinary Injection", value: "veterinary-injection" },
  { label: "Veterinary Liquid", value: "veterinary-liquid" },
  { label: "Veterinary Powder", value: "veterinary-powder" },
  { label: "Veterinary Tablet", value: "veterinary-tablet" },
];

const PRODUCTS_PER_PAGE = 9;

export default function VeterinaryProducts() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Filter products (sirf 3 categories + All)
  const filteredProducts = useMemo(() => {
    const baseProducts = products.filter((item) =>
      allowedCategories.includes(item.category)
    );

    if (activeCategory === "all") {
      return baseProducts;
    }

    return baseProducts.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  // 🔹 Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Veterinary Products
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-full border transition ${
                activeCategory === cat.value
                  ? "bg-[#009136] text-white"
                  : "bg-white text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {paginatedProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.images?.[0] || "/Assets/no-img.jpg"}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <h3 className="text-lg font-semibold">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-[#009136]"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-[#009136] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
