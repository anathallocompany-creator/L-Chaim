"use client";

import { useState } from "react";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("transfer");

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [shippingAddress, setShippingAddress] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
    });

    const [notes, setNotes] = useState("");

    return (
        <>
            {/* Hero */}
            <section
                className="relative py-32 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero1.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/45"></div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-serif text-[#ffffff] text-4xl md:text-6xl leading-[1] tracking-[-0.03em]">
                        Checkout
                    </h1>

                    <p className="mt-3 text-gray-50">
                        Home / Checkout
                    </p>
                </div>
            </section>

            {/* Checkout */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-14">

                    {/* Left */}
                    <div className="lg:col-span-2">
                        <BillingForm
                            customer={customer}
                            setCustomer={setCustomer}
                            shippingAddress={shippingAddress}
                            setShippingAddress={setShippingAddress}
                            notes={notes}
                            setNotes={setNotes}
                        />

                        <PaymentMethod
                            onPaymentChange={setPaymentMethod}
                        />
                    </div>

                    {/* Right */}
                    <div>
                        <OrderSummary
                            customer={customer}
                            shippingAddress={shippingAddress}
                            paymentMethod={paymentMethod}
                            notes={notes}
                        />
                    </div>

                </div>
            </section>
        </>
    );
}