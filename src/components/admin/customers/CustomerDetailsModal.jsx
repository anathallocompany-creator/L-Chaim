"use client";

import { X } from "lucide-react";

export default function CustomerDetailsModal({
  open,
  customer,
  onClose,
}) {
  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Customer Details
            </h2>

            <p className="text-gray-500">
              {customer.customerId}
            </p>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="p-8 space-y-8">

          <div>

            <h3 className="font-bold text-lg mb-4">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-semibold">{customer.fullName}</p>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-semibold">{customer.email}</p>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-semibold">{customer.phone}</p>
              </div>

              <div>
                <p className="text-gray-500">Status</p>
                <p className="font-semibold">{customer.status}</p>
              </div>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-4">
              Address
            </h3>

            <div className="bg-gray-50 border rounded-xl p-5">

              <p>{customer.address?.street}</p>

              <p>
                {customer.address?.city},{" "}
                {customer.address?.state}
              </p>

              <p>{customer.address?.country}</p>

              <p>{customer.address?.postalCode}</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-4">
              Statistics
            </h3>

            <div className="grid md:grid-cols-3 gap-5">

              <div className="border rounded-xl p-5">

                <p className="text-gray-500">
                  Total Orders
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {customer.totalOrders}
                </h2>

              </div>

              <div className="border rounded-xl p-5">

                <p className="text-gray-500">
                  Total Spent
                </p>

                <h2 className="text-3xl font-bold mt-2">

                  ₦{Number(customer.totalSpent).toLocaleString()}

                </h2>

              </div>

              <div className="border rounded-xl p-5">

                <p className="text-gray-500">
                  Last Order
                </p>

                <h2 className="text-lg font-semibold mt-2">

                  {customer.lastOrderDate
                    ? new Date(
                        customer.lastOrderDate
                      ).toLocaleDateString()
                    : "No Orders"}

                </h2>

              </div>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-4">
              Preferences
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <p className="text-gray-500">
                  Favourite Category
                </p>

                <p className="font-semibold">
                  {customer.favoriteCategory || "-"}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Favourite Flavour
                </p>

                <p className="font-semibold">
                  {customer.favoriteFlavour || "-"}
                </p>

              </div>

            </div>

          </div>

          {customer.notes && (

            <div>

              <h3 className="font-bold text-lg mb-4">
                Admin Notes
              </h3>

              <div className="border rounded-xl bg-yellow-50 p-5">

                {customer.notes}

              </div>

            </div>

          )}

        </div>

        <div className="border-t px-8 py-6 flex justify-end">

          <button
            onClick={onClose}
            className="bg-[#922b6a] text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  )
}