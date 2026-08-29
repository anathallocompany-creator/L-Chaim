
"use client";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function OrdersTable({
  orders = [],
  onView,
  onEdit,
  onDelete,
}) {
  function statusColor(status) {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Confirmed":
        return "bg-blue-100 text-blue-700";

      case "Preparing":
        return "bg-purple-100 text-purple-700";

      case "Ready":
        return "bg-indigo-100 text-indigo-700";

      case "Out for Delivery":
        return "bg-orange-100 text-orange-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  function paymentColor(status) {
    switch (status) {
      case "Paid":
        return "text-green-600";

      case "Awaiting Verification":
        return "text-blue-600";

      case "Pending":
        return "text-yellow-600";

      default:
        return "text-red-600";
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
            Orders
          </h2>

          <p
            className="
              mt-1
              text-xs
              text-gray-500
              sm:text-sm
            "
          >
            Manage customer orders
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
            text-pink-700
            sm:px-4
            sm:py-2
            sm:text-sm
          "
        >
          {orders.length}{" "}
          {orders.length === 1
            ? "Order"
            : "Orders"}
        </span>
      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {orders.length === 0 && (
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
            <Eye
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
            No orders found
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Customer orders will appear here.
          </p>
        </div>
      )}

      {/* =====================================================
          MOBILE / TABLET CARDS
      ====================================================== */}

      {orders.length > 0 && (
        <div className="block lg:hidden">

          <div className="divide-y divide-gray-100">

            {orders.map((order) => (
              <div
                key={order._id}
                className="
                  p-4
                  transition
                  hover:bg-pink-50/40
                  sm:p-5
                "
              >

                {/* =================================================
                    ORDER HEADER
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >

                  <div className="min-w-0">

                    <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                      Order
                    </p>

                    <h3
                      className="
                        mt-1
                        truncate
                        text-sm
                        font-bold
                        text-gray-800
                        sm:text-base
                      "
                    >
                      {order.orderNumber ||
                        "N/A"}
                    </h3>

                  </div>

                  {/* Order Status */}
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
                        order.orderStatus
                      )}
                    `}
                  >
                    {order.orderStatus ||
                      "Unknown"}
                  </span>

                </div>

                {/* =================================================
                    CUSTOMER
                ================================================== */}

                <div
                  className="
                    mt-4
                    rounded-xl
                    bg-gray-50
                    p-3
                  "
                >

                  <p className="text-[11px] uppercase tracking-wide text-gray-400">
                    Customer
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-sm
                      font-semibold
                      text-gray-800
                    "
                  >
                    {order.customer?.name ||
                      "Unknown Customer"}
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-xs
                      text-gray-500
                    "
                  >
                    {order.customer?.phone ||
                      "No phone number"}
                  </p>

                </div>

                {/* =================================================
                    ORDER DETAILS
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

                  {/* Amount */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Amount
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-gray-900
                        sm:text-base
                      "
                    >
                      ₦
                      {Number(
                        order.total || 0
                      ).toLocaleString()}
                    </p>
                  </div>

                  {/* Payment */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Payment
                    </p>

                    <p
                      className={`
                        mt-1
                        truncate
                        text-xs
                        font-medium
                        sm:text-sm
                        ${paymentColor(
                          order.paymentStatus
                        )}
                      `}
                    >
                      {order.paymentStatus ||
                        "Unknown"}
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
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
                          order.orderStatus
                        )}
                      `}
                    >
                      {order.orderStatus ||
                        "Unknown"}
                    </span>
                  </div>

                  {/* Date */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Date
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-medium
                        text-gray-700
                        sm:text-sm
                      "
                    >
                      {order.createdAt
                        ? new Date(
                            order.createdAt
                          ).toLocaleDateString()
                        : "N/A"}
                    </p>
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
                      onView(order)
                    }
                    className="
                      flex
                      min-h-10
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gray-100
                      px-3
                      text-sm
                      font-medium
                      text-gray-700
                      transition
                      hover:bg-gray-200
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
                      onEdit(order)
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
                      onDelete(order)
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

      {orders.length > 0 && (
        <div
          className="
            hidden
            w-full
            overflow-x-auto
            lg:block
          "
        >

          <table className="w-full min-w-[950px]">

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
                  Order
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Customer
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Amount
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Payment
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Date
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-right xl:px-6">
                  Actions
                </th>

              </tr>

            </thead>

            {/* Table Body */}

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order._id}
                  className="
                    border-t
                    border-gray-100
                    transition
                    hover:bg-pink-50
                  "
                >

                  {/* Order */}

                  <td className="px-5 py-5 xl:px-6">

                    <p
                      className="
                        max-w-[150px]
                        truncate
                        font-semibold
                        text-gray-800
                      "
                    >
                      {order.orderNumber ||
                        "N/A"}
                    </p>

                  </td>

                  {/* Customer */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="min-w-0">

                      <p
                        className="
                          max-w-[180px]
                          truncate
                          font-medium
                          text-gray-800
                        "
                      >
                        {order.customer?.name ||
                          "Unknown Customer"}
                      </p>

                      <p
                        className="
                          mt-1
                          max-w-[180px]
                          truncate
                          text-sm
                          text-gray-500
                        "
                      >
                        {order.customer?.phone ||
                          "No phone"}
                      </p>

                    </div>

                  </td>

                  {/* Amount */}

                  <td className="px-5 py-5 xl:px-6">

                    <span className="whitespace-nowrap font-semibold">
                      ₦
                      {Number(
                        order.total || 0
                      ).toLocaleString()}
                    </span>

                  </td>

                  {/* Payment */}

                  <td className="px-5 py-5 xl:px-6">

                    <span
                      className={`
                        whitespace-nowrap
                        text-sm
                        font-medium
                        ${paymentColor(
                          order.paymentStatus
                        )}
                      `}
                    >
                      {order.paymentStatus ||
                        "Unknown"}
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
                          order.orderStatus
                        )}
                      `}
                    >
                      {order.orderStatus ||
                        "Unknown"}
                    </span>

                  </td>

                  {/* Date */}

                  <td className="px-5 py-5 xl:px-6">

                    <span
                      className="
                        whitespace-nowrap
                        text-sm
                        text-gray-600
                      "
                    >
                      {order.createdAt
                        ? new Date(
                            order.createdAt
                          ).toLocaleDateString()
                        : "N/A"}
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
                          onView(order)
                        }
                        aria-label={`View ${
                          order.orderNumber ||
                          "order"
                        }`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-gray-100
                          transition
                          hover:bg-gray-200
                          active:scale-95
                        "
                      >
                        <Eye size={18} />
                      </button>

                      {/* Edit */}

                      <button
                        type="button"
                        onClick={() =>
                          onEdit(order)
                        }
                        aria-label={`Edit ${
                          order.orderNumber ||
                          "order"
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
                          onDelete(order)
                        }
                        aria-label={`Delete ${
                          order.orderNumber ||
                          "order"
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

