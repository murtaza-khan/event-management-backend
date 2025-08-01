import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Heart, Award, Users, Flower } from "lucide-react"

const decorators = [
  {
    id: 1,
    name: "Royal Decorations",
    location: "DHA, Lahore",
    rating: 4.8,
    reviews: 145,
    experience: "12 years",
    price: 150000,
    originalPrice: 180000,
    image: "/images/decoration/royal-decorations.jpg",
    specializations: ["Stage Setup", "Floral", "Lighting"],
    completedEvents: 400,
    discount: 15,
    verified: true,
  },
  {
    id: 2,
    name: "Elegant Events Decor",
    location: "Gulberg, Lahore",
    rating: 4.7,
    reviews: 123,
    experience: "9 years",
    price: 120000,
    image: "/images/decoration/elegant-events.jpg",
    specializations: ["Modern", "Traditional", "Themed"],
    completedEvents: 320,
    verified: true,
  },
  {
    id: 3,
    name: "Bloom & Bliss Decorators",
    location: "Clifton, Karachi",
    rating: 4.9,
    reviews: 167,
    experience: "8 years",
    price: 95000,
    image: "/images/decoration/bloom-bliss.jpg",
    specializations: ["Floral", "Outdoor", "Minimalist"],
    completedEvents: 280,
    verified: true,
  },
  {
    id: 4,
    name: "Dream Decor Studio",
    location: "F-7, Islamabad",
    rating: 4.6,
    reviews: 89,
    experience: "6 years",
    price: 75000,
    image: "/images/decoration/dream-decor.jpg",
    specializations: ["Budget-Friendly", "Creative", "Custom"],
    completedEvents: 200,
    verified: false,
  },
]

export function DecoratorGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {decorators.length} decorators</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {decorators.map((decorator) => (
          <Card key={decorator.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={decorator.image || "/placeholder.svg?height=200&width=400&query=wedding decoration"}
                alt={decorator.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {decorator.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {decorator.discount}% OFF
                </div>
              )}
              {decorator.verified && (
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{decorator.name}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-pink-600">₹{decorator.price.toLocaleString()}</div>
                  {decorator.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      ₹{decorator.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="text-sm text-gray-600">per event</div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{decorator.location}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{decorator.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({decorator.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Flower className="w-4 h-4 mr-1" />
                  <span className="text-sm">{decorator.experience}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{decorator.completedEvents} events decorated</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {decorator.specializations.slice(0, 3).map((spec) => (
                  <span key={spec} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Gallery
                </Button>
                <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Decorators</Button>
      </div>
    </div>
  )
}
