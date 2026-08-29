
"use client";

import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails({ product }) {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="
          relative
          h-[220px]
          sm:h-[260px]
          md:h-[320px]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/hero1.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            justify-center
            items-center
            text-white
            text-center
            px-4
          "
        >
          <h1
            className="
              font-serif
              text-white
              text-xl
              sm:text-3xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              tracking-[-0.03em]
              max-w-[95%]
              sm:max-w-3xl
              line-clamp-2
            "
          >
            {product.name}
          </h1>

          <p
            className="
              mt-2
              sm:mt-3
              text-xs
              sm:text-sm
              md:text-base
              text-gray-200
            "
          >
            Home / Products / {product.category}
          </p>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}

      <ProductBreadcrumb product={product} />

      {/* ================= MAIN CONTENT ================= */}

      <section
        className="
          max-w-7xl
          mx-auto
          py-10
          sm:py-14
          md:py-20
          px-4
          sm:px-5
          md:px-6
        "
      >
        {/* PRODUCT */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            sm:gap-10
            md:gap-14
            lg:gap-20
            items-start
          "
        >
          {/* GALLERY */}
          <div className="w-full min-w-0">
            <ProductGallery product={product} />
          </div>

          {/* PRODUCT INFO */}
          <div className="w-full min-w-0">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* ================= TABS ================= */}

        <div className="mt-12 sm:mt-16 md:mt-20">
          <ProductTabs product={product} />
        </div>

        {/* ================= RELATED PRODUCTS ================= */}

        <RelatedProducts product={product} />
      </section>
    </>
  );
}

