import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aisha & Omar",
      image: "/images/testimonials/couple1.png",
      review:
        "ShaadiDesk made our wedding planning so easy and stress-free. We found the perfect venue and caterer, and everything was seamless!",
      rating: 5,
    },
    {
      name: "Zara",
      image: "/images/testimonials/bride1.png",
      review:
        "The makeup artist I found through ShaadiDesk was incredible. I felt so beautiful on my big day. Highly recommend their vendor selection!",
      rating: 5,
    },
    {
      name: "Ahmed",
      image: "/images/testimonials/groom1.png",
      review:
        "As a groom, I appreciated how straightforward the process was. ShaadiDesk helped us stay organized and within budget. Fantastic service!",
      rating: 4,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Our Couples Say</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from happy couples who planned their dream weddings with ShaadiDesk.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
