
"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedProducts({ product }) {
  const [related, setRelated] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function loadRelated() {
      try {
        const res = await fetch("/api/products");
        const products = await res.json();

        const filtered = products
          .filter(
            (item) =>
              item.category === product.category &&
              item._id !== product._id
          )
          .slice(0, 10);

        setRelated(filtered);
      } catch (err) {
        console.error(err);
      }
    }

    loadRelated();
  }, [product]);

  if (related.length === 0) return null;

  // ==============================
  // SLIDE LEFT
  // ==============================
  const slideLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  // ==============================
  // SLIDE RIGHT
  // ==============================
  const slideRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-16 sm:mt-20 md:mt-28">
      {/* ==============================
          HEADER
      ============================== */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Related Products
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            You may also like these products.
          </p>
        </div>

        {/* ==============================
            ARROWS
        ============================== */}
        <div className="flex items-center gap-2">
          {/* LEFT */}
          <button
            type="button"
            onClick={slideLeft}
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-sm
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-[#a8418b]
              hover:text-white
              hover:border-[#a8418b]
              active:scale-90
              transition-all
              duration-300
            "
            aria-label="Previous products"
          >
            <ChevronLeft
              size={20}
              strokeWidth={2}
            />
          </button>

          {/* RIGHT */}
          <button
            type="button"
            onClick={slideRight}
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-sm
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-[#a8418b]
              hover:text-white
              hover:border-[#a8418b]
              active:scale-90
              transition-all
              duration-300
            "
            aria-label="Next products"
          >
            <ChevronRight
              size={20}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* ==============================
          SLIDER
      ============================== */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="
            flex
            gap-3
            sm:gap-5
            md:gap-6
            lg:gap-8
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-4
            scrollbar-hide
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {related.map((item) => (
            <div
              key={item._id}
              className="
                flex-shrink-0
                snap-start

                w-[calc(50%-6px)]

                sm:w-[280px]

                md:w-[300px]

                lg:w-[calc(25%-24px)]
              "
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE HINT */}
      <div className="flex justify-center mt-3 sm:hidden">
        <span className="text-xs text-gray-400">
          Swipe or use the arrows to browse
        </span>
      </div>
    </section>
  );
}

