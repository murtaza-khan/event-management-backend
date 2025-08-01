import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const makeupArtists = [
  {
    id: "sana-makeup-studio",
    name: "Sana Makeup Studio",
    image: "/images/makeup/sana-makeup-studio.png",
    rating: 4.9,
    reviews: 120,
    priceRange: "$$$",
    location: "Lahore",
    services: ["Bridal Makeup", "Party Makeup", "Hair Styling"],
  },
  {
    id: "ayesha-beauty-lounge",
    name: "Ayesha Beauty Lounge",
    image: "/images/makeup/ayesha-beauty-lounge.png",
    rating: 4.7,
    reviews: 95,
    priceRange: "$$",
    location: "Karachi",
    services: ["Bridal Makeup", "Engagement Makeup", "Facials"],
  },
  {
    id: "glamour-by-fatima",
    name: "Glamour by Fatima",
    image: "/images/makeup/glamour-by-fatima.png",
    rating: 4.8,
    reviews: 150,
    priceRange: "$$$$",
    location: "Islamabad",
    services: ["Luxury Bridal Makeup", "Airbrush Makeup", "Hair & Draping"],
  },
  {
    id: "zara-beauty-corner",
    name: "Zara Beauty Corner",
    image: "/images/makeup/zara-beauty-corner.png",
    rating: 4.5,
    reviews: 80,
    priceRange: "$$",
    location: "Faisalabad",
    services: ["Party Makeup", "Casual Makeup", "Manicure/Pedicure"],
  },
]

export function MakeupArtistGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {makeupArtists.map((artist) => (
        <Card key={artist.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <CardTitle className="text-xl font-semibold mb-2">{artist.name}</CardTitle>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>
                {artist.rating} ({artist.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-1">Location: {artist.location}</p>
            <p className="text-gray-700 text-sm mb-1">Price Range: {artist.priceRange}</p>
            <p className="text-gray-700 text-sm">Services: {artist.services.join(", ")}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/makeup-artists/${artist.id}`} className="w-full">
              <Button
                variant="outline"
                className="w-full border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
              >
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
