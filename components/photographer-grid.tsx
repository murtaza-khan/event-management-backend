import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const photographers = [
  {
    id: "capture-moments",
    name: "Capture Moments Photography",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 160,
    priceRange: "$$$$",
    location: "Lahore",
    specialties: ["Wedding", "Engagement", "Candid"],
  },
  {
    id: "eternal-frames",
    name: "Eternal Frames Studio",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviews: 130,
    priceRange: "$$$",
    location: "Karachi",
    specialties: ["Bridal", "Pre-wedding", "Cinematic Videos"],
  },
  {
    id: "lens-artistry",
    name: "Lens Artistry by Ali",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviews: 100,
    priceRange: "$$$",
    location: "Islamabad",
    specialties: ["Traditional", "Modern", "Drone Photography"],
  },
  {
    id: "shutter-dreams",
    name: "Shutter Dreams Photography",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.5,
    reviews: 85,
    priceRange: "$$",
    location: "Multan",
    specialties: ["Event", "Portrait", "Album Design"],
  },
]

export function PhotographerGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photographers.map((photographer) => (
        <Card key={photographer.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={photographer.image || "/placeholder.svg"}
                alt={photographer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <CardTitle className="text-xl font-semibold mb-2">{photographer.name}</CardTitle>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>
                {photographer.rating} ({photographer.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-1">Location: {photographer.location}</p>
            <p className="text-gray-700 text-sm mb-1">Price Range: {photographer.priceRange}</p>
            <p className="text-gray-700 text-sm">Specialties: {photographer.specialties.join(", ")}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/photographers/${photographer.id}`} className="w-full">
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
