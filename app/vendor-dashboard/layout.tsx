import type React from "react"
import { VendorDashboardSidebar } from "@/components/vendor-dashboard-sidebar"

export default function VendorDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <VendorDashboardSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Vendor Dashboard</h1>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
