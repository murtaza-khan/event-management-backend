"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Phone, Mail, MessageCircle } from "lucide-react"
import { format } from "date-fns"

interface PackageBookingProps {
  package: {
    id: number
    name: string
    price: number
    originalPrice: number
    savings: number
  }
}

export function PackageBooking({ package: pkg }: PackageBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [guestCount, setGuestCount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking details:", {
      packageId: pkg.id,
      date: selectedDate,
      guests: guestCount,
      name,
      email,
      phone,
      message,
    })
  }

  const handleQuickContact = (type: "call" | "email" | "whatsapp") => {
    switch (type) {
      case "call":
        window.open("tel:+919876543210")
        break
      case "email":
        window.open("mailto:info@weddingplanner.com")
        break
      case "whatsapp":
        window.open("https://wa.me/919876543210")
        break
    }
  }

  return (
    <div className="space-y-6">
      {/* Price Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Book This Package</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Package Price</span>
              <span className="text-2xl font-bold text-rose-600">₹{pkg.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Original Price</span>
              <span className="line-through">₹{pkg.originalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-medium text-green-600">
              <span>You Save</span>
              <span>₹{pkg.savings.toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="guests">Expected Guests</Label>
              <Input
                id="guests"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="Number of guests"
              />
            </div>

            <div>
              <Label htmlFor="message">Special Requirements</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any special requirements or questions..."
                rows={3}
              />
            </div>
          </div>

          <Button onClick={handleBooking} className="w-full" size="lg">
            Book Now
          </Button>

          <div className="text-center text-sm text-gray-600">
            <p>Free consultation • No hidden charges</p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
              onClick={() => handleQuickContact("call")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us: +91 98765 43210
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
              onClick={() => handleQuickContact("email")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email: info@weddingplanner.com
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
              onClick={() => handleQuickContact("whatsapp")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Chat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
