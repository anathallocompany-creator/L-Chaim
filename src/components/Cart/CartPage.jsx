"use client";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("Cart Items:", cartItems);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Shopping Cart</h1>

          <p className="mt-4 text-lg">
            Home / Cart
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-5">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart */}

          <div className="lg:col-span-2">

            <div className="space-y-6">

              {cartItems.map((item) => (

                <CartItem
                  key={item._id}
                  item={item}
                />

              ))}

            </div>

          </div>

          {/* Summary */}

          <div>

            <CartSummary />

          </div>

        </div>

      </section>
    </>
  );
}