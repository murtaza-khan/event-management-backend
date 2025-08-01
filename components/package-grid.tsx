"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, MapPin, Heart, Camera, Utensils, Palette } from "lucide-react"

const packages = [
  {
    id: "royal-wedding",
    name: "Royal Wedding Package",
    price: 2500000,
    originalPrice: 3000000,
    image: "/images/packages/royal-wedding.png",
    rating: 4.9,
    reviews: 127,
    location: "Lahore",
    guests: "300-500",
    duration: "3 Days",
    savings: 500000,
    featured: true,
    services: [
      { name: "Premium Venue", icon: MapPin },
      { name: "Photography", icon: Camera },
      { name: "Catering", icon: Utensils },
      { name: "Decoration", icon: Palette },
    ],
    description:
      "The ultimate luxury wedding experience with premium venues, world-class catering, and professional photography.",
    highlights: ["5-Star Venue", "Professional Photography", "Gourmet Catering", "Luxury Transportation"],
  },
  {
    id: "premium-celebration",
    name: "Premium Celebration",
    price: 1800000,
    originalPrice: 2200000,
    image: "/images/packages/premium-celebration.png",
    rating: 4.8,
    reviews: 89,
    location: "Karachi",
    guests: "200-350",
    duration: "2 Days",
    savings: 400000,
    featured: false,
    services: [
      { name: "Premium Venue", icon: MapPin },
      { name: "Photography", icon: Camera },
      { name: "Catering", icon: Utensils },
      { name: "Decoration", icon: Palette },
    ],
    description: "Elegant celebration package with premium services and beautiful venues for your special day.",
    highlights: ["Premium Venue", "Professional Photography", "Quality Catering", "Elegant Decoration"],
  },
  {
    id: "grand-luxury",
    name: "Grand Luxury Package",
    price: 3200000,
    originalPrice: 3800000,
    image: "/images/packages/grand-luxury.png",
    rating: 5.0,
    reviews: 156,
    location: "Islamabad",
    guests: "400-600",
    duration: "4 Days",
    savings: 600000,
    featured: true,
    services: [
      { name: "Luxury Resort", icon: MapPin },
      { name: "Cinematic Photography", icon: Camera },
      { name: "Fine Dining", icon: Utensils },
      { name: "Designer Decoration", icon: Palette },
    ],
    description: "The most luxurious wedding package with resort venues, fine dining, and cinematic photography.",
    highlights: ["Luxury Resort", "Cinematic Photography", "Fine Dining", "Designer Decoration"],
  },
  {
    id: "essential-wedding",
    name: "Essential Wedding",
    price: 800000,
    originalPrice: 1000000,
    image: "/images/packages/essential-wedding.png",
    rating: 4.6,
    reviews: 203,
    location: "Lahore",
    guests: "100-200",
    duration: "1 Day",
    savings: 200000,
    featured: false,
    services: [
      { name: "Standard Venue", icon: MapPin },
      { name: "Basic Photography", icon: Camera },
      { name: "Standard Catering", icon: Utensils },
      { name: "Simple Decoration", icon: Palette },
    ],
    description: "Perfect starter package for intimate weddings with all essential services included.",
    highlights: ["Quality Venue", "Professional Photos", "Delicious Food", "Beautiful Decoration"],
  },
  {
    id: "elegant-affair",
    name: "Elegant Affair",
    price: 1500000,
    originalPrice: 1800000,
    image: "/images/packages/elegant-affair.png",
    rating: 4.7,
    reviews: 94,
    location: "Karachi",
    guests: "150-300",
    duration: "2 Days",
    savings: 300000,
    featured: false,
    services: [
      { name: "Elegant Venue", icon: MapPin },
      { name: "Photography", icon: Camera },
      { name: "Premium Catering", icon: Utensils },
      { name: "Stylish Decoration", icon: Palette },
    ],
    description: "Sophisticated wedding package with elegant venues and premium services for discerning couples.",
    highlights: ["Elegant Venue", "Professional Photography", "Premium Catering", "Stylish Decoration"],
  },
  {
    id: "dream-wedding",
    name: "Dream Wedding",
    price: 1200000,
    originalPrice: 1500000,
    image: "/images/packages/dream-wedding.png",
    rating: 4.8,
    reviews: 167,
    location: "Islamabad",
    guests: "120-250",
    duration: "2 Days",
    savings: 300000,
    featured: false,
    services: [
      { name: "Beautiful Venue", icon: MapPin },
      { name: "Photography", icon: Camera },
      { name: "Quality Catering", icon: Utensils },
      { name: "Romantic Decoration", icon: Palette },
    ],
    description:
      "Make your dream wedding come true with this comprehensive package designed for romantic celebrations.",
    highlights: ["Beautiful Venue", "Romantic Setup", "Quality Services", "Memorable Experience"],
  },
]

interface PackageGridProps {
  searchQuery?: string
  selectedLocation?: string
  selectedPriceRange?: string
  selectedGuests?: string
  selectedServices?: string[]
}

export function PackageGrid({
  searchQuery = "",
  selectedLocation = "",
  selectedPriceRange = "",
  selectedGuests = "",
  selectedServices = [],
}: PackageGridProps) {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (packageId: string) => {
    setFavorites((prev) => (prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId]))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const filteredPackages = packages.filter((pkg) => {
    // Search query filter
    if (searchQuery && !pkg.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Location filter
    if (selectedLocation && selectedLocation !== "all" && pkg.location !== selectedLocation) {
      return false
    }

    // Price range filter
    if (selectedPriceRange && selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-").map(Number)
      if (max && (pkg.price < min || pkg.price > max)) {
        return false
      }
      if (!max && pkg.price < min) {
        return false
      }
    }

    // Guests filter
    if (selectedGuests && selectedGuests !== "all") {
      const [minGuests] = selectedGuests.split("-").map(Number)
      const [pkgMin] = pkg.guests.split("-").map(Number)
      if (minGuests && pkgMin < minGuests) {
        return false
      }
    }

    // Services filter
    if (selectedServices.length > 0) {
      const packageServices = pkg.services.map((s) => s.name.toLowerCase())
      const hasAllServices = selectedServices.every((service) =>
        packageServices.some((pkgService) => pkgService.includes(service.toLowerCase())),
      )
      if (!hasAllServices) {
        return false
      }
    }

    return true
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPackages.map((pkg) => (
        <Card key={pkg.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="relative">
            <Image
              src={pkg.image || "/placeholder.svg"}
              alt={pkg.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {pkg.featured && <Badge className="absolute top-3 left-3 bg-pink-600">Featured</Badge>}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 bg-white/80 hover:bg-white"
              onClick={() => toggleFavorite(pkg.id)}
            >
              <Heart
                className={`w-4 h-4 ${favorites.includes(pkg.id) ? "fill-pink-600 text-pink-600" : "text-gray-600"}`}
              />
            </Button>
            {pkg.savings > 0 && (
              <Badge variant="destructive" className="absolute bottom-3 left-3">
                Save {formatPrice(pkg.savings)}
              </Badge>
            )}
          </div>

          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{pkg.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{pkg.rating}</span>
                <span className="text-sm text-gray-500">({pkg.reviews})</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pkg.description}</p>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {pkg.location}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {pkg.guests}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {pkg.services.slice(0, 3).map((service, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {service.name}
                </Badge>
              ))}
              {pkg.services.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{pkg.services.length - 3} more
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-pink-600">{formatPrice(pkg.price)}</span>
                  {pkg.originalPrice > pkg.price && (
                    <span className="text-sm text-gray-500 line-through">{formatPrice(pkg.originalPrice)}</span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{pkg.duration}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Link href={`/packages/${pkg.id}`} className="w-full">
              <Button className="w-full bg-pink-600 hover:bg-pink-700">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}

      {filteredPackages.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-500 mb-4">
            <Heart className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No packages found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        </div>
      )}
    </div>
  )
}
