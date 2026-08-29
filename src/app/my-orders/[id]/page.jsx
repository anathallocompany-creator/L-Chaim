import Link from "next/link";
import { notFound } from "next/navigation";

async function getOrder(id) {
    if (!id) {
        return null;
    }

    const res = await fetch(
        `http://localhost:3000/api/order/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default async function OrderConfirmation({ params }) {
    const { id } = await params;

    const order = await getOrder(id);

    if (!order) {
        notFound();
    }

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
                        Order Details
                    </h1>

                    <p className="mt-3 text-white">
                        My Orders / {order.orderNumber}
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16">

                <div className="bg-white border rounded-2xl shadow-sm p-8">

                    <h2 className="text-3xl font-bold text-center">
                        Thank You For Your Order 🎉
                    </h2>

                    <p className="text-center text-gray-500 mt-3">
                        Your order has been received successfully.
                    </p>

                    {/* Order Summary */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">

                        <div className="space-y-3">

                            <h3 className="text-xl font-semibold">
                                Order Information
                            </h3>

                            <p>
                                <strong>Order Number:</strong>{" "}
                                {order.orderNumber}
                            </p>

                            <p>
                                <strong>Payment Method:</strong>{" "}
                                {order.paymentMethod}
                            </p>

                            <p>
                                <strong>Payment Status:</strong>{" "}
                                {order.paymentStatus}
                            </p>

                            <p>
                                <strong>Order Status:</strong>{" "}
                                {order.orderStatus}
                            </p>

                            <p>
                                <strong>Total:</strong>{" "}
                                ₦{order.total.toLocaleString()}
                            </p>

                        </div>

                        <div className="space-y-3">

                            <h3 className="text-xl font-semibold">
                                Customer Details
                            </h3>

                            <p>
                                <strong>Name:</strong>{" "}
                                {order.customer?.name}
                            </p>

                            <p>
                                <strong>Email:</strong>{" "}
                                {order.customer?.email}
                            </p>

                            <p>
                                <strong>Phone:</strong>{" "}
                                {order.customer?.phone}
                            </p>

                            <p>
                                <strong>Delivery Address:</strong>{" "}
                                {order.shippingAddress?.address},{" "}
                                {order.shippingAddress?.city},{" "}
                                {order.shippingAddress?.state},{" "}
                                {order.shippingAddress?.country}
                            </p>

                        </div>

                    </div>

                    {/* Ordered Items */}
                    <div className="mt-12">

                        <h3 className="text-2xl font-semibold mb-6">
                            Ordered Items
                        </h3>

                        <div className="space-y-5">

                            {order.items.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between items-center border rounded-lg p-4"
                                >

                                    <div className="flex items-center gap-4">

                                        {item.image?.url && (
                                            <img
                                                src={item.image.url}
                                                alt={item.name}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                        )}

                                        <div>

                                            <h4 className="font-semibold">
                                                {item.name}
                                            </h4>

                                            <p className="text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="font-semibold">
                                        ₦{(
                                            item.price * item.quantity
                                        ).toLocaleString()}
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Bank Transfer */}
                    {order.paymentMethod === "transfer" && (

                        <div className="mt-12 bg-pink-50 border border-pink-200 rounded-xl p-6">

                            <h3 className="text-xl font-bold text-[#af3a7a]">
                                Bank Transfer Details
                            </h3>

                            <div className="mt-4 space-y-2">

                                <p>
                                    <strong>Bank:</strong> Your Bank Name
                                </p>

                                <p>
                                    <strong>Account Name:</strong> L'Chaim Cakes
                                </p>

                                <p>
                                    <strong>Account Number:</strong> 0000000000
                                </p>

                            </div>

                            <p className="mt-5 text-gray-600">
                                Kindly transfer the exact amount and submit your
                                payment confirmation.
                            </p>

                            {/* Pending */}
                            {order.paymentStatus === "Pending" && (

                                <div className="mt-6">

                                    <Link
                                        href={`/my-orders/${order._id}/payment`}
                                        className="inline-block bg-[#af3a7a] hover:bg-[#8d3575] text-white px-6 py-3 rounded-md"
                                    >
                                        I've Made Payment
                                    </Link>

                                </div>

                            )}

                            {/* Awaiting Verification */}
                            {order.paymentStatus === "Awaiting Verification" && (

                                <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-50 p-5">

                                    <h4 className="font-semibold text-yellow-700">
                                        ✓ Payment Submitted
                                    </h4>

                                    <p className="mt-2 text-gray-600">
                                        Your payment proof has been received and is awaiting verification.
                                    </p>

                                    <p className="mt-2">
                                        <strong>Reference:</strong>{" "}
                                        {order.transactionReference || "Not provided"}
                                    </p>

                                </div>

                            )}

                            {/* Paid */}
                            {order.paymentStatus === "Paid" && (

                                <div className="mt-6 rounded-lg border border-green-300 bg-green-50 p-5">

                                    <h4 className="font-semibold text-green-700">
                                        ✓ Payment Verified
                                    </h4>

                                    <p className="mt-2 text-gray-600">
                                        Your payment has been confirmed. We have started processing your order.
                                    </p>

                                </div>

                            )}

                        </div>

                    )}

                    {/* Cash on Delivery */}
                    {order.paymentMethod === "cash" && (

                        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">

                            <h3 className="text-xl font-bold">
                                Cash on Delivery
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Please have the exact amount available when your
                                order is delivered.
                            </p>

                        </div>

                    )}

                    <div className="mt-12 text-center">

                        <Link
                            href="/my-orders"
                            className="inline-block bg-[#af3a7a] hover:bg-[#8d3575] text-white px-8 py-3 rounded-md font-medium transition"
                        >
                            Back to My Orders
                        </Link>

                    </div>

                </div>

            </section>
        </>
    );
}