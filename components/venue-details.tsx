import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Award, Phone, Mail, Globe } from "lucide-react"

interface VenueDetailsProps {
  venue: any // In a real app, you'd have proper TypeScript interfaces
}

export function VenueDetails({ venue }: VenueDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{venue.name}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{venue.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>
                  {venue.capacity.min}-{venue.capacity.max} guests
                </span>
              </div>
              {venue.verified && (
                <Badge className="bg-green-100 text-green-800">
                  <Award className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
              <span className="text-lg font-semibold">{venue.rating}</span>
              <span className="text-gray-600 ml-1">({venue.reviews} reviews)</span>
            </div>
            <div className="text-2xl font-bold text-pink-600">
              ₹{venue.price.toLocaleString()}
              {venue.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">₹{venue.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <div className="text-sm text-gray-600">per event</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>About This Venue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{venue.description}</p>
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card>
        <CardHeader>
          <CardTitle>Amenities & Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {venue.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-2xl">{amenity.icon}</span>
                <span className="text-gray-700">{amenity.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>Venue Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(venue.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-700 capitalize">{key.replace("_", " ")}:</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Policies */}
      <Card>
        <CardHeader>
          <CardTitle>Policies & Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(venue.policies).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="font-medium text-gray-700 capitalize mb-1 sm:mb-0">{key.replace("_", " ")}:</span>
                <span className="text-gray-600 sm:text-right sm:max-w-md">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{venue.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{venue.contact.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{venue.contact.website}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">Manager: {venue.contact.manager}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle>Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">{venue.fullAddress}</p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Interactive Map Coming Soon</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
