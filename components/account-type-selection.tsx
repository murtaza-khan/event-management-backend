import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Building2,
  Heart,
  Calendar,
  Search,
  Star,
  TrendingUp,
  Users,
  CreditCard,
  Shield,
  Zap,
  Crown,
  ArrowRight,
} from "lucide-react"

export function AccountTypeSelection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join ShaadiDesk</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your account type to get started with the perfect experience tailored for you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Client Account */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-pink-200 group">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>

          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <User className="w-10 h-10 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">I'm Planning an Event</h2>
              <p className="text-gray-600">
                Perfect for couples, families, and individuals planning their special occasions
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Search className="w-3 h-3 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Find & Compare Vendors</h4>
                  <p className="text-sm text-gray-600">Browse thousands of verified venues and vendors</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-3 h-3 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Save Favorites & Create Wishlist</h4>
                  <p className="text-sm text-gray-600">Keep track of your favorite vendors and venues</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-3 h-3 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Event Planning Dashboard</h4>
                  <p className="text-sm text-gray-600">Organize your event timeline and manage bookings</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-3 h-3 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Exclusive Member Discounts</h4>
                  <p className="text-sm text-gray-600">Get special offers and deals from top vendors</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3 h-3 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Secure Booking & Payments</h4>
                  <p className="text-sm text-gray-600">Safe and secure payment processing</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-pink-600">Welcome Offer</Badge>
                <span className="text-2xl font-bold text-pink-600">20% OFF</span>
              </div>
              <p className="text-sm text-gray-700">Get 20% discount on your first booking!</p>
            </div>

            <Link href="/auth/signup">
              <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg py-3">
                Start Planning My Event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <p className="text-center text-xs text-gray-500 mt-3">Free to join • No hidden fees • Cancel anytime</p>
          </CardContent>
        </Card>

        {/* Business Account */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 group">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>

          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">I'm a Vendor/Business Owner</h2>
              <p className="text-gray-600">
                Perfect for venues, photographers, caterers, and all event service providers
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reach 50,000+ Active Customers</h4>
                  <p className="text-sm text-gray-600">Connect with couples planning their events</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Grow Your Business Revenue</h4>
                  <p className="text-sm text-gray-600">Increase bookings with our marketing tools</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Crown className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Business Profile</h4>
                  <p className="text-sm text-gray-600">Showcase your work with portfolio and reviews</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CreditCard className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Integrated Payment System</h4>
                  <p className="text-sm text-gray-600">Secure payment processing and invoicing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analytics & Business Insights</h4>
                  <p className="text-sm text-gray-600">Track performance and optimize your listings</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6 border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Limited Time</Badge>
                <span className="text-2xl font-bold text-purple-600">3 Months FREE</span>
              </div>
              <p className="text-sm text-gray-700">Start your business journey with no setup fees!</p>
            </div>

            <Link href="/business/signup">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3">
                Grow My Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <p className="text-center text-xs text-gray-500 mt-3">Free trial • No setup fees • 24/7 support</p>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Section */}
      <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Quick Comparison</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                <th className="text-center py-4 px-4 font-semibold text-pink-600">Event Planner Account</th>
                <th className="text-center py-4 px-4 font-semibold text-purple-600">Vendor Account</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-700">Browse & Search</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-gray-400">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-700">Create Business Listing</td>
                <td className="py-3 px-4 text-center text-gray-400">-</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-700">Receive Booking Inquiries</td>
                <td className="py-3 px-4 text-center text-gray-400">-</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-700">Save Favorites</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-gray-400">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 text-gray-700">Event Planning Tools</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
                <td className="py-3 px-4 text-center text-gray-400">-</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-700">Business Analytics</td>
                <td className="py-3 px-4 text-center text-gray-400">-</td>
                <td className="py-3 px-4 text-center text-green-600">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Trusted by thousands across Pakistan</p>
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>50,000+ Users</span>
          </div>
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-1" />
            <span>500+ Vendors</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            <span>Secure Platform</span>
          </div>
        </div>
      </div>
    </div>
  )
}
