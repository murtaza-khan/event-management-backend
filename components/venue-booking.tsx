"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Phone, User, UserPlus, Building2, Heart, Star, Shield, Gift } from "lucide-react"
import Link from "next/link"

interface VenueBookingProps {
  venue: any
}

export function VenueBooking({ venue }: VenueBookingProps) {
  const [bookingData, setBookingData] = useState({
    date: "",
    guests: "",
    eventType: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from your auth context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if user is logged in
    if (!isLoggedIn) {
      setShowSignupModal(true)
      return
    }

    // Handle booking submission
    console.log("Booking data:", bookingData)
  }

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      setShowSignupModal(true)
      return
    }
    // Handle wishlist action
  }

  const SignupModal = () => (
    <Dialog open={showSignupModal} onOpenChange={setShowSignupModal}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Join ShaadiDesk to Continue</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Message */}
          <div className="text-center">
            <p className="text-gray-600">
              Create your free account to book venues, save favorites, and get exclusive member benefits!
            </p>
          </div>

          {/* Single Event Planner Account Card */}
          <div className="max-w-md mx-auto">
            <div className="border-2 border-pink-200 rounded-lg p-6 bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Create Your Event Planner Account</h3>
                <p className="text-gray-600 mt-2">Join thousands of couples planning their perfect events</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <Heart className="w-4 h-4 mr-3 text-pink-500" />
                  Save venues to wishlist & compare options
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Calendar className="w-4 h-4 mr-3 text-pink-500" />
                  Event planning dashboard & timeline
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Gift className="w-4 h-4 mr-3 text-pink-500" />
                  Exclusive member discounts up to 25%
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Shield className="w-4 h-4 mr-3 text-pink-500" />
                  Secure booking & payment protection
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Star className="w-4 h-4 mr-3 text-pink-500" />
                  Priority customer support
                </div>
              </div>

              <div className="bg-pink-100 p-4 rounded-lg mb-6 border border-pink-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-pink-800">🎉 Welcome Offer</span>
                  <span className="text-2xl font-bold text-pink-600">20% OFF</span>
                </div>
                <p className="text-sm text-pink-700">Get 20% discount on your first venue booking!</p>
                <p className="text-xs text-pink-600 mt-1">Valid for 30 days after signup</p>
              </div>

              <Link href="/auth/signup" onClick={() => setShowSignupModal(false)}>
                <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg py-3">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Create Free Account
                </Button>
              </Link>

              <p className="text-center text-xs text-gray-500 mt-3">Free forever • No hidden fees • Cancel anytime</p>
            </div>
          </div>

          {/* Vendor Account Link */}
          <div className="text-center border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">Are you a vendor instead?</p>
            <Link href="/business/signup" onClick={() => setShowSignupModal(false)}>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                <Building2 className="w-4 h-4 mr-2" />
                Create Vendor Account
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-center items-center space-x-6 text-xs text-gray-600">
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                <span>Secure Platform</span>
              </div>
              <div className="flex items-center">
                <Star className="w-3 h-3 mr-1" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                <span>50,000+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="space-y-6 sticky top-8">
      {/* Quick Info Card */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-pink-600 mb-1">
              ₹{venue.price.toLocaleString()}
              {venue.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">₹{venue.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <div className="text-gray-600">per event</div>
            {venue.discount && (
              <div className="text-green-600 font-medium text-sm mt-1">Save {venue.discount}% today!</div>
            )}
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Capacity:</span>
              <span className="font-medium">
                {venue.capacity.min}-{venue.capacity.max} guests
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Type:</span>
              <span className="font-medium">{venue.type}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{venue.location}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book This Venue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Select onValueChange={(value) => setBookingData({ ...bookingData, guests: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100</SelectItem>
                    <SelectItem value="100-200">100-200</SelectItem>
                    <SelectItem value="200-500">200-500</SelectItem>
                    <SelectItem value="500-1000">500-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="eventType">Event Type</Label>
              <Select onValueChange={(value) => setBookingData({ ...bookingData, eventType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="mehndi">Mehndi</SelectItem>
                  <SelectItem value="reception">Reception</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Special Requirements</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your event requirements..."
                value={bookingData.message}
                onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-3">
              {isLoggedIn ? "Send Booking Inquiry" : "Continue to Book"}
            </Button>

            {!isLoggedIn && (
              <p className="text-xs text-center text-gray-500">
                You'll be asked to create an account to complete your booking
              </p>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="flex items-center justify-center bg-transparent">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center bg-transparent"
          onClick={handleWishlistClick}
        >
          <Heart className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>

      {/* Availability Calendar Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Today</span>
              <span className="text-green-600 font-medium">Available</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Tomorrow</span>
              <span className="text-red-600 font-medium">Booked</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>This Weekend</span>
              <span className="text-green-600 font-medium">Available</span>
            </div>
          </div>
          <Button variant="link" className="w-full mt-3 p-0">
            View Full Calendar
          </Button>
        </CardContent>
      </Card>

      <SignupModal />
    </div>
  )
}
