"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Calendar, Users, Package, Heart, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Overview",
    },
    {
      href: "/dashboard/events",
      icon: Calendar,
      label: "My Events",
    },
    {
      href: "/dashboard/vendors",
      icon: Users,
      label: "My Vendors",
    },
    {
      href: "/dashboard/packages",
      icon: Package,
      label: "My Packages",
    },
    {
      href: "/dashboard/wishlist",
      icon: Heart,
      label: "Wishlist",
    },
    {
      href: "/dashboard/settings",
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
