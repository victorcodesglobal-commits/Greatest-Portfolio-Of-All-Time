import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Victor Nwaokobia | Full Stack Developer",
  description:
    "Premium portfolio built with Next.js, TypeScript and Firebase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#050816] text-white">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}