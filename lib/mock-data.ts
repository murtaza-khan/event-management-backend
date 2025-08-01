export interface BookedEvent {
  id: string
  name: string
  date: string
  time: string
  location: string
  package: string
  guests: number
  totalCost: number
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled"
  vendors: {
    id: string
    name: string
    service: string
    contact: string
  }[]
}

export interface BookedVendor {
  id: string
  name: string
  service: string
  contact: string
  rating: number
  reviews: number
}

export interface VendorBooking {
  id: string
  eventName: string
  clientName: string
  date: string
  service: string
  amount: number
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled"
}

export interface VendorService {
  id: string
  name: string
  category: string
  price: number
  description: string
  isAvailable: boolean
}

export const mockBookedEvents: BookedEvent[] = [
  {
    id: "event-1",
    name: "Aisha & Ali's Wedding",
    date: "2024-08-15",
    time: "19:00",
    location: "Royal Palace Banquet Hall",
    package: "Royal Wedding Extravaganza",
    guests: 750,
    totalCost: 75000,
    status: "Confirmed",
    vendors: [
      { id: "v1", name: "Royal Feast Catering", service: "Catering", contact: "catering@example.com" },
      { id: "v2", name: "Capture Moments Photography", service: "Photography", contact: "photo@example.com" },
      { id: "v3", name: "Elegant Events Decor", service: "Decoration", contact: "decor@example.com" },
    ],
  },
  {
    id: "event-2",
    name: "Zara & Usman's Engagement",
    date: "2024-09-20",
    time: "18:00",
    location: "The Garden Marquee",
    package: "Premium Celebration Package",
    guests: 300,
    totalCost: 45000,
    status: "Pending",
    vendors: [
      { id: "v4", name: "Spice Garden Caterers", service: "Catering", contact: "spice@example.com" },
      { id: "v5", name: "Eternal Frames Studio", service: "Photography", contact: "eternal@example.com" },
    ],
  },
  {
    id: "event-3",
    name: "Fatima & Ahmed's Reception",
    date: "2024-07-01",
    time: "20:00",
    location: "Grand Hyatt Ballroom",
    package: "Grand Luxury Affair",
    guests: 500,
    totalCost: 60000,
    status: "Completed",
    vendors: [
      { id: "v6", name: "Gourmet Delights", service: "Catering", contact: "gourmet@example.com" },
      { id: "v7", name: "Lens Artistry by Ali", service: "Photography", contact: "lens@example.com" },
    ],
  },
]

export const mockBookedVendors: BookedVendor[] = [
  {
    id: "v1",
    name: "Royal Feast Catering",
    service: "Catering",
    contact: "catering@example.com",
    rating: 4.9,
    reviews: 180,
  },
  {
    id: "v2",
    name: "Capture Moments Photography",
    service: "Photography",
    contact: "photo@example.com",
    rating: 4.9,
    reviews: 160,
  },
  {
    id: "v3",
    name: "Elegant Events Decor",
    service: "Decoration",
    contact: "decor@example.com",
    rating: 4.9,
    reviews: 110,
  },
  {
    id: "v4",
    name: "Spice Garden Caterers",
    service: "Catering",
    contact: "spice@example.com",
    rating: 4.7,
    reviews: 110,
  },
  {
    id: "v5",
    name: "Eternal Frames Studio",
    service: "Photography",
    contact: "eternal@example.com",
    rating: 4.8,
    reviews: 130,
  },
]

export const mockVendorBookings: VendorBooking[] = [
  {
    id: "vb-1",
    eventName: "Aisha & Ali's Wedding",
    clientName: "Aisha Khan",
    date: "2024-08-15",
    service: "Catering",
    amount: 30000,
    status: "Confirmed",
  },
  {
    id: "vb-2",
    eventName: "Zara & Usman's Engagement",
    clientName: "Zara Malik",
    date: "2024-09-20",
    service: "Photography",
    amount: 15000,
    status: "Pending",
  },
  {
    id: "vb-3",
    eventName: "Fatima & Ahmed's Reception",
    clientName: "Fatima Zahra",
    date: "2024-07-01",
    service: "Decoration",
    amount: 20000,
    status: "Completed",
  },
  {
    id: "vb-4",
    eventName: "Hina & Bilal's Mehndi",
    clientName: "Hina Tariq",
    date: "2024-10-05",
    service: "Makeup Artist",
    amount: 5000,
    status: "Confirmed",
  },
]

export const mockVendorServices: VendorService[] = [
  {
    id: "vs-1",
    name: "Luxury Bridal Makeup",
    category: "Makeup Artist",
    price: 5000,
    description: "Full bridal makeup package including hair styling and draping.",
    isAvailable: true,
  },
  {
    id: "vs-2",
    name: "Full Day Wedding Photography",
    category: "Photography",
    price: 15000,
    description: "12 hours of wedding photography coverage with album and digital copies.",
    isAvailable: true,
  },
  {
    id: "vs-3",
    name: "Grand Buffet Catering",
    category: "Catering",
    price: 30000,
    description: "Catering for 500 guests with 5 main courses, desserts, and drinks.",
    isAvailable: true,
  },
  {
    id: "vs-4",
    name: "Stage & Venue Decoration",
    category: "Decoration",
    price: 20000,
    description: "Complete stage and venue decoration with floral arrangements and lighting.",
    isAvailable: true,
  },
  {
    id: "vs-5",
    name: "Engagement Photography",
    category: "Photography",
    price: 7000,
    description: "4 hours of engagement photoshoot with all raw and edited images.",
    isAvailable: true,
  },
]
