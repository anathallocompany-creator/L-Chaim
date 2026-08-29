"use client";

import { Trash2, X, Loader2 } from "lucide-react";
import { useState } from "react";

export default function DeleteMessageModal({
  open,
  message,
  onClose,
  onDeleted,
}) {
  const [loading, setLoading] = useState(false);

  if (!open || !message) return null;

  async function deleteMessage() {
    try {
      setLoading(true);

      const res = await fetch(`/api/messages/${message._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Message deleted.");

      onDeleted?.();

      onClose();

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-md">

        <div className="p-8">

          <div className="flex justify-center mb-5">

            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

              <Trash2
                className="text-red-600"
                size={34}
              />

            </div>

          </div>

          <h2 className="text-2xl font-bold text-center">

            Delete Message

          </h2>

          <p className="text-center text-gray-500 mt-4">

            Are you sure you want to permanently delete this message from

            <span className="font-semibold text-black">
              {" "}
              {message.name}
            </span>

            ?

          </p>

        </div>

        <div className="border-t px-6 py-5 flex justify-end gap-3">

          <button
            onClick={onClose}
            disabled={loading}
            className="px-5 py-3 rounded-xl border flex items-center gap-2"
          >
            <X size={18} />
            Cancel
          </button>

          <button
            onClick={deleteMessage}
            disabled={loading}
            className="px-5 py-3 rounded-xl bg-red-600 text-white flex items-center gap-2"
          >

            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 size={18} />
                Delete
              </>
            )}

          </button>

        </div>

      </div>

    </div>
  );
}