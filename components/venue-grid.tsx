import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Users, Heart, Wifi, Car, Utensils } from "lucide-react"
import Link from "next/link"

const venues = [
  {
    id: 1,
    name: "Royal Palace Banquet",
    location: "DHA, Lahore",
    rating: 4.8,
    reviews: 124,
    capacity: "500-1000",
    price: 80000,
    originalPrice: 95000,
    image: "/images/venues/royal-palace-banquet.jpg",
    amenities: ["AC", "Parking", "Catering"],
    type: "Banquet Hall",
    discount: 15,
  },
  {
    id: 2,
    name: "Garden View Marquee",
    location: "Gulberg, Lahore",
    rating: 4.9,
    reviews: 89,
    capacity: "200-500",
    price: 60000,
    image: "/images/venues/garden-marquee.jpg",
    amenities: ["Garden", "Outdoor", "Decoration"],
    type: "Marquee",
  },
  {
    id: 3,
    name: "Grand Ballroom",
    location: "Clifton, Karachi",
    rating: 4.7,
    reviews: 156,
    capacity: "300-800",
    price: 95000,
    image: "/images/venues/grand-ballroom.jpg",
    amenities: ["Ballroom", "Valet", "Premium"],
    type: "Hotel",
  },
  {
    id: 4,
    name: "Sunset Farmhouse",
    location: "Bedian Road, Lahore",
    rating: 4.6,
    reviews: 78,
    capacity: "100-300",
    price: 45000,
    image: "/images/venues/sunset-farmhouse.jpg",
    amenities: ["Garden", "Pool", "BBQ"],
    type: "Farmhouse",
  },
  {
    id: 5,
    name: "Crystal Convention",
    location: "F-7, Islamabad",
    rating: 4.8,
    reviews: 203,
    capacity: "400-1200",
    price: 120000,
    image: "/images/venues/crystal-convention.jpg",
    amenities: ["AC", "AV Equipment", "Parking"],
    type: "Convention Center",
  },
  {
    id: 6,
    name: "Rose Garden Resort",
    location: "Murree Road, Islamabad",
    rating: 4.5,
    reviews: 92,
    capacity: "150-400",
    price: 75000,
    image: "/images/venues/rose-garden-resort.jpg",
    amenities: ["Resort", "Mountain View", "Spa"],
    type: "Resort",
  },
]

const amenityIcons = {
  AC: Wifi,
  Parking: Car,
  Catering: Utensils,
  Garden: Users,
  Outdoor: Users,
  Decoration: Users,
  Ballroom: Users,
  Valet: Car,
  Premium: Star,
  Pool: Users,
  BBQ: Utensils,
  "AV Equipment": Wifi,
  Resort: Users,
  "Mountain View": Users,
  Spa: Users,
}

export function VenueGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {venues.length} venues</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {venues.map((venue) => (
          <Card key={venue.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={venue.image || "/placeholder.svg"}
                alt={venue.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {venue.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {venue.discount}% OFF
                </div>
              )}
              <div className="absolute bottom-4 left-4">
                <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">{venue.type}</span>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{venue.name}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-pink-600">₹{venue.price.toLocaleString()}</div>
                  {venue.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">₹{venue.originalPrice.toLocaleString()}</div>
                  )}
                  <div className="text-sm text-gray-600">per event</div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{venue.location}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{venue.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({venue.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="text-sm">{venue.capacity}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                {venue.amenities.slice(0, 3).map((amenity) => {
                  const IconComponent = amenityIcons[amenity] || Users
                  return (
                    <div key={amenity} className="flex items-center text-gray-600">
                      <IconComponent className="w-4 h-4 mr-1" />
                      <span className="text-xs">{amenity}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex space-x-2">
                <Link href={`/venues/${venue.id}`}>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    View Details
                  </Button>
                </Link>
                <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Venues</Button>
      </div>
    </div>
  )
}
