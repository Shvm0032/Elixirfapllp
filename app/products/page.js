"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; 
import { products } from "@/data/products";
import Divider from "@/components/Divider";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); 

  // Filter products by category if one is selected
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  // Dynamic title based on category
  const title = category
    ? category === "ayurvedic"
      ? "Ayurvedic & Herbal Products"
      : "Medical Devices & Other Products"
    : "All Products";

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <Divider/>
      
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
                   
                  {/* <p className="text-lg font-semibold">₹ {product.price}</p> */}
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
    </section>
  );
}
