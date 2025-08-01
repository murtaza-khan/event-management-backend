import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Shield, Headphones, Star, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Reach More Customers",
    description: "Connect with thousands of couples planning their events across Pakistan",
    color: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Increase bookings and revenue with our marketing tools and platform reach",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "Verified Badge",
    description: "Get verified status to build trust and credibility with potential customers",
    color: "text-purple-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team to help you succeed on our platform",
    color: "text-pink-600",
  },
]

const features = [
  "Professional business profile",
  "Photo gallery & portfolio showcase",
  "Customer reviews & ratings",
  "Direct booking inquiries",
  "Payment processing",
  "Analytics & insights",
  "Marketing promotions",
  "Mobile app access",
]

const stats = [
  { number: "10,000+", label: "Active Customers" },
  { number: "500+", label: "Partner Businesses" },
  { number: "50+", label: "Cities Covered" },
  { number: "95%", label: "Customer Satisfaction" },
]

export function BusinessSignupBenefits() {
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
            <BarChart3 className="w-5 h-5 mr-2 text-pink-600" />
            Platform Features
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
          <CardTitle>Platform Statistics</CardTitle>
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

      {/* Pricing Info */}
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-6 text-center">
          <Badge className="mb-3 bg-pink-600">Limited Time Offer</Badge>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Free for 3 Months!</h3>
          <p className="text-sm text-gray-600 mb-4">
            No setup fees, no hidden charges. Start growing your business today.
          </p>
          <div className="text-xs text-gray-500">*Standard pricing applies after trial period</div>
        </CardContent>
      </Card>
    </div>
  )
}
