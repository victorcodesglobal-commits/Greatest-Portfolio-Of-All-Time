"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await login(email, password);

      router.push("/admin/dashboard");
    } catch (err) {
      alert("Invalid email or password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0B1023] p-8"
    >
      <h1 className="mb-6 text-3xl font-bold text-white">
        Admin Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="mb-4 w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="mb-6 w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={loading}
        className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400 disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}