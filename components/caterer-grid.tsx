import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Heart, Award, Users, ChefHat } from "lucide-react"

const caterers = [
  {
    id: 1,
    name: "Royal Feast Catering",
    location: "DHA, Lahore",
    rating: 4.8,
    reviews: 234,
    experience: "12 years",
    pricePerPerson: 1200,
    originalPrice: 1500,
    image: "/images/catering/royal-feast.jpg",
    specializations: ["Pakistani", "Continental", "BBQ"],
    eventsServed: 500,
    discount: 20,
    verified: true,
    minGuests: 100,
  },
  {
    id: 2,
    name: "Spice Garden Caterers",
    location: "Gulberg, Lahore",
    rating: 4.7,
    reviews: 189,
    experience: "8 years",
    pricePerPerson: 900,
    image: "/images/catering/spice-garden.jpg",
    specializations: ["Traditional", "Desi", "Live Counters"],
    eventsServed: 300,
    verified: true,
    minGuests: 50,
  },
  {
    id: 3,
    name: "Gourmet Delights",
    location: "Clifton, Karachi",
    rating: 4.9,
    reviews: 156,
    experience: "10 years",
    pricePerPerson: 1800,
    image: "/images/catering/gourmet-delights.jpg",
    specializations: ["Continental", "Chinese", "Desserts"],
    eventsServed: 400,
    verified: true,
    minGuests: 150,
  },
  {
    id: 4,
    name: "Taste Buds Catering",
    location: "F-7, Islamabad",
    rating: 4.6,
    reviews: 98,
    experience: "6 years",
    pricePerPerson: 800,
    image: "/images/catering/taste-buds.jpg",
    specializations: ["Pakistani", "Sweets", "Snacks"],
    eventsServed: 200,
    verified: false,
    minGuests: 75,
  },
]

export function CatererGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {caterers.length} caterers</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caterers.map((caterer) => (
          <Card key={caterer.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={caterer.image || "/placeholder.svg"}
                alt={caterer.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {caterer.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {caterer.discount}% OFF
                </div>
              )}
              {caterer.verified && (
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{caterer.name}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-pink-600">₹{caterer.pricePerPerson}</div>
                  {caterer.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">₹{caterer.originalPrice}</div>
                  )}
                  <div className="text-sm text-gray-600">per person</div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{caterer.location}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{caterer.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({caterer.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ChefHat className="w-4 h-4 mr-1" />
                  <span className="text-sm">{caterer.experience}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{caterer.eventsServed} events served</span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <span className="text-sm">Min. {caterer.minGuests} guests</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {caterer.specializations.slice(0, 3).map((spec) => (
                  <span key={spec} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Menu
                </Button>
                <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Caterers</Button>
      </div>
    </div>
  )
}
