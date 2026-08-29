"use client";

import { useState } from "react";
import { X, Trash2, AlertTriangle } from "lucide-react";

export default function DeleteStaffModal({
  open,
  staff,
  onClose,
  onDeleted,
}) {
  const [loading, setLoading] = useState(false);

  if (!open || !staff) return null;

  async function handleDelete() {
    try {
      setLoading(true);

      const res = await fetch(`/api/staffs/${staff._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to delete staff.");
        return;
      }

      onDeleted?.();
      onClose();

    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center border-b px-6 py-5">

          <h2 className="text-xl font-bold">
            Delete Staff
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="p-8 text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-6">

            <AlertTriangle
              size={40}
              className="text-red-600"
            />

          </div>

          <h3 className="text-xl font-bold mb-4">
            Delete this staff member?
          </h3>

          <p className="text-gray-600 leading-7">

            You are about to permanently delete

            <span className="font-semibold text-black">
              {" "}
              {staff.fullName}
            </span>

            .

            <br />

            This action cannot be undone.

          </p>

          <div className="mt-6 bg-gray-50 rounded-xl p-4 text-left">

            <div className="flex justify-between py-2">

              <span className="text-gray-500">
                Employee ID
              </span>

              <span className="font-medium">
                {staff.employeeId}
              </span>

            </div>

            <div className="flex justify-between py-2">

              <span className="text-gray-500">
                Department
              </span>

              <span className="font-medium">
                {staff.department}
              </span>

            </div>

            <div className="flex justify-between py-2">

              <span className="text-gray-500">
                Role
              </span>

              <span className="font-medium">
                {staff.role}
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t px-6 py-5 flex justify-end gap-4">

          <button
            onClick={onClose}
            disabled={loading}
            className="px-6 py-3 rounded-xl border hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 transition"
          >

            <Trash2 size={18} />

            {loading ? "Deleting..." : "Delete Staff"}

          </button>

        </div>

      </div>

    </div>
  );
}