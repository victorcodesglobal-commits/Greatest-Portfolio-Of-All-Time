"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";
import Loader from "@/components/ui/Loader";
import AdminSidebar from "./AdminSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="ml-64 min-h-screen w-full bg-[#050816]">
        {children}
      </main>
    </div>
  );
}