"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, MapPin } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Royal Wedding",
    price: 450000,
    originalPrice: 500000,
    image: "/images/packages/royal-wedding.png",
    rating: 4.9,
    reviews: 127,
    guests: "300-500",
    duration: "3 Days",
    location: "Premium Venues",
    savings: 50000,
    features: ["Luxury Venue", "Premium Catering", "Professional Photography", "Decoration", "Transportation"],
    badge: "Most Popular",
  },
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
    location: "Elite Venues",
    savings: 60000,
    features: ["Premium Venue", "Gourmet Catering", "Photography", "Floral Decoration", "Music System"],
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
    location: "Resort Venues",
    savings: 40000,
    features: ["Resort Venue", "Multi-cuisine Catering", "Photography", "Theme Decoration", "DJ Services"],
  },
  {
    id: 4,
    name: "Essential Wedding",
    price: 180000,
    originalPrice: 220000,
    image: "/images/packages/essential-wedding.png",
    rating: 4.6,
    reviews: 203,
    guests: "100-150",
    duration: "1 Day",
    location: "Community Halls",
    savings: 40000,
    features: ["Hall Venue", "Traditional Catering", "Basic Photography", "Simple Decoration", "Sound System"],
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
    location: "Modern Venues",
    savings: 40000,
    features: ["Modern Venue", "Contemporary Catering", "Professional Photography", "Elegant Decoration", "Live Music"],
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
    location: "Intimate Venues",
    savings: 30000,
    features: ["Cozy Venue", "Intimate Catering", "Photography", "Personalized Decoration", "Acoustic Music"],
  },
]

export function PackageGrid() {
  const [sortBy, setSortBy] = useState("popular")

  const sortedPackages = [...packages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">{packages.length} packages found</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              {pkg.badge && <Badge className="absolute top-3 left-3 bg-rose-500 hover:bg-rose-600">{pkg.badge}</Badge>}
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                Save ₹{pkg.savings.toLocaleString()}
              </div>
            </div>

            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">{pkg.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                  <span className="text-sm text-gray-500">({pkg.reviews})</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pb-2">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  {pkg.guests} guests
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {pkg.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {pkg.location}
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <h4 className="font-medium text-sm">Includes:</h4>
                <div className="flex flex-wrap gap-1">
                  {pkg.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {pkg.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{pkg.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-rose-600">₹{pkg.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
              </div>
            </CardContent>

            <CardFooter className="pt-2">
              <div className="flex space-x-2 w-full">
                <Link href={`/packages/${pkg.id}`} className="flex-1">
                  <Button className="w-full">View Details</Button>
                </Link>
                <Button variant="outline" size="sm">
                  Compare
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
