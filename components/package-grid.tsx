"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, MapPin } from "lucide-react"

interface Package {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  duration: string
  guestCapacity: string
  location: string
  services: string[]
  savings?: number
  popular?: boolean
  type: "luxury" | "premium" | "standard" | "budget"
}

const packages: Package[] = [
  {
    id: "royal-wedding",
    name: "Royal Wedding Package",
    price: 850000,
    originalPrice: 1000000,
    image: "/images/packages/royal-wedding.png",
    rating: 4.9,
    reviewCount: 127,
    duration: "3 Days",
    guestCapacity: "300-500",
    location: "Lahore",
    services: ["Venue", "Catering", "Photography", "Decoration", "Transportation"],
    savings: 150000,
    popular: true,
    type: "luxury",
  },
  {
    id: "premium-celebration",
    name: "Premium Celebration",
    price: 650000,
    originalPrice: 750000,
    image: "/images/packages/premium-celebration.png",
    rating: 4.8,
    reviewCount: 89,
    duration: "2 Days",
    guestCapacity: "200-300",
    location: "Karachi",
    services: ["Venue", "Catering", "Photography", "Decoration"],
    savings: 100000,
    type: "premium",
  },
  {
    id: "grand-luxury",
    name: "Grand Luxury Experience",
    price: 1200000,
    originalPrice: 1400000,
    image: "/images/packages/grand-luxury.png",
    rating: 5.0,
    reviewCount: 45,
    duration: "4 Days",
    guestCapacity: "500+",
    location: "Islamabad",
    services: ["Venue", "Catering", "Photography", "Decoration", "Transportation", "Entertainment"],
    savings: 200000,
    type: "luxury",
  },
  {
    id: "essential-wedding",
    name: "Essential Wedding",
    price: 250000,
    originalPrice: 300000,
    image: "/images/packages/essential-wedding.png",
    rating: 4.5,
    reviewCount: 156,
    duration: "1 Day",
    guestCapacity: "100-150",
    location: "Multiple Cities",
    services: ["Venue", "Catering", "Photography"],
    savings: 50000,
    type: "budget",
  },
  {
    id: "elegant-affair",
    name: "Elegant Affair",
    price: 450000,
    originalPrice: 520000,
    image: "/images/packages/elegant-affair.png",
    rating: 4.7,
    reviewCount: 203,
    duration: "2 Days",
    guestCapacity: "150-250",
    location: "Lahore",
    services: ["Venue", "Catering", "Photography", "Decoration"],
    savings: 70000,
    type: "standard",
  },
  {
    id: "dream-wedding",
    name: "Dream Wedding",
    price: 380000,
    originalPrice: 420000,
    image: "/images/packages/dream-wedding.png",
    rating: 4.6,
    reviewCount: 98,
    duration: "1 Day",
    guestCapacity: "80-120",
    location: "Karachi",
    services: ["Venue", "Catering", "Photography", "Decoration"],
    savings: 40000,
    type: "standard",
  },
]

interface PackageGridProps {
  filters: {
    priceRange: [number, number]
    packageType: string
    services: string[]
    location: string
    guestCapacity: string
    duration: string
  }
}

export default function PackageGrid({ filters }: PackageGridProps) {
  const [filteredPackages, setFilteredPackages] = useState(packages)

  // Apply filters
  const applyFilters = () => {
    const filtered = packages.filter((pkg) => {
      // Price range filter
      if (pkg.price < filters.priceRange[0] || pkg.price > filters.priceRange[1]) {
        return false
      }

      // Package type filter
      if (filters.packageType !== "all" && pkg.type !== filters.packageType) {
        return false
      }

      // Services filter
      if (filters.services.length > 0) {
        const hasAllServices = filters.services.every((service) =>
          pkg.services.some((pkgService) => pkgService.toLowerCase().includes(service.toLowerCase())),
        )
        if (!hasAllServices) return false
      }

      // Location filter
      if (filters.location !== "all" && !pkg.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false
      }

      return true
    })

    setFilteredPackages(filtered)
  }

  // Apply filters whenever filters change
  useState(() => {
    applyFilters()
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPackages.map((pkg) => (
        <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <Image
              src={pkg.image || "/placeholder.svg"}
              alt={pkg.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            {pkg.popular && (
              <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">Most Popular</Badge>
            )}
            {pkg.savings && (
              <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
                Save {formatPrice(pkg.savings)}
              </Badge>
            )}
          </div>

          <CardHeader>
            <CardTitle className="text-lg">{pkg.name}</CardTitle>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium ml-1">{pkg.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({pkg.reviewCount} reviews)</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-primary">{formatPrice(pkg.price)}</div>
                {pkg.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through">{formatPrice(pkg.originalPrice)}</div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{pkg.guestCapacity} guests</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{pkg.location}</span>
              </div>
            </div>

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
          </CardContent>

          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/packages/${pkg.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}

      {filteredPackages.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No packages found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
