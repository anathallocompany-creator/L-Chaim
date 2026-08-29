
"use client";

import { Search, Filter, RefreshCw } from "lucide-react";

export default function MessageToolbar({
  search,
  setSearch,
  filter,
  setFilter,
  onRefresh,
}) {
  return (
    <div
      className="
        w-full
        min-w-0
        rounded-2xl
        border
        bg-white
        p-4
        shadow-sm
        sm:p-5
        lg:p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="min-w-0">

          <h1
            className="
              text-xl
              font-bold
              text-gray-800
              sm:text-2xl
            "
          >
            Messages
          </h1>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
              sm:text-base
            "
          >
            Manage contact enquiries and booking requests
          </p>

        </div>

        {/* =====================================================
            CONTROLS
        ====================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:flex
            lg:w-auto
          "
        >

          {/* Search */}

          <div
            className="
              relative
              w-full
              sm:col-span-2
              lg:w-64
              xl:w-72
            "
          >

            <Search
              size={18}
              className="
                pointer-events-none
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-gray-400
                sm:left-4
              "
            />

            <input
              type="text"
              placeholder="Search messages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                h-11
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-4
                text-sm
                text-gray-700
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#922b6a]
                focus:ring-2
                focus:ring-[#922b6a]/10
                sm:h-12
                sm:pl-11
              "
            />

          </div>

          {/* Filter */}

          <div
            className="
              relative
              w-full
              lg:w-48
            "
          >

            <Filter
              size={18}
              className="
                pointer-events-none
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-gray-400
                sm:left-4
              "
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="
                h-11
                w-full
                cursor-pointer
                appearance-none
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-9
                text-sm
                text-gray-700
                outline-none
                transition
                focus:border-[#922b6a]
                focus:ring-2
                focus:ring-[#922b6a]/10
                sm:h-12
                sm:pl-11
              "
            >
              <option value="all">
                All Messages
              </option>

              <option value="New">
                New
              </option>

              <option value="Read">
                Read
              </option>

              <option value="Replied">
                Replied
              </option>

              <option value="Archived">
                Archived
              </option>

              <option value="contact">
                Contact
              </option>

              <option value="booking">
                Booking
              </option>
            </select>

            {/* Custom arrow */}

            <span
              className="
                pointer-events-none
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            >
              ▾
            </span>

          </div>

          {/* Refresh */}

          <button
            type="button"
            onClick={onRefresh}
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#922b6a]
              px-5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#7b2358]
              active:scale-[0.98]
              sm:h-12
              lg:w-auto
              lg:whitespace-nowrap
            "
          >

            <RefreshCw size={18} />

            <span>
              Refresh
            </span>

          </button>

        </div>

      </div>
    </div>
  );
}

