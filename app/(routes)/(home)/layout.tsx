import AdminSidebar from "@/components/shared/AdminSidebar/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full bg-[#f3f3f1]">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
