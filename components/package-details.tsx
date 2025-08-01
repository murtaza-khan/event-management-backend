"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, MapPin, Check, ChevronLeft, ChevronRight } from "lucide-react"

interface PackageDetailsProps {
  package: {
    id: number
    name: string
    price: number
    originalPrice: number
    image: string
    rating: number
    reviews: number
    guests: string
    duration: string
    location: string
    savings: number
    description: string
    features: string[]
    gallery: string[]
    vendors: Array<{
      category: string
      name: string
      image: string
      rating: number
    }>
  }
}

export function PackageDetails({ package: pkg }: PackageDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pkg.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + pkg.gallery.length) % pkg.gallery.length)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">{pkg.name}</h1>
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{pkg.rating}</span>
            <span className="text-gray-500">({pkg.reviews} reviews)</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {pkg.guests} guests
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {pkg.duration}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {pkg.location}
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-6">
          <span className="text-3xl font-bold text-rose-600">₹{pkg.price.toLocaleString()}</span>
          <span className="text-xl text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
          <Badge className="bg-green-500 hover:bg-green-600">Save ₹{pkg.savings.toLocaleString()}</Badge>
        </div>
      </div>

      {/* Gallery */}
      <Card>
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={pkg.gallery[currentImageIndex] || "/placeholder.svg"}
              alt={`${pkg.name} gallery ${currentImageIndex + 1}`}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-t-lg"
            />
            {pkg.gallery.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {pkg.gallery.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>About This Package</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>What's Included</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pkg.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vendors */}
      <Card>
        <CardHeader>
          <CardTitle>Our Partner Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pkg.vendors.map((vendor, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                <Image
                  src={vendor.image || "/placeholder.svg"}
                  alt={vendor.name}
                  width={60}
                  height={60}
                  className="w-15 h-15 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{vendor.name}</h4>
                  <p className="text-sm text-gray-600">{vendor.category}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{vendor.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
