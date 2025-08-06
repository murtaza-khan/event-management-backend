"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Heart, LayoutDashboard, Briefcase } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isClient: false,
    isVendor: false,
    isLoading: true
  })
  const router = useRouter()

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = () => {
      const token = localStorage.getItem('authToken')
      const userData = localStorage.getItem('user')
      
      if (token && userData) {
        try {
          const user = JSON.parse(userData)
          setAuthState({
            isAuthenticated: true,
            isClient: user.role === 'client',
            isVendor: user.role === 'vendor',
            isLoading: false
          })
        } catch (error) {
          console.error('Error parsing user data:', error)
          setAuthState({
            isAuthenticated: false,
            isClient: false,
            isVendor: false,
            isLoading: false
          })
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          isClient: false,
          isVendor: false,
          isLoading: false
        })
      }
    }

    checkAuth()

    // Listen for storage changes (like when user logs in from another tab)
    const handleStorageChange = () => checkAuth()
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    setAuthState({
      isAuthenticated: false,
      isClient: false,
      isVendor: false,
      isLoading: false
    })
    router.push('/')
  }

  if (authState.isLoading) {
    return (
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Loading placeholder */}
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
          <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
        </div>
      </header>
    )
  }

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
            
            {authState.isAuthenticated ? (
              <>
                {authState.isClient && (
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                )}
                {authState.isVendor && (
                  <Link href="/vendor-dashboard">
                    <Button variant="ghost" size="sm">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Vendor Dashboard
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                >
                  <User className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/business/signup">
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    List Your Business
                  </Button>
                </Link>
              </>
            )}
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
              <Link 
                href="/venues" 
                className="text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Venues
              </Link>
              <Link 
                href="/packages" 
                className="text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                
                {authState.isAuthenticated ? (
                  <>
                    {authState.isClient && (
                      <Link 
                        href="/dashboard"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Button variant="ghost" size="sm" className="justify-start w-full">
                          <LayoutDashboard className="w-4 h-4 mr-2" />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                    {authState.isVendor && (
                      <Link 
                        href="/vendor-dashboard"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Button variant="ghost" size="sm" className="justify-start w-full">
                          <Briefcase className="w-4 h-4 mr-2" />
                          Vendor Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="justify-start w-full"
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/auth/login"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button variant="ghost" size="sm" className="justify-start w-full">
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link 
                      href="/business/signup"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button size="sm" className="bg-pink-600 hover:bg-pink-700 w-full">
                        List Your Business
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}