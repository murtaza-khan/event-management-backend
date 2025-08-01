import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SimilarVenuesProps {
  venues: {
    id: string
    name: string
    location: string
    image: string
    rating: number
    reviews: number
    priceRange: string
  }[]
}

export function SimilarVenues({ venues }: SimilarVenuesProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Venues You Might Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <Card key={venue.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={venue.image || "/placeholder.svg"}
                  alt={venue.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <CardTitle className="text-xl font-semibold mb-2">{venue.name}</CardTitle>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{venue.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>
                  {venue.rating} ({venue.reviews} reviews)
                </span>
              </div>
              <p className="text-gray-700 text-sm">Price Range: {venue.priceRange}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/venues/${venue.id}`} className="w-full">
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
    </div>
  )
}
