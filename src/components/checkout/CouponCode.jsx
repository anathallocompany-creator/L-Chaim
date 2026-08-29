"use client";

import { useState } from "react";

export default function CouponCode() {
  const [coupon, setCoupon] = useState("");

  return (
    <div className=" rounded-xl p-6 my-8">

      <h3 className="text-xl font-semibold mb-4">
        Have a Coupon?
      </h3>

      <div className="flex">

        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 border  px-4 py-3 outline-none"
        />

        <button
          className="bg-[#af3a7a] text-white px-6  hover:bg-[#ac3688]"
        >
          Apply
        </button>

      </div>

    </div>
  );
}