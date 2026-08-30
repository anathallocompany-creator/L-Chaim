
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function ChildrenCakesSection() {
  const [childrenCakes, setChildrenCakes] = useState([]);

  useEffect(() => {
    const loadChildrenCakes = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        const filteredProducts = data
          .filter((product) => product.category === "Children Cakes")
          .slice(0, 4);

        setChildrenCakes(filteredProducts);
      } catch (error) {
        console.error("Error loading children's cakes:", error);
      }
    };

    loadChildrenCakes();
  }, []);

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
        py-10
        sm:py-12
        md:py-16
        lg:py-20
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
          Kids' Favorites
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
            leading-tight
          `}
        >
          Children's Cakes
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
          Delight your little ones with colorful, fun-themed cakes crafted
          for birthdays, school celebrations, and unforgettable moments.
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
        {childrenCakes.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* View All */}
      <div
        className="
          text-center
          mt-8
          sm:mt-9
          md:mt-10
          lg:mt-12
        "
      >
        <Link
          href="/products?category=Children%20Cakes"
          className="
            inline-block
            border-2
            sm:border-3
            border-[#973965]
            hover:bg-[#8d3374]
            text-black
            hover:text-white
            px-5
            sm:px-6
            md:px-8
            py-2
            sm:py-2.5
            md:py-3
            text-xs
            sm:text-sm
            md:text-base
            font-semibold
            rounded-full
            transition
          "
        >
          View More
        </Link>
      </div>
    </section>
  );
}

