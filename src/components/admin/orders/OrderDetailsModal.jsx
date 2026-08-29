"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function OrderDetailsModal({
    open,
    order,
    onClose,
    onUpdated,
}) {
    const [loading, setLoading] = useState(false);

    if (!open || !order) return null;

    async function verifyPayment() {
        try {
            setLoading(true);

            const res = await fetch(
                `/api/order/${order._id}/verify-payment`,
                {
                    method: "PATCH",
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || "Unable to verify payment."
                );
            }

            alert("Payment verified successfully.");

            if (onUpdated) {
                await onUpdated();
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
        <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-6">

            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">

                {/* Header */}

                <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Order Details
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Order #{order.orderNumber}
                        </p>
                    </div>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <div className="p-8 space-y-10">

                    {/* Customer */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Customer Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <p className="text-gray-500">Name</p>
                                <p className="font-semibold">
                                    {order.customer?.name || "-"}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500">Phone</p>
                                <p className="font-semibold">
                                    {order.customer?.phone || "-"}
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500">Email</p>
                                <p className="font-semibold">
                                    {order.customer?.email || "-"}
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Address */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Delivery Address
                        </h3>

                        <div className="border rounded-xl p-5 bg-gray-50">

                            <p>{order.shippingAddress?.address}</p>

                            <p>
                                {order.shippingAddress?.city},{" "}
                                {order.shippingAddress?.state}
                            </p>

                            <p>{order.shippingAddress?.country}</p>

                        </div>

                    </div>

                    {/* Ordered Items */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Ordered Items
                        </h3>

                        <div className="space-y-4">

                            {order.items?.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between items-center border rounded-xl p-4"
                                >

                                    <div className="flex items-center gap-4">

                                        {item.image?.url && (
                                            <img
                                                src={item.image.url}
                                                alt={item.name}
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                        )}

                                        <div>

                                            <h4 className="font-semibold">
                                                {item.name}
                                            </h4>

                                            <p className="text-sm text-gray-500">
                                                Qty: {item.quantity}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="font-bold">
                                        ₦
                                        {(
                                            Number(item.price || 0) *
                                            Number(item.quantity || 0)
                                        ).toLocaleString()}
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Payment Summary */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Payment Summary
                        </h3>

                        <div className="border rounded-xl p-5 space-y-3">

                            <div className="flex justify-between">
                                <span>Subtotal</span>

                                <span>
                                    ₦{Number(order.subtotal || 0).toLocaleString()}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Delivery Fee</span>

                                <span>
                                    ₦{Number(order.deliveryFee || 0).toLocaleString()}
                                </span>
                            </div>

                            <hr />

                            <div className="flex justify-between text-lg font-bold">

                                <span>Total</span>

                                <span>
                                    ₦{Number(order.total || 0).toLocaleString()}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Order Information */}

                    <div>

                        <h3 className="font-bold text-lg mb-4">
                            Order Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>

                                <p className="text-gray-500">
                                    Payment Status
                                </p>

                                <p
                                    className={`font-semibold ${order.paymentStatus === "Paid"
                                            ? "text-green-600"
                                            : order.paymentStatus === "Awaiting Verification"
                                                ? "text-orange-500"
                                                : "text-red-500"
                                        }`}
                                >
                                    {order.paymentStatus}
                                </p>

                            </div>

                            <div>

                                <p className="text-gray-500">
                                    Order Status
                                </p>

                                <p
                                    className={`font-semibold ${order.orderStatus === "Delivered"
                                            ? "text-green-600"
                                            : order.orderStatus === "Processing"
                                                ? "text-blue-600"
                                                : order.orderStatus === "Cancelled"
                                                    ? "text-red-600"
                                                    : "text-orange-500"
                                        }`}
                                >
                                    {order.orderStatus}
                                </p>

                            </div>

                            <div>

                                <p className="text-gray-500">
                                    Payment Method
                                </p>

                                <p className="font-semibold">
                                    {order.paymentMethod}
                                </p>

                            </div>

                            <div>

                                <p className="text-gray-500">
                                    Transaction Reference
                                </p>

                                <p className="font-semibold">
                                    {order.transactionReference || "Not provided"}
                                </p>

                            </div>

                            <div>

                                <p className="text-gray-500">
                                    Created
                                </p>

                                <p className="font-semibold">
                                    {new Date(order.createdAt).toLocaleString()}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Payment Receipt */}

                    {order.paymentProof?.url && (

                        <div>

                            <h3 className="font-bold text-lg mb-4">
                                Payment Receipt
                            </h3>

                            <a
                                href={order.paymentProof.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <img
                                    src={order.paymentProof.url}
                                    alt="Receipt"
                                    className="w-80 rounded-xl border hover:opacity-90 transition"
                                />

                            </a>

                        </div>

                    )}

                    {/* Customer Note */}

                    {order.notes && (

                        <div>

                            <h3 className="font-bold text-lg mb-3">
                                Customer Note
                            </h3>

                            <div className="border rounded-xl bg-yellow-50 p-5">
                                {order.notes}
                            </div>

                        </div>

                    )}

                </div>

                {/* Footer */}

                <div className="border-t px-8 py-5 flex justify-between items-center">

                    {order.paymentStatus === "Paid" ? (

                        <div className="text-green-600 font-semibold">
                            ✓ Payment Already Verified
                        </div>

                    ) : (

                        <button
                            onClick={verifyPayment}
                            disabled={loading}
                            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white disabled:opacity-60"
                        >
                            {loading ? "Verifying..." : "Verify Payment"}
                        </button>

                    )}

                    <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl bg-[#922b6a] text-white hover:bg-[#7b2358]"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
}