
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Great_Vibes } from "next/font/google";
import DoubleBanner from "./DoubleBanner";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function DessertsSection() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const loadDesserts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        const filteredDesserts = data
          .filter((product) => product.category === "dessert")
          .slice(0, 4);

        setDesserts(filteredDesserts);
      } catch (error) {
        console.error("Error loading desserts:", error);
      }
    };

    loadDesserts();
  }, []);

  return (
    <section
      className="
        w-full
        max-w-7xl
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
          sm:mb-9
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
          Sweet Delights
        </span>

        <h2
          className={`
            ${greatVibes.className}
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            mt-2
            sm:mt-3
            md:mt-4
            leading-tight
          `}
        >
          Delicious Desserts
        </h2>

        <p
          className="
            text-gray-500
            text-xs
            sm:text-sm
            md:text-base
            mt-2
            sm:mt-3
            max-w-xl
            md:max-w-2xl
            mx-auto
            px-3
            sm:px-4
            leading-relaxed
          "
        >
          Indulge in our handcrafted desserts, made fresh with premium
          ingredients to satisfy every sweet craving.
        </p>
      </div>

      {/* Products */}
      <div
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
        "
      >
        {desserts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* Banner */}
      <div
        className="
          mt-8
          sm:mt-10
          md:mt-12
          lg:mt-16
        "
      >
        <DoubleBanner />
      </div>
    </section>
  );
}

