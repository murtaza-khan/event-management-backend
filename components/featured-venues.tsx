import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Users } from "lucide-react"

const venues = [
  {
    id: 1,
    name: "Royal Palace Banquet",
    location: "DHA, Lahore",
    rating: 4.8,
    reviews: 124,
    capacity: "500-1000",
    price: "₹80,000",
  },
  {
    id: 2,
    name: "Garden View Marquee",
    location: "Gulberg, Lahore",
    rating: 4.9,
    reviews: 89,
    capacity: "200-500",
    price: "₹60,000",
  },
  {
    id: 3,
    name: "Grand Ballroom",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 156,
    capacity: "300-800",
    price: "₹95,000",
  },
]

export function FeaturedVenues() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Venues</h2>
          <p className="text-gray-600 text-lg">Handpicked premium venues for your special day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Card key={venue.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{venue.name}</h3>

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

                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-pink-600">{venue.price}</div>
                  <Button className="bg-pink-600 hover:bg-pink-700">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
