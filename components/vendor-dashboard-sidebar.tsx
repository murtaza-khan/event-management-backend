"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Calendar, DollarSign, Star, Settings, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

export function VendorDashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/vendor-dashboard",
      icon: LayoutDashboard,
      label: "Overview",
    },
    {
      href: "/vendor-dashboard/bookings",
      icon: Calendar,
      label: "My Bookings",
    },
    {
      href: "/vendor-dashboard/services",
      icon: Briefcase,
      label: "My Services",
    },
    {
      href: "/vendor-dashboard/earnings",
      icon: DollarSign,
      label: "Earnings",
    },
    {
      href: "/vendor-dashboard/reviews",
      icon: Star,
      label: "Reviews",
    },
    {
      href: "/vendor-dashboard/settings",
      icon: Settings,
      label: "Settings",
    },
  ]

  return (
    <aside className="w-64 bg-gray-50 border-r h-full p-4 hidden md:flex flex-col">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100",
              pathname === item.href && "bg-gray-100 font-semibold",
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
