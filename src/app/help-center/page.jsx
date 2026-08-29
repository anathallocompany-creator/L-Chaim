"use client";

import {
    Search,
    Package,
    Truck,
    CreditCard,
    MessageCircle,
    Phone,
    Mail,
    FileText,
    ShieldCheck,
    CircleAlert,
} from "lucide-react";

export default function HelpCenterPage() {
    const categories = [
        {
            title: "Orders",
            description: "Help with placing and managing orders",
            icon: <Package />,
        },
        {
            title: "Delivery",
            description: "Delivery schedules and shipping information",
            icon: <Truck />,
        },
        {
            title: "Payments",
            description: "Secure payment options and confirmations",
            icon: <CreditCard />,
        },
    ];

    const policies = [
        {
            icon: <ShieldCheck size={24} />,
            title: "Custom Cake Orders",
            text: "All custom-made cakes, pastries and desserts are specially prepared according to your request. Because these products are personalized and perishable, they cannot be returned or refunded once production has started.",
        },
        {
            icon: <Package size={24} />,
            title: "Damaged or Incorrect Orders",
            text: "Please inspect your order immediately upon delivery or pickup. If you receive the wrong product or your order arrives damaged, notify us within 2 hours with clear photographs. Eligible claims may qualify for a replacement, store credit or partial refund after verification.",
        },
        {
            icon: <Truck size={24} />,
            title: "Delivery Responsibility",
            text: "Customers are responsible for providing the correct delivery address and phone number. We are not liable for delays or failed deliveries caused by incorrect information or the recipient's unavailability.",
        },
        {
            icon: <CreditCard size={24} />,
            title: "Order Cancellation",
            text: "Orders may be cancelled within 2 hours of payment provided preparation has not started. Once production begins, cancellation requests cannot be accepted because ingredients and labour have already been committed.",
        },
        {
            icon: <CircleAlert size={24} />,
            title: "Refund Eligibility",
            text: "Refunds are only approved where L'Chaim Cakes & Sweets is responsible for a verified error, including incorrect products, missing items or significant quality issues. Refunds are processed using the original payment method where applicable.",
        },
        {
            icon: <FileText size={24} />,
            title: "Agreement",
            text: "By placing an order with L'Chaim Cakes & Sweets, you acknowledge that you have read, understood and agreed to this Return & Refund Policy, including our terms regarding custom-made and perishable food products.",
        },
    ];

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Hero */}

                <div
                    style={{ backgroundColor: "#bb2e83" }}
                    className="bg-[#c7398e] rounded-3xl p-10 text-white text-center">

                    <h1 className="text-4xl font-bold">
                        Help & Return Policy
                    </h1>

                    <p className="mt-3 text-white/90">
                        Learn about our ordering, delivery and return policies.
                    </p>

                   
                </div>

                {/* Categories */}

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    {categories.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white border border-gray-300 rounded-2xl p-6 hover:shadow-md transition"
                        >

                            <div
                                style={{ color: "#bb2e83" }}
                                className="bg-pink-100 text-[#ec008c] w-12 h-12 rounded-full flex items-center justify-center mb-5">
                                {item.icon}
                            </div>

                            <h2 className="font-bold text-lg">
                                {item.title}
                            </h2>

                            <p className="text-gray-500 mt-2 text-sm">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

                {/* Return Policy */}

                <div className="bg-white rounded-2xl border border-gray-300 mt-10 overflow-hidden">

                    <div className="p-6 border-b border-gray-300 flex items-center gap-3">

                        <FileText
                            style={{ color: "#bb2e83" }}
                            className="text-[#ec008c]"
                        />

                        <h2 className="text-2xl font-bold">
                            Return & Refund Policy
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 p-6">

                        {policies.map((policy) => (

                            <div
                                key={policy.title}
                                className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition"
                            >

                                <div
                                    style={{ color: "#bb2e83" }}
                                    className="w-12 h-12 rounded-full bg-pink-100 text-[#ec008c] flex items-center justify-center mb-4">
                                    {policy.icon}
                                </div>

                                <h3 className="font-bold text-lg mb-3">
                                    {policy.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {policy.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Contact */}

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center">

                        <MessageCircle
                            style={{ color: "#bb2e83" }}
                            className="mx-auto text-[#ec008c]"
                            size={35}
                        />

                        <h3 className="font-bold mt-4">
                            Chat Support
                        </h3>

                        <p className="text-gray-500 text-sm mt-2">
                            Chat with our customer care team.
                        </p>

                        <button
                            style={{ backgroundColor: "#bb2e83" }}
                            className="mt-4 bg-[#ec008c] text-white px-5 py-2 rounded-lg">
                            Start Chat
                        </button>

                    </div>

                    <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center">

                        <Phone
                            style={{ color: "#bb2e83" }}
                            className="mx-auto text-[#ec008c]"
                            size={35}
                        />

                        <h3 className="font-bold mt-4">
                            Call Us
                        </h3>

                        <p className="text-gray-500 text-sm mt-2">
                            0805 538 0547
                        </p>

                    </div>

                    <div className="bg-white border border-gray-300 rounded-2xl p-6 text-center">

                        <Mail
                            style={{ color: "#bb2e83" }}
                            className="mx-auto text-[#ec008c]"
                            size={35}
                        />

                        <h3 className="font-bold mt-4">
                            Email Support
                        </h3>

                        <p className="text-gray-500 text-sm mt-2">
                            support@lchaimsweets.com
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}