"use client";

import { Trash2, X } from "lucide-react";

export default function DeleteCustomerModal({
  open,
  customer,
  onClose,
  onDeleted,
}) {
  if (!open || !customer) return null;

  async function handleDelete() {
    try {
      const res = await fetch(`/api/customers/${customer._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to delete customer.");
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
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl w-full max-w-md">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Trash2 className="text-red-600" size={22} />
            </div>

            <h2 className="text-xl font-bold">
              Delete Customer
            </h2>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="p-6">

          <p className="text-gray-600 leading-7">
            Are you sure you want to permanently delete
            <span className="font-bold text-gray-900">
              {" "}
              {customer.fullName}
            </span>
            ?
          </p>

          <div className="mt-6 rounded-xl bg-red-50 border border-red-100 p-4">

            <p>
              <span className="font-semibold">
                Customer ID:
              </span>{" "}
              {customer.customerId}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Email:
              </span>{" "}
              {customer.email}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Phone:
              </span>{" "}
              {customer.phone}
            </p>

          </div>

          <p className="text-red-600 text-sm mt-5">
            This action cannot be undone.
          </p>

        </div>

        {/* Footer */}

        <div className="border-t px-6 py-5 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
          >
            <Trash2 size={18} />
            Delete Customer
          </button>

        </div>

      </div>
    </div>
  );
}