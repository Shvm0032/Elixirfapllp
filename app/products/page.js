"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import Divider from "@/components/Divider";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Filter products by category if one is selected
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Get products for current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Dynamic title
  const title = category
    ? category === "ayurvedic"
      ? "Ayurvedic & Herbal Products"
      : category === "medical-devices"
      ? "Medical Devices & Other Products"
      : category === "test-card"
      ? "Test Cards And Test Strips"
      : category === "surgical"
      ? "Surgical Products"
      : category === "antibiotics"
      ? "Antibiotics"
      : category === "antidiabetic"
      ? "Anti Diabetic"
      : category === "cardiovascular"
      ? "Cardio Vascular"
      : category === "analgesics"
      ? "Analgesics"
      : category === "eye-ear-and-nasal-drops"
      ? "Eye/Ear & Nasal Drops"
      : category === "injectable-antibiotic"
      ? "Injectable (Antibiotic)"
      : category === "injectable"
      ? "Injectable"
      : category === "tablets"
      ? "Tablets"
      : category === "antacid"
      ? "Antacid"
      : category === "antimalarial"
      ? "Antimalarial"
      : category === "liquid-dry-syp"
      ? "Liquid/Dry Syp"
      : category === "ointment"
      ? "Ointment"
      : category === "oncology-capsules"
      ? "Oncology Capsules"
      : category === "oncology-injections"
      ? "Oncology Injections"
      : category === "veterinary-bolus"
      ? "Veterinary Bolus"
      : category === "veterinary-injection"
      ? "Veterinary Injection"
      : category === "veterinary-liquid"
      ? "Veterinary Liquid"
      : category === "veterinary-powder"
      ? "Veterinary Powder"
      : category === "veterinary-tablet"
      ? "Veterinary Tablet"
      : "All Products"
    : "All Products";

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <Divider />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Product Image */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-content"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col justify-between h-60">
                <div>
                  <p className="text-sm text-[#B3CB02] mb-4">
                    {product.category === "ayurvedic"
                      ? "Ayurvedic & Herbal Products"
                      : product.category === "medical-devices"
                      ? "Medical Devices & Other Products"
                      : product.category === "surgical"
                      ? "Surgical Products"
                      : product.category === "test-card"
                      ? "Test Cards And Test Strips"
                      : product.category === "eye-ear-and-nasal-drops"
                      ? "Eye/Ear & Nasal Drops"
                      : product.category === "injectable-antibiotic"
                      ? "Injectable (Antibiotic)"
                      : product.category === "tablets"
                      ? "Tablets"
                      : product.category === "antacid"
                      ? "Antacid"
                      : product.category === "antimalarial"
                      ? "Antimalarial"
                      : product.category === "liquid-dry-syp"
                      ? "Liquid/Dry Syp"
                      : product.category === "oncology-capsules"
                      ? "Oncology Capsules"
                      : product.category === "oncology-injections"
                      ? "Oncology Injections"
                      : product.category === "veterinary-bolus"
                      ? "Veterinary Bolus"
                      : product.category === "veterinary-injection"
                      ? "Veterinary Injection"
                      : product.category === "veterinary-liquid"
                      ? "Veterinary Liquid"
                      : product.category === "veterinary-powder"
                      ? "Veterinary Powder"
                      : product.category === "veterinary-tablet"
                      ? "Veterinary Tablet"
                      : product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                  </p>

                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    {product.description.length > 60
                      ? product.description.substring(0, 60) + "..."
                      : product.description}
                  </p>
                </div>

                {/* View Product Button */}
                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="mt-4 inline-block px-4 py-2 bg-[#009136] text-white rounded hover:bg-[#B3CB02] transition text-center"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No products found for this category.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-[#009136] text-white"
                  : "bg-white text-[#009136] border border-[#009136]"
              } hover:bg-[#B3CB02] hover:text-white transition`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
