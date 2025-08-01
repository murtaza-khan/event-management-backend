import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Shield, Star, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Happy Couples", value: "10,000+", icon: Heart },
    { label: "Trusted Vendors", value: "500+", icon: Users },
    { label: "Successful Events", value: "15,000+", icon: Award },
    { label: "Years of Experience", value: "8+", icon: Star },
  ]

  const values = [
    {
      title: "Quality First",
      description: "We partner only with verified, high-quality vendors who meet our strict standards.",
      icon: Award,
    },
    {
      title: "Customer Focused",
      description: "Your dream event is our priority. We're here to support you every step of the way.",
      icon: Heart,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, upfront pricing for all our services.",
      icon: Shield,
    },
    {
      title: "Expert Support",
      description: "Our experienced team provides personalized guidance to make your event perfect.",
      icon: Users,
    },
  ]

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Founder & CEO",
      image: "/images/team/sarah-ahmed.png",
      description:
        "With 10+ years in event planning, Sarah founded ShaadiDesk to revolutionize wedding planning in Pakistan.",
    },
    {
      name: "Ali Hassan",
      role: "Head of Operations",
      image: "/images/team/ali-hassan.png",
      description: "Ali ensures smooth operations and maintains our high standards across all vendor partnerships.",
    },
    {
      name: "Fatima Khan",
      role: "Customer Success Manager",
      image: "/images/team/fatima-khan.png",
      description: "Fatima leads our customer support team, ensuring every couple has an amazing experience.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-pink-600">ShaadiDesk</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're Pakistan's leading event management platform, connecting couples with trusted vendors to create
            unforgettable celebrations. From intimate gatherings to grand weddings, we make your dream event a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Explore Packages
              </Button>
            </Link>
            <Link href="/business/signup">
              <Button size="lg" variant="outline">
                Join as Vendor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">From Dream to Reality</h3>
                <p className="text-gray-600 mb-6">
                  Founded in 2016, ShaadiDesk began as a simple idea: make wedding planning easier and more accessible
                  for couples across Pakistan. What started as a small team of passionate event enthusiasts has grown
                  into the country's most trusted event management platform.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we've helped over 10,000 couples create their perfect day, working with more than 500 verified
                  vendors across major cities. Our platform has facilitated over 15,000 successful events, from intimate
                  family gatherings to grand celebrations.
                </p>
                <Badge variant="secondary" className="text-pink-600">
                  Trusted by thousands since 2016
                </Badge>
              </div>
              <div className="relative">
                <Image
                  src="/images/about/our-story.png"
                  alt="Our Story"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            To revolutionize event planning in Pakistan by connecting couples with the best vendors, providing
            transparent pricing, and delivering exceptional service that turns dreams into unforgettable celebrations.
          </p>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Why Choose ShaadiDesk?</h3>
            <ul className="text-left space-y-3 text-gray-600">
              <li className="flex items-center">
                <Heart className="w-5 h-5 text-pink-600 mr-3" />
                Verified vendors with proven track records
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-pink-600 mr-3" />
                Transparent pricing with no hidden costs
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 text-pink-600 mr-3" />
                Dedicated support throughout your planning journey
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-pink-600 mr-3" />
                Quality guarantee on all services
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  123 Main Street
                  <br />
                  Lahore, Punjab
                  <br />
                  Pakistan
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">
                  +92 300 1234567
                  <br />
                  Mon-Fri: 9AM-6PM
                  <br />
                  Sat: 10AM-4PM
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">
                  info@shaadidesk.com
                  <br />
                  support@shaadidesk.com
                  <br />
                  partnerships@shaadidesk.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Dream Event?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy couples who trusted us with their special day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" variant="secondary">
                Browse Packages
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-pink-600 bg-transparent"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
