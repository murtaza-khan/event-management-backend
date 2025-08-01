"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Users, Clock, Check, X, Heart, Share2 } from "lucide-react"

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
    savings: number
    gallery: string[]
    services: Array<{
      name: string
      description: string
      included: boolean
    }>
    description: string
    highlights: string[]
  }
}

export function PackageDetails({ package: pkg }: PackageDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{pkg.rating}</span>
              <span>({pkg.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{pkg.guests} guests</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{pkg.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Price */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-rose-600">₹{pkg.price.toLocaleString()}</div>
              {pkg.originalPrice > pkg.price && (
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                  <Badge className="bg-green-500">Save ₹{pkg.savings.toLocaleString()}</Badge>
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Starting from</div>
              <div className="text-sm text-gray-600">*Prices may vary based on requirements</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gallery */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={pkg.gallery[selectedImage] || "/placeholder.svg"}
                alt={`${pkg.name} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {pkg.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video relative rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-rose-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${pkg.name} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Details Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Package Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Package Highlights:</h4>
                <ul className="space-y-2">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Included Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pkg.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    {service.included ? (
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    {!service.included && <Badge variant="outline">Add-on Available</Badge>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold">Priya & Rahul</span>
                      <span className="text-sm text-gray-500">2 months ago</span>
                    </div>
                    <p className="text-gray-600">
                      Amazing experience! The team was professional and everything was perfectly organized. Our wedding
                      was exactly what we dreamed of. Highly recommended!
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
