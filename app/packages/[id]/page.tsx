import { notFound } from "next/navigation"
import { PackageDetails } from "@/components/package-details"
import { PackageBooking } from "@/components/package-booking"
import { SimilarPackages } from "@/components/similar-packages"

const packages = [
  {
    id: 1,
    name: "Royal Wedding",
    price: 450000,
    originalPrice: 500000,
    image: "/images/packages/royal-wedding.png",
    rating: 4.9,
    reviews: 127,
    guests: "300-500",
    duration: "3 Days",
    location: "Premium Venues",
    savings: 50000,
    description:
      "Experience the ultimate luxury wedding with our Royal Wedding package. This comprehensive package includes everything you need for a grand celebration that will be remembered for a lifetime.",
    features: [
      "Luxury 5-star venue booking",
      "Premium multi-cuisine catering for all guests",
      "Professional photography and videography team",
      "Complete venue decoration with premium flowers",
      "Luxury transportation for bride and groom",
      "Bridal makeup and styling",
      "Live music and DJ services",
      "Wedding planning and coordination",
      "Guest accommodation assistance",
      "Traditional ceremony arrangements",
    ],
    gallery: [
      "/images/packages/royal-gallery-1.png",
      "/images/packages/royal-gallery-2.png",
      "/images/packages/royal-gallery-3.png",
      "/images/packages/royal-gallery-4.png",
      "/images/packages/royal-gallery-5.png",
    ],
    vendors: [
      {
        category: "Photography",
        name: "Elite Wedding Studios",
        image: "/images/vendors/photography-studio-1.png",
        rating: 4.9,
      },
      {
        category: "Decoration",
        name: "Royal Decorators",
        image: "/images/vendors/decoration-service-1.png",
        rating: 4.8,
      },
    ],
  },
]

interface PackagePageProps {
  params: {
    id: string
  }
}

export default function PackagePage({ params }: PackagePageProps) {
  const packageData = packages.find((pkg) => pkg.id === Number.parseInt(params.id))

  if (!packageData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PackageDetails package={packageData} />
          </div>
          <div className="lg:col-span-1">
            <PackageBooking package={packageData} />
          </div>
        </div>

        <div className="mt-12">
          <SimilarPackages currentPackageId={packageData.id} />
        </div>
      </div>
    </div>
  )
}
