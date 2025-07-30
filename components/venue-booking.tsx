"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Phone, MessageCircle } from "lucide-react"

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Booking data:", bookingData)
  }

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
              Send Booking Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="flex items-center justify-center bg-transparent">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        <Button variant="outline" className="flex items-center justify-center bg-transparent">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
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
    </div>
  )
}
