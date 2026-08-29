"use client";

import { useState } from "react";
import {
  Package,
  CheckCircle,
  Truck,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  async function trackOrder(e) {
    e.preventDefault();

    if (!orderNumber.trim()) {
      alert("Please enter your order number.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/order/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderNumber: orderNumber.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Order not found.");
      }

      setOrder(data);

    } catch (error) {
      alert(error.message);
      setOrder(null);
    } finally {
      setLoading(false);
    }
  }

  const steps = [
    {
      title: "Order Confirmed",
      description: "Your order has been received",
      icon: <CheckCircle />,
    },
    {
      title: "Preparing Order",
      description: "Our bakers are preparing your cake",
      icon: <Package />,
    },
    {
      title: "Out for Delivery",
      description: "Rider is on the way",
      icon: <Truck />,
    },
    {
      title: "Delivered",
      description: "Enjoy your fresh cake",
      icon: <MapPin />,
    },
  ];

  // ✅ Use orderStatus from the database
  const status = order?.orderStatus || "Pending";

  const currentStep = {
    Pending: 0,
    Confirmed: 0,
    Processing: 1,
    Baking: 1,
    Preparing: 1,
    Ready: 2,
    "Out for Delivery": 2,
    Delivered: 3,
    Cancelled: 0,
  }[status] ?? 0;

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Track My Order
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your order number to check delivery status
          </p>
        </div>

        {/* Search */}

        <form
          onSubmit={trackOrder}
          className="bg-gray-800 rounded-2xl shadow-sm p-6 flex gap-4 flex-col md:flex-row"
        >
          <div className="relative flex-1">
            <input
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Enter Order Number e.g LC-12345678"
              className="w-full border rounded-xl py-3 px-4 outline-none bg-white focus:border-[#ec008c]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#bb2e83] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#c90076] transition disabled:opacity-60"
          >
            {loading ? "Tracking..." : "Track Order"}
          </button>
        </form>

        {order && (
          <div className="mt-8 space-y-6">

            {/* Order Summary */}

            <div className="bg-white rounded-2xl border p-6 shadow-sm">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h2 className="font-bold text-xl">
                    Order {order.orderNumber}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Placed on{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* ✅ Uses orderStatus */}
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {status}
                </span>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Products */}

                <div className="bg-gray-50 rounded-xl p-5">

                  <h3 className="font-semibold mb-3">
                    Products
                  </h3>

                  {order.items?.map((item) => (
                    <div
                      key={item._id}
                      className="mb-3"
                    >
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  ))}

                  <p className="text-[#bb2e83] font-bold mt-4">
                    ₦{Number(order.total).toLocaleString()}
                  </p>

                </div>

                {/* Delivery */}

                <div className="bg-gray-50 rounded-xl p-5">

                  <h3 className="font-semibold mb-3">
                    Delivery Details
                  </h3>

                  <p className="flex gap-2 text-gray-600">
                    <MapPin size={16} />
                    {order.shippingAddress?.address},{" "}
                    {order.shippingAddress?.city},{" "}
                    {order.shippingAddress?.state}
                  </p>

                  <p className="flex gap-2 text-gray-600 mt-3">
                    <Phone size={16} />
                    {order.customer?.phone}
                  </p>

                  <p className="mt-3 text-gray-600">
                    Delivery Date: {order.deliveryDate}
                  </p>

                </div>

              </div>

            </div>

            {/* Progress */}

            <div className="bg-white rounded-2xl border p-8">

              <h2 className="font-bold text-xl mb-8">
                Delivery Progress
              </h2>

              <div className="space-y-8">

                {steps.map((step, index) => (

                  <div
                    key={step.title}
                    className="flex gap-5 items-start"
                  >

                    <div
                      className={`p-3 rounded-full ${
                        index <= currentStep
                          ? "bg-[#992d6e] text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {step.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {step.description}
                      </p>

                      {index === currentStep &&
                        status === "Out for Delivery" && (
                          <p className="flex items-center gap-2 text-[#81245c] text-sm mt-2">
                            <Clock size={14} />
                            Estimated arrival today
                          </p>
                        )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}