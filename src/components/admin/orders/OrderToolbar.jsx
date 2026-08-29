"use client";

import {
  Search,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

export default function OrderToolbar({
  search,
  setSearch,
  status,
  setStatus,
  payment,
  setPayment,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white rounded-2xl shadow border p-6 mb-8">

      <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex flex-col md:flex-row gap-4 flex-1">

          {/* Search */}

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                h-12
                pl-12
                pr-4
                rounded-xl
                border
                outline-none
                focus:border-[#922b6a]
              "
            />

          </div>

          {/* Order Status */}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
              h-12
              px-4
              rounded-xl
              border
              outline-none
              focus:border-[#922b6a]
            "
          >

            <option value="All">
              All Status
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Processing">
              Processing
            </option>

            <option value="Baking">
              Baking
            </option>

            <option value="Ready">
              Ready
            </option>

            <option value="Out for Delivery">
              Out for Delivery
            </option>

            <option value="Delivered">
              Delivered
            </option>

            <option value="Cancelled">
              Cancelled
            </option>

          </select>

          {/* Payment */}

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="
              h-12
              px-4
              rounded-xl
              border
              outline-none
              focus:border-[#922b6a]
            "
          >

            <option value="All">
              All Payments
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Paid">
              Paid
            </option>

            <option value="Failed">
              Failed
            </option>

          </select>

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
              h-12
              px-4
              rounded-xl
              border
              outline-none
              focus:border-[#922b6a]
            "
          >

            <option value="latest">
              Latest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="highest">
              Highest Total
            </option>

            <option value="lowest">
              Lowest Total
            </option>

          </select>

        </div>

      </div>

      <div className="mt-5 flex items-center gap-2 text-gray-500">

        <SlidersHorizontal size={16} />

        <span className="text-sm">
          Search, filter and sort customer orders.
        </span>

      </div>

    </div>
  );
}