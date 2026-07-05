"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  fetchMessages,
  removeMessage,
} from "@/services/messages";

export default function MessageList() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    const data = await fetchMessages();

    setMessages(data);
    setLoading(false);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  async function handleDelete(id: string) {
    const confirmed = confirm(
      "Delete this message?"
    );

    if (!confirmed) return;

    await removeMessage(id);

    loadMessages();
  }

  if (loading) {
    return (
      <p className="text-gray-400">
        Loading messages...
      </p>
    );
  }

  if (!messages.length) {
    return (
      <p className="text-gray-400">
        No messages yet.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {messages.map((message) => (
        <div
          key={message.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold">
              {message.name}
            </h2>

            <p className="text-cyan-400">
              {message.subject}
            </p>

            <p className="text-gray-400 mt-2">
              {message.email}
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/admin/messages/${message.id}`}
              className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black"
            >
              View
            </Link>

            <button
              onClick={() =>
                handleDelete(message.id)
              }
              className="rounded-xl bg-red-500 px-5 py-2 font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}