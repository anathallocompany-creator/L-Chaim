"use client";

import { useState } from "react";
import CouponCode from "./CouponCode";

export default function PaymentMethod({ onPaymentChange }) {

    const [payment, setPayment] = useState("transfer");


    const methods = [
        {
            id: "transfer",
            title: "Bank Transfer",
            description:
                "Transfer directly to our bank account. Your order will be processed after payment confirmation.",
        },

        {
            id: "cash",
            title: "Cash on Delivery",
            description:
                "Pay with cash when your order arrives at your location.",
        },
    ];


    const handlePaymentChange = (method) => {

        setPayment(method);

        onPaymentChange?.(method);

    };


    return (
        <div className="border border-gray-300 rounded-xl p-6 mt-8 bg-white">

            <h2 className="text-2xl font-semibold mb-6">
                Payment Method
            </h2>


            <div className="space-y-5">

                {methods.map((method) => (

                    <label
                        key={method.id}
                        className={`
                            flex gap-4 p-5 rounded-xl border cursor-pointer transition
                            ${
                                payment === method.id
                                ? "border-[#af3a7a] bg-purple-50"
                                : "border-gray-300 hover:border-gray-400"
                            }
                        `}
                    >

                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={payment === method.id}
                            onChange={() =>
                                handlePaymentChange(method.id)
                            }
                            className="mt-1 w-5 h-5 accent-[#af3a7a]"
                        />


                        <div>

                            <h3 className="font-semibold text-lg">
                                {method.title}
                            </h3>


                            <p className="text-gray-500 mt-1">
                                {method.description}
                            </p>

                        </div>


                    </label>

                ))}

            </div>


            <CouponCode />

        </div>
    );
}