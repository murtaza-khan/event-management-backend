import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Users, Heart, Wifi, Car, Utensils, Camera, Palette, ChefHat, Flower, Music } from "lucide-react"
import Link from "next/link"

interface Vendor {
  _id: string
  businessName: string
  category: string
  description: string
  city: string
  area: string
  rating: number
  reviewCount: number
  portfolio: string[]
  pricing?: {
    perHeadPrice?: string
    venueRental?: string
    minGuests?: string
    maxGuests?: string
    bridalPackage?: string
    weddingPackage?: string
    basicPackage?: string
    premiumPackage?: string
    luxuryPackage?: string
  }
}

interface VendorGridProps {
  category?: string
  city?: string
}

async function getVendors(category?: string, city?: string): Promise<Vendor[]> {
  const baseUrl = "http://localhost:3001/api/vendors"
  const params = new URLSearchParams()
  
  if (category) params.append("category", category)
  if (city) params.append("city", city)
  
  const url = `${baseUrl}?${params.toString()}`
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch vendors:", error)
    return []
  }
}

const categoryIcons: Record<string, any> = {
  venue: Users,
  makeup: Palette,
  catering: ChefHat,
  photography: Camera,
  decoration: Flower,
  music: Music,
  transportation: Car
}

const getPriceText = (vendor: Vendor) => {
  const pricing = vendor.pricing || {}
  
  if (vendor.category === "venue") {
    return pricing.venueRental ? `₹${parseInt(pricing.venueRental).toLocaleString()}` : "Contact for pricing"
  }
  if (vendor.category === "makeup") {
    return pricing.bridalPackage ? `Starting from ₹${parseInt(pricing.bridalPackage).toLocaleString()}` : "Contact for pricing"
  }
  if (vendor.category === "catering") {
    return pricing.perHeadPrice ? `₹${parseInt(pricing.perHeadPrice).toLocaleString()}/plate` : "Contact for pricing"
  }
  if (vendor.category === "photography") {
    return pricing.weddingPackage ? `Starting from ₹${parseInt(pricing.weddingPackage).toLocaleString()}` : "Contact for pricing"
  }
  if (vendor.category === "transportation") {
    return pricing.basicPackage ? `Starting from ₹${parseInt(pricing.basicPackage).toLocaleString()}` : "Contact for pricing"
  }
  
  return "Contact for pricing"
}

export async function VendorGrid({ category, city }: VendorGridProps) {
  const vendors = await getVendors(category, city)

  if (vendors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No vendors found matching your criteria.</p>
        <p className="text-gray-500">Try adjusting your filters or search in a different location.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {vendors.length} vendors</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vendors.map((vendor) => {
          const IconComponent = categoryIcons[vendor.category] || Users
          const priceText = getPriceText(vendor)
          const imageUrl = vendor.portfolio?.[0] || "/placeholder.svg"

          return (
            <Card key={vendor._id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={imageUrl}
                  alt={vendor.businessName}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded capitalize">
                    {vendor.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{vendor.businessName}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-pink-600">{priceText}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{vendor.area}, {vendor.city}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{vendor.rating || "New"}</span>
                    <span className="text-sm text-gray-600 ml-1">({vendor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IconComponent className="w-4 h-4 mr-1" />
                    <span className="text-sm capitalize">{vendor.category}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {vendor.description}
                </p>

                <div className="flex space-x-2">
                  <Link href={`/vendors/${vendor._id}`}>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      View Details
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Contact Now</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Vendors</Button>
      </div>
    </div>
  )
}