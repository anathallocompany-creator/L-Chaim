"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProductBreadcrumb({ product }) {
  return (
    <section className="bg-[#fafafa] border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-2 text-sm text-gray-500">

        <Link
          href="/"
          className="hover:text-[#a8418b] transition"
        >
          Home
        </Link>

        <ChevronRight size={15} />

        <Link
          href="/products"
          className="hover:text-[#a8418b] transition"
        >
          Shop
        </Link>

        <ChevronRight size={15} />

        <span className="text-gray-900 font-medium">
          {product.name}
        </span>

      </div>
    </section>
  );
}