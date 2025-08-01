"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, Heart } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Royal Wedding Package",
    price: 450000,
    originalPrice: 550000,
    image: "/images/packages/royal-wedding.png",
    rating: 4.9,
    reviews: 127,
    guests: "200-300",
    duration: "3 Days",
    savings: 100000,
    featured: true,
    services: [
      "Premium Venue",
      "Luxury Catering",
      "Professional Photography",
      "Full Decoration",
      "Live Music",
      "Transportation",
    ],
    description: "Our most luxurious package with premium venues and top-tier services",
  },
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
    featured: false,
    services: ["Premium Venue", "Catering", "Photography", "Decoration", "Music"],
    description: "Perfect balance of luxury and value for your special day",
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
    featured: true,
    services: ["Venue", "Catering", "Photography", "Basic Decoration", "Music"],
    description: "Elegant celebration with all essential services included",
  },
  {
    id: 4,
    name: "Essential Wedding",
    price: 180000,
    originalPrice: 220000,
    image: "/images/packages/essential-wedding.png",
    rating: 4.6,
    reviews: 203,
    guests: "75-150",
    duration: "1 Day",
    savings: 40000,
    featured: false,
    services: ["Venue", "Basic Catering", "Photography", "Simple Decoration"],
    description: "Complete wedding solution for intimate celebrations",
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
    featured: false,
    services: ["Modern Venue", "Catering", "Photography", "Contemporary Decoration"],
    description: "Modern and stylish wedding package for contemporary couples",
  },
  {
    id: 6,
    name: "Dream Wedding",
    price: 150000,
    originalPrice: 180000,
    image: "/images/packages/dream-wedding.png",
    rating: 4.5,
    reviews: 78,
    guests: "50-100",
    duration: "1 Day",
    savings: 30000,
    featured: false,
    services: ["Intimate Venue", "Catering", "Photography", "Decoration"],
    description: "Perfect for intimate weddings with close family and friends",
  },
]

export function PackageGrid() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (packageId: number) => {
    setFavorites((prev) => (prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId]))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{packages.length} packages found</p>
        <select className="border rounded-lg px-3 py-2">
          <option>Sort by: Price (Low to High)</option>
          <option>Sort by: Price (High to Low)</option>
          <option>Sort by: Rating</option>
          <option>Sort by: Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              {pkg.featured && <Badge className="absolute top-2 left-2 bg-yellow-500">Featured</Badge>}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => toggleFavorite(pkg.id)}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(pkg.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              {pkg.savings > 0 && (
                <Badge className="absolute bottom-2 left-2 bg-green-500">Save ₹{pkg.savings.toLocaleString()}</Badge>
              )}
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{pkg.name}</CardTitle>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rose-600">₹{pkg.price.toLocaleString()}</div>
                  {pkg.originalPrice > pkg.price && (
                    <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{pkg.rating}</span>
                  <span>({pkg.reviews})</span>
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
              <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

              <div className="space-y-2 mb-4">
                <h4 className="font-semibold text-sm">Included Services:</h4>
                <div className="flex flex-wrap gap-1">
                  {pkg.services.slice(0, 3).map((service) => (
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                  {pkg.services.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{pkg.services.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild className="flex-1">
                  <Link href={`/packages/${pkg.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" size="sm">
                  Quick Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
