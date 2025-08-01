import { notFound } from "next/navigation"
import { VenueDetails } from "@/components/venue-details"
import { VenueGallery } from "@/components/venue-gallery"
import { VenueReviews } from "@/components/venue-reviews"
import { SimilarVenues } from "@/components/similar-venues"
import { VenueBooking } from "@/components/venue-booking"
import { Separator } from "@/components/ui/separator"

const venues = [
  {
    id: "royal-palace-banquet",
    name: "Royal Palace Banquet Hall",
    location: "Lahore, Pakistan",
    description:
      "A majestic venue perfect for grand weddings and lavish celebrations. Features opulent interiors, high ceilings, and a capacity for up to 1000 guests.",
    priceRange: "$$$$",
    capacity: "500-1000 guests",
    amenities: ["In-house Catering", "Decorations", "Parking", "Bridal Suite", "Sound System"],
    images: [
      "/images/venues/royal-palace-banquet.png",
      "/images/venues/royal-palace-2.png",
      "/images/venues/royal-palace-3.png",
      "/images/venues/royal-palace-4.png",
      "/images/venues/royal-palace-5.png",
      "/images/venues/royal-palace-6.png",
    ],
    rating: 4.9,
    reviews: 150,
    type: "Ballroom",
  },
  {
    id: "garden-marquee",
    name: "The Garden Marquee",
    location: "Karachi, Pakistan",
    description:
      "An enchanting outdoor venue with lush green lawns and elegant marquees, ideal for romantic garden weddings. Accommodates 200-500 guests.",
    priceRange: "$$$",
    capacity: "200-500 guests",
    amenities: ["Outdoor Space", "Decorations", "Parking", "Generator Backup"],
    images: [
      "/images/venues/garden-marquee.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.7,
    reviews: 90,
    type: "Garden",
  },
  {
    id: "grand-ballroom",
    name: "Grand Hyatt Ballroom",
    location: "Islamabad, Pakistan",
    description:
      "A sophisticated and spacious ballroom within a luxury hotel, offering impeccable service and modern facilities for large gatherings.",
    priceRange: "$$$$",
    capacity: "400-800 guests",
    amenities: ["In-house Catering", "Luxury Suites", "Valet Parking", "Audiovisual Equipment"],
    images: [
      "/images/venues/grand-ballroom.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.8,
    reviews: 120,
    type: "Ballroom",
  },
  {
    id: "sunset-farmhouse",
    name: "Sunset Farmhouse",
    location: "Lahore, Pakistan",
    description:
      "A charming rustic farmhouse venue with beautiful sunset views, perfect for intimate and cozy weddings. Features open-air spaces and traditional decor.",
    priceRange: "$$",
    capacity: "100-250 guests",
    amenities: ["Outdoor Space", "Bonfire Area", "Basic Decor", "Parking"],
    images: [
      "/images/venues/sunset-farmhouse.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.5,
    reviews: 70,
    type: "Farmhouse",
  },
  {
    id: "crystal-convention",
    name: "Crystal Convention Center",
    location: "Faisalabad, Pakistan",
    description:
      "A modern and versatile convention center with multiple halls, suitable for very large weddings and corporate events. State-of-the-art facilities.",
    priceRange: "$$$",
    capacity: "800-2000 guests",
    amenities: ["Multiple Halls", "Advanced AV", "Ample Parking", "Flexible Layouts"],
    images: [
      "/images/venues/crystal-convention.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.6,
    reviews: 100,
    type: "Convention Center",
  },
  {
    id: "rose-garden-resort",
    name: "Rose Garden Resort",
    location: "Murree, Pakistan",
    description:
      "A picturesque resort nestled in the hills, offering stunning views and a serene environment for destination weddings. Includes accommodation options.",
    priceRange: "$$$$",
    capacity: "150-400 guests",
    amenities: ["Accommodation", "Scenic Views", "Outdoor & Indoor Spaces", "Recreational Activities"],
    images: [
      "/images/venues/rose-garden-resort.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.9,
    reviews: 110,
    type: "Resort",
  },
]

export default function VenueDetailPage({ params }: { params: { id: string } }) {
  const venue = venues.find((v) => v.id === params.id)

  if (!venue) {
    notFound()
  }

  const similarVenues = venues.filter((v) => v.id !== params.id && v.type === venue.type).slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VenueGallery images={venue.images} />
          <VenueDetails venue={venue} />
          <Separator className="my-8" />
          <VenueReviews reviews={venue.reviews} rating={venue.rating} />
        </div>
        <div className="lg:col-span-1">
          <VenueBooking venueName={venue.name} />
        </div>
      </div>
      {similarVenues.length > 0 && (
        <>
          <Separator className="my-8" />
          <SimilarVenues venues={similarVenues} />
        </>
      )}
    </div>
  )
}
