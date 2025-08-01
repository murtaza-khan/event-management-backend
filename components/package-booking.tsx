"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Phone, Mail, MessageCircle, Heart, Share2 } from "lucide-react"
import { format } from "date-fns"

interface PackageBookingProps {
  package: {
    id: number
    name: string
    price: number
    originalPrice: number
    savings: number
    guestCapacity: string
    duration: string
  }
}

export function PackageBooking({ package: pkg }: PackageBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [guestCount, setGuestCount] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking package:", pkg.id, {
      date: selectedDate,
      guests: guestCount,
      contact: contactForm,
    })
  }

  const handleQuickContact = () => {
    // Handle quick contact logic
    console.log("Quick contact for package:", pkg.id)
  }

  return (
    <div className="space-y-6">
      {/* Price Card */}
      <Card className="sticky top-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{pkg.name}</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pricing */}
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">₹{pkg.price.toLocaleString()}</div>
            {pkg.originalPrice > pkg.price && (
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-lg text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                <Badge className="bg-green-500">Save ₹{pkg.savings.toLocaleString()}</Badge>
              </div>
            )}
            <p className="text-sm text-gray-600 mt-2">
              For {pkg.guestCapacity} guests • {pkg.duration}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" size="sm" className="flex flex-col items-center p-3 h-auto bg-transparent">
              <Phone className="w-4 h-4 mb-1" />
              <span className="text-xs">Call</span>
            </Button>
            <Button variant="outline" size="sm" className="flex flex-col items-center p-3 h-auto bg-transparent">
              <MessageCircle className="w-4 h-4 mb-1" />
              <span className="text-xs">WhatsApp</span>
            </Button>
            <Button variant="outline" size="sm" className="flex flex-col items-center p-3 h-auto bg-transparent">
              <Mail className="w-4 h-4 mb-1" />
              <span className="text-xs">Email</span>
            </Button>
          </div>

          {/* Booking Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="event-date">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-transparent"
                    id="event-date"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="guest-count">Number of Guests</Label>
              <Input
                id="guest-count"
                type="number"
                placeholder="Enter guest count"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="contact-name">Your Name</Label>
              <Input
                id="contact-name"
                placeholder="Enter your name"
                value={contactForm.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                value={contactForm.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={contactForm.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="message">Special Requirements</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your special requirements..."
                value={contactForm.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={handleBooking} className="w-full bg-pink-600 hover:bg-pink-700">
              Book This Package
            </Button>
            <Button onClick={handleQuickContact} variant="outline" className="w-full bg-transparent">
              Get Quote & Details
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-gray-600 space-y-1">
            <p>• Free consultation included</p>
            <p>• Flexible payment options available</p>
            <p>• 24/7 customer support</p>
            <p>• Customization options available</p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-pink-600" />
            <div>
              <p className="font-medium">Call Us</p>
              <p className="text-sm text-gray-600">+92 300 1234567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-pink-600" />
            <div>
              <p className="font-medium">Email Us</p>
              <p className="text-sm text-gray-600">info@weddingplanner.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-pink-600" />
            <div>
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
