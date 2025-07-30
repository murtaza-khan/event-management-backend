"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, ThumbsUp, Flag } from "lucide-react"

interface VenueReviewsProps {
  venueId: number
  rating: number
  totalReviews: number
}

const reviews = [
  {
    id: 1,
    name: "Ayesha Khan",
    rating: 5,
    date: "2024-01-15",
    eventType: "Wedding",
    review:
      "Absolutely stunning venue! The staff was incredibly helpful and the decoration was beyond our expectations. Our wedding was perfect thanks to Royal Palace Banquet. Highly recommended!",
    helpful: 12,
    images: ["/images/testimonials/bride1.jpg"],
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    rating: 4,
    date: "2024-01-10",
    eventType: "Reception",
    review:
      "Great venue with excellent facilities. The food was delicious and the service was professional. Only minor issue was parking could be better organized during peak hours.",
    helpful: 8,
    images: [],
  },
  {
    id: 3,
    name: "Fatima Ali",
    rating: 5,
    date: "2024-01-05",
    eventType: "Engagement",
    review:
      "Perfect venue for our engagement ceremony. The ambiance was romantic and elegant. The management team was very cooperative and accommodating to all our requests.",
    helpful: 15,
    images: [],
  },
  {
    id: 4,
    name: "Muhammad Usman",
    rating: 4,
    date: "2023-12-28",
    eventType: "Wedding",
    review:
      "Beautiful hall with great lighting and sound system. The catering service was excellent. The venue lived up to our expectations and made our special day memorable.",
    helpful: 6,
    images: [],
  },
]

const ratingDistribution = [
  { stars: 5, count: 78, percentage: 63 },
  { stars: 4, count: 32, percentage: 26 },
  { stars: 3, count: 10, percentage: 8 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 1 },
]

export function VenueReviews({ venueId, rating, totalReviews }: VenueReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Reviews & Ratings</span>
          <Button variant="outline" size="sm">
            Write a Review
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{rating}</div>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <div className="text-gray-600">{totalReviews} reviews</div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center space-x-3">
                <span className="text-sm w-8">{item.stars}★</span>
                <Progress value={item.percentage} className="flex-1" />
                <span className="text-sm text-gray-600 w-8">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{review.eventType}</span>
                      <span>•</span>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">{review.review}</p>

              {review.images.length > 0 && (
                <div className="flex space-x-2 mb-3">
                  {review.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt="Review image"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm">
                  <Flag className="w-4 h-4" />
                  <span>Report</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 3 && (
          <div className="text-center">
            <Button variant="outline" onClick={() => setShowAllReviews(!showAllReviews)}>
              {showAllReviews ? "Show Less" : `Show All ${reviews.length} Reviews`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
