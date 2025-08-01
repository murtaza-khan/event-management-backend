import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Gift, Shield, Users, Zap, Calendar, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Get vendor recommendations tailored to your preferences and budget",
    color: "text-pink-600",
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Access member-only discounts and special deals from top vendors",
    color: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Verified Vendors",
    description: "Book with confidence from our network of verified and trusted vendors",
    color: "text-green-600",
  },
  {
    icon: Zap,
    title: "Quick Booking",
    description: "Fast and secure booking process with instant confirmations",
    color: "text-blue-600",
  },
]

const features = [
  "Event planning dashboard",
  "Wishlist & favorites",
  "Booking history & management",
  "Vendor reviews & ratings",
  "Budget tracking tools",
  "Event timeline planner",
  "Guest list management",
  "Payment tracking",
  "24/7 customer support",
  "Mobile app access",
]

const stats = [
  { number: "50,000+", label: "Happy Customers" },
  { number: "500+", label: "Trusted Vendors" },
  { number: "10,000+", label: "Successful Events" },
  { number: "4.9/5", label: "Customer Rating" },
]

const testimonials = [
  {
    name: "Ayesha Khan",
    text: "ShaadiDesk made planning my wedding so much easier! The personalized recommendations were spot on.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    text: "Great platform with verified vendors. Got amazing deals through member discounts!",
    rating: 5,
  },
]

export function ClientSignupBenefits() {
  return (
    <div className="space-y-6">
      {/* Main Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="w-5 h-5 mr-2 text-pink-600" />
            Why Join ShaadiDesk?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-gray-50 ${benefit.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Features List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-pink-600" />
            Account Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-pink-600" />
            Platform Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-pink-600">{stat.number}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-pink-600" />
            What Our Users Say
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">"{testimonial.text}"</p>
              <p className="text-xs text-gray-600 font-medium">- {testimonial.name}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Special Offer */}
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-6 text-center">
          <Badge className="mb-3 bg-pink-600">Welcome Offer</Badge>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Get 20% Off Your First Booking!</h3>
          <p className="text-sm text-gray-600 mb-4">
            New members get exclusive discount on their first vendor booking. Valid for 30 days after signup.
          </p>
          <div className="text-xs text-gray-500">*Terms and conditions apply</div>
        </CardContent>
      </Card>
    </div>
  )
}
