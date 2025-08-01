import { PackageDetails } from "@/components/package-details"
import { PackageBooking } from "@/components/package-booking"
import { SimilarPackages } from "@/components/similar-packages"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// This would normally come from your database based on the ID
const packageData = {
  id: 1,
  name: "Royal Wedding Extravaganza",
  type: "Luxury",
  location: "DHA Phase 5, Lahore",
  rating: 4.9,
  reviews: 89,
  price: 1500000,
  originalPrice: 1800000,
  savings: 300000,
  guestCapacity: "800-1200",
  duration: "3 Days",
  discount: 17,
  description:
    "Experience the ultimate luxury wedding with our Royal Wedding Extravaganza package. This comprehensive package combines the finest venues, world-class services, and premium amenities to create an unforgettable celebration that exceeds all expectations.",
  images: [
    "/images/packages/royal-wedding-1.png",
    "/images/packages/royal-wedding-2.png",
    "/images/packages/royal-wedding-3.png",
    "/images/packages/royal-wedding-4.png",
    "/images/packages/royal-wedding-5.png",
  ],
  services: {
    venue: {
      name: "Royal Palace Banquet",
      description: "Premium 5-star banquet hall with elegant interiors",
      features: ["AC Hall", "Parking for 300+ cars", "Bridal room", "VIP lounge"],
    },
    photography: {
      name: "Capture Moments Studio",
      description: "Award-winning photography team with cinematic videography",
      features: ["Pre-wedding shoot", "Drone photography", "Same-day editing", "Digital gallery"],
    },
    catering: {
      name: "Royal Feast Catering",
      description: "Gourmet dining experience with international and local cuisines",
      features: ["Live cooking stations", "Welcome drinks", "Dessert counter", "Waiter service"],
    },
    decoration: {
      name: "Royal Decorations",
      description: "Luxury decoration with fresh flowers and premium lighting",
      features: ["Stage backdrop", "Hall decoration", "Lighting setup", "Flower arrangements"],
    },
    music: {
      name: "Elite Entertainment",
      description: "Live music band with professional DJ services",
      features: ["Live orchestra", "DJ services", "Sound system", "Dance floor lighting"],
    },
    makeup: {
      name: "Glamour Studio",
      description: "Professional bridal makeup and hair styling",
      features: ["Bridal makeup", "Hair styling", "Trial session", "Touch-up kit"],
    },
    transportation: {
      name: "Luxury Car Rentals",
      description: "Decorated luxury cars for the wedding party",
      features: ["Bridal car", "Family transport", "Decoration", "Professional drivers"],
    },
    extras: {
      name: "Additional Services",
      description: "Complete wedding coordination and special touches",
      features: ["Event coordinator", "Wedding favors", "Guest management", "Timeline planning"],
    },
  },
  timeline: [
    { day: "Day 1", event: "Mehndi Ceremony", description: "Traditional mehndi celebration with music and dance" },
    { day: "Day 2", event: "Nikah & Reception", description: "Sacred nikah ceremony followed by grand reception" },
    { day: "Day 3", event: "Walima", description: "Final celebration with family and friends" },
  ],
  inclusions: [
    "Complete venue booking for 3 days",
    "Professional photography & videography",
    "Luxury catering for all events",
    "Complete decoration & lighting",
    "Live music band + DJ services",
    "Bridal makeup & hair styling",
    "Decorated transportation",
    "Wedding favors & gifts",
    "Dedicated event coordinator",
    "Fresh flower arrangements",
    "Guest management services",
    "Timeline planning & execution",
  ],
  exclusions: [
    "Guest accommodation",
    "Wedding invitations",
    "Bridal outfit & jewelry",
    "Additional photography hours",
    "Extra decoration items",
    "Alcoholic beverages",
  ],
  terms: [
    "50% advance payment required to confirm booking",
    "Final payment due 7 days before event",
    "Free cancellation up to 30 days before event",
    "Package prices valid for 6 months from booking",
    "Additional guests charged at ₹2,500 per person",
    "Menu tasting session included",
  ],
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/packages">Packages</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{packageData.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PackageDetails package={packageData} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PackageBooking package={packageData} />
          </div>
        </div>

        {/* Similar Packages */}
        <div className="mt-16">
          <SimilarPackages currentPackageId={packageData.id} />
        </div>
      </div>
    </div>
  )
}
