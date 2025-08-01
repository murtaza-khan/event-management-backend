"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Star,
  MapPin,
  Users,
  Clock,
  Crown,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Building2,
  ChefHat,
  Flower,
  Music,
  Palette,
  Car,
  Calendar,
} from "lucide-react"

interface PackageDetailsProps {
  package: any
}

export function PackageDetails({ package: pkg }: PackageDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % pkg.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + pkg.images.length) % pkg.images.length)
  }

  const serviceIcons = {
    venue: Building2,
    photography: Camera,
    catering: ChefHat,
    decoration: Flower,
    music: Music,
    makeup: Palette,
    transportation: Car,
    extras: Calendar,
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Crown className="w-8 h-8 text-pink-600" />
              <h1 className="text-4xl font-bold text-gray-900">{pkg.name}</h1>
              <Badge className="bg-yellow-100 text-yellow-800 text-lg px-3 py-1">{pkg.type}</Badge>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{pkg.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-lg">{pkg.guestCapacity} guests</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-lg">{pkg.duration}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-2">
              <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
              <span className="text-2xl font-semibold">{pkg.rating}</span>
              <span className="text-gray-600 ml-2">({pkg.reviews} reviews)</span>
            </div>
            <div className="text-4xl font-bold text-pink-600">
              ₹{pkg.price.toLocaleString()}
              {pkg.originalPrice && (
                <span className="text-2xl text-gray-500 line-through ml-3">₹{pkg.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <div className="text-green-600 font-semibold text-lg">Save ₹{pkg.savings.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2 h-96">
          {/* Main Image */}
          <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <img
              src={pkg.images[0] || "/placeholder.svg"}
              alt={`${pkg.name} - Main view`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
          </div>

          {/* Smaller Images */}
          {pkg.images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => {
                setCurrentImage(index + 1)
                setIsGalleryOpen(true)
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${pkg.name} - View ${index + 2}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
              {index === 3 && pkg.images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">+{pkg.images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button variant="outline" onClick={() => setIsGalleryOpen(true)} className="w-full">
          View all {pkg.images.length} photos
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "services", label: "Services Included" },
            { id: "timeline", label: "Event Timeline" },
            { id: "terms", label: "Terms & Conditions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-pink-500 text-pink-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "overview" && (
          <Card>
            <CardHeader>
              <CardTitle>Package Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">{pkg.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="space-y-2">
                    {pkg.inclusions.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Not Included:</h4>
                  <div className="space-y-2">
                    {pkg.exclusions.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(pkg.services).map(([key, service]: [string, any]) => {
              const IconComponent = serviceIcons[key as keyof typeof serviceIcons] || Calendar
              return (
                <Card key={key}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IconComponent className="w-6 h-6 mr-3 text-pink-600" />
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {activeTab === "timeline" && (
          <Card>
            <CardHeader>
              <CardTitle>Event Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pkg.timeline.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-right mr-6">
                      <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.event}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "terms" && (
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pkg.terms.map((term, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-pink-600 text-sm font-medium">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{term}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Full Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          <div className="relative w-full h-full bg-black">
            <img
              src={pkg.images[currentImage] || "/placeholder.svg"}
              alt={`${pkg.name} - View ${currentImage + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {pkg.images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
