import { VenueDetails } from "@/components/venue-details"
import { VenueGallery } from "@/components/venue-gallery"
import { VenueReviews } from "@/components/venue-reviews"
import { VenueBooking } from "@/components/venue-booking"
import { SimilarVenues } from "@/components/similar-venues"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// This would normally come from your database based on the ID
const venue = {
  id: 1,
  name: "Royal Palace Banquet",
  location: "DHA Phase 5, Lahore",
  fullAddress: "123 Main Boulevard, DHA Phase 5, Lahore, Punjab, Pakistan",
  rating: 4.8,
  reviews: 124,
  capacity: {
    min: 500,
    max: 1000,
  },
  price: 80000,
  originalPrice: 95000,
  discount: 15,
  type: "Banquet Hall",
  verified: true,
  description:
    "Royal Palace Banquet is one of Lahore's most prestigious wedding venues, offering an elegant and luxurious setting for your special day. With stunning architecture, world-class amenities, and exceptional service, we ensure your wedding is nothing short of magical.",
  images: [
    "/images/venues/royal-palace-banquet.jpg",
    "/images/venues/royal-palace-2.jpg",
    "/images/venues/royal-palace-3.jpg",
    "/images/venues/royal-palace-4.jpg",
    "/images/venues/royal-palace-5.jpg",
    "/images/venues/royal-palace-6.jpg",
  ],
  amenities: [
    { name: "Air Conditioning", icon: "❄️", available: true },
    { name: "Parking for 200+ Cars", icon: "🚗", available: true },
    { name: "In-house Catering", icon: "🍽️", available: true },
    { name: "Bridal Room", icon: "👰", available: true },
    { name: "Sound System", icon: "🔊", available: true },
    { name: "Stage & Lighting", icon: "💡", available: true },
    { name: "Generator Backup", icon: "⚡", available: true },
    { name: "Security", icon: "🛡️", available: true },
    { name: "Decoration Services", icon: "🎨", available: true },
    { name: "Photography Area", icon: "📸", available: true },
    { name: "Wheelchair Accessible", icon: "♿", available: true },
    { name: "WiFi", icon: "📶", available: true },
  ],
  specifications: {
    area: "15,000 sq ft",
    ceilingHeight: "18 feet",
    danceFloor: "Available",
    kitchenFacility: "Full Commercial Kitchen",
    washrooms: "6 (3 Male, 3 Female)",
    powerBackup: "100% Generator Backup",
  },
  policies: {
    cancellation: "Free cancellation up to 30 days before event",
    payment: "50% advance, 50% on event day",
    timing: "Events allowed from 6 PM to 2 AM",
    alcohol: "Not permitted",
    outside_catering: "Not allowed",
    decoration: "Allowed with prior approval",
  },
  contact: {
    phone: "+92 300 1234567",
    email: "info@royalpalacebanquet.com",
    website: "www.royalpalacebanquet.com",
    manager: "Ahmed Hassan",
  },
  availability: [
    { date: "2024-02-15", available: true },
    { date: "2024-02-16", available: false },
    { date: "2024-02-17", available: true },
    // More dates...
  ],
}

export default function VenueDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/venues">Venues</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{venue.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <VenueGallery images={venue.images} venueName={venue.name} />
            <VenueDetails venue={venue} />
            <VenueReviews venueId={venue.id} rating={venue.rating} totalReviews={venue.reviews} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <VenueBooking venue={venue} />
          </div>
        </div>

        {/* Similar Venues */}
        <div className="mt-16">
          <SimilarVenues currentVenueId={venue.id} />
        </div>
      </div>
    </div>
  )
}
