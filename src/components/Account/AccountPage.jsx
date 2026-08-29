
"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";

import Sidebar from "./Sidebar";
import AccountForm from "./AccountForm";
import AddAddress from "./AddAddress";
import DeliveryAddress from "./DeliveryAddress";
import AddressForm from "./AddressForm";
import OrderHistory from "./OrderHistory";
import PendingRatings from "./PendingRatings";
import Wallet from "./Wallet";

export default function AccountPage() {
  const [active, setActive] = useState("account");

  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);

  // Mobile sidebar state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const savedAddress = {
    name: "Olayemi Omolisa",
    phone: "08055380547",
    street: "Kusenla road, Lekki Ikate",
    directions: "",
    city: "Lagos",
    state: "Lagos",
    lga: "Eti-Osa",
    default: true,
  };

  /*
   * Prevent page scrolling while mobile sidebar is open
   */
  useEffect(() => {
    if (mobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  /*
   * Close sidebar
   */
  const closeSidebar = () => {
    setMobileSidebarOpen(false);
  };

  /*
   * Change menu item and close mobile sidebar
   */
  const handleMenuChange = (value) => {
    setActive(value);
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] py-5 sm:py-8 lg:py-10 px-4 sm:px-5">

      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            MOBILE TOP BAR
        ===================================================== */}

        <div
          className="
            lg:hidden
            mb-4
            bg-white
            rounded-xl
            shadow-sm
            px-4
            py-3
            flex
            items-center
            justify-between
          "
        >

          <div>
            <p className="text-xs text-gray-500">
              My Account
            </p>

            <h1 className="font-bold text-lg text-gray-800">
              Account Dashboard
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setMobileSidebarOpen(true)}
            className="
              w-11
              h-11
              rounded-lg
              bg-[#922b6a]
              text-white
              flex
              items-center
              justify-center
              shadow-sm
              active:scale-95
              transition
            "
            aria-label="Open account menu"
          >
            <Menu size={24} />
          </button>

        </div>


        {/* =====================================================
            DESKTOP + CONTENT
        ===================================================== */}

        <div className="flex gap-5 lg:gap-6">

          {/* =================================================
              DESKTOP SIDEBAR
          ================================================= */}

          <div className="hidden lg:block w-[250px] shrink-0">

            <Sidebar
              active={active}
              setActive={setActive}
            />

          </div>


          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <main
            className="
              bg-white
              flex-1
              min-w-0
              rounded-xl
              shadow-sm
              overflow-hidden
            "
          >

            {/* ACCOUNT */}

            {active === "account" && (
              <AccountForm />
            )}


            {/* ADDRESS */}

            {active === "address" && (

              showAddAddress ? (

                <AddressForm
                  mode="add"
                  back={() => setShowAddAddress(false)}
                />

              ) : showEditAddress ? (

                <AddressForm
                  mode="edit"
                  address={savedAddress}
                  back={() => setShowEditAddress(false)}
                />

              ) : (

                <DeliveryAddress
                  openAddAddress={() => setShowAddAddress(true)}
                  openEditAddress={() => setShowEditAddress(true)}
                />

              )

            )}


            {/* ORDER HISTORY */}

            {active === "order-history" && (
              <OrderHistory />
            )}


            {/* PENDING RATINGS */}

            {active === "pending-ratings" && (
              <PendingRatings />
            )}


            {/* WALLET */}

            {active === "wallet" && (
              <Wallet />
            )}


            {/* DELETE ACCOUNT */}

            {active === "delete" && (

              <div className="p-5 sm:p-8">

                <h2 className="text-xl font-bold text-red-500">
                  Delete Account
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  This action cannot be undone.
                </p>

                <button
                  type="button"
                  className="
                    mt-5
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    transition
                  "
                >
                  Delete My Account
                </button>

              </div>

            )}

          </main>

        </div>

      </div>


      {/* =====================================================
          MOBILE SIDEBAR OVERLAY
      ===================================================== */}

      <div
        onClick={closeSidebar}
        className={`
          fixed
          inset-0
          bg-black/50
          z-[200]
          lg:hidden
          transition-opacity
          duration-300
          ${
            mobileSidebarOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />


      {/* =====================================================
          MOBILE SIDEBAR DRAWER
      ===================================================== */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[85%]
          max-w-[320px]
          bg-white
          z-[300]
          shadow-2xl
          lg:hidden
          overflow-y-auto
          transition-transform
          duration-300
          ease-in-out
          ${
            mobileSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* =================================================
            SIDEBAR HEADER
        ================================================= */}

        <div
          className="
            sticky
            top-0
            bg-white
            border-b
            px-5
            py-4
            flex
            items-center
            justify-between
            z-10
          "
        >

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Account
            </p>

            <h2 className="text-lg font-bold text-gray-800">
              My Dashboard
            </h2>
          </div>


          <button
            type="button"
            onClick={closeSidebar}
            className="
              w-10
              h-10
              rounded-full
              bg-gray-100
              text-gray-700
              flex
              items-center
              justify-center
              hover:bg-gray-200
              transition
            "
            aria-label="Close account menu"
          >
            <X size={21} />
          </button>

        </div>


        {/* =================================================
            SIDEBAR CONTENT
        ================================================= */}

        <div className="p-4">

          <Sidebar
            active={active}
            setActive={handleMenuChange}
          />

        </div>

      </aside>

    </div>
  );
}

