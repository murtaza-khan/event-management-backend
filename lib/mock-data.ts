import type { LucideIcon } from "lucide-react"
import { MapPin, Camera, Utensils, Palette, Sparkles } from "lucide-react"

export type EventStatus = "upcoming" | "completed" | "cancelled"
export type BookingStatus = "confirmed" | "pending" | "cancelled"

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
  status: BookingStatus
  icon: LucideIcon
}

export interface VendorBooking {
  id: string
  eventName: string
  eventDate: string
  clientName: string
  service: string
  amount: number
  status: BookingStatus
}

export interface VendorService {
  id: string
  name: string
  category: string
  price: number
  bookings: number
  rating: number
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

export const mockVendorBookings: VendorBooking[] = [
  {
    id: "vbook-1",
    eventName: "Sarah & Ahmed's Wedding",
    eventDate: "2025-09-15",
    clientName: "Sarah Khan",
    service: "Venue Booking",
    amount: 25000,
    status: "confirmed",
  },
  {
    id: "vbook-2",
    eventName: "Corporate Gala",
    eventDate: "2025-11-01",
    clientName: "ABC Corp",
    service: "Venue Booking",
    amount: 40000,
    status: "pending",
  },
  {
    id: "vbook-3",
    eventName: "Birthday Celebration",
    eventDate: "2024-07-20",
    clientName: "John Doe",
    service: "Catering Service",
    amount: 8000,
    status: "completed",
  },
  {
    id: "vbook-4",
    eventName: "Anniversary Dinner",
    eventDate: "2024-05-10",
    clientName: "Jane Smith",
    service: "Photography Package",
    amount: 3000,
    status: "completed",
  },
]

export const mockVendorServices: VendorService[] = [
  {
    id: "vservice-1",
    name: "Royal Palace Banquet Hall",
    category: "Venue",
    price: 25000,
    bookings: 12,
    rating: 4.8,
  },
  {
    id: "vservice-2",
    name: "Elite Photography Package",
    category: "Photography",
    price: 3000,
    bookings: 25,
    rating: 4.9,
  },
  {
    id: "vservice-3",
    name: "Gourmet Delights Catering",
    category: "Catering",
    price: 8000,
    bookings: 18,
    rating: 4.7,
  },
  {
    id: "vservice-4",
    name: "Elegant Decorators",
    category: "Decoration",
    price: 5000,
    bookings: 10,
    rating: 4.5,
  },
]
