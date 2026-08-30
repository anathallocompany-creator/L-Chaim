
"use client";

import { useState } from "react";

export default function CouponCode() {
  const [coupon, setCoupon] = useState("");

  return (
    <div
      className="
        w-full
        bg-white
        border
        border-gray-100
        rounded-xl
        sm:rounded-2xl
        p-4
        sm:p-6
        my-6
        sm:my-8
        shadow-sm
      "
    >
      {/* Heading */}
      <h3
        className="
          text-lg
          sm:text-xl
          font-semibold
          text-gray-900
          mb-4
        "
      >
        Have a Coupon?
      </h3>

      {/* Coupon Form */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-3
        "
      >
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="
            w-full
            flex-1
            border
            border-gray-300
            rounded-lg
            px-4
            py-3
            text-sm
            sm:text-base
            text-gray-800
            outline-none
            focus:border-[#a8418b]
            focus:ring-1
            focus:ring-[#a8418b]
            transition
          "
        />

        <button
          type="button"
          className="
            w-full
            sm:w-auto
            bg-[#a8418b]
            hover:bg-[#8d3575]
            active:scale-[0.98]
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
            text-sm
            sm:text-base
            transition-all
            duration-200
            whitespace-nowrap
          "
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );
}

