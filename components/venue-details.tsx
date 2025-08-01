import { Star, MapPin, DollarSign, Users, CheckCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface VenueDetailsProps {
  venue: {
    name: string
    location: string
    description: string
    priceRange: string
    capacity: string
    amenities: string[]
    rating: number
    reviews: number
  }
}

export function VenueDetails({ venue }: VenueDetailsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{venue.name}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="w-5 h-5 mr-2" />
        <span>{venue.location}</span>
        <Separator orientation="vertical" className="h-4 mx-4" />
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
        <span>
          {venue.rating} ({venue.reviews} reviews)
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">{venue.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-800">
          <DollarSign className="w-5 h-5 mr-2 text-pink-600" />
          <span className="font-semibold">Price Range:</span> {venue.priceRange}
        </div>
        <div className="flex items-center text-gray-800">
          <Users className="w-5 h-5 mr-2 text-pink-600" />
          <span className="font-semibold">Capacity:</span> {venue.capacity}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {venue.amenities.map((amenity, index) => (
          <div key={index} className="flex items-center text-gray-700">
            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
