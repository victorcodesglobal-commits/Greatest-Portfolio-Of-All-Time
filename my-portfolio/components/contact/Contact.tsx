"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { createMessage } from "@/services/messages";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setSending(true);

    try {
      await createMessage({
        name,
        email,
        subject,
        message,
      });

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setSending(false);
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-8 py-32"
    >
      <SectionTitle
        title="Let's Work Together"
        subtitle="CONTACT"
      />

      <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-gray-400">
        Have a project in mind or want to work together?
        Send me a message and I'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-3xl space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={sending}
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}