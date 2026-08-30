
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
        <div
            className="
                w-full
                border
                border-gray-200
                rounded-xl
                sm:rounded-2xl
                p-4
                sm:p-6
                lg:p-8
                mt-6
                sm:mt-8
                bg-white
                shadow-sm
            "
        >

            {/* HEADER */}
            <div className="mb-5 sm:mb-6">

                <h2
                    className="
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        text-gray-900
                    "
                >
                    Payment Method
                </h2>

                <p
                    className="
                        text-sm
                        sm:text-base
                        text-gray-500
                        mt-1
                    "
                >
                    Choose how you would like to pay for your order.
                </p>

            </div>


            {/* PAYMENT OPTIONS */}
            <div className="space-y-3 sm:space-y-4">

                {methods.map((method) => (

                    <label
                        key={method.id}
                        className={`
                            flex
                            items-start
                            gap-3
                            sm:gap-4
                            p-4
                            sm:p-5
                            rounded-xl
                            border
                            cursor-pointer
                            transition-all
                            duration-200
                            ${
                                payment === method.id
                                    ? "border-[#af3a7a] bg-[#fff7fc] shadow-sm"
                                    : "border-gray-200 hover:border-gray-400 bg-white"
                            }
                        `}
                    >

                        {/* RADIO */}
                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={payment === method.id}
                            onChange={() =>
                                handlePaymentChange(method.id)
                            }
                            className="
                                mt-1
                                w-4
                                h-4
                                sm:w-5
                                sm:h-5
                                accent-[#af3a7a]
                                shrink-0
                                cursor-pointer
                            "
                        />


                        {/* CONTENT */}
                        <div className="min-w-0 flex-1">

                            <h3
                                className="
                                    text-sm
                                    sm:text-base
                                    lg:text-lg
                                    font-semibold
                                    text-gray-900
                                "
                            >
                                {method.title}
                            </h3>

                            <p
                                className="
                                    text-xs
                                    sm:text-sm
                                    lg:text-base
                                    text-gray-500
                                    mt-1
                                    leading-5
                                    sm:leading-6
                                "
                            >
                                {method.description}
                            </p>

                        </div>

                    </label>

                ))}

            </div>


            {/* COUPON */}
            <CouponCode />

        </div>
    );
}

