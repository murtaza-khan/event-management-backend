import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ayesha & Ahmed",
    location: "Lahore",
    rating: 5,
    text: "ShaadiDesk made our wedding planning so easy! We found the perfect venue and all our vendors in one place. Highly recommended!",
    image: "/images/testimonials/couple1.jpg",
  },
  {
    id: 2,
    name: "Fatima Khan",
    location: "Karachi",
    rating: 5,
    text: "Amazing platform! The makeup artist we booked through ShaadiDesk was incredible. Everything was seamless and professional.",
    image: "/images/testimonials/bride1.jpg",
  },
  {
    id: 3,
    name: "Hassan Ali",
    location: "Islamabad",
    rating: 5,
    text: "Great service and competitive prices. We saved so much time and money planning our event. Thank you ShaadiDesk!",
    image: "/images/testimonials/groom1.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Real stories from real couples</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-pink-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
