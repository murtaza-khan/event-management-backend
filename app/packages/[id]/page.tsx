import { notFound } from "next/navigation"
import { PackageDetails } from "@/components/package-details"
import { PackageBooking } from "@/components/package-booking"
import { SimilarPackages } from "@/components/similar-packages"
import { Separator } from "@/components/ui/separator"

const packages = [
  {
    id: "royal-wedding",
    name: "Royal Wedding Extravaganza",
    image: "/images/packages/royal-wedding.png",
    gallery: [
      "/images/packages/royal-wedding-1.png",
      "/images/packages/royal-wedding-2.png",
      "/images/packages/royal-wedding-3.png",
      "/images/packages/royal-wedding-4.png",
      "/images/packages/royal-wedding-5.png",
    ],
    price: 75000,
    originalPrice: 90000,
    rating: 4.9,
    reviews: 120,
    guestCapacity: "500-1000",
    duration: "Full Day",
    type: "Luxury",
    description:
      "Experience the ultimate luxury with our Royal Wedding Extravaganza package. This all-inclusive package covers every detail, ensuring a truly majestic and unforgettable celebration. From opulent venue decor to gourmet catering and premium photography, we handle it all.",
    services: [
      {
        name: "Venue",
        description: "Grand Royal Palace Banquet Hall",
        image: "/images/venues/royal-palace-banquet.png",
      },
      {
        name: "Catering",
        description: "Gourmet 5-course meal by Royal Feast Catering",
        image: "/images/catering/royal-feast.png",
      },
      {
        name: "Photography",
        description: "Full-day coverage by Capture Moments Photography",
        image: "/images/vendors/photography-studio-1.png",
      },
      {
        name: "Decoration",
        description: "Opulent floral and lighting decor by Elegant Events Decor",
        image: "/images/vendors/decoration-service-1.png",
      },
      {
        name: "Makeup Artist",
        description: "Bridal makeup and hair by Glamour by Fatima",
        image: "/images/makeup/glamour-by-fatima.png",
      },
      {
        name: "Transportation",
        description: "Luxury car service for bridal party",
        image: "/images/packages/royal-wedding-4.png",
      },
    ],
    inclusions: [
      "Exclusive venue access for 12 hours",
      "Customizable 5-course menu",
      "Professional photography & videography",
      "Premium floral arrangements & lighting",
      "Bridal makeup & hair styling",
      "Luxury transportation for couple",
      "Dedicated event planner",
      "Sound system & DJ",
      "Security services",
    ],
    exclusions: ["Guest accommodation", "Alcoholic beverages (can be added)", "Wedding cake (can be added)"],
  },
  {
    id: "premium-celebration",
    name: "Premium Celebration Package",
    image: "/images/packages/premium-celebration.png",
    price: 45000,
    originalPrice: 55000,
    rating: 4.7,
    reviews: 90,
    guestCapacity: "200-500",
    duration: "Full Day",
    type: "Premium",
    description:
      "Our Premium Celebration Package offers a perfect blend of elegance and convenience for your special day. Designed for medium to large gatherings, this package includes essential services with a touch of sophistication.",
    services: [
      { name: "Venue", description: "Elegant Grand Ballroom", image: "/images/venues/grand-ballroom.png" },
      {
        name: "Catering",
        description: "Delicious 3-course meal by Spice Garden Caterers",
        image: "/images/catering/spice-garden.png",
      },
      {
        name: "Photography",
        description: "8-hour coverage by Eternal Frames Studio",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Decoration",
        description: "Standard floral and stage decor",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Makeup Artist",
        description: "Bridal makeup by Ayesha Beauty Lounge",
        image: "/images/makeup/ayesha-beauty-lounge.png",
      },
    ],
    inclusions: [
      "Venue access for 10 hours",
      "Customizable 3-course menu",
      "Professional photography",
      "Standard floral & stage decor",
      "Bridal makeup",
      "Basic sound system",
    ],
    exclusions: ["Transportation", "Videography", "Special lighting effects"],
  },
  {
    id: "grand-luxury",
    name: "Grand Luxury Affair",
    image: "/images/packages/grand-luxury.png",
    price: 60000,
    originalPrice: 70000,
    rating: 4.8,
    reviews: 105,
    guestCapacity: "300-700",
    duration: "Full Day",
    type: "Luxury",
    description:
      "Indulge in a truly grand and luxurious affair with this comprehensive package. Perfect for those who desire an extravagant celebration with premium services and attention to every detail.",
    services: [
      { name: "Venue", description: "Rose Garden Resort", image: "/images/venues/rose-garden-resort.png" },
      { name: "Catering", description: "Gourmet Delights Catering", image: "/images/catering/gourmet-delights.png" },
      { name: "Photography", description: "Lens Artistry by Ali", image: "/placeholder.svg?height=100&width=100" },
      { name: "Decoration", description: "Dream Designs by Sana", image: "/placeholder.svg?height=100&width=100" },
      { name: "Makeup Artist", description: "Sana Makeup Studio", image: "/images/makeup/sana-makeup-studio.png" },
      { name: "Entertainment", description: "Live Band & DJ", image: "/placeholder.svg?height=100&width=100" },
    ],
    inclusions: [
      "Resort venue access for 12 hours",
      "Premium multi-cuisine buffet",
      "Full photography & videography",
      "Customized luxury decor",
      "Bridal & groom makeup",
      "Live entertainment",
      "Event coordination",
    ],
    exclusions: ["Guest accommodation (can be added)", "Fireworks"],
  },
  {
    id: "essential-wedding",
    name: "Essential Wedding Package",
    image: "/images/packages/essential-wedding.png",
    price: 20000,
    originalPrice: 25000,
    rating: 4.5,
    reviews: 75,
    guestCapacity: "100-250",
    duration: "Half Day",
    type: "Essential",
    description:
      "Our Essential Wedding Package provides all the fundamental elements for a beautiful and memorable wedding without breaking the bank. Ideal for couples seeking a straightforward and elegant celebration.",
    services: [
      { name: "Venue", description: "Sunset Farmhouse", image: "/images/venues/sunset-farmhouse.png" },
      { name: "Catering", description: "Taste Buds Catering", image: "/images/catering/taste-buds.png" },
      {
        name: "Basic Decoration",
        description: "Simple stage and table decor",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    inclusions: ["Venue access for 6 hours", "Standard buffet menu", "Basic stage & table decor", "Sound system"],
    exclusions: ["Photography", "Makeup artist", "Transportation", "Custom decor"],
  },
  {
    id: "elegant-affair",
    name: "Elegant Affair Package",
    image: "/images/packages/elegant-affair.png",
    price: 35000,
    originalPrice: 40000,
    rating: 4.6,
    reviews: 80,
    guestCapacity: "150-300",
    duration: "Full Day",
    type: "Premium",
    description:
      "Host an elegant and sophisticated wedding with our Elegant Affair Package. This package is designed for couples who appreciate refined details and a seamless event experience.",
    services: [
      { name: "Venue", description: "The Garden Marquee", image: "/images/venues/garden-marquee.png" },
      { name: "Catering", description: "Gourmet Delights Catering", image: "/images/catering/gourmet-delights.png" },
      {
        name: "Photography",
        description: "Shutter Dreams Photography",
        image: "/placeholder.svg?height=100&width=100",
      },
      { name: "Decoration", description: "Sparkle & Shine Decor", image: "/placeholder.svg?height=100&width=100" },
    ],
    inclusions: [
      "Venue access for 10 hours",
      "Premium buffet menu",
      "Professional photography",
      "Elegant floral & lighting decor",
      "Event coordination",
    ],
    exclusions: ["Makeup artist", "Transportation", "Live entertainment"],
  },
  {
    id: "dream-wedding",
    name: "Dream Wedding Package",
    image: "/images/packages/dream-wedding.png",
    price: 15000,
    originalPrice: 18000,
    rating: 4.4,
    reviews: 60,
    guestCapacity: "50-100",
    duration: "Half Day",
    type: "Essential",
    description:
      "Our Dream Wedding Package is perfect for intimate celebrations, offering essential services to make your special day memorable and hassle-free.",
    services: [
      { name: "Venue", description: "Cozy Event Hall", image: "/placeholder.svg?height=100&width=100" },
      { name: "Catering", description: "Taste Buds Catering", image: "/images/catering/taste-buds.png" },
    ],
    inclusions: ["Venue access for 5 hours", "Standard buffet menu", "Basic sound system"],
    exclusions: ["Photography", "Decoration", "Makeup artist", "Transportation"],
  },
]

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = packages.find((p) => p.id === params.id)

  if (!pkg) {
    notFound()
  }

  const similarPackages = packages.filter((p) => p.id !== params.id && p.type === pkg.type).slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PackageDetails pkg={pkg} />
        </div>
        <div className="lg:col-span-1">
          <PackageBooking packageName={pkg.name} price={pkg.price} />
        </div>
      </div>
      {similarPackages.length > 0 && (
        <>
          <Separator className="my-8" />
          <SimilarPackages packages={similarPackages} />
        </>
      )}
    </div>
  )
}
