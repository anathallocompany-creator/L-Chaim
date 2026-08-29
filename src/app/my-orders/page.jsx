"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs"; // <-- Add this import

export default function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // <-- Add this here
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) {
            return;
        }

        async function fetchOrders() {
            try {
                console.log("Sending userId:", user.id);

                const res = await fetch(
                    `/api/order/user?userId=${user.id}`,
                    {
                        cache: "no-store",
                    }
                );

                const data = await res.json();

                console.log("Orders API:", data);

                if (res.ok) {
                    setOrders(data);
                } else {
                    console.log(data.message);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchOrders();
    }, [isLoaded, user]);

    
    function statusColor(status) {
        switch (status) {
            case "Pending":
                return "bg-yellow-100 text-yellow-700";

            case "Confirmed":
                return "bg-blue-100 text-blue-700";

            case "Preparing":
                return "bg-purple-100 text-purple-700";

            case "Ready":
                return "bg-indigo-100 text-indigo-700";

            case "Out for Delivery":
                return "bg-orange-100 text-orange-700";

            case "Delivered":
                return "bg-green-100 text-green-700";

            case "Cancelled":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    }

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-3xl font-bold mb-6">
                    My Orders
                </h1>

                <p>Loading your orders...</p>
            </div>
        );
    }



    console.log("Orders found:", orders);

    return (
        <>
            {/* Hero */}
            <section
                className="relative py-28 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero1.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/45"></div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-serif text-white">
                        My Orders
                    </h1>

                    <p className="mt-3 text-white/90">
                        Home / My Orders
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                {orders.length === 0 ? (
                    <div className="text-center py-16 border rounded-xl">
                        <h2 className="text-2xl font-semibold">
                            No orders yet
                        </h2>

                        <p className="text-gray-500 mt-3">
                            You haven't placed any orders.
                        </p>

                        <Link
                            href="/shop"
                            className="inline-block mt-8 bg-[#af3a7a] text-white px-6 py-3 rounded-md"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="border rounded-xl p-6 bg-white shadow-sm"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                                    <div>
                                        <h2 className="text-xl font-bold">
                                            {order.orderNumber}
                                        </h2>

                                        <p className="text-gray-500 mt-1">
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}
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
                                            Payment Status
                                        </p>

                                        <p
                                            className={`font-semibold ${order.paymentStatus === "Paid"
                                                    ? "text-green-600"
                                                    : order.paymentStatus === "Awaiting Verification"
                                                        ? "text-orange-600"
                                                        : "text-yellow-600"
                                                }`}
                                        >
                                            {order.paymentStatus}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Order Status
                                        </p>

                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColor(
                                                order.status
                                            )}`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Total
                                        </p>

                                        <p className="font-bold text-lg">
                                            ₦
                                            {Number(order.total).toLocaleString()}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/my-orders/${order._id}`}
                                        className="bg-[#af3a7a] hover:bg-[#8d3575] text-white px-5 py-3 rounded-md text-center"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}