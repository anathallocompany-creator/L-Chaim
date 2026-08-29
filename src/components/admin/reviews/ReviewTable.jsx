
"use client";

import Image from "next/image";
import {
  Pencil,
  Trash2,
  Eye,
  Star,
  MessageSquare,
} from "lucide-react";

export default function ReviewTable({
  reviews = [],
  onView,
  onEdit,
  onDelete,
}) {
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
            Reviews
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Manage customer reviews
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
          {reviews.length}{" "}
          {reviews.length === 1 ? "Review" : "Reviews"}
        </span>

      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {reviews.length === 0 && (
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
            <MessageSquare
              size={26}
              className="text-gray-400"
            />
          </div>

          <h3 className="text-base font-semibold text-gray-700 sm:text-lg">
            No Reviews Found
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Customer reviews will appear here.
          </p>
        </div>
      )}

      {/* =====================================================
          MOBILE / TABLET CARDS
      ====================================================== */}

      {reviews.length > 0 && (
        <div className="block lg:hidden">

          <div className="divide-y divide-gray-100">

            {reviews.map((review) => (

              <div
                key={review._id}
                className="
                  p-4
                  transition
                  hover:bg-gray-50
                  sm:p-5
                "
              >

                {/* =================================================
                    PRODUCT + STATUS
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

                    {/* Product Image */}

                    <div
                      className="
                        relative
                        h-14
                        w-14
                        shrink-0
                        overflow-hidden
                        rounded-xl
                        border
                        bg-gray-100
                        sm:h-16
                        sm:w-16
                      "
                    >
                      <Image
                        src={
                          review.product?.image?.url ||
                          "/placeholder.jpg"
                        }
                        alt={
                          review.product?.name ||
                          "Product"
                        }
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    {/* Product */}

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
                        {review.product?.name ||
                          "Unknown Product"}
                      </h3>

                      {/* Rating */}

                      <div className="mt-1 flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={
                              i < review.rating
                                ? "currentColor"
                                : "none"
                            }
                            className={
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>

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
                      ${
                        review.approved
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {review.approved
                      ? "Approved"
                      : "Pending"}
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

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {review.customer?.name ||
                      "Unknown Customer"}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-gray-500 sm:text-sm">
                    {review.customer?.email ||
                      "No email"}
                  </p>

                </div>

                {/* =================================================
                    REVIEW
                ================================================== */}

                <div className="mt-4">

                  <p className="mb-1 text-[11px] uppercase tracking-wide text-gray-400">
                    Review
                  </p>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-gray-700
                    "
                  >
                    {review.comment ||
                      "No review comment."}
                  </p>

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
                    onClick={() => onView(review)}
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
                    onClick={() => onEdit(review)}
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
                    onClick={() => onDelete(review)}
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

      {reviews.length > 0 && (
        <div
          className="
            hidden
            w-full
            overflow-x-auto
            lg:block
          "
        >

          <table className="w-full min-w-[1000px]">

            {/* Header */}

            <thead className="bg-gray-50">

              <tr className="text-left text-sm text-gray-600">

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Product
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Customer
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Rating
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Review
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-right xl:px-6">
                  Actions
                </th>

              </tr>

            </thead>

            {/* Body */}

            <tbody>

              {reviews.map((review) => (

                <tr
                  key={review._id}
                  className="
                    border-t
                    border-gray-100
                    transition
                    hover:bg-gray-50
                  "
                >

                  {/* Product */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          relative
                          h-14
                          w-14
                          shrink-0
                          overflow-hidden
                          rounded-xl
                          border
                          bg-gray-100
                        "
                      >
                        <Image
                          src={
                            review.product?.image?.url ||
                            "/placeholder.jpg"
                          }
                          alt={
                            review.product?.name ||
                            "Product"
                          }
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>

                      <h3
                        className="
                          max-w-[180px]
                          truncate
                          font-semibold
                          text-gray-800
                          xl:max-w-[240px]
                        "
                      >
                        {review.product?.name ||
                          "Unknown Product"}
                      </h3>

                    </div>

                  </td>

                  {/* Customer */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="min-w-0">

                      <h4 className="font-medium text-gray-800">
                        {review.customer?.name ||
                          "Unknown Customer"}
                      </h4>

                      <p
                        className="
                          mt-1
                          max-w-[200px]
                          truncate
                          text-sm
                          text-gray-500
                          xl:max-w-[250px]
                        "
                      >
                        {review.customer?.email ||
                          "No email"}
                      </p>

                    </div>

                  </td>

                  {/* Rating */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="flex gap-0.5">

                      {[...Array(5)].map((_, i) => (

                        <Star
                          key={i}
                          size={16}
                          fill={
                            i < review.rating
                              ? "currentColor"
                              : "none"
                          }
                          className={
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        />

                      ))}

                    </div>

                  </td>

                  {/* Review */}

                  <td className="px-5 py-5 xl:px-6">

                    <p
                      title={review.comment}
                      className="
                        max-w-[220px]
                        truncate
                        text-sm
                        text-gray-700
                        xl:max-w-sm
                      "
                    >
                      {review.comment ||
                        "No review comment."}
                    </p>

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
                        ${
                          review.approved
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {review.approved
                        ? "Approved"
                        : "Pending"}
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
                        onClick={() => onView(review)}
                        aria-label="View review"
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
                        onClick={() => onEdit(review)}
                        aria-label="Edit review"
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
                        onClick={() => onDelete(review)}
                        aria-label="Delete review"
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

