"use client";

import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { useState } from "react";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const [removing, setRemoving] = useState(false);

  // =========================================================
  // HANDLE REMOVE
  // =========================================================

  const handleRemove = async () => {
    if (removing) return;

    try {
      setRemoving(true);

      const res = await fetch(`/api/cart/${item._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Remove cart error:", data);

        alert(
          data.message || "Failed to remove item from cart."
        );

        return;
      }

      // =====================================================
      // DATABASE DELETE SUCCESSFUL
      // NOW REMOVE FROM REDUX
      // =====================================================

      dispatch(removeFromCart(item._id));
    } catch (error) {
      console.error("Remove cart item error:", error);

      alert(
        "Something went wrong while removing this item."
      );
    } finally {
      setRemoving(false);
    }
  };

  // =========================================================
  // HANDLE IMAGE
  // =========================================================

  const imageSrc =
    typeof item.image === "string"
      ? item.image
      : item.image?.url || null;

  return (
    <div
      className="
        w-full
        bg-white
        rounded-xl
        sm:rounded-2xl
        border
        border-gray-100
        shadow-sm
        p-3
        sm:p-4
        md:p-5
        flex
        gap-3
        sm:gap-4
        md:gap-6
        items-center
        hover:shadow-md
        transition-all
        duration-300
      "
    >
      {/* =========================
          PRODUCT IMAGE
      ========================= */}

      <div
        className="
          w-20
          h-20
          sm:w-24
          sm:h-24
          md:w-28
          md:h-28
          lg:w-32
          lg:h-32
          rounded-lg
          sm:rounded-xl
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
            className="
              w-full
              h-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              text-[10px]
              sm:text-xs
              text-gray-400
              text-center
            "
          >
            No Image
          </div>
        )}
      </div>

      {/* =========================
          PRODUCT DETAILS
      ========================= */}

      <div className="flex-1 min-w-0">
        {/* Product name */}

        <h2
          className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            font-semibold
            text-gray-900
            leading-tight
            line-clamp-2
          "
        >
          {item.name}
        </h2>

        {/* Price */}

        <p
          className="
            text-[#222222]
            font-bold
            text-sm
            sm:text-base
            md:text-lg
            mt-1
            sm:mt-2
          "
        >
          ₦{Number(item.price || 0).toLocaleString()}
        </p>

        {/* =========================
            QUANTITY
        ========================= */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            mt-3
            sm:mt-4
            md:mt-5
          "
        >
          {/* Minus */}

          <button
            type="button"
            onClick={() =>
              dispatch(decreaseQuantity(item._id))
            }
            aria-label="Decrease quantity"
            className="
              w-7
              h-7
              sm:w-8
              sm:h-8
              md:w-9
              md:h-9
              rounded-full
              border
              border-gray-200
              flex
              items-center
              justify-center
              hover:bg-[#8e3474]
              hover:text-white
              transition
            "
          >
            <Minus
              size={13}
              className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
            />
          </button>

          {/* Quantity */}

          <span
            className="
              font-semibold
              text-sm
              sm:text-base
              min-w-5
              sm:min-w-8
              text-center
            "
          >
            {item.quantity}
          </span>

          {/* Plus */}

          <button
            type="button"
            onClick={() =>
              dispatch(increaseQuantity(item._id))
            }
            aria-label="Increase quantity"
            className="
              w-7
              h-7
              sm:w-8
              sm:h-8
              md:w-9
              md:h-9
              rounded-full
              bg-[#363636]
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#8e3474]
              transition
            "
          >
            <Plus
              size={13}
              className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
            />
          </button>
        </div>
      </div>

      {/* =========================
          DELETE
      ========================= */}

      <button
        type="button"
        onClick={handleRemove}
        disabled={removing}
        aria-label={`Remove ${item.name} from cart`}
        className="
          shrink-0
          self-start
          sm:self-center
          p-1
          sm:p-2
          text-red-400
          hover:text-red-500
          hover:bg-red-50
          rounded-full
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {removing ? (
          <div
            className="
              w-[17px]
              h-[17px]
              sm:w-5
              sm:h-5
              md:w-[22px]
              md:h-[22px]
              border-2
              border-red-300
              border-t-red-500
              rounded-full
              animate-spin
            "
          />
        ) : (
          <Trash2
            size={17}
            className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
          />
        )}
      </button>
    </div>
  );
}