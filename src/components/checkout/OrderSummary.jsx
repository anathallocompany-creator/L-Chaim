"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearCart } from "@/redux/features/cartSlice";
import { useUser } from "@clerk/nextjs";

export default function OrderSummary({
    customer,
    shippingAddress,
    paymentMethod,
    notes,
}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useUser();

    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const placeOrder = async () => {
        try {
            console.log("ORDER PAYMENT METHOD:", paymentMethod);

            if (!paymentMethod) {
                alert("Please select a payment method");
                return;
            }

            const res = await fetch("/api/order", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    userId: user?.id,
                    customer,
                    shippingAddress,
                    items: cartItems,
                    subtotal,
                    deliveryFee: 0,
                    total: subtotal,
                    paymentMethod,
                    notes,
                }),
            });

            const data = await res.json();

            console.log("CREATED ORDER:", data);

            if (!res.ok) {
                throw new Error(
                    data.message || "Order failed"
                );
            }

            dispatch(clearCart());

            router.push(`/my-orders/${data._id}`);

        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    return (
        <div
            className="
                w-full
                bg-white
                border
                border-gray-100
                rounded-xl
                sm:rounded-2xl
                shadow-sm
                p-4
                sm:p-6
                lg:p-8
                lg:sticky
                lg:top-24
            "
        >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">

                <h2
                    className="
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        text-gray-900
                    "
                >
                    Your Order
                </h2>

                <span
                    className="
                        text-xs
                        sm:text-sm
                        text-gray-500
                        bg-gray-100
                        px-3
                        py-1
                        rounded-full
                    "
                >
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "Item" : "Items"}
                </span>

            </div>


            {/* PRODUCTS */}
            <div className="space-y-4 sm:space-y-5">

                {cartItems.map((item) => (

                    <div
                        key={item._id}
                        className="
                            flex
                            items-start
                            justify-between
                            gap-3
                            text-sm
                            sm:text-base
                        "
                    >

                        {/* PRODUCT NAME */}
                        <div className="min-w-0 flex-1">

                            <p
                                className="
                                    font-medium
                                    text-gray-800
                                    leading-5
                                "
                            >
                                {item.name}
                            </p>

                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                Qty: {item.quantity}
                            </p>

                        </div>


                        {/* PRICE */}
                        <span
                            className="
                                font-semibold
                                text-gray-800
                                whitespace-nowrap
                                text-sm
                                sm:text-base
                            "
                        >
                            ₦
                            {(item.price * item.quantity)
                                .toLocaleString()}
                        </span>

                    </div>

                ))}

            </div>


            {/* DIVIDER */}
            <hr className="my-5 sm:my-6 border-gray-200" />


            {/* SUBTOTAL */}
            <div
                className="
                    flex
                    justify-between
                    items-center
                    text-sm
                    sm:text-base
                    text-gray-600
                "
            >

                <span>
                    Subtotal
                </span>

                <span className="font-semibold text-gray-900">
                    ₦{subtotal.toLocaleString()}
                </span>

            </div>


            {/* DELIVERY */}
            <div
                className="
                    flex
                    justify-between
                    items-start
                    gap-4
                    mt-4
                    text-sm
                    sm:text-base
                "
            >

                <span className="text-gray-600">
                    Delivery
                </span>

                <span
                    className="
                        text-gray-500
                        italic
                        text-right
                        text-xs
                        sm:text-sm
                    "
                >
                    To be confirmed
                </span>

            </div>


            {/* TOTAL */}
            <div
                className="
                    border-t
                    border-gray-200
                    mt-6
                    pt-5
                    flex
                    justify-between
                    items-center
                    gap-4
                "
            >

                <span
                    className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-gray-900
                    "
                >
                    Total
                </span>

                <span
                    className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-[#a8418b]
                    "
                >
                    ₦{subtotal.toLocaleString()}
                </span>

            </div>


            {/* PLACE ORDER */}
            <button
                onClick={placeOrder}
                className="
                    w-full
                    mt-7
                    sm:mt-8
                    bg-[#a8418b]
                    hover:bg-[#8d3575]
                    active:scale-[0.98]
                    text-white
                    py-3.5
                    sm:py-4
                    px-4
                    rounded-lg
                    sm:rounded-xl
                    font-semibold
                    text-sm
                    sm:text-base
                    transition-all
                    duration-200
                    shadow-md
                "
            >
                Place Order
            </button>


            {/* SECURITY MESSAGE */}
            <p
                className="
                    text-center
                    text-[11px]
                    sm:text-xs
                    text-gray-400
                    mt-4
                    leading-5
                "
            >
                Your order information is secure and protected.
            </p>

        </div>
    );
}