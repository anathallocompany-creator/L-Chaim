"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryShowcase from "./CategoryShowcase";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");

        console.log("status:", res.status);

        const data = await res.json();

        console.log(data);

        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadProducts();
  }, []);

  const displayedProducts = Array.isArray(products)
    ? activeCategory === "Featured"
      ? products.filter((product) => product.featured)
      : products.filter(
          (product) => product.category === activeCategory
        )
    : [];

  return (
    <section className="w-[90%] mx-auto py-6 sm:py-8 lg:py-10 px-3 sm:px-4">

      {/* Categories */}
      <CategoryShowcase
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Section Header */}
      <div className="flex items-center justify-between mt-6 sm:mt-8 lg:mt-10 mb-4 sm:mb-6">

        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {activeCategory}
          </h2>

          <p className="hidden sm:block text-gray-500 mt-1">
            Freshly baked with premium ingredients just for you.
          </p>
        </div>

        <Link
          href={`/products?category=${encodeURIComponent(activeCategory)}`}
          className="text-[#a8418b] text-sm sm:text-base font-semibold hover:underline"
        >
          See all
        </Link>

      </div>

      {/* Products */}
      <div
        key={activeCategory}
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          lg:grid-cols-4
          gap-3
          sm:gap-5
          lg:gap-8
          animate-fade
        "
      >
        {displayedProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* See All */}
      <div className="flex justify-center mt-6 sm:mt-10">
        <Link
          href={`/products?category=${encodeURIComponent(activeCategory)}`}
          className="
            inline-block
            border-2
            border-[#973965]
            hover:bg-[#8d3374]
            text-black
            hover:text-white
            px-6
            sm:px-8
            py-2.5
            sm:py-3
            rounded-full
            transition
            text-sm
            sm:text-base
          "
        >
          See All {activeCategory}
        </Link>
      </div>

    </section>
  );
}