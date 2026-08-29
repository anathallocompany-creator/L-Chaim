"use client";

import { useState, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";

export default function ReplyModal({
  open,
  message,
  onClose,
  onReplied,
}) {
  const [subject, setSubject] = useState("");
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (message) {
      setSubject(`Re: ${message.subject || "Your Message"}`);
      setReply("");
    }
  }, [message]);

  if (!open || !message) return null;

  async function handleReply() {
    if (!reply.trim()) {
      return alert("Reply cannot be empty.");
    }

    try {
      setSending(true);

      const res = await fetch(`/api/messages/${message._id}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          reply,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Reply sent successfully.");

      onReplied?.();

      onClose();

    } catch (err) {
      alert(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-2xl">

        {/* Header */}

        <div className="flex justify-between items-center border-b px-6 py-5">

          <div>

            <h2 className="text-xl font-bold">
              Reply Message
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Replying to {message.name}
            </p>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="p-6 space-y-5">

          <div>

            <label className="font-medium">
              To
            </label>

            <input
              value={message.email}
              readOnly
              className="w-full border rounded-xl p-3 bg-gray-100 mt-2"
            />

          </div>

          <div>

            <label className="font-medium">
              Subject
            </label>

            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

          <div>

            <label className="font-medium">
              Message
            </label>

            <textarea
              rows={8}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

        </div>

        <div className="border-t px-6 py-5 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 border rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleReply}
            disabled={sending}
            className="px-6 py-3 rounded-xl bg-[#922b6a] text-white flex items-center gap-2"
          >

            {sending ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Reply
              </>
            )}

          </button>

        </div>

      </div>

    </div>
  );
}