"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import both slider components
import AyurvedicProducts from "@/components/Home/AyurvedicProducts";
import MedicalProducts from "@/components/Home/MedicalDevices";
import SurgicalProducts from "@/components/Home/SurgicalProducts";
import TestCardsProducts from "@/components/Home/TestCardsProducts";
import Antibiotics from "@/components/Home/Antibiotics";
import Antidiabetic from "@/components/Home/Antidiabetic";
import Cardiovascular from "@/components/Home/Cardiovascular";
import Analgesics from "@/components/Home/Analgesics";
import EyeEarNasal from "@/components/Home/EyeEarNasal";
import InjectableAntibiotic from "@/components/Home/InjectableAntibiotic";

export default function ProductDetails({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  // const shortDescription =
  //   product.description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="md:flex md:gap-10">
        {/* Left Side: Images */}
        <div className="md:w-1/2">
          <div className="relative w-full h-80 md:h-[300px] mb-3 border rounded overflow-hidden shadow-sm">
            <Image
              src={mainImage}
              alt={product.title}
              fill
              className="object-cover transition duration-500 ease-in-out"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(img)}
                className={`relative w-20 h-20 border rounded overflow-hidden cursor-pointer transition duration-300 ${
                  mainImage === img
                    ? "border-[#B3CB02] border-2 scale-105"
                    : "border-gray-200 hover:scale-105"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.title} ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
          <div>
            <p className="text-sm text-[#009136] mb-4">
              {product.category === "ayurvedic"
                ? "Ayurvedic & Herbal Products"
                : product.category === "medical-devices"
                ? "Medical Devices & Other Products"
                : product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
            </p>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-md text-gray-600 mb-4">{product.description}</p>

            {/* Ingredients — only for Ayurvedic */}
            {product.category === "ayurvedic" && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Ingredients:</h3>
                <p className="text-sm text-gray-700">{product.ingredient}</p>
              </div>
            )}

            {/* <div className="mb-4">
              <h3 className="text-md font-semibold mb-1">
                Price: ₹ {product.price}
              </h3>
            </div> */}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="#">
                <button className="px-6 py-3 bg-[#B3CB02] text-white font-semibold rounded transform transition hover:scale-95 hover:bg-[#007a29]">
                  Book Now
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href={`/products?category=${product.category}`}>
                <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded transform transition hover:scale-95 hover:bg-gray-300">
                  ← Back to{" "}
                  {product.category === "ayurvedic"
                    ? "Ayurvedic"
                    : "Medical Devices"}{" "}
                  Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Show slider based on category */}
      <div className="mt-10">
        {product.category === "ayurvedic" ? (
          <AyurvedicProducts />
        ) : product.category === "medical-devices" ? (
          <MedicalProducts />
        ) : product.category === "test-card" ? (
          <TestCardsProducts />
        ) : product.category === "surgical" ? (
          <SurgicalProducts />
        ) : product.category === "antibiotics" ? (
          <Antibiotics/>
        ) : product.category === "antidiabetic" ? (
          <Antidiabetic/>
        ) : product.category === "cardiovascular" ? (
          <Cardiovascular/>
        ) : product.category === "analgesics" ? (
          <Analgesics/>
        ) : product.category === "eye-ear-and-nasal-drops" ? (
          <EyeEarNasal/>
        ) : product.category === "injectable-antibiotic" ? (
          <InjectableAntibiotic/>
        ) : (
          <AllProducts />
        )}
      </div>
    </div>
  );
}
