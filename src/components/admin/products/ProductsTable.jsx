
"use client";

import Image from "next/image";
import {
  Pencil,
  Trash2,
  Star,
  Package,
} from "lucide-react";

export default function ProductsTable({
  products = [],
  onEdit,
  onDelete,
}) {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border bg-white shadow-sm">

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
            Products
          </h2>

          <p
            className="
              mt-1
              text-xs
              text-gray-500
              sm:text-sm
            "
          >
            Manage all cakes and desserts
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
          {products.length}{" "}
          {products.length === 1
            ? "Product"
            : "Products"}
        </span>
      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {products.length === 0 && (
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
          <Package
            size={42}
            className="mb-4 text-gray-300"
          />

          <h3 className="text-base font-semibold text-gray-700 sm:text-lg">
            No products found
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Try changing your filters or add a
            new product.
          </p>
        </div>
      )}

      {/* =====================================================
          MOBILE PRODUCT CARDS
      ====================================================== */}

      {products.length > 0 && (
        <div className="block lg:hidden">
          <div className="divide-y divide-gray-100">
            {products.map((product) => (
              <div
                key={
                  product._id ||
                  product.id
                }
                className="
                  p-4
                  transition
                  hover:bg-pink-50/40
                  sm:p-5
                "
              >
                {/* Product Top */}
                <div className="flex gap-3 sm:gap-4">

                  {/* Image */}
                  <div
                    className="
                      relative
                      h-20
                      w-20
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-100
                      sm:h-24
                      sm:w-24
                    "
                  >
                    <Image
                      src={
                        product.image?.url ||
                        "/placeholder.jpg"
                      }
                      alt={
                        product.name ||
                        "Product"
                      }
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-2">

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
                          {product.name ||
                            "Unnamed Product"}
                        </h3>

                        <p
                          className="
                            mt-1
                            truncate
                            text-xs
                            text-gray-500
                          "
                        >
                          SKU:{" "}
                          {product.sku ||
                            "N/A"}
                        </p>
                      </div>

                      {/* Featured */}
                      {product.featured && (
                        <Star
                          size={18}
                          fill="currentColor"
                          className="
                            shrink-0
                            text-yellow-500
                          "
                        />
                      )}
                    </div>

                    {/* Price */}
                    <div className="mt-2">
                      <p
                        className="
                          text-base
                          font-bold
                          text-gray-900
                          sm:text-lg
                        "
                      >
                        ₦
                        {Number(
                          product.price || 0
                        ).toLocaleString()}
                      </p>

                      {product.oldPrice >
                        0 && (
                        <p
                          className="
                            text-xs
                            text-gray-400
                            line-through
                          "
                        >
                          ₦
                          {Number(
                            product.oldPrice
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  className="
                    mt-4
                    grid
                    grid-cols-2
                    gap-3
                    sm:grid-cols-4
                  "
                >

                  {/* Category */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Category
                    </p>

                    <span
                      className="
                        mt-1
                        block
                        truncate
                        text-xs
                        font-medium
                        text-gray-700
                        sm:text-sm
                      "
                    >
                      {product.category ||
                        "N/A"}
                    </span>
                  </div>

                  {/* Stock */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Stock
                    </p>

                    <div
                      className="
                        mt-1
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        font-medium
                        text-gray-700
                        sm:text-sm
                      "
                    >
                      <Package
                        size={15}
                      />

                      {product.stock ??
                        0}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Status
                    </p>

                    <div className="mt-1">
                      {product.inStock ? (
                        <span
                          className="
                            inline-flex
                            rounded-full
                            bg-green-100
                            px-2
                            py-1
                            text-[11px]
                            font-medium
                            text-green-700
                            sm:text-xs
                          "
                        >
                          In Stock
                        </span>
                      ) : (
                        <span
                          className="
                            inline-flex
                            rounded-full
                            bg-red-100
                            px-2
                            py-1
                            text-[11px]
                            font-medium
                            text-red-700
                            sm:text-xs
                          "
                        >
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Featured */}
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Featured
                    </p>

                    <div className="mt-1">
                      {product.featured ? (
                        <span className="text-xs font-medium text-yellow-600 sm:text-sm">
                          Yes
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400 sm:text-sm">
                          No
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
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
                  <button
                    type="button"
                    onClick={() =>
                      onEdit(product)
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
                      px-4
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

                  <button
                    type="button"
                    onClick={() =>
                      onDelete(product)
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
                      px-4
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

      {products.length > 0 && (
        <div className="hidden w-full overflow-x-auto lg:block">

          <table className="w-full min-w-[900px]">

            {/* Table Header */}
            <thead className="bg-gray-50">
              <tr className="text-left text-sm text-gray-600">

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Product
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Category
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Price
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Stock
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Featured
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-right xl:px-6">
                  Actions
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {products.map((product) => (
                <tr
                  key={
                    product._id ||
                    product.id
                  }
                  className="
                    border-t
                    border-gray-100
                    transition
                    hover:bg-pink-50
                  "
                >

                  {/* Product */}
                  <td className="px-5 py-5 xl:px-6">
                    <div className="flex items-center gap-3 xl:gap-4">

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
                          xl:h-16
                          xl:w-16
                        "
                      >
                        <Image
                          src={
                            product.image?.url ||
                            "/placeholder.jpg"
                          }
                          alt={
                            product.name ||
                            "Product"
                          }
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3
                          className="
                            max-w-[180px]
                            truncate
                            font-semibold
                            text-gray-800
                            xl:max-w-[250px]
                          "
                        >
                          {product.name ||
                            "Unnamed Product"}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          SKU:{" "}
                          {product.sku ||
                            "N/A"}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-5 xl:px-6">
                    <span
                      className="
                        inline-block
                        max-w-[150px]
                        truncate
                        rounded-full
                        bg-gray-100
                        px-3
                        py-1
                        text-sm
                      "
                    >
                      {product.category ||
                        "N/A"}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-5 py-5 xl:px-6">
                    <div>
                      <p className="whitespace-nowrap text-base font-bold xl:text-lg">
                        ₦
                        {Number(
                          product.price || 0
                        ).toLocaleString()}
                      </p>

                      {product.oldPrice >
                        0 && (
                        <p className="whitespace-nowrap text-sm text-gray-400 line-through">
                          ₦
                          {Number(
                            product.oldPrice
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </td>

                  {/* Stock */}
                  <td className="px-5 py-5 xl:px-6">
                    <div className="flex items-center gap-2">
                      <Package
                        size={16}
                        className="shrink-0"
                      />

                      <span>
                        {product.stock ??
                          0}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-5 xl:px-6">
                    {product.inStock ? (
                      <span
                        className="
                          inline-flex
                          whitespace-nowrap
                          rounded-full
                          bg-green-100
                          px-3
                          py-1
                          text-sm
                          text-green-700
                        "
                      >
                        In Stock
                      </span>
                    ) : (
                      <span
                        className="
                          inline-flex
                          whitespace-nowrap
                          rounded-full
                          bg-red-100
                          px-3
                          py-1
                          text-sm
                          text-red-700
                        "
                      >
                        Out of Stock
                      </span>
                    )}
                  </td>

                  {/* Featured */}
                  <td className="px-5 py-5 xl:px-6">
                    {product.featured ? (
                      <span
                        className="
                          flex
                          items-center
                          gap-2
                          whitespace-nowrap
                          text-yellow-500
                        "
                      >
                        <Star
                          size={18}
                          fill="currentColor"
                        />

                        Featured
                      </span>
                    ) : (
                      <span className="text-gray-400">
                        —
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-5 xl:px-6">
                    <div className="flex justify-end gap-2 xl:gap-3">

                      <button
                        type="button"
                        onClick={() =>
                          onEdit(product)
                        }
                        aria-label={`Edit ${
                          product.name ||
                          "product"
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

                      <button
                        type="button"
                        onClick={() =>
                          onDelete(product)
                        }
                        aria-label={`Delete ${
                          product.name ||
                          "product"
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

