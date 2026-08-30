
"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const router = useRouter();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className="
        w-full
        bg-white
        rounded-2xl
        sm:rounded-3xl
        shadow-lg
        border
        border-gray-100
        p-5
        sm:p-6
        md:p-7
        lg:p-8
        lg:sticky
        lg:top-28
      "
    >
      {/* =========================
          TITLE
      ========================= */}
      <h2
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          font-bold
          text-gray-900
          mb-5
          sm:mb-6
          md:mb-8
        "
      >
        Order Summary
      </h2>

      {/* =========================
          SUMMARY DETAILS
      ========================= */}
      <div
        className="
          space-y-4
          sm:space-y-5
          text-sm
          sm:text-base
          text-gray-600
        "
      >
        {/* Items */}
        <div className="flex items-center justify-between gap-4">
          <span>
            Items ({cartItems.length})
          </span>

          <span className="font-medium text-gray-800">
            ₦{subtotal.toLocaleString()}
          </span>
        </div>

        {/* Delivery */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <span>Delivery</span>

          <span
            className="
              text-[11px]
              sm:text-xs
              md:text-sm
              bg-gray-100
              text-gray-600
              px-2.5
              sm:px-3
              py-1
              rounded-full
              text-right
              whitespace-nowrap
            "
          >
            Calculated at checkout
          </span>
        </div>
      </div>

      {/* =========================
          DIVIDER
      ========================= */}
      <div className="border-t border-gray-100 my-5 sm:my-6 md:my-8" />

      {/* =========================
          TOTAL
      ========================= */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          text-lg
          sm:text-xl
          md:text-2xl
          font-bold
          text-gray-900
        "
      >
        <span>Total</span>

        <span className="text-[#4c4b4c]">
          ₦{subtotal.toLocaleString()}
        </span>
      </div>

      {/* =========================
          CHECKOUT BUTTON
      ========================= */}
      <button
        onClick={() => {
          console.log("Button clicked");
          router.push("/checkout");
        }}
        className="
          w-full
          mt-6
          sm:mt-7
          md:mt-8
          bg-[#1a1a1a]
          hover:bg-[#a8418b]
          active:scale-[0.98]
          text-white
          py-3
          sm:py-3.5
          md:py-4
          px-4
          rounded-xl
          font-semibold
          text-sm
          sm:text-base
          md:text-lg
          transition-all
          duration-300
          shadow-md
        "
      >
        Proceed To Checkout
      </button>

      {/* =========================
          SECURITY MESSAGE
      ========================= */}
      <p
        className="
          text-center
          text-[11px]
          sm:text-xs
          md:text-sm
          text-gray-400
          mt-4
          sm:mt-5
          leading-relaxed
        "
      >
        Secure checkout • Freshly baked with love 🍰
      </p>
    </div>
  );
}

