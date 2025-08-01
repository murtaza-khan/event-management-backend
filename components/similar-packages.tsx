import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Users, Clock, Heart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SimilarPackagesProps {
  packages: {
    id: string
    name: string
    image: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    guestCapacity: string
    duration: string
    services: string[]
  }[]
}

export function SimilarPackages({ packages }: SimilarPackagesProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Packages You Might Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="flex flex-col relative overflow-hidden">
            {pkg.originalPrice && pkg.price < pkg.originalPrice && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                Save ${pkg.originalPrice - pkg.price}
              </Badge>
            )}
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <CardTitle className="text-xl font-semibold mb-2">{pkg.name}</CardTitle>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>
                  {pkg.rating} ({pkg.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Users className="w-4 h-4 mr-1" />
                <span>{pkg.guestCapacity} guests</span>
                <Clock className="w-4 h-4 ml-4 mr-1" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {pkg.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    <CheckCircle className="w-3 h-3 mr-1" /> {service}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-pink-600">${pkg.price.toLocaleString()}</span>
                {pkg.originalPrice && pkg.price < pkg.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">${pkg.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <Link href={`/packages/${pkg.id}`} className="flex-1 mr-2">
                <Button
                  variant="outline"
                  className="w-full border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
                >
                  View Details
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-pink-600">
                <Heart className="w-5 h-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
