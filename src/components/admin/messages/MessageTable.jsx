
"use client";

import {
  Eye,
  Reply,
  Trash2,
  Mail,
  CalendarDays,
} from "lucide-react";

export default function MessageTable({
  messages = [],
  onView,
  onReply,
  onDelete,
}) {
  function badge(type) {
    if (type === "Booking") {
      return "bg-pink-100 text-pink-700";
    }

    return "bg-blue-100 text-blue-700";
  }

  function statusBadge(message) {
    if (!message.isRead) {
      return "bg-red-100 text-red-600";
    }

    if (message.archived) {
      return "bg-gray-200 text-gray-700";
    }

    return "bg-green-100 text-green-700";
  }

  function statusText(message) {
    if (!message.isRead) {
      return "New";
    }

    if (message.archived) {
      return "Archived";
    }

    return "Read";
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
            Messages
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Contact & Booking enquiries
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
          {messages.length}{" "}
          {messages.length === 1 ? "Message" : "Messages"}
        </span>
      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {messages.length === 0 && (
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
            <Mail
              size={26}
              className="text-gray-400"
            />
          </div>

          <h3 className="text-base font-semibold text-gray-700 sm:text-lg">
            No messages found
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Contact and booking enquiries will appear here.
          </p>
        </div>
      )}

      {/* =====================================================
          MOBILE / TABLET CARDS
      ====================================================== */}

      {messages.length > 0 && (
        <div className="block lg:hidden">

          <div className="divide-y divide-gray-100">

            {messages.map((message) => (

              <div
                key={message._id}
                className={`
                  p-4
                  transition
                  sm:p-5
                  ${
                    !message.isRead
                      ? "bg-pink-50"
                      : "bg-white hover:bg-gray-50"
                  }
                `}
              >

                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >

                  {/* Customer */}

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      {!message.isRead && (
                        <span
                          className="
                            h-2
                            w-2
                            shrink-0
                            rounded-full
                            bg-pink-600
                          "
                        />
                      )}

                      <h3
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-gray-800
                          sm:text-base
                        "
                      >
                        {message.name}
                      </h3>

                    </div>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      {message.email}
                    </p>

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
                      ${statusBadge(message)}
                    `}
                  >
                    {statusText(message)}
                  </span>

                </div>

                {/* =================================================
                    SUBJECT
                ================================================== */}

                <div className="mt-4">

                  <p className="mb-1 text-[11px] uppercase tracking-wide text-gray-400">
                    Subject
                  </p>

                  <div className="flex min-w-0 items-center gap-2">

                    <Mail
                      size={16}
                      className="shrink-0 text-gray-400"
                    />

                    <p
                      className="
                        truncate
                        text-sm
                        font-medium
                        text-gray-800
                        sm:text-base
                      "
                    >
                      {message.subject || "No Subject"}
                    </p>

                  </div>

                </div>

                {/* =================================================
                    TYPE + DATE
                ================================================== */}

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium
                      ${badge(message.type)}
                    `}
                  >
                    {message.type || "Contact"}
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-xs
                      text-gray-500
                      sm:text-sm
                    "
                  >
                    <CalendarDays size={15} />

                    <span>
                      {new Date(
                        message.createdAt
                      ).toLocaleDateString()}
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
                    border-gray-200
                    pt-4
                  "
                >

                  {/* View */}

                  <button
                    type="button"
                    onClick={() => onView(message)}
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
                    <Eye size={16} />
                    <span>View</span>
                  </button>

                  {/* Reply */}

                  <button
                    type="button"
                    onClick={() => onReply(message)}
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
                    <Reply size={16} />
                    <span>Reply</span>
                  </button>

                  {/* Delete */}

                  <button
                    type="button"
                    onClick={() => onDelete(message)}
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

      {messages.length > 0 && (
        <div
          className="
            hidden
            w-full
            overflow-x-auto
            lg:block
          "
        >

          <table className="w-full min-w-[1000px]">

            <thead className="bg-gray-50">

              <tr className="text-left text-sm text-gray-600">

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Customer
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Subject
                </th>

                <th className="whitespace-nowrap px-5 py-4 xl:px-6">
                  Type
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

            <tbody>

              {messages.map((message) => (

                <tr
                  key={message._id}
                  className={`
                    border-t
                    border-gray-100
                    transition
                    hover:bg-gray-50
                    ${
                      !message.isRead
                        ? "bg-pink-50"
                        : ""
                    }
                  `}
                >

                  {/* Customer */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="min-w-0">

                      <div className="flex items-center gap-2">

                        {!message.isRead && (
                          <span
                            className="
                              h-2
                              w-2
                              shrink-0
                              rounded-full
                              bg-pink-600
                            "
                          />
                        )}

                        <h3 className="truncate font-semibold text-gray-800">
                          {message.name}
                        </h3>

                      </div>

                      <p
                        className="
                          mt-1
                          max-w-[220px]
                          truncate
                          text-sm
                          text-gray-500
                        "
                      >
                        {message.email}
                      </p>

                    </div>

                  </td>

                  {/* Subject */}

                  <td className="px-5 py-5 xl:px-6">

                    <div className="flex min-w-0 items-center gap-2">

                      <Mail
                        size={16}
                        className="shrink-0 text-gray-400"
                      />

                      <span
                        className="
                          max-w-[250px]
                          truncate
                          text-sm
                          text-gray-700
                        "
                        title={message.subject || "No Subject"}
                      >
                        {message.subject || "No Subject"}
                      </span>

                    </div>

                  </td>

                  {/* Type */}

                  <td className="px-5 py-5 xl:px-6">

                    <span
                      className={`
                        inline-flex
                        whitespace-nowrap
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        ${badge(message.type)}
                      `}
                    >
                      {message.type || "Contact"}
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
                        ${statusBadge(message)}
                      `}
                    >
                      {statusText(message)}
                    </span>

                  </td>

                  {/* Date */}

                  <td className="px-5 py-5 xl:px-6">

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        whitespace-nowrap
                        text-sm
                        text-gray-600
                      "
                    >
                      <CalendarDays size={16} />

                      {new Date(
                        message.createdAt
                      ).toLocaleDateString()}
                    </div>

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
                        onClick={() => onView(message)}
                        aria-label="View message"
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
                        <Eye
                          size={18}
                          className="text-blue-600"
                        />
                      </button>

                      {/* Reply */}

                      <button
                        type="button"
                        onClick={() => onReply(message)}
                        aria-label="Reply to message"
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
                        <Reply
                          size={18}
                          className="text-green-600"
                        />
                      </button>

                      {/* Delete */}

                      <button
                        type="button"
                        onClick={() => onDelete(message)}
                        aria-label="Delete message"
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

