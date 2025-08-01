import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Heart, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { label: "Happy Couples", value: "10,000+", icon: Heart },
    { label: "Trusted Vendors", value: "500+", icon: Users },
    { label: "Cities Covered", value: "25+", icon: MapPin },
    { label: "Years Experience", value: "8+", icon: Award },
  ]

  const values = [
    {
      title: "Quality First",
      description: "We partner only with verified, high-quality vendors who meet our strict standards.",
      icon: CheckCircle,
    },
    {
      title: "Customer Focused",
      description: "Your dream wedding is our priority. We provide personalized service every step of the way.",
      icon: Heart,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, upfront pricing for all our services and packages.",
      icon: Star,
    },
    {
      title: "Expert Support",
      description: "Our experienced team is here to guide you through every aspect of your wedding planning.",
      icon: Users,
    },
  ]

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Founder & CEO",
      image: "/images/team/sarah.jpg",
      description: "With 10+ years in event management, Sarah founded EventHub to make wedding planning stress-free.",
    },
    {
      name: "Ali Hassan",
      role: "Head of Operations",
      image: "/images/team/ali.jpg",
      description: "Ali ensures smooth operations and maintains our high standards across all vendor partnerships.",
    },
    {
      name: "Fatima Khan",
      role: "Customer Success Manager",
      image: "/images/team/fatima.jpg",
      description: "Fatima leads our customer support team, ensuring every client has an exceptional experience.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About EventHub</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Making dream weddings a reality across Pakistan since 2016
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
                asChild
              >
                <Link href="/auth/signup">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">Born from a passion to simplify wedding planning in Pakistan</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/about/our-story.png"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  EventHub was founded in 2016 with a simple mission: to make wedding planning accessible, affordable,
                  and stress-free for couples across Pakistan. We noticed that finding reliable vendors and coordinating
                  multiple services was one of the biggest challenges couples faced.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Starting in Lahore with just 10 vendor partners, we've grown to become Pakistan's leading wedding
                  planning platform, serving over 10,000 happy couples and working with 500+ trusted vendors across 25+
                  cities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to innovate and expand our services, always keeping our customers' dreams at the
                  heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                      <value.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The passionate people behind EventHub</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <Image
                        src={`/placeholder.svg?height=128&width=128&query=${member.name} professional headshot`}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              To empower couples across Pakistan to plan their perfect wedding by connecting them with trusted vendors,
              offering comprehensive packages, and providing exceptional support throughout their journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Accessibility</h3>
                <p className="opacity-90">
                  Making quality wedding services accessible to all couples, regardless of budget.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Quality</h3>
                <p className="opacity-90">
                  Maintaining the highest standards through careful vendor selection and monitoring.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="opacity-90">
                  Continuously improving our platform and services based on customer feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Planning?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of couples who have trusted EventHub with their special day
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/packages">Browse Packages</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/venues">Find Venues</Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex flex-wrap justify-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+92-300-EVENTHUB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>hello@eventhub.pk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Lahore, Karachi, Islamabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
