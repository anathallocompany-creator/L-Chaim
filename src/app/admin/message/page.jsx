"use client";

import { useEffect, useState } from "react";

import MessageToolbar from "@/components/admin/messages/MessageToolbar";
import MessageTable from "@/components/admin/messages/MessageTable";
import MessageDetailsModal from "@/components/admin/messages/MessageDetailsModal";
import ReplyModal from "@/components/admin/messages/ReplyModal";
import DeleteMessageModal from "@/components/admin/messages/DeleteMessageModal";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const [replyOpen, setReplyOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  async function loadMessages() {
    try {
      const res = await fetch("/api/messages");

      const data = await res.json();

      setMessages(data.messages || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.name?.toLowerCase().includes(search.toLowerCase()) ||
      msg.email?.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject?.toLowerCase().includes(search.toLowerCase());

    if (filter === "Unread")
      return matchesSearch && !msg.isRead;

    if (filter === "Read")
      return matchesSearch && msg.isRead;

    if (filter === "Archived")
      return matchesSearch && msg.archived;

    if (filter === "Booking")
      return matchesSearch && msg.type === "Booking";

    if (filter === "Contact")
      return matchesSearch && msg.type === "Contact";

    return matchesSearch;
  });

  return (
    <div className="space-y-8">

      <MessageToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {loading ? (
        <div className="py-20 text-center">
          Loading messages...
        </div>
      ) : (
        <MessageTable
          messages={filteredMessages}
          onView={(message) => {
            setSelectedMessage(message);
            setDetailsOpen(true);
          }}
          onReply={(message) => {
            setSelectedMessage(message);
            setReplyOpen(true);
          }}
          onDelete={(message) => {
            setSelectedMessage(message);
            setDeleteOpen(true);
          }}
        />
      )}

      <MessageDetailsModal
        open={detailsOpen}
        message={selectedMessage}
        onClose={() => setDetailsOpen(false)}
      />

      <ReplyModal
        open={replyOpen}
        message={selectedMessage}
        onClose={() => setReplyOpen(false)}
        onReplied={loadMessages}
      />

      <DeleteMessageModal
        open={deleteOpen}
        message={selectedMessage}
        onClose={() => setDeleteOpen(false)}
        onDeleted={loadMessages}
      />

    </div>
  );
}