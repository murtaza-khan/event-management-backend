import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Users, Heart } from "lucide-react"
import Link from "next/link"

const featuredVenues = [
  {
    id: 1,
    name: "Royal Palace Banquet",
    location: "DHA, Lahore",
    rating: 4.8,
    reviews: 124,
    capacity: "500-1000",
    price: "₹80,000",
    image: "/images/venues/royal-palace-banquet.jpg",
    features: ["AC Hall", "Parking", "Catering"],
  },
  {
    id: 2,
    name: "Garden View Marquee",
    location: "Gulberg, Lahore",
    rating: 4.9,
    reviews: 89,
    capacity: "200-500",
    price: "₹60,000",
    image: "/images/venues/garden-marquee.jpg",
    features: ["Garden", "Outdoor", "Decoration"],
  },
  {
    id: 3,
    name: "Grand Ballroom",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 156,
    capacity: "300-800",
    price: "₹95,000",
    image: "/images/venues/grand-ballroom.jpg",
    features: ["Ballroom", "Valet", "Premium"],
  },
]

export function FeaturedVenues() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Venues</h2>
            <p className="text-gray-600 text-lg">Handpicked premium venues for your special day</p>
          </div>
          <Button variant="outline">View All Venues</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={venue.image || "/placeholder.svg"}
                  alt={venue.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-1">
                    {venue.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{venue.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-pink-600">{venue.price}</div>
                    <div className="text-sm text-gray-600">per event</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{venue.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{venue.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">({venue.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{venue.capacity}</span>
                  </div>
                </div>

                <Link href={`/venues/${venue.id}`}>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
