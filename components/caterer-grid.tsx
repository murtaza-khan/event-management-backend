import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const caterers = [
  {
    id: "royal-feast",
    name: "Royal Feast Catering",
    image: "/images/catering/royal-feast.png",
    rating: 4.9,
    reviews: 180,
    priceRange: "$$$$",
    location: "Lahore",
    cuisine: ["Pakistani", "Continental", "BBQ"],
  },
  {
    id: "spice-garden",
    name: "Spice Garden Caterers",
    image: "/images/catering/spice-garden.png",
    rating: 4.7,
    reviews: 110,
    priceRange: "$$$",
    location: "Karachi",
    cuisine: ["Indian", "Chinese", "Fast Food"],
  },
  {
    id: "gourmet-delights",
    name: "Gourmet Delights",
    image: "/images/catering/gourmet-delights.png",
    rating: 4.8,
    reviews: 140,
    priceRange: "$$$$",
    location: "Islamabad",
    cuisine: ["Italian", "French", "Mediterranean"],
  },
  {
    id: "taste-buds",
    name: "Taste Buds Catering",
    image: "/images/catering/taste-buds.png",
    rating: 4.5,
    reviews: 90,
    priceRange: "$$",
    location: "Rawalpindi",
    cuisine: ["Traditional", "Street Food", "Desserts"],
  },
]

export function CatererGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {caterers.map((caterer) => (
        <Card key={caterer.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={caterer.image || "/placeholder.svg"}
                alt={caterer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <CardTitle className="text-xl font-semibold mb-2">{caterer.name}</CardTitle>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>
                {caterer.rating} ({caterer.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-1">Location: {caterer.location}</p>
            <p className="text-gray-700 text-sm mb-1">Price Range: {caterer.priceRange}</p>
            <p className="text-gray-700 text-sm">Cuisine: {caterer.cuisine.join(", ")}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/caterers/${caterer.id}`} className="w-full">
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
