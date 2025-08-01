import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Heart, Crown, Sparkles, Gem, Award, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    id: 1,
    name: "Royal Wedding Extravaganza",
    type: "Luxury",
    location: "DHA, Lahore",
    rating: 4.9,
    reviews: 89,
    price: 1500000,
    originalPrice: 1800000,
    savings: 300000,
    guestCapacity: "800-1200",
    duration: "3 Days",
    image: "/images/packages/royal-wedding.png",
    badge: "Most Popular",
    badgeColor: "bg-yellow-500",
    icon: Crown,
    services: [
      "Premium Banquet Hall",
      "Professional Photography & Videography",
      "Luxury Catering (Continental + Pakistani)",
      "Complete Decoration & Lighting",
      "Live Music Band + DJ",
      "Bridal Makeup & Hair",
      "Transportation (Decorated Cars)",
      "Wedding Favors & Gifts",
      "Event Coordinator",
      "Flower Arrangements",
    ],
    highlights: ["5-Star Venue", "Award-Winning Photographer", "Live Cooking Stations", "Valet Parking"],
    discount: 17,
  },
  {
    id: 2,
    name: "Premium Celebration Package",
    type: "Premium",
    location: "Gulberg, Lahore",
    rating: 4.8,
    reviews: 156,
    price: 800000,
    originalPrice: 950000,
    savings: 150000,
    guestCapacity: "400-600",
    duration: "2 Days",
    image: "/images/packages/premium-celebration.png",
    badge: "Best Value",
    badgeColor: "bg-green-500",
    icon: Sparkles,
    services: [
      "Elegant Banquet Hall",
      "Photography & Videography",
      "Premium Catering Menu",
      "Stage & Hall Decoration",
      "DJ Services & Sound System",
      "Bridal Makeup",
      "Car Decoration",
      "Basic Wedding Favors",
      "Event Management",
    ],
    highlights: ["HD Photography", "Live Counters", "Backup Generator", "AC Venue"],
    discount: 16,
  },
  {
    id: 3,
    name: "Grand Luxury Experience",
    type: "Luxury",
    location: "Clifton, Karachi",
    rating: 4.9,
    reviews: 124,
    price: 1200000,
    originalPrice: 1400000,
    savings: 200000,
    guestCapacity: "600-1000",
    duration: "3 Days",
    image: "/images/packages/grand-luxury.png",
    badge: "Premium Choice",
    badgeColor: "bg-purple-500",
    icon: Gem,
    services: [
      "Luxury Resort Venue",
      "Cinematic Photography",
      "Gourmet Catering",
      "Designer Decoration",
      "Live Orchestra + DJ",
      "Professional Makeup Artist",
      "Luxury Car Fleet",
      "Premium Wedding Favors",
      "Dedicated Event Planner",
      "Spa Services for Bride",
    ],
    highlights: ["Resort Setting", "Drone Photography", "International Cuisine", "Spa Included"],
    discount: 14,
  },
  {
    id: 4,
    name: "Essential Wedding Package",
    type: "Basic",
    location: "Johar Town, Lahore",
    rating: 4.6,
    reviews: 203,
    price: 400000,
    originalPrice: 480000,
    savings: 80000,
    guestCapacity: "200-400",
    duration: "Single Day",
    image: "/images/packages/essential-wedding.png",
    badge: "Budget Friendly",
    badgeColor: "bg-blue-500",
    icon: Award,
    services: [
      "Community Hall Venue",
      "Basic Photography",
      "Standard Catering",
      "Simple Decoration",
      "DJ & Sound System",
      "Basic Makeup",
      "Car Decoration",
      "Simple Wedding Favors",
    ],
    highlights: ["Clean Venue", "Good Food Quality", "Reliable Service", "Value for Money"],
    discount: 17,
  },
  {
    id: 5,
    name: "Elegant Affair Package",
    type: "Premium",
    location: "F-7, Islamabad",
    rating: 4.7,
    reviews: 167,
    price: 950000,
    originalPrice: 1100000,
    savings: 150000,
    guestCapacity: "500-800",
    duration: "2 Days",
    image: "/images/packages/elegant-affair.png",
    badge: "Trending",
    badgeColor: "bg-pink-500",
    icon: Sparkles,
    services: [
      "Modern Banquet Hall",
      "Professional Photography",
      "Diverse Catering Menu",
      "Themed Decoration",
      "Live Music + DJ",
      "Bridal Makeup & Hair",
      "Decorated Transport",
      "Customized Wedding Favors",
      "Event Coordination",
    ],
    highlights: ["Modern Venue", "Themed Decor", "Multiple Cuisines", "Professional Team"],
    discount: 14,
  },
  {
    id: 6,
    name: "Dream Wedding Package",
    type: "Basic",
    location: "Gulshan, Karachi",
    rating: 4.5,
    reviews: 134,
    price: 350000,
    originalPrice: 420000,
    savings: 70000,
    guestCapacity: "150-300",
    duration: "Single Day",
    image: "/images/packages/dream-wedding.png",
    badge: "Starter Package",
    badgeColor: "bg-gray-500",
    icon: Award,
    services: [
      "Simple Venue",
      "Basic Photography",
      "Home-style Catering",
      "Basic Decoration",
      "Music System",
      "Simple Makeup",
      "Basic Transport",
      "Wedding Favors",
    ],
    highlights: ["Intimate Setting", "Home-cooked Food", "Personal Touch", "Affordable"],
    discount: 17,
  },
]

const typeColors = {
  Basic: "bg-blue-100 text-blue-800",
  Premium: "bg-purple-100 text-purple-800",
  Luxury: "bg-yellow-100 text-yellow-800",
  Royal: "bg-red-100 text-red-800",
}

export function PackageGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Showing {packages.length} wedding packages</p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
          <option>Most Popular</option>
          <option>Best Savings</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {packages.map((pkg) => {
          const IconComponent = pkg.icon
          return (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Image Section */}
                <div className="relative lg:col-span-1">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  {pkg.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.discount}% OFF
                    </div>
                  )}
                  <div
                    className={`absolute bottom-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {pkg.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-6 h-6 text-pink-600" />
                        <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                        <Badge className={typeColors[pkg.type as keyof typeof typeColors]}>{pkg.type}</Badge>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{pkg.location}</span>
                        <Users className="w-4 h-4 ml-4 mr-1" />
                        <span className="text-sm">{pkg.guestCapacity} guests</span>
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                        <span className="text-sm text-gray-600 ml-1">({pkg.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-pink-600 mb-1">₹{pkg.price.toLocaleString()}</div>
                      {pkg.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                      )}
                      <div className="text-green-600 font-medium text-sm">Save ₹{pkg.savings.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pkg.services.slice(0, 8).map((service, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    {pkg.services.length > 8 && (
                      <p className="text-sm text-pink-600 mt-2">+{pkg.services.length - 8} more services included</p>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Package Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link href={`/packages/${pkg.id}`} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                      Book Package
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Packages</Button>
      </div>
    </div>
  )
}
