"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const statuses = [
  {
    value: "Pending",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    value: "Processing",
    color: "bg-blue-100 text-blue-700",
  },
  {
    value: "Baking",
    color: "bg-purple-100 text-purple-700",
  },
  {
    value: "Ready",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    value: "Out for Delivery",
    color: "bg-orange-100 text-orange-700",
  },
  {
    value: "Delivered",
    color: "bg-green-100 text-green-700",
  },
  {
    value: "Cancelled",
    color: "bg-red-100 text-red-700",
  },
];

export default function UpdateStatusModal({
  open,
  order,
  onClose,
  onUpdated,
}) {
  const [status, setStatus] = useState("Pending");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (order) {
      setStatus(order.orderStatus || "Pending");
      setNote(order.adminNote || "");
    }
  }, [order]);

  if (!open || !order) return null;

  const currentStatus = statuses.find(
    (item) => item.value === order.orderStatus
  );

  const selectedStatus = statuses.find(
    (item) => item.value === status
  );

  async function handleSubmit() {
    try {
      setLoading(true);

      const res = await fetch(`/api/order/${order._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderStatus: status,
          adminNote: note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Unable to update order."
        );
      }

      // Update parent immediately without refresh
      if (onUpdated) {
        onUpdated(data.order);
      }

      alert(data.message || "Order updated successfully.");

      onClose();

    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl w-full max-w-lg">

        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold">
              Update Order Status
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              #{order.orderNumber}
            </p>
          </div>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Current Status */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Current Status
            </label>

            <div className="mt-2">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${currentStatus?.color}`}
              >
                {order.orderStatus}
              </span>
            </div>
          </div>

          {/* New Status */}
          <div>
            <label className="font-semibold">
              New Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full mt-3 border rounded-xl p-3"
            >
              {statuses.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </div>

          {/* Preview */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Preview
            </label>

            <div className="mt-2">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedStatus?.color}`}
              >
                {status}
              </span>
            </div>
          </div>

          {/* Admin Note */}
          <div>
            <label className="font-semibold">
              Admin Note (optional)
            </label>

            <textarea
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Example: Delivery scheduled for 4 PM."
              className="w-full mt-3 border rounded-xl p-3 resize-none"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="border-t px-6 py-5 flex justify-end gap-3">

          <button
            onClick={onClose}
            disabled={loading}
            className="px-5 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-[#922b6a] hover:bg-[#7b2458] text-white disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Status"}
          </button>

        </div>

      </div>
    </div>
  );
}