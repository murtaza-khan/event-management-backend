"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock } from "lucide-react"

const allPackages = [
  {
    id: 2,
    name: "Premium Celebration",
    price: 320000,
    originalPrice: 380000,
    image: "/images/packages/premium-celebration.png",
    rating: 4.8,
    reviews: 89,
    guests: "200-300",
    duration: "2 Days",
    savings: 60000,
    badge: "Best Value",
  },
  {
    id: 3,
    name: "Grand Luxury",
    price: 280000,
    originalPrice: 320000,
    image: "/images/packages/grand-luxury.png",
    rating: 4.7,
    reviews: 156,
    guests: "150-250",
    duration: "2 Days",
    savings: 40000,
  },
  {
    id: 5,
    name: "Elegant Affair",
    price: 240000,
    originalPrice: 280000,
    image: "/images/packages/elegant-affair.png",
    rating: 4.8,
    reviews: 94,
    guests: "120-200",
    duration: "1 Day",
    savings: 40000,
  },
]

interface SimilarPackagesProps {
  currentPackageId: number
}

export function SimilarPackages({ currentPackageId }: SimilarPackagesProps) {
  const similarPackages = allPackages.filter((pkg) => pkg.id !== currentPackageId).slice(0, 3)

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.name}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              {pkg.badge && <Badge className="absolute top-2 left-2 bg-rose-500 hover:bg-rose-600">{pkg.badge}</Badge>}
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                Save ₹{pkg.savings.toLocaleString()}
              </div>
            </div>

            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{pkg.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs">{pkg.rating}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pb-2">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {pkg.guests}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {pkg.duration}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-rose-600">₹{pkg.price.toLocaleString()}</span>
                <span className="text-xs text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
              </div>
            </CardContent>

            <CardFooter className="pt-2">
              <Link href={`/packages/${pkg.id}`} className="w-full">
                <Button className="w-full" size="sm">
                  View Package
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
