"use client";

import { useState } from "react";
import { X, Trash2 } from "lucide-react";

export default function DeleteOrderModal({
    open,
    onClose,
    onDeleted,
    order,
}) {
    const [loading, setLoading] = useState(false);

    if (!open || !order) return null;

    async function handleDelete() {
        try {
            setLoading(true);

            const res = await fetch(`/api/order/${order._id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || "Unable to delete order."
                );
            }

            alert("Order deleted successfully.");

            if (onDeleted) {
                await onDeleted();
            }

            onClose();

        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">

                {/* Header */}

                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <h2 className="text-xl font-bold text-gray-800">
                        Delete Order
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Body */}

                <div className="p-6">

                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
                        <Trash2
                            className="text-red-600"
                            size={30}
                        />
                    </div>

                    <h3 className="text-lg font-semibold text-center">
                        Delete this order?
                    </h3>

                    <p className="text-gray-500 text-center mt-3">
                        This action cannot be undone.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 mt-6 space-y-2">

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Order ID
                            </span>

                            <span className="font-semibold">
                                {order.orderNumber}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Customer
                            </span>

                            <span className="font-semibold">
                                {order.customer?.name}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Total
                            </span>

                            <span className="font-semibold">
                                ₦{Number(order.total).toLocaleString()}
                            </span>
                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="border-t px-6 py-5 flex justify-end gap-3">

                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="px-5 py-3 border rounded-xl hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="px-5 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading
                            ? "Deleting..."
                            : "Delete Order"}
                    </button>

                </div>

            </div>
        </div>
    );
}