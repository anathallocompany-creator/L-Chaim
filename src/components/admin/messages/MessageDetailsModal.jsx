"use client";

import {
  X,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Users,
  Cake,
  MessageSquare,
  Reply,
  Archive,
} from "lucide-react";

export default function MessageDetailsModal({
  open,
  message,
  onClose,
  onReply,
  onArchive,
}) {
  if (!open || !message) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              Message Details
            </h2>

            <p className="text-gray-500 mt-1 capitalize">
              {message.type} Message
            </p>

          </div>

          <button onClick={onClose}>
            <X size={24} />
          </button>

        </div>

        <div className="p-8 space-y-8">

          {/* Customer */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Customer Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex gap-3">

                <Mail className="text-[#922b6a]" />

                <div>

                  <p className="text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    {message.email}
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Phone className="text-[#922b6a]" />

                <div>

                  <p className="text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold">
                    {message.phone || "-"}
                  </p>

                </div>

              </div>

              <div>

                <p className="text-gray-500">
                  Name
                </p>

                <p className="font-semibold">
                  {message.name}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Status
                </p>

                <span className="inline-block mt-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {message.status}
                </span>

              </div>

            </div>

          </div>

          {/* Booking Details */}

          {message.type === "booking" && (

            <div>

              <h3 className="font-bold text-lg mb-5">
                Booking Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex gap-3">

                  <Cake className="text-[#922b6a]" />

                  <div>

                    <p className="text-gray-500">
                      Event
                    </p>

                    <p className="font-semibold">
                      {message.booking?.eventType}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Calendar className="text-[#922b6a]" />

                  <div>

                    <p className="text-gray-500">
                      Date
                    </p>

                    <p className="font-semibold">
                      {message.booking?.date
                        ? new Date(
                            message.booking.date
                          ).toLocaleDateString()
                        : "-"}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Users className="text-[#922b6a]" />

                  <div>

                    <p className="text-gray-500">
                      Guests
                    </p>

                    <p className="font-semibold">
                      {message.booking?.guests}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <MapPin className="text-[#922b6a]" />

                  <div>

                    <p className="text-gray-500">
                      Location
                    </p>

                    <p className="font-semibold">
                      {message.booking?.location}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}

          {/* Subject */}

          {message.subject && (

            <div>

              <h3 className="font-bold text-lg mb-3">
                Subject
              </h3>

              <div className="border rounded-xl p-5 bg-gray-50">
                {message.subject}
              </div>

            </div>

          )}

          {/* Message */}

          <div>

            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">

              <MessageSquare size={20} />

              Message

            </h3>

            <div className="border rounded-xl bg-gray-50 p-6 whitespace-pre-wrap leading-8">

              {message.message}

            </div>

          </div>

          {/* Reply */}

          {message.reply?.message && (

            <div>

              <h3 className="font-bold text-lg mb-3">
                Admin Reply
              </h3>

              <div className="border-l-4 border-[#922b6a] bg-pink-50 p-5 rounded-r-xl">

                <p className="leading-8">
                  {message.reply.message}
                </p>

                <div className="mt-4 text-sm text-gray-500">

                  Replied by{" "}
                  <strong>
                    {message.reply.sentBy}
                  </strong>

                  {" • "}

                  {new Date(
                    message.reply.sentAt
                  ).toLocaleString()}

                </div>

              </div>

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex flex-wrap justify-end gap-3">

          {!message.replied && (

            <button
              onClick={() => onReply(message)}
              className="
                bg-[#922b6a]
                hover:bg-[#7b2358]
                text-white
                px-6
                py-3
                rounded-xl
                flex
                items-center
                gap-2
              "
            >
              <Reply size={18} />
              Reply
            </button>

          )}

          <button
            onClick={() => onArchive(message)}
            className="
              border
              px-6
              py-3
              rounded-xl
              hover:bg-gray-100
              flex
              items-center
              gap-2
            "
          >
            <Archive size={18} />
            {message.archived ? "Restore" : "Archive"}
          </button>

          <button
            onClick={onClose}
            className="
              bg-gray-800
              hover:bg-black
              text-white
              px-6
              py-3
              rounded-xl
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}