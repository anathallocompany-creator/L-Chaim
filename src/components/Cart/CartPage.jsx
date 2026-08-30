
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
      {/* =========================
          HERO
      ========================= */}
      <section
        className="
          relative
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          lg:h-[320px]
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/hero1.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            items-center
            justify-center
            text-white
            text-center
            px-5
          "
        >
          <h1
            className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Shopping Cart
          </h1>

          <p
            className="
              mt-2
              sm:mt-3
              md:mt-4
              text-sm
              sm:text-base
              md:text-lg
              text-gray-200
            "
          >
            Home <span className="mx-1 sm:mx-2">/</span> Cart
          </p>
        </div>
      </section>

      {/* =========================
          CART CONTENT
      ========================= */}
      <section
        className="
          w-full
          max-w-7xl
          mx-auto
          py-8
          sm:py-10
          md:py-14
          lg:py-16
          px-4
          sm:px-5
          md:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
            sm:gap-8
            lg:gap-10
            items-start
          "
        >
          {/* =========================
              CART ITEMS
          ========================= */}
          <div className="lg:col-span-2 min-w-0">
            <div
              className="
                space-y-4
                sm:space-y-5
                md:space-y-6
              "
            >
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* =========================
              CART SUMMARY
          ========================= */}
          <div
            className="
              w-full
              lg:sticky
              lg:top-24
            "
          >
            <CartSummary />
          </div>
        </div>
      </section>
    </>
  );
}

