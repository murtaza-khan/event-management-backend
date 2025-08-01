"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    guests: "150-250",
    duration: "2 Days",
    savings: 60000,
  },
  {
    id: 3,
    name: "Grand Luxury Package",
    price: 280000,
    originalPrice: 320000,
    image: "/images/packages/grand-luxury.png",
    rating: 4.7,
    reviews: 156,
    guests: "100-200",
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
    guests: "100-180",
    duration: "2 Days",
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              {pkg.savings > 0 && (
                <Badge className="absolute top-2 left-2 bg-green-500">Save ₹{pkg.savings.toLocaleString()}</Badge>
              )}
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{pkg.name}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{pkg.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{pkg.guests}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-xl font-bold text-rose-600">₹{pkg.price.toLocaleString()}</div>
                  {pkg.originalPrice > pkg.price && (
                    <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                  )}
                </div>
              </div>

              <Button asChild className="w-full">
                <Link href={`/packages/${pkg.id}`}>View Package</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
