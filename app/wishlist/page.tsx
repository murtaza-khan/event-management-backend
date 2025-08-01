import { CardFooter } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Heart, Trash2, Star, MapPin, Users, Clock } from "lucide-react"

// Mock data for wishlist items
const mockWishlistItems = [
  {
    id: "venue-royal-palace",
    type: "venue",
    name: "Royal Palace Banquet Hall",
    image: "/images/venues/royal-palace-banquet.png",
    location: "Lahore, Pakistan",
    rating: 4.9,
    reviews: 150,
    priceRange: "$$$$",
  },
  {
    id: "package-royal-wedding",
    type: "package",
    name: "Royal Wedding Extravaganza",
    image: "/images/packages/royal-wedding.png",
    price: 75000,
    originalPrice: 90000,
    rating: 4.9,
    reviews: 120,
    guestCapacity: "500-1000",
    duration: "Full Day",
  },
  {
    id: "photographer-capture-moments",
    type: "photographer",
    name: "Capture Moments Photography",
    image: "/placeholder.svg?height=400&width=600",
    location: "Lahore",
    rating: 4.9,
    reviews: 160,
    priceRange: "$$$$",
  },
  {
    id: "caterer-royal-feast",
    type: "caterer",
    name: "Royal Feast Catering",
    image: "/images/catering/royal-feast.png",
    location: "Lahore",
    rating: 4.9,
    reviews: 180,
    priceRange: "$$$$",
  },
]

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Wishlist</h1>

      {mockWishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <p className="text-xl text-gray-600 mb-4">Your wishlist is empty!</p>
          <p className="text-gray-500 mb-8">
            Start exploring venues, packages, and vendors to add to your dream wedding list.
          </p>
          <Link href="/packages">
            <Button className="bg-pink-600 hover:bg-pink-700">Explore Services</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockWishlistItems.map((item) => (
            <Card key={item.id} className="flex flex-col relative overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-1">
                <CardTitle className="text-xl font-semibold mb-2">{item.name}</CardTitle>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
                {item.type === "venue" || item.type === "photographer" || item.type === "caterer" ? (
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                ) : null}
                {item.type === "package" && (
                  <>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{item.guestCapacity} guests</span>
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </>
                )}
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-pink-600">
                    {item.price ? `$${item.price.toLocaleString()}` : item.priceRange}
                  </span>
                  {item.type === "package" && item.originalPrice && item.price < item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Link href={`/${item.type}s/${item.id}`} className="flex-1 mr-2">
                  <Button
                    variant="outline"
                    className="w-full border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
                  >
                    View Details
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50">
                  <Trash2 className="w-5 h-5" />
                  <span className="sr-only">Remove from Wishlist</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
