import { notFound } from "next/navigation"
import { PackageDetails } from "@/components/package-details"
import { PackageBooking } from "@/components/package-booking"
import { SimilarPackages } from "@/components/similar-packages"

const packages = [
  {
    id: 1,
    name: "Royal Wedding Package",
    price: 450000,
    originalPrice: 550000,
    image: "/images/packages/royal-wedding.png",
    rating: 4.9,
    reviews: 127,
    guests: "200-300",
    duration: "3 Days",
    savings: 100000,
    gallery: [
      "/images/packages/royal-wedding-gallery-1.png",
      "/images/packages/royal-wedding-gallery-2.png",
      "/images/packages/royal-wedding-gallery-3.png",
      "/images/packages/royal-wedding-gallery-4.png",
      "/images/packages/royal-wedding-gallery-5.png",
    ],
    services: [
      { name: "Premium Venue", description: "Luxury banquet hall with royal decor", included: true },
      { name: "Luxury Catering", description: "5-course meal with premium ingredients", included: true },
      { name: "Professional Photography", description: "Full day coverage with edited photos", included: true },
      { name: "Full Decoration", description: "Complete venue decoration with flowers", included: true },
      { name: "Live Music", description: "Professional band and DJ services", included: true },
      { name: "Transportation", description: "Decorated car for bride and groom", included: true },
      { name: "Makeup & Beauty", description: "Professional makeup artist", included: false },
      { name: "Video Coverage", description: "Cinematic wedding video", included: false },
    ],
    description:
      "Our most luxurious package designed for grand celebrations. Includes premium venues, gourmet catering, and top-tier services to make your wedding truly royal.",
    highlights: [
      "Premium luxury venue with royal ambiance",
      "Gourmet multi-cuisine catering for 200-300 guests",
      "Professional photography with same-day editing",
      "Complete venue decoration with fresh flowers",
      "Live entertainment and music services",
      "Luxury transportation for the couple",
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
      <div className="container mx-auto px-4 py-8">
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
