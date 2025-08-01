"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface VenueBookingProps {
  venueName: string
}

export function VenueBooking({ venueName }: VenueBookingProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      alert("Please select a date for your event.")
      return
    }
    console.log("Booking Request:", { ...formData, date: date.toISOString(), venueName })
    alert(`Booking request for ${venueName} on ${format(date, "PPP")} submitted!`)
    // Here you would typically send data to your backend
  }

  return (
    <Card className="p-6 shadow-md">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold text-gray-900">Book {venueName}</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="date">Event Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="guests">Number of Guests</Label>
            <Input id="guests" type="number" value={formData.guests} onChange={handleChange} required min={1} />
          </div>
          <div>
            <Label htmlFor="message">Your Message (Optional)</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} rows={4} />
          </div>
          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
            Send Booking Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
