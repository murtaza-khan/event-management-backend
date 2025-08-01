import type React from "react"
import { VendorDashboardSidebar } from "@/components/vendor-dashboard-sidebar"

export default function VendorDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <VendorDashboardSidebar />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}
