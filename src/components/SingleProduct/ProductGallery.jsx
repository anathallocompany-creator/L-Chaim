
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ product }) {
  const [image, setImage] = useState(
    product.images?.[0]?.url ||
      product.images?.[0] ||
      product.image?.url ||
      product.image
  );

  const images = product.images?.length
    ? product.images
    : [product.image];

  return (
    <div className="w-full min-w-0">

      {/* ================= MOBILE ================= */}

      <div className="flex flex-col gap-4 sm:hidden">

        {/* Main Image */}
        <div
          className="
            w-full
            bg-gray-50
            rounded-xl
            overflow-hidden
            flex
            items-center
            justify-center
          "
        >
          <Image
            src={image}
            alt={product.name}
            width={780}
            height={750}
            className="
              w-full
              h-auto
              max-h-[430px]
              object-contain
            "
          />
        </div>

        {/* Mobile Thumbnails */}
        <div
          className="
            flex
            gap-3
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          {images.map((img, index) => {
            const imageUrl = img?.url || img;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setImage(imageUrl)}
                className={`
                  shrink-0
                  overflow-hidden
                  rounded-md
                  border-2
                  transition
                  ${
                    image === imageUrl
                      ? "border-[#a8418b]"
                      : "border-gray-200"
                  }
                `}
              >
                <Image
                  src={imageUrl}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="
                    w-16
                    h-16
                    object-cover
                  "
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= TABLET / DESKTOP ================= */}

      <div className="hidden sm:flex gap-4 md:gap-6">

        {/* Thumbnails */}
        <div
          className="
            flex
            flex-col
            gap-3
            md:gap-5
            shrink-0
          "
        >
          {images.map((img, index) => {
            const imageUrl = img?.url || img;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setImage(imageUrl)}
                className={`
                  overflow-hidden
                  rounded-md
                  border-2
                  transition
                  ${
                    image === imageUrl
                      ? "border-[#a8418b]"
                      : "border-gray-200"
                  }
                `}
              >
                <Image
                  src={imageUrl}
                  alt={`${product.name} ${index + 1}`}
                  width={90}
                  height={90}
                  className="
                    w-16
                    h-16
                    md:w-20
                    md:h-20
                    object-cover
                  "
                />
              </button>
            );
          })}
        </div>

        {/* Main Image */}
        <div
          className="
            flex
            items-center
            justify-center
            flex-1
            min-w-0
            bg-gray-50
            rounded-xl
            overflow-hidden
          "
        >
          <Image
            src={image}
            alt={product.name}
            width={780}
            height={750}
            className="
              w-full
              max-w-[590px]
              h-auto
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
}

