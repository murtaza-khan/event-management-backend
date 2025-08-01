import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredVenues = [
  {
    id: "royal-palace-banquet",
    name: "Royal Palace Banquet Hall",
    location: "Lahore, Pakistan",
    image: "/images/venues/royal-palace-banquet.png",
    rating: 4.9,
    reviews: 150,
    priceRange: "$$$$",
  },
  {
    id: "garden-marquee",
    name: "The Garden Marquee",
    location: "Karachi, Pakistan",
    image: "/images/venues/garden-marquee.png",
    rating: 4.7,
    reviews: 90,
    priceRange: "$$$",
  },
  {
    id: "grand-ballroom",
    name: "Grand Hyatt Ballroom",
    location: "Islamabad, Pakistan",
    image: "/images/venues/grand-ballroom.png",
    rating: 4.8,
    reviews: 120,
    priceRange: "$$$$",
  },
]

export function FeaturedVenues() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Featured Venues</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our handpicked selection of the most exquisite and popular wedding venues.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <Card key={venue.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-1">
                <CardTitle className="text-xl font-semibold mb-2">{venue.name}</CardTitle>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>
                    {venue.rating} ({venue.reviews} reviews)
                  </span>
                </div>
                <p className="text-gray-700 text-sm">Price Range: {venue.priceRange}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/venues/${venue.id}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
                  >
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/venues">
            <Button
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Venues
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
