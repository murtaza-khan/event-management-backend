import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Search, Shield, Calendar, Star, Gift } from "lucide-react"

const benefits = [
  {
    icon: Search,
    title: "Smart Vendor Discovery",
    description: "Find the perfect vendors using our AI-powered matching system based on your preferences and budget.",
  },
  {
    icon: Shield,
    title: "Verified Vendors Only",
    description: "All our vendors are thoroughly verified with background checks and quality assessments.",
  },
  {
    icon: Calendar,
    title: "Wedding Planning Tools",
    description: "Access our comprehensive planning tools including timeline, budget tracker, and guest management.",
  },
  {
    icon: Star,
    title: "Authentic Reviews",
    description: "Read genuine reviews from real couples who have used our vendors for their weddings.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Get customized recommendations and dedicated support throughout your wedding journey.",
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Access member-only discounts and special packages from our premium vendor partners.",
  },
]

const features = [
  "Compare multiple vendors instantly",
  "Secure booking and payment protection",
  "Real-time availability checking",
  "24/7 customer support",
  "Mobile app for on-the-go planning",
  "Wedding website builder included",
]

export function ClientSignupBenefits() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-rose-500" />
            Why Choose Our Platform?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex gap-3">
                  <div className="bg-rose-100 rounded-lg p-2 flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What's Included</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
        <CardContent className="p-6">
          <div className="text-center">
            <Badge className="mb-3 bg-rose-500">Limited Time Offer</Badge>
            <h3 className="font-semibold text-gray-900 mb-2">Free Premium Features</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sign up now and get 3 months of premium features absolutely free, including priority support and exclusive
              vendor access.
            </p>
            <div className="text-2xl font-bold text-rose-600">Worth ₹2,999</div>
            <div className="text-sm text-gray-500">No credit card required</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
