import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Users } from "lucide-react"
import Link from "next/link"

interface SimilarVenuesProps {
  currentVenueId: number
}

const similarVenues = [
  {
    id: 2,
    name: "Garden View Marquee",
    location: "Gulberg, Lahore",
    rating: 4.9,
    reviews: 89,
    capacity: "200-500",
    price: 60000,
    image: "/images/venues/garden-marquee.jpg",
    type: "Marquee",
  },
  {
    id: 3,
    name: "Grand Ballroom",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 156,
    capacity: "300-800",
    price: 95000,
    image: "/images/venues/grand-ballroom.jpg",
    type: "Hotel",
  },
  {
    id: 4,
    name: "Sunset Farmhouse",
    location: "Bedian Road, Lahore",
    rating: 4.6,
    reviews: 78,
    capacity: "100-300",
    price: 45000,
    image: "/images/venues/sunset-farmhouse.jpg",
    type: "Farmhouse",
  },
]

export function SimilarVenues({ currentVenueId }: SimilarVenuesProps) {
  const filteredVenues = similarVenues.filter((venue) => venue.id !== currentVenueId)

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Venues You Might Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredVenues.map((venue) => (
          <Card key={venue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={venue.image || "/placeholder.svg"} alt={venue.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-4 left-4">
                <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">{venue.type}</span>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">{venue.name}</h3>
                <div className="text-right">
                  <div className="font-bold text-pink-600">₹{venue.price.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">per event</div>
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
                  <span className="text-sm text-gray-600 ml-1">({venue.reviews})</span>
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
  )
}
