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



            console.log("CREATED ORDER:", data);;



            if (!res.ok) {

                throw new Error(
                    data.message || "Order failed"
                );

            }



            dispatch(clearCart());



            router.push(
                `/my-orders/${data._id}`
            );

        } catch (error) {

            console.log(error);

            alert(error.message);

        }

    };



    return (

        <div className="border p-8 rounded-xl sticky top-24 bg-white">


            <h2 className="text-2xl font-bold mb-8">
                Your Order
            </h2>



            <div className="space-y-5">


                {cartItems.map((item) => (

                    <div
                        key={item._id}
                        className="flex justify-between"
                    >

                        <span>
                            {item.name} × {item.quantity}
                        </span>


                        <span>
                            ₦
                            {(item.price * item.quantity)
                                .toLocaleString()}
                        </span>


                    </div>

                ))}


            </div>



            <hr className="my-6" />



            <div className="flex justify-between font-semibold">

                <span>
                    Subtotal
                </span>


                <span>
                    ₦{subtotal.toLocaleString()}
                </span>


            </div>



            <div className="flex justify-between">

                <span>
                    Delivery
                </span>


                <span className="text-gray-500 italic">
                    To be confirmed
                </span>


            </div>




            <div className="border-t pt-4 flex justify-between text-xl font-bold">


                <span>
                    Total
                </span>


                <span>
                    ₦{subtotal.toLocaleString()}
                </span>


            </div>





            <button

                onClick={placeOrder}

                className="
                    w-full
                    mt-10
                    bg-[#af3a7a]
                    hover:bg-[#8d3575]
                    text-white
                    py-4
                    rounded-md
                    font-semibold
                "

            >

                Place Order

            </button>



        </div>

    );

}