import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building2, TrendingUp, Users, Calendar, Star, DollarSign, Shield } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Access to Thousands of Clients",
    description: "Connect with couples actively looking for wedding services in your area.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Increase your bookings and revenue with our marketing tools and exposure.",
  },
  {
    icon: Calendar,
    title: "Easy Booking Management",
    description: "Manage your calendar, bookings, and client communications in one place.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Collect reviews and showcase your work to build trust with potential clients.",
  },
  {
    icon: DollarSign,
    title: "Secure Payments",
    description: "Get paid securely and on time with our integrated payment processing.",
  },
  {
    icon: Shield,
    title: "Verified Badge",
    description: "Get verified status to stand out and build trust with potential clients.",
  },
]

const features = [
  "Professional business profile",
  "Portfolio showcase with unlimited photos",
  "Lead generation and client matching",
  "Booking request management",
  "Integrated messaging system",
  "Performance analytics and insights",
  "Mobile app for business management",
  "Marketing tools and promotions",
]

const stats = [
  { number: "10,000+", label: "Active Clients" },
  { number: "₹50L+", label: "Monthly Bookings" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
]

export function BusinessSignupBenefits() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-500" />
            Why List Your Business?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex gap-3">
                  <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-blue-600" />
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
          <CardTitle>Platform Features</CardTitle>
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

      <Card>
        <CardHeader>
          <CardTitle>Platform Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center">
            <Badge className="mb-3 bg-blue-500">New Business Offer</Badge>
            <h3 className="font-semibold text-gray-900 mb-2">First 3 Months Free</h3>
            <p className="text-sm text-gray-600 mb-4">
              No setup fees, no monthly charges for the first 3 months. Start growing your business risk-free.
            </p>
            <div className="text-2xl font-bold text-blue-600">Save ₹5,997</div>
            <div className="text-sm text-gray-500">Then just ₹1,999/month</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
