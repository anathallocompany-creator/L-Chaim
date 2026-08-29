"use client";

import { Trash2, X } from "lucide-react";

export default function DeleteReviewModal({
  open,
  review,
  onClose,
  onDeleted,
}) {
  if (!open || !review) return null;

  async function handleDelete() {
    try {
      const res = await fetch(`/api/reviews/${review._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      onDeleted?.();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-md">

        {/* Header */}

        <div className="border-b px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Trash2 className="text-red-600" />
            </div>

            <h2 className="text-xl font-bold">
              Delete Review
            </h2>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <p className="text-gray-600">
            Are you sure you want to permanently delete this review?
          </p>

          <div className="bg-gray-50 rounded-xl p-5 border">

            <p>
              <span className="font-semibold">Customer:</span>{" "}
              {review.customerName}
            </p>

            <p className="mt-2">
              <span className="font-semibold">Product:</span>{" "}
              {review.productName}
            </p>

            <p className="mt-2">
              <span className="font-semibold">Rating:</span>{" "}
              {review.rating} ★
            </p>

          </div>

          <p className="text-red-600 text-sm">
            This action cannot be undone.
          </p>

        </div>

        {/* Footer */}

        <div className="border-t px-6 py-5 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 border rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-5 py-3 rounded-xl bg-red-600 text-white flex items-center gap-2"
          >
            <Trash2 size={18} />
            Delete Review
          </button>

        </div>

      </div>

    </div>
  );
}