"use client";

import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  // Debug logs
  console.log("Cart item:", item);
  console.log("Cart image:", item.image);

  // Handle both string and object image formats
  const imageSrc =
    typeof item.image === "string"
      ? item.image
      : item.image?.url || null;

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-5
        flex
        gap-6
        items-center
        hover:shadow-md
        transition
      "
    >
      {/* Image */}
      <div
        className="
          w-32
          h-32
          rounded-xl
          overflow-hidden
          bg-gray-100
          shrink-0
          flex
          items-center
          justify-center
        "
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={item.name}
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-xs text-gray-400 text-center">
            No Image
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900">
          {item.name}
        </h2>

        <p className="text-[#222222] font-bold text-lg mt-2">
          ₦{item.price.toLocaleString()}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={() => dispatch(decreaseQuantity(item._id))}
            className="
              w-9
              h-9
              rounded-full
              border
              hover:bg-[#8e3474]
            "
          >
            <Minus size={16} className="mx-auto" />
          </button>

          <span className="font-semibold min-w-8 text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQuantity(item._id))}
            className="
              w-9
              h-9
              rounded-full
              bg-[#363636]
              text-white
              hover:bg-[#8e3474]
            "
          >
            <Plus size={16} className="mx-auto" />
          </button>
        </div>
      </div>

      {/* Delete */}
      <button
        onClick={() => dispatch(removeFromCart(item._id))}
        className="
          text-red-400
          hover:text-red-500
          transition
        "
      >
        <Trash2 size={22} />
      </button>
    </div>
  );
}