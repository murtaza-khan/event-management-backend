"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Heart, LayoutDashboard } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isAuthenticated = true // For demonstration, assume user is logged in

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SD</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ShaadiDesk</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/venues" className="text-gray-700 hover:text-pink-600 transition-colors">
              Venues
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-pink-600 transition-colors">
              Packages
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            {isAuthenticated && ( // Show Dashboard link if authenticated
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            )}
            {!isAuthenticated && ( // Show Login if not authenticated
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
            <Link href="/business/signup">
              {" "}
              {/* Always show List Your Business */}
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                List Your Business
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/venues" className="text-gray-700 hover:text-pink-600">
                Venues
              </Link>
              <Link href="/packages" className="text-gray-700 hover:text-pink-600">
                Packages
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                {isAuthenticated && (
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="justify-start w-full">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                )}
                {!isAuthenticated && (
                  <Link href="/auth/login">
                    <Button variant="ghost" size="sm" className="justify-start w-full">
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                )}
                <Link href="/business/signup">
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700 w-full">
                    List Your Business
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
