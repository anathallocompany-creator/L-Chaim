"use client";

import Image from "next/image";
import { Trash2, X, AlertTriangle } from "lucide-react";

export default function DeleteProductModal({
  open,
  product,
  deleting,
  onClose,
  onDelete,
}) {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">

              <AlertTriangle
                size={22}
                className="text-red-600"
              />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Delete Product
              </h2>

              <p className="text-gray-500 text-sm">
                This action cannot be undone.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={18} />
          </button>

        </div>

        {/* Product */}

        <div className="px-6 py-6">

          <div className="flex gap-4 items-center">

            <div className="relative w-20 h-20 rounded-xl overflow-hidden border">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

            </div>

            <div>

              <h3 className="font-bold text-lg">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {product.category}
              </p>

              <p className="mt-2 font-semibold text-[#bb2e83]">
                ₦
                {Number(product.price || 0).toLocaleString()}
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-xl bg-red-50 p-4">

            <p className="text-red-700 text-sm leading-7">

              Are you sure you want to permanently delete

              <span className="font-bold">
                {" "}
                "{product.name}"
              </span>

              ?

              <br />

              This product will be removed from your store and customers
              will no longer be able to purchase it.

            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t px-6 py-5 flex justify-end gap-4">

          <button
            onClick={onClose}
            disabled={deleting}
            className="
              px-6
              py-3
              rounded-xl
              border
              hover:bg-gray-100
              transition
            "
          >
            Cancel
          </button>

          <button
            disabled={deleting}
            onClick={() => onDelete(product)}
            className="
              px-6
              py-3
              rounded-xl
              bg-red-600
              hover:bg-red-700
              text-white
              flex
              items-center
              gap-2
              transition
              disabled:opacity-50
            "
          >

            <Trash2 size={18} />

            {deleting
              ? "Deleting..."
              : "Delete Product"}

          </button>

        </div>

      </div>

    </div>
  );
}