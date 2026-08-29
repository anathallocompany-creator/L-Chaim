"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">

      <div className="text-center">

        <ShoppingCart
          size={100}
          className="mx-auto text-gray-300"
        />

        <h2 className="text-4xl font-bold mt-8">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mt-3">
          Looks like you haven't added any products yet.
        </p>

        <Link href="/products">

          <button className="mt-8 bg-[#eb2f2f] hover:bg-[#c92e2e] text-white px-8 py-4 rounded-lg font-semibold">

            Continue Shopping

          </button>

        </Link>

      </div>

    </div>
  );
}