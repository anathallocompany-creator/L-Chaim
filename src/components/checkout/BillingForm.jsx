
"use client";

export default function BillingForm({
  customer,
  setCustomer,
  shippingAddress,
  setShippingAddress,
  notes,
  setNotes,
}) {
  return (
    <div className="w-full">
      {/* =========================
          TITLE
      ========================= */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          font-bold
          text-gray-900
          mb-6
          sm:mb-8
          md:mb-10
        "
      >
        Billing Details
      </h2>

      {/* =========================
          NAME + EMAIL
      ========================= */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          sm:gap-5
          md:gap-6
        "
      >
        {/* Name */}
        <div className="w-full">
          <label
            className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2
            "
          >
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={customer.name}
            onChange={(e) =>
              setCustomer({
                ...customer,
                name: e.target.value,
              })
            }
            className="
              w-full
              min-w-0
              border
              border-gray-300
              p-3
              sm:p-4
              rounded-lg
              outline-none
              focus:border-[#a8418b]
              focus:ring-2
              focus:ring-[#a8418b]/20
              transition
            "
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <label
            className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2
            "
          >
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={customer.email}
            onChange={(e) =>
              setCustomer({
                ...customer,
                email: e.target.value,
              })
            }
            className="
              w-full
              min-w-0
              border
              border-gray-300
              p-3
              sm:p-4
              rounded-lg
              outline-none
              focus:border-[#a8418b]
              focus:ring-2
              focus:ring-[#a8418b]/20
              transition
            "
          />
        </div>
      </div>

      {/* =========================
          COMPANY
      ========================= */}
      <div className="mt-5 sm:mt-6">
        <label
          className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
          "
        >
          Company
          <span className="text-gray-400 font-normal">
            {" "} (Optional)
          </span>
        </label>

        <input
          type="text"
          placeholder="Company name"
          className="
            w-full
            min-w-0
            border
            border-gray-300
            p-3
            sm:p-4
            rounded-lg
            outline-none
            focus:border-[#a8418b]
            focus:ring-2
            focus:ring-[#a8418b]/20
            transition
          "
        />
      </div>

      {/* =========================
          STREET ADDRESS
      ========================= */}
      <div className="mt-5 sm:mt-6">
        <label
          className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
          "
        >
          Street Address
        </label>

        <input
          type="text"
          placeholder="Enter your street address"
          value={shippingAddress.address}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              address: e.target.value,
            })
          }
          className="
            w-full
            min-w-0
            border
            border-gray-300
            p-3
            sm:p-4
            rounded-lg
            outline-none
            focus:border-[#a8418b]
            focus:ring-2
            focus:ring-[#a8418b]/20
            transition
          "
        />
      </div>

      {/* =========================
          CITY + STATE
      ========================= */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          sm:gap-5
          md:gap-6
          mt-5
          sm:mt-6
        "
      >
        {/* City */}
        <div>
          <label
            className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2
            "
          >
            City
          </label>

          <input
            type="text"
            placeholder="Enter city"
            value={shippingAddress.city}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                city: e.target.value,
              })
            }
            className="
              w-full
              min-w-0
              border
              border-gray-300
              p-3
              sm:p-4
              rounded-lg
              outline-none
              focus:border-[#a8418b]
              focus:ring-2
              focus:ring-[#a8418b]/20
              transition
            "
          />
        </div>

        {/* State */}
        <div>
          <label
            className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2
            "
          >
            State
          </label>

          <input
            type="text"
            placeholder="Enter state"
            value={shippingAddress.state}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                state: e.target.value,
              })
            }
            className="
              w-full
              min-w-0
              border
              border-gray-300
              p-3
              sm:p-4
              rounded-lg
              outline-none
              focus:border-[#a8418b]
              focus:ring-2
              focus:ring-[#a8418b]/20
              transition
            "
          />
        </div>
      </div>

      {/* =========================
          COUNTRY
      ========================= */}
      <div className="mt-5 sm:mt-6">
        <label
          className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
          "
        >
          Country
        </label>

        <input
          type="text"
          placeholder="Enter country"
          value={shippingAddress.country}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              country: e.target.value,
            })
          }
          className="
            w-full
            min-w-0
            border
            border-gray-300
            p-3
            sm:p-4
            rounded-lg
            outline-none
            focus:border-[#a8418b]
            focus:ring-2
            focus:ring-[#a8418b]/20
            transition
          "
        />
      </div>

      {/* =========================
          PHONE
      ========================= */}
      <div className="mt-5 sm:mt-6">
        <label
          className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
          "
        >
          Phone Number
        </label>

        <input
          type="tel"
          placeholder="Enter your phone number"
          value={customer.phone}
          onChange={(e) =>
            setCustomer({
              ...customer,
              phone: e.target.value,
            })
          }
          className="
            w-full
            min-w-0
            border
            border-gray-300
            p-3
            sm:p-4
            rounded-lg
            outline-none
            focus:border-[#a8418b]
            focus:ring-2
            focus:ring-[#a8418b]/20
            transition
          "
        />
      </div>

      {/* =========================
          ORDER NOTES
      ========================= */}
      <div className="mt-5 sm:mt-6">
        <label
          className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
          "
        >
          Order Notes
          <span className="text-gray-400 font-normal">
            {" "} (Optional)
          </span>
        </label>

        <textarea
          rows={4}
          placeholder="Add any special instructions for your order..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="
            w-full
            min-w-0
            border
            border-gray-300
            p-3
            sm:p-4
            rounded-lg
            outline-none
            resize-y
            focus:border-[#a8418b]
            focus:ring-2
            focus:ring-[#a8418b]/20
            transition
          "
        />
      </div>
    </div>
  );
}

