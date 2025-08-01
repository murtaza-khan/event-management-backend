import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Heart, Award, Users, Camera } from "lucide-react"

const photographers = [
  {
    id: 1,
    name: "Capture Moments Studio",
    location: "DHA, Lahore",
    rating: 4.9,
    reviews: 187,
    experience: "10 years",
    price: 80000,
    originalPrice: 95000,
    image: "/images/photography/capture-moments.jpg",
    specializations: ["Wedding", "Pre-Wedding", "Candid"],
    completedEvents: 350,
    discount: 15,
    verified: true,
  },
  {
    id: 2,
    name: "Lens & Light Photography",
    location: "Gulberg, Lahore",
    rating: 4.8,
    reviews: 156,
    experience: "8 years",
    price: 65000,
    image: "/images/photography/lens-light.jpg",
    specializations: ["Traditional", "Cinematic", "Portraits"],
    completedEvents: 280,
    verified: true,
  },
  {
    id: 3,
    name: "Golden Hour Studios",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 134,
    experience: "7 years",
    price: 55000,
    image: "/images/photography/golden-hour.jpg",
    specializations: ["Outdoor", "Fashion", "Events"],
    completedEvents: 220,
    verified: false,
  },
  {
    id: 4,
    name: "Frame Perfect Photography",
    location: "F-7, Islamabad",
    rating: 4.6,
    reviews: 98,
    experience: "6 years",
    price: 45000,
    image: "/images/photography/frame-perfect.jpg",
    specializations: ["Documentary", "Artistic", "Family"],
    completedEvents: 180,
    verified: true,
  },
]

export function PhotographerGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {photographers.length} photographers</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photographers.map((photographer) => (
          <Card key={photographer.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={photographer.image || "/placeholder.svg?height=200&width=400&query=photography studio"}
                alt={photographer.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {photographer.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {photographer.discount}% OFF
                </div>
              )}
              {photographer.verified && (
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{photographer.name}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-pink-600">₹{photographer.price.toLocaleString()}</div>
                  {photographer.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      ₹{photographer.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="text-sm text-gray-600">per event</div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{photographer.location}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{photographer.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({photographer.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Camera className="w-4 h-4 mr-1" />
                  <span className="text-sm">{photographer.experience}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{photographer.completedEvents} events covered</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {photographer.specializations.slice(0, 3).map((spec) => (
                  <span key={spec} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
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
        <Button variant="outline">Load More Photographers</Button>
      </div>
    </div>
  )
}
