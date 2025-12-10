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
import Antacid from "@/components/Sliders/Antacid";
import Injectable from "@/components/Sliders/Injectable";
import Antimalarial from "@/components/Sliders/Antimalarial";
import Tablets from "@/components/Sliders/Tablets";
import LiquidDrySyp from "@/components/Sliders/LiquidDrySyp";
import Ointment from "@/components/Sliders/Ointment";
import OncologyCapsules from "@/components/Sliders/OncologyCapsules";
import OncologyInjection from "@/components/Sliders/OncologyInjection";
import VetBolus from "@/components/Sliders/VetBolus";
import VetInjection from "@/components/Sliders/VetInjection";
import VetLiquid from "@/components/Sliders/VetLiquid";
import VetPowder from "@/components/Sliders/VetPowder";
import VetTablet from "@/components/Sliders/VetTablet";
import AllProducts from "@/components/Home/AllProducts";


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
                ? "EYE/EAR & NASAL DROPS"
                : product.category === "injectable-antibiotic"
                ? "INJECTABLE (ANTIBIOTIC)"
                : product.category === "tablets"
                ? "TABLETS"
                : product.category === "antacid"
                ? "ANTACID"
                : product.category === "antimalarial"
                ? "ANTIMALARIAL"
                : product.category === "liquid-dry-syp"
                ? "LIQUID/DRY SYP"
                : product.category === "ointment"
                ? "OINTMENT"
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
          <Antibiotics />
        ) : product.category === "antidiabetic" ? (
          <Antidiabetic />
        ) : product.category === "cardiovascular" ? (
          <Cardiovascular />
        ) : product.category === "analgesics" ? (
          <Analgesics />
        ) : product.category === "eye-ear-and-nasal-drops" ? (
          <EyeEarNasal />
        ) : product.category === "injectable-antibiotic" ? (
          <InjectableAntibiotic />
        ) : product.category === "injectable" ? (
          <Injectable />
        ) : product.category === "antacid" ? (
          <Antacid />
        ) : product.category === "antimalarial" ? (
          <Antimalarial />
        ) : product.category === "tablets" ? (
          <Tablets />
        ) : product.category === "liquid-dry-syp" ? (
          <LiquidDrySyp />
        ) : product.category === "ointment" ? (
          <Ointment />
        ) : product.category === "oncology-capsules" ? (
          <OncologyCapsules />
        ) : product.category === "oncology-injections" ? (
          <OncologyInjection />
        ) : product.category === "veterinary-bolus" ? (
          <VetBolus />
        ) : product.category === "veterinary-injection" ? (
          <VetInjection />
        ) : product.category === "veterinary-liquid" ? (
          <VetLiquid />
        ) : product.category === "veterinary-powder" ? (
          <VetPowder />
        ) : product.category === "veterinary-tablet" ? (
          <VetTablet />
        ) : (
          <AllProducts />
        )}
      </div>
    </div>
  );
}
