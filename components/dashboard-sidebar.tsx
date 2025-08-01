"use client"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Users, Settings, LogOut, Package, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "My Events",
      href: "/dashboard/events",
      icon: Calendar,
    },
    {
      name: "My Vendors",
      href: "/dashboard/vendors",
      icon: Users,
    },
    {
      name: "My Packages",
      href: "/dashboard/packages",
      icon: Package,
    },
    {
      name: "Wishlist",
      href: "/dashboard/wishlist",
      icon: Heart,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-full p-4">
      <div className="flex items-center justify-center h-16 mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SD</span>
          </div>
          <span className="text-xl font-bold">ShaadiDesk</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.href ? "bg-pink-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
            )}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-700">
        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-white">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
