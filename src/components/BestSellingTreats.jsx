
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const tabs = [
  "Chef's Selection",
  "Luxury Bakes",
  "Exquisite Treats",
];

export default function BestSellingTreats() {
  const [activeTab, setActiveTab] = useState("Chef's Selection");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      if (activeTab === "Chef's Selection") {
        return product.chefsSelection;
      }

      if (activeTab === "Luxury Bakes") {
        return product.luxuryBakes;
      }

      if (activeTab === "Exquisite Treats") {
        return product.exquisiteTreats;
      }

      return false;
    })
    .slice(0, 4);

  return (
    <section
      className="
        w-full
        max-w-[90%]
        mx-auto
        px-3
        sm:px-4
        md:px-6
        lg:px-8
        py-8
        sm:py-10
        md:py-12
        lg:py-16
      "
    >
      {/* Heading */}
      <div
        className="
          text-center
          mb-7
          sm:mb-8
          md:mb-10
          lg:mb-12
        "
      >
        <span
          className="
            uppercase
            tracking-[3px]
            sm:tracking-[4px]
            md:tracking-[5px]
            text-[#a8418b]
            text-[10px]
            sm:text-xs
            md:text-sm
            font-semibold
          "
        >
          Premium Selection
        </span>

        <h2
          className={`
            ${greatVibes.className}
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            animate-title
            font-bold
            mt-2
            sm:mt-3
            md:mt-4
            leading-tight
          `}
        >
          Our Finest Creations
        </h2>

        <p
          className="
            text-gray-500
            text-xs
            sm:text-sm
            md:text-base
            mt-2
            max-w-xl
            mx-auto
            px-4
          "
        >
          Beautifully crafted cakes and pastries for every celebration.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="
          w-full
          overflow-x-auto
          scrollbar-hide
          mb-7
          sm:mb-9
          md:mb-12
        "
      >
        <div
          className="
            flex
            justify-start
            sm:justify-center
            gap-5
            sm:gap-6
            md:gap-8
            min-w-max
            px-2
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                uppercase
                text-[10px]
                sm:text-xs
                md:text-sm
                font-semibold
                pb-1.5
                sm:pb-2
                whitespace-nowrap
                transition
                ${
                  activeTab === tab
                    ? "text-[#a8418b] border-b-2 border-[#a8418b]"
                    : "text-gray-500 hover:text-[#a8418b]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div
        key={activeTab}
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-3
          sm:gap-4
          md:gap-5
          lg:gap-8
          animate-fade
        "
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No products available in this collection.
        </div>
      )}
    </section>
  );
}

