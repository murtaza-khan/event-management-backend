import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Phone, Mail, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Happy Couples", icon: Heart },
    { number: "500+", label: "Trusted Vendors", icon: Users },
    { number: "50+", label: "Cities Covered", icon: MapPin },
    { number: "5", label: "Years Experience", icon: Award },
  ]

  const values = [
    {
      title: "Quality First",
      description: "We partner only with verified, high-quality vendors who meet our strict standards.",
      icon: Award,
    },
    {
      title: "Customer Focused",
      description: "Your dream wedding is our priority. We're here to support you every step of the way.",
      icon: Heart,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, upfront pricing for all our services and packages.",
      icon: Star,
    },
    {
      title: "Expert Support",
      description: "Our experienced team provides personalized guidance to make your wedding planning seamless.",
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-pink-600">ShaadiDesk</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're passionate about making your dream wedding a reality. Since 2019, we've been connecting couples with
              the finest wedding vendors across Pakistan, creating unforgettable celebrations.
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    ShaadiDesk was born from a simple idea: wedding planning should be joyful, not stressful. Our
                    founder, Sarah Ahmed, experienced firsthand the challenges of planning a wedding in Pakistan - from
                    finding reliable vendors to managing budgets and timelines.
                  </p>
                  <p>
                    In 2019, we launched with a mission to transform the wedding industry by creating a platform that
                    connects couples with verified, high-quality vendors. What started as a small team of passionate
                    wedding enthusiasts has grown into Pakistan's leading wedding planning platform.
                  </p>
                  <p>
                    Today, we're proud to have helped over 10,000 couples create their dream weddings while supporting
                    hundreds of local businesses across 50+ cities in Pakistan.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/about/our-story.png"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                      <value.icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The passionate people behind ShaadiDesk</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 bg-gray-200">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              To make wedding planning in Pakistan seamless, affordable, and enjoyable by connecting couples with
              trusted vendors and providing comprehensive wedding solutions under one platform.
            </p>
            <div className="bg-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose ShaadiDesk?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verified Vendors</h4>
                    <p className="text-gray-600">All our vendors are thoroughly vetted for quality and reliability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Packages</h4>
                    <p className="text-gray-600">From venues to catering, we offer comprehensive wedding packages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Support</h4>
                    <p className="text-gray-600">Our team provides personalized guidance throughout your journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Best Prices</h4>
                    <p className="text-gray-600">Competitive pricing with no hidden fees or surprises.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Phone className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+92 300 1234567</p>
                  <p className="text-gray-600">+92 21 1234567</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Mail className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">hello@shaadidesk.com</p>
                  <p className="text-gray-600">support@shaadidesk.com</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600">Karachi, Pakistan</p>
                  <p className="text-gray-600">Lahore, Pakistan</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of couples who trusted ShaadiDesk to make their special day perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
                  Browse Packages
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 bg-transparent"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
