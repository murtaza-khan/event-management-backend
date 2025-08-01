"use client"

import Image from "next/image"
import { useState } from "react"
import { Star, Users, Clock, CheckCircle, XCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface PackageDetailsProps {
  pkg: {
    name: string
    description: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    guestCapacity: string
    duration: string
    gallery?: string[]
    services: { name: string; description: string; image: string }[]
    inclusions: string[]
    exclusions: string[]
  }
}

export function PackageDetails({ pkg }: PackageDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
        <span>
          {pkg.rating} ({pkg.reviews} reviews)
        </span>
        <Separator orientation="vertical" className="h-4 mx-4" />
        <Users className="w-5 h-5 mr-1" />
        <span>{pkg.guestCapacity} guests</span>
        <Separator orientation="vertical" className="h-4 mx-4" />
        <Clock className="w-5 h-5 mr-1" />
        <span>{pkg.duration}</span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">{pkg.description}</p>

      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold text-pink-600">${pkg.price.toLocaleString()}</span>
        {pkg.originalPrice && pkg.price < pkg.originalPrice && (
          <span className="text-lg text-gray-500 line-through ml-3">${pkg.originalPrice.toLocaleString()}</span>
        )}
        {pkg.originalPrice && pkg.price < pkg.originalPrice && (
          <span className="ml-3 text-green-600 font-semibold">
            Save ${pkg.originalPrice - pkg.price} (
            {(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100).toFixed(0)}%)
          </span>
        )}
      </div>

      {pkg.gallery && pkg.gallery.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
            <Image
              src={pkg.gallery[0] || "/placeholder.svg"}
              alt={`${pkg.name} main image`}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
              onClick={() => setSelectedImage(pkg.gallery![0])}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {pkg.gallery.slice(1, 5).map((image, index) => (
              <div key={index} className="relative w-full h-24 rounded-md overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${pkg.name} thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
            {pkg.gallery.length > 5 && (
              <div
                className="relative w-full h-24 rounded-md overflow-hidden flex items-center justify-center bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 transition-colors"
                onClick={() => setSelectedImage(pkg.gallery![0])}
              >
                <span className="text-lg font-semibold">+{pkg.gallery.length - 5} More</span>
              </div>
            )}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0">
              {selectedImage && (
                <div className="relative w-full h-[600px]">
                  <Image
                    src={selectedImage || "/placeholder.svg"}
                    alt="Selected package image"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}

      <Tabs defaultValue="services" className="w-full mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
          <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
        </TabsList>
        <TabsContent value="services" className="pt-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Included Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pkg.services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} layout="fill" objectFit="cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="inclusions" className="pt-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
          <ul className="space-y-2">
            {pkg.inclusions.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="exclusions" className="pt-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What's Not Included</h3>
          <ul className="space-y-2">
            {pkg.exclusions.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
