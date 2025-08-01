import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const decorators = [
  {
    id: "elegant-events",
    name: "Elegant Events Decor",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 110,
    priceRange: "$$$$",
    location: "Lahore",
    style: ["Classic", "Modern", "Luxury"],
  },
  {
    id: "floral-fantasy",
    name: "Floral Fantasy Decorators",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    reviews: 85,
    priceRange: "$$$",
    location: "Karachi",
    style: ["Floral", "Garden", "Bohemian"],
  },
  {
    id: "dream-designs",
    name: "Dream Designs by Sana",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviews: 95,
    priceRange: "$$$$",
    location: "Islamabad",
    style: ["Themed", "Custom", "Minimalist"],
  },
  {
    id: "sparkle-decor",
    name: "Sparkle & Shine Decor",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.5,
    reviews: 70,
    priceRange: "$$",
    location: "Peshawar",
    style: ["Budget-friendly", "DIY assistance", "Lighting"],
  },
]

export function DecoratorGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {decorators.map((decorator) => (
        <Card key={decorator.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={decorator.image || "/placeholder.svg"}
                alt={decorator.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <CardTitle className="text-xl font-semibold mb-2">{decorator.name}</CardTitle>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>
                {decorator.rating} ({decorator.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-1">Location: {decorator.location}</p>
            <p className="text-gray-700 text-sm mb-1">Price Range: {decorator.priceRange}</p>
            <p className="text-gray-700 text-sm">Style: {decorator.style.join(", ")}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/decorators/${decorator.id}`} className="w-full">
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
