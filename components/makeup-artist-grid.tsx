import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Heart, Award, Users, Clock } from "lucide-react"

const makeupArtists = [
  {
    id: 1,
    name: "Sana Makeup Studio",
    location: "DHA, Lahore",
    rating: 4.9,
    reviews: 156,
    experience: "8 years",
    price: 25000,
    originalPrice: 30000,
    image: "/images/makeup/sana-makeup-studio.jpg",
    specializations: ["Bridal", "HD Makeup", "Traditional"],
    completedEvents: 200,
    discount: 15,
    verified: true,
  },
  {
    id: 2,
    name: "Ayesha Beauty Lounge",
    location: "Gulberg, Lahore",
    rating: 4.8,
    reviews: 124,
    experience: "6 years",
    price: 20000,
    image: "/images/makeup/ayesha-beauty-lounge.jpg",
    specializations: ["Bridal", "Party", "Airbrush"],
    completedEvents: 150,
    verified: true,
  },
  {
    id: 3,
    name: "Glamour by Fatima",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 98,
    experience: "5 years",
    price: 18000,
    image: "/images/makeup/glamour-by-fatima.jpg",
    specializations: ["Modern", "HD", "Fashion"],
    completedEvents: 120,
    verified: false,
  },
  {
    id: 4,
    name: "Zara's Beauty Corner",
    location: "F-7, Islamabad",
    rating: 4.6,
    reviews: 87,
    experience: "4 years",
    price: 15000,
    image: "/images/makeup/zara-beauty-corner.jpg",
    specializations: ["Traditional", "Mehndi", "Nikah"],
    completedEvents: 90,
    verified: true,
  },
]

export function MakeupArtistGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {makeupArtists.length} makeup artists</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {makeupArtists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {artist.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {artist.discount}% OFF
                </div>
              )}
              {artist.verified && (
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-pink-600">₹{artist.price.toLocaleString()}</div>
                  {artist.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">₹{artist.originalPrice.toLocaleString()}</div>
                  )}
                  <div className="text-sm text-gray-600">per event</div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{artist.location}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{artist.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({artist.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{artist.experience}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{artist.completedEvents} events completed</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {artist.specializations.slice(0, 3).map((spec) => (
                  <span key={spec} className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Portfolio
                </Button>
                <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Artists</Button>
      </div>
    </div>
  )
}
