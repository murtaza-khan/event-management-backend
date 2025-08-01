"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Users, Clock, MapPin, Check, Phone, Mail } from "lucide-react"

interface PackageDetailsProps {
  packageId: string
}

const packageData = {
  "royal-wedding": {
    id: "royal-wedding",
    name: "Royal Wedding Package",
    price: 850000,
    originalPrice: 1000000,
    image: "/images/packages/royal-wedding.png",
    gallery: [
      "/images/packages/royal-wedding-1.png",
      "/images/packages/royal-wedding-2.png",
      "/images/packages/royal-wedding-3.png",
      "/images/packages/royal-wedding-4.png",
      "/images/packages/royal-wedding-5.png",
    ],
    rating: 4.9,
    reviewCount: 127,
    duration: "3 Days",
    guestCapacity: "300-500",
    location: "Lahore",
    description:
      "Experience the ultimate luxury with our Royal Wedding Package. This comprehensive package includes everything you need for a magnificent 3-day celebration that will be remembered for a lifetime.",
    services: [
      {
        name: "Premium Venue",
        description: "Luxury banquet hall with royal decorations",
        included: true,
      },
      {
        name: "Gourmet Catering",
        description: "5-course meal with international cuisine",
        included: true,
      },
      {
        name: "Professional Photography",
        description: "Full-day coverage with edited photos",
        included: true,
      },
      {
        name: "Floral Decoration",
        description: "Premium flowers and stage decoration",
        included: true,
      },
      {
        name: "Transportation",
        description: "Luxury car for bride and groom",
        included: true,
      },
      {
        name: "Entertainment",
        description: "Live music and DJ services",
        included: true,
      },
    ],
    highlights: [
      "Royal-themed decorations",
      "Premium venue with AC",
      "Professional photography team",
      "Luxury transportation",
      "Dedicated event coordinator",
      "24/7 customer support",
    ],
    vendor: {
      name: "Royal Events & Weddings",
      rating: 4.9,
      experience: "15+ years",
      completedEvents: "500+",
      phone: "+92-300-1234567",
      email: "info@royalevents.pk",
    },
  },
}

export default function PackageDetails({ packageId }: PackageDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const pkg = packageData[packageId as keyof typeof packageData]

  if (!pkg) {
    return <div>Package not found</div>
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const savings = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="relative">
            <Image
              src={pkg.gallery[selectedImage] || "/placeholder.svg"}
              alt={pkg.name}
              width={800}
              height={500}
              className="w-full h-96 object-cover rounded-lg"
            />
            {savings > 0 && (
              <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-lg px-3 py-1">
                Save {formatPrice(savings)}
              </Badge>
            )}
          </div>

          {/* Gallery thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {pkg.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 ${selectedImage === index ? "ring-2 ring-primary" : ""}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  width={100}
                  height={80}
                  className="w-20 h-16 object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium ml-1">{pkg.rating}</span>
                </div>
                <span className="text-muted-foreground">({pkg.reviewCount} reviews)</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-primary">{formatPrice(pkg.price)}</div>
                {pkg.originalPrice && (
                  <div className="text-lg text-muted-foreground line-through">{formatPrice(pkg.originalPrice)}</div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{pkg.guestCapacity} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{pkg.location}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Book Now
              </Button>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Vendor Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="font-medium">{pkg.vendor.name}</div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>
                      {pkg.vendor.rating} • {pkg.vendor.experience}
                    </span>
                  </div>
                  <div>{pkg.vendor.completedEvents} completed events</div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{pkg.vendor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{pkg.vendor.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Details Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Package Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Package Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          {pkg.services.map((service, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{service.name}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
