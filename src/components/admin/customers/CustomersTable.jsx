
"use client";

import {
  Eye,
  Pencil,
  Trash2,
  Users,
} from "lucide-react";

export default function CustomersTable({
  customers = [],
  onView,
  onEdit,
  onDelete,
}) {
  function statusColor(status) {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Inactive":
        return "bg-yellow-100 text-yellow-700";

      case "Blocked":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        bg-white
        shadow-sm
      "
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          gap-4
          border-b
          px-4
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-6
          sm:py-5
        "
      >
        <div className="min-w-0">

          <h2
            className="
              text-lg
              font-bold
              text-gray-800
              sm:text-xl
            "
          >
            Customers
          </h2>

          <p
            className="
              mt-1
              text-xs
              text-gray-500
              sm:text-sm
            "
          >
            All registered customers
          </p>

        </div>

        <span
          className="
            w-fit
            rounded-full
            bg-pink-100
            px-3
            py-1.5
            text-xs
            font-semibold
            text-[#922b6a]
            sm:px-4
            sm:py-2
            sm:text-sm
          "
        >
          {customers.length}{" "}
          {customers.length === 1
            ? "Customer"
            : "Customers"}
        </span>

      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {customers.length === 0 && (
        <div
          className="
            flex
            min-h-[250px]
            flex-col
            items-center
            justify-center
            px-4
            py-16
            text-center
            sm:min-h-[300px]
          "
        >

          <div
            className="
              mb-4
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gray-100
            "
          >
            <Users
              size={26}
              className="text-gray-400"
            />
          </div>

          <h3
            className="
              text-base
              font-semibold
              text-gray-700
              sm:text-lg
            "
          >
            No customers found
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Registered customers will appear here.
          </p>

        </div>
      )}

      {/* =====================================================
          MOBILE / TABLET CARDS
      ====================================================== */}

      {customers.length > 0 && (
        <div className="block lg:hidden">

          <div className="divide-y divide-gray-100">

            {customers.map((customer) => (

              <div
                key={customer._id}
                className="
                  p-4
                  transition
                  hover:bg-pink-50/40
                  sm:p-5
                "
              >

                {/* =================================================
                    CUSTOMER HEADER
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >

                  <div className="flex min-w-0 items-center gap-3">

                    {/* Avatar */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#922b6a]
                        text-base
                        font-bold
                        text-white
                        sm:h-14
                        sm:w-14
                        sm:text-lg
                      "
                    >
                      {customer.firstName?.charAt(0)}
                      {customer.lastName?.charAt(0)}
                    </div>

                    {/* Customer Info */}

                    <div className="min-w-0">

                      <h3
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-gray-800
                          sm:text-base
                        "
                      >
                        {customer.fullName ||
                          `${customer.firstName || ""} ${
                            customer.lastName || ""
                          }`.trim() ||
                          "Unknown Customer"}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-xs
                          text-gray-500
                          sm:text-sm
                        "
                      >
                        {customer.email ||
                          "No email"}
                      </p>

                    </div>

                  </div>

                  {/* Status */}

                  <span
                    className={`
                      shrink-0
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-medium
                      sm:text-xs
                      ${statusColor(
                        customer.status
                      )}
                    `}
                  >
                    {customer.status ||
                      "Unknown"}
                  </span>

                </div>

                {/* =================================================
                    CUSTOMER DETAILS
                ================================================== */}

                <div
                  className="
                    mt-4
                    grid
                    grid-cols-2
                    gap-4
                    sm:grid-cols-4
                  "
                >

                  {/* Phone */}

                  <div>

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        font-medium
                        text-gray-700
                        sm:text-sm
                      "
                    >
                      {customer.phone ||
                        "N/A"}
                    </p>

                  </div>

                  {/* Orders */}

                  <div>

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Orders
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-gray-800
                        sm:text-base
                      "
                    >
                      {customer.totalOrders ??
                        0}
                    </p>

                  </div>

                  {/* Spent */}

                  <div>

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Total Spent
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-sm
                        font-bold
                        text-gray-900
                        sm:text-base
                      "
                    >
                      ₦
                      {Number(
                        customer.totalSpent ||
                          0
                      ).toLocaleString()}
                    </p>

                  </div>

                  {/* Status */}

                  <div>

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Status
                    </p>

                    <span
                      className={`
                        mt-1
                        inline-flex
                        rounded-full
                        px-2
                        py-1
                        text-[11px]
                        font-medium
                        ${statusColor(
                          customer.status
                        )}
                      `}
                    >
                      {customer.status ||
                        "Unknown"}
                    </span>

                  </div>

                </div>

                {/* =================================================
                    ACTIONS
                ================================================== */}

                <div
                  className="
                    mt-4
                    flex
                    gap-2
                    border-t
                    border-gray-100
                    pt-4
                  "
                >

                  {/* View */}

                  <button
                    type="button"
                    onClick={() =>
                      onView(customer)
                    }
                    className="
                      flex
                      min-h-10
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-green-50
                      px-3
                      text-sm
                      font-medium
                      text-green-600
                      transition
                      hover:bg-green-100
                      active:scale-[0.98]
                    "
                  >
                    <Eye size={16} />

                    <span>View</span>
                  </button>

                  {/* Edit */}

                  <button
                    type="button"
                    onClick={() =>
                      onEdit(customer)
                    }
                    className="
                      flex
                      min-h-10
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-50
                      px-3
                      text-sm
                      font-medium
                      text-blue-600
                      transition
                      hover:bg-blue-100
                      active:scale-[0.98]
                    "
                  >
                    <Pencil size={16} />

                    <span>Edit</span>
                  </button>

                  {/* Delete */}

                  <button
                    type="button"
                    onClick={() =>
                      onDelete(customer)
                    }
                    className="
                      flex
                      min-h-10
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-red-50
                      px-3
                      text-sm
                      font-medium
                      text-red-600
                      transition
                      hover:bg-red-100
                      active:scale-[0.98]
                    "
                  >
                    <Trash2 size={16} />

                    <span>Delete</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

      {/* =====================================================
          DESKTOP TABLE
      ====================================================== */}

      {customers.length > 0 && (
        <div
          className="
            hidden
            w-full
            overflow-x-auto
            lg:block
          "
        >

          <table className="w-full min-w-[900px]">

            {/* Table Header */}

            <thead className="bg-gray-50">

              <tr
                className="
                  text-left
                  text-sm
                  text-gray-600
                "
              >

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Customer
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Phone
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Orders
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Spent
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-right xl:px-6">
                  Actions
                </th>

              </tr>

            </thead>

            {/* Table Body */}

            <tbody>

              {customers.map((customer) => (

                <tr
                  key={customer._id}
                  className="
                    border-t
                    border-gray-100
                    transition
                    hover:bg-pink-50
                  "
                >

                  {/* Customer */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="flex items-center gap-3 xl:gap-4">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#922b6a]
                          text-sm
                          font-bold
                          text-white
                          xl:h-12
                          xl:w-12
                          xl:text-base
                        "
                      >
                        {customer.firstName?.charAt(0)}
                        {customer.lastName?.charAt(0)}
                      </div>

                      <div className="min-w-0">

                        <h3
                          className="
                            max-w-[180px]
                            truncate
                            font-semibold
                            text-gray-800
                            xl:max-w-[240px]
                          "
                        >
                          {customer.fullName ||
                            "Unknown Customer"}
                        </h3>

                        <p
                          className="
                            mt-1
                            max-w-[180px]
                            truncate
                            text-sm
                            text-gray-500
                            xl:max-w-[240px]
                          "
                        >
                          {customer.email ||
                            "No email"}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Phone */}

                  <td className="px-5 py-5 xl:px-6">

                    <span
                      className="
                        whitespace-nowrap
                        text-sm
                        text-gray-700
                      "
                    >
                      {customer.phone ||
                        "N/A"}
                    </span>

                  </td>

                  {/* Orders */}

                  <td className="px-5 py-5 xl:px-6">

                    <span className="font-medium">
                      {customer.totalOrders ??
                        0}
                    </span>

                  </td>

                  {/* Spent */}

                  <td className="px-5 py-5 xl:px-6">

                    <span className="whitespace-nowrap font-semibold">
                      ₦
                      {Number(
                        customer.totalSpent ||
                          0
                      ).toLocaleString()}
                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-5 py-5 xl:px-6">

                    <span
                      className={`
                        inline-flex
                        whitespace-nowrap
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        ${statusColor(
                          customer.status
                        )}
                      `}
                    >
                      {customer.status ||
                        "Unknown"}
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-5 py-5 xl:px-6">

                    <div
                      className="
                        flex
                        justify-end
                        gap-2
                        xl:gap-3
                      "
                    >

                      {/* View */}

                      <button
                        type="button"
                        onClick={() =>
                          onView(customer)
                        }
                        aria-label={`View ${
                          customer.fullName ||
                          "customer"
                        }`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-green-50
                          transition
                          hover:bg-green-100
                          active:scale-95
                        "
                      >
                        <Eye
                          size={18}
                          className="text-green-600"
                        />
                      </button>

                      {/* Edit */}

                      <button
                        type="button"
                        onClick={() =>
                          onEdit(customer)
                        }
                        aria-label={`Edit ${
                          customer.fullName ||
                          "customer"
                        }`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                          transition
                          hover:bg-blue-100
                          active:scale-95
                        "
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </button>

                      {/* Delete */}

                      <button
                        type="button"
                        onClick={() =>
                          onDelete(customer)
                        }
                        aria-label={`Delete ${
                          customer.fullName ||
                          "customer"
                        }`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-red-50
                          transition
                          hover:bg-red-100
                          active:scale-95
                        "
                      >
                        <Trash2
                          size={18}
                          className="text-red-600"
                        />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

