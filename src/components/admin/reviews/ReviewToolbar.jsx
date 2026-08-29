
"use client";

import { Search, Plus, Filter } from "lucide-react";

export default function ReviewToolbar({
  search,
  setSearch,
  status,
  setStatus,
  onAdd,
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
            SEARCH
        ====================================================== */}

        <div
          className="
            relative
            w-full
            lg:max-w-xl
            lg:flex-1
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
            placeholder="Search by customer, product or review..."
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

          {/* Status Filter */}

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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
              <option value="All">
                All Reviews
              </option>

              <option value="Approved">
                Approved
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Rejected">
                Rejected
              </option>

              <option value="Featured">
                Featured
              </option>
            </select>

            {/* Custom select arrow */}

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

          {/* =================================================
              ADD REVIEW
          ================================================== */}

          <button
            type="button"
            onClick={onAdd}
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
              hover:bg-[#7d225a]
              active:scale-[0.98]
              sm:h-12
              lg:w-auto
              lg:whitespace-nowrap
            "
          >
            <Plus size={18} />

            <span>
              Add Review
            </span>
          </button>

        </div>

      </div>
    </div>
  );
}

