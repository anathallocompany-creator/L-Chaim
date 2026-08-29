"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Chocolate Cake",
    image: "/chocolatecake.webp",
    oldPrice: "₦25,000",
    price: "₦20,000",
  },
  {
    id: 2,
    name: "Strawberry Cake",
    image: "/strawberrycake.webp",
    oldPrice: "₦18,000",
    price: "₦15,000",
  },
  {
    id: 3,
    name: "Cupcake Box",
    image: "/cat4.png",
    oldPrice: "₦12,000",
    price: "₦10,000",
  },
  {
    id: 4,
    name: "Croissant",
    image: "/croissant.webp",
    oldPrice: "₦5,000",
    price: "₦4,000",
  },
];

export default function HotProducts() {
  return (
    <div className="bg-[#1d1d1d] rounded-lg p-3 sm:p-4 text-white shadow-lg">

      <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b border-gray-700 pb-2">
        Hot Products
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-3 lg:gap-0">

        {products.map((product) => (
          <div
            key={product.id}
            className="
              flex
              items-center
              gap-2
              lg:gap-3
              border
              border-gray-700
              rounded-md
              p-1.5
              lg:p-2
              hover:border-[#a8418b]
              transition-all
              duration-300
              cursor-pointer
              min-w-0
            "
          >

            {/* Image */}
            <div
              className="
                relative
                w-10
                h-10
                sm:w-12
                sm:h-12
                lg:w-14
                lg:h-14
                rounded
                overflow-hidden
                flex-shrink-0
                bg-gray-800
              "
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">

              <h3 className="text-[11px] sm:text-xs lg:text-sm font-medium truncate">
                {product.name}
              </h3>

              <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 line-through">
                {product.oldPrice}
              </p>

              <p className="text-[#f59e0b] font-bold text-[11px] sm:text-xs lg:text-sm">
                {product.price}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}