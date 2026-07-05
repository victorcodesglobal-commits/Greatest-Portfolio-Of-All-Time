"use client";

import { useEffect, useState } from "react";

import { fetchMessage } from "@/services/messages";

export default function ViewMessage({
  id,
}: {
  id: string;
}) {
  const [message, setMessage] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await fetchMessage(id);
      setMessage(data);
    }

    load();
  }, [id]);

  if (!message) {
    return (
      <p className="text-gray-400">
        Loading...
      </p>
    );
  }

  return (
    <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8">
      <div>
        <p className="text-gray-400">Name</p>
        <h2 className="text-2xl font-semibold">
          {message.name}
        </h2>
      </div>

      <div>
        <p className="text-gray-400">Email</p>
        <p>{message.email}</p>
      </div>

      <div>
        <p className="text-gray-400">Subject</p>
        <p>{message.subject}</p>
      </div>

      <div>
        <p className="text-gray-400">Message</p>
        <p className="whitespace-pre-wrap leading-8">
          {message.message}
        </p>
      </div>
    </div>
  );
}