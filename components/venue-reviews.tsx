import { Star, UserCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VenueReviewsProps {
  rating: number
  reviews: number
}

const mockReviews = [
  {
    id: 1,
    author: "Aisha Khan",
    date: "2023-10-26",
    rating: 5,
    comment:
      "Absolutely stunning venue! The staff was incredibly helpful, and everything ran smoothly. Our wedding was a dream come true here.",
  },
  {
    id: 2,
    author: "Usman Ali",
    date: "2023-09-15",
    rating: 4,
    comment:
      "Great location and beautiful decor. A bit pricey, but worth it for the quality of service. Highly recommend for grand events.",
  },
  {
    id: 3,
    author: "Fatima Zahra",
    date: "2023-08-01",
    rating: 5,
    comment:
      "The Royal Palace Banquet Hall exceeded our expectations. From catering to ambiance, everything was perfect. Our guests were very impressed.",
  },
]

export function VenueReviews({ rating, reviews }: VenueReviewsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
      <div className="flex items-center mb-6">
        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-2" />
        <span className="text-xl font-semibold text-gray-800">{rating} out of 5</span>
        <span className="text-gray-600 ml-2">({reviews} reviews)</span>
      </div>

      <div className="space-y-6">
        {mockReviews.map((review) => (
          <Card key={review.id} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40&query=${review.author}`} alt={review.author} />
                <AvatarFallback>
                  <UserCircle className="w-10 h-10 text-gray-400" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">{review.author}</CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                  <span className="ml-2">{review.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
