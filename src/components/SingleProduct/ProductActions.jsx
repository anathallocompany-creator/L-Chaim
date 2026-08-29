"use client";

import {
  Heart,
  GitCompare,
  Share2,
} from "lucide-react";

export default function ProductActions() {
  return (
    <div className="space-y-6 mt-8">

      {/* Wishlist / Compare */}
      <div className="flex items-center gap-8 text-gray-700">

        <button className="flex items-center gap-2 hover:text-[#a8418b] transition">
          <Heart size={18} />
          Wishlist
        </button>

        <button className="flex items-center gap-2 hover:text-[#a8418b] transition">
          <GitCompare size={18} />
          Compare
        </button>

        <button className="flex items-center gap-2 hover:text-[#a8418b] transition">
          <Share2 size={18} />
          Share
        </button>

      </div>

      <div className="border-t border-gray-200"></div>

    </div>
  );
}