import type { LucideIcon } from "lucide-react"
import { MapPin, Camera, Utensils, Palette, Sparkles } from "lucide-react"

export type EventStatus = "upcoming" | "completed" | "cancelled"

export interface BookedEvent {
  id: string
  name: string
  date: string
  time: string
  location: string
  package: string
  totalCost: number
  status: EventStatus
  guests: number
  vendors: BookedVendor[]
}

export interface BookedVendor {
  id: string
  name: string
  service: string
  contact: string
  status: "confirmed" | "pending" | "cancelled"
  icon: LucideIcon
}

export const mockBookedEvents: BookedEvent[] = [
  {
    id: "event-1",
    name: "Sarah & Ahmed's Wedding",
    date: "2025-09-15",
    time: "19:00",
    location: "Royal Palace Banquet Hall",
    package: "Royal Wedding Package",
    totalCost: 50000,
    status: "upcoming",
    guests: 300,
    vendors: [
      {
        id: "vendor-1",
        name: "Royal Palace Banquet Hall",
        service: "Venue",
        contact: "venue@example.com",
        status: "confirmed",
        icon: MapPin,
      },
      {
        id: "vendor-2",
        name: "Elite Photography",
        service: "Photography",
        contact: "photo@example.com",
        status: "confirmed",
        icon: Camera,
      },
      {
        id: "vendor-3",
        name: "Gourmet Delights Catering",
        service: "Catering",
        contact: "catering@example.com",
        status: "confirmed",
        icon: Utensils,
      },
      {
        id: "vendor-4",
        name: "Elegant Decorators",
        service: "Decoration",
        contact: "decor@example.com",
        status: "pending",
        icon: Palette,
      },
    ],
  },
  {
    id: "event-2",
    name: "Birthday Celebration",
    date: "2024-07-20",
    time: "14:00",
    location: "Garden Marquee",
    package: "Premium Celebration Package",
    totalCost: 15000,
    status: "completed",
    guests: 100,
    vendors: [
      {
        id: "vendor-5",
        name: "Garden Marquee",
        service: "Venue",
        contact: "garden@example.com",
        status: "confirmed",
        icon: MapPin,
      },
      {
        id: "vendor-6",
        name: "Spice Garden Catering",
        service: "Catering",
        contact: "spice@example.com",
        status: "confirmed",
        icon: Utensils,
      },
    ],
  },
  {
    id: "event-3",
    name: "Corporate Gala",
    date: "2025-11-01",
    time: "18:30",
    location: "Crystal Convention Center",
    package: "Grand Luxury Package",
    totalCost: 75000,
    status: "upcoming",
    guests: 500,
    vendors: [
      {
        id: "vendor-7",
        name: "Crystal Convention Center",
        service: "Venue",
        contact: "crystal@example.com",
        status: "confirmed",
        icon: MapPin,
      },
      {
        id: "vendor-8",
        name: "Royal Feast Catering",
        service: "Catering",
        contact: "royalfeast@example.com",
        status: "pending",
        icon: Utensils,
      },
      {
        id: "vendor-9",
        name: "Sparkle Events",
        service: "Event Management",
        contact: "sparkle@example.com",
        status: "confirmed",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "event-4",
    name: "Anniversary Dinner",
    date: "2024-05-10",
    time: "20:00",
    location: "Sunset Farmhouse",
    package: "Essential Wedding Package",
    totalCost: 8000,
    status: "completed",
    guests: 50,
    vendors: [
      {
        id: "vendor-10",
        name: "Sunset Farmhouse",
        service: "Venue",
        contact: "farmhouse@example.com",
        status: "confirmed",
        icon: MapPin,
      },
    ],
  },
]
