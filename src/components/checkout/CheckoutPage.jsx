
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
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            items-center
            justify-center
            text-center
            px-4
            sm:px-6
          "
        >
          <div>
            <h1
              className="
                font-serif
                text-white
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
                tracking-[-0.03em]
              "
            >
              Checkout
            </h1>

            <p
              className="
                mt-2
                sm:mt-3
                text-sm
                sm:text-base
                md:text-lg
                text-gray-100
              "
            >
              Home <span className="mx-1 sm:mx-2">/</span> Checkout
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CHECKOUT SECTION
      ========================= */}
      <section
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-5
          md:px-6
          lg:px-8
          py-8
          sm:py-10
          md:py-14
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
            sm:gap-10
            lg:gap-14
            items-start
          "
        >
          {/* =========================
              LEFT - BILLING + PAYMENT
          ========================= */}
          <div
            className="
              lg:col-span-2
              min-w-0
              space-y-6
              sm:space-y-8
            "
          >
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

          {/* =========================
              RIGHT - ORDER SUMMARY
          ========================= */}
          <div
            className="
              w-full
              lg:sticky
              lg:top-24
            "
          >
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

