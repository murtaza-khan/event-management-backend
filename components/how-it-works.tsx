import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, CreditCard, PartyPopper } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Search & Browse",
    description: "Find venues and vendors that match your requirements and budget",
    icon: Search,
    color: "bg-pink-100 text-pink-600",
  },
  {
    step: 2,
    title: "Compare & Select",
    description: "Compare options, read reviews, and select your favorites",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: 3,
    title: "Book & Pay",
    description: "Secure your booking with easy online payment options",
    icon: CreditCard,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 4,
    title: "Celebrate",
    description: "Enjoy your perfect event with peace of mind",
    icon: PartyPopper,
    color: "bg-green-100 text-green-600",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Simple steps to plan your perfect event</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
