import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Crown, Sparkles, Clock } from "lucide-react"
import Link from "next/link"

interface SimilarPackagesProps {
  currentPackageId: number
}

const similarPackages = [
  {
    id: 2,
    name: "Premium Celebration Package",
    type: "Premium",
    location: "Gulberg, Lahore",
    rating: 4.8,
    reviews: 156,
    price: 800000,
    originalPrice: 950000,
    savings: 150000,
    guestCapacity: "400-600",
    duration: "2 Days",
    image: "/images/packages/premium-celebration.png",
    badge: "Best Value",
    badgeColor: "bg-green-500",
    icon: Sparkles,
    discount: 16,
  },
  {
    id: 3,
    name: "Grand Luxury Experience",
    type: "Luxury",
    location: "Clifton, Karachi",
    rating: 4.9,
    reviews: 124,
    price: 1200000,
    originalPrice: 1400000,
    savings: 200000,
    guestCapacity: "600-1000",
    duration: "3 Days",
    image: "/images/packages/grand-luxury.png",
    badge: "Premium Choice",
    badgeColor: "bg-purple-500",
    icon: Crown,
    discount: 14,
  },
  {
    id: 5,
    name: "Elegant Affair Package",
    type: "Premium",
    location: "F-7, Islamabad",
    rating: 4.7,
    reviews: 167,
    price: 950000,
    originalPrice: 1100000,
    savings: 150000,
    guestCapacity: "500-800",
    duration: "2 Days",
    image: "/images/packages/elegant-affair.png",
    badge: "Trending",
    badgeColor: "bg-pink-500",
    icon: Sparkles,
    discount: 14,
  },
]

const typeColors = {
  Basic: "bg-blue-100 text-blue-800",
  Premium: "bg-purple-100 text-purple-800",
  Luxury: "bg-yellow-100 text-yellow-800",
  Royal: "bg-red-100 text-red-800",
}

export function SimilarPackages({ currentPackageId }: SimilarPackagesProps) {
  const filteredPackages = similarPackages.filter((pkg) => pkg.id !== currentPackageId)

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Packages You Might Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => {
          const IconComponent = pkg.icon
          return (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {pkg.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {pkg.discount}% OFF
                  </div>
                )}
                <div
                  className={`absolute top-4 right-4 ${pkg.badgeColor} text-white px-2 py-1 rounded text-sm font-medium`}
                >
                  {pkg.badge}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className="w-5 h-5 text-pink-600" />
                  <h3 className="font-bold text-gray-900 text-lg">{pkg.name}</h3>
                </div>

                <Badge className={`${typeColors[pkg.type as keyof typeof typeColors]} mb-3`}>{pkg.type}</Badge>

                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{pkg.location}</span>
                </div>

                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-gray-600" />
                    <span className="text-gray-600">{pkg.guestCapacity}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-600" />
                    <span className="text-gray-600">{pkg.duration}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({pkg.reviews})</span>
                </div>

                <div className="text-right mb-4">
                  <div className="text-2xl font-bold text-pink-600">₹{pkg.price.toLocaleString()}</div>
                  {pkg.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                  )}
                  <div className="text-green-600 font-medium text-sm">Save ₹{pkg.savings.toLocaleString()}</div>
                </div>

                <Link href={`/packages/${pkg.id}`}>
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                    View Package Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
