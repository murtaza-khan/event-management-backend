import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail, MapPin, Users, DollarSign, CalendarDays, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 md:py-32 text-center overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
              Your Dream Event, Our Passion
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              At ShaadiDesk, we believe every celebration should be a masterpiece. We connect you with the best vendors
              and curated packages to make your special day unforgettable.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
              <Link href="/packages">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Explore Packages
                </Button>
              </Link>
              <Link href="/business/signup">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  List Your Business
                </Button>
              </Link>
            </div>
          </div>
          {/* Background shapes for visual appeal */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Users className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-4xl font-bold text-gray-900">10,000+</h3>
                <p className="text-gray-600">Happy Couples</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-4xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Trusted Vendors</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <MapPin className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-4xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Cities Served</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <CalendarDays className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-4xl font-bold text-gray-900">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <Image
                src="/images/about/our-story.png"
                alt="Our Story"
                width={800}
                height={600}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story: Crafting Unforgettable Moments
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                ShaadiDesk was founded in 2020 by Sarah Ahmed, a passionate event planner who saw a gap in the market
                for a streamlined, trustworthy platform connecting clients with top-tier event vendors. Frustrated by
                the fragmented and often overwhelming process of planning her own sister's wedding, Sarah envisioned a
                solution that would simplify event planning, ensure quality, and provide transparent pricing.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Starting as a small team, we meticulously curated a network of verified venues, caterers, photographers,
                decorators, and more. Our focus was always on building strong relationships with both clients and
                vendors, fostering a community built on trust and excellence.
              </p>
              <p className="text-lg text-gray-700">
                Today, ShaadiDesk has grown into a leading event management platform, empowering thousands of couples
                and individuals to plan their dream events with ease and confidence. We are proud to have played a part
                in countless joyous celebrations, and we continue to innovate, always striving to make your special
                moments truly unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <CheckCircle className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We partner only with top-rated, verified vendors to ensure every service meets the highest standards
                  of excellence.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen, adapt, and go the extra mile to bring your vision to
                  life.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <DollarSign className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe in clear, upfront pricing for all our packages and services.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Phone className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our dedicated team of event specialists is always here to guide you, from planning to execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/about/sarah-ahmed.png"
                  alt="Sarah Ahmed"
                  width={200}
                  height={200}
                  className="rounded-full w-48 h-48 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">Sarah Ahmed</h3>
                <p className="text-pink-600 font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 max-w-xs">
                  Visionary leader passionate about simplifying event planning and creating memorable experiences.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/about/ali-hassan.png"
                  alt="Ali Hassan"
                  width={200}
                  height={200}
                  className="rounded-full w-48 h-48 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">Ali Hassan</h3>
                <p className="text-purple-600 font-medium mb-2">Head of Operations</p>
                <p className="text-gray-600 max-w-xs">
                  Ensures seamless execution of all events, optimizing processes for efficiency and excellence.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/about/fatima-khan.png"
                  alt="Fatima Khan"
                  width={200}
                  height={200}
                  className="rounded-full w-48 h-48 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">Fatima Khan</h3>
                <p className="text-pink-600 font-medium mb-2">Customer Success Manager</p>
                <p className="text-gray-600 max-w-xs">
                  Dedicated to client satisfaction, providing personalized support and guidance throughout the planning
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12">
              To empower individuals and businesses to create extraordinary events by providing a trusted,
              comprehensive, and user-friendly platform that connects them with the best event services and resources.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Why Choose ShaadiDesk?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 mb-3 text-white" />
                <p className="text-lg font-semibold">Verified Vendors</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 mb-3 text-white" />
                <p className="text-lg font-semibold">Complete Packages</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 mb-3 text-white" />
                <p className="text-lg font-semibold">Expert Support</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 mb-3 text-white" />
                <p className="text-lg font-semibold">Best Prices Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-700">+1 (123) 456-7890</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <Mail className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-700">info@shaadidesk.com</p>
                <p className="text-sm text-gray-500">We typically respond within 24 hours.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <MapPin className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                <p className="text-gray-700">123 Event Plaza, Suite 100</p>
                <p className="text-sm text-gray-500">Celebration City, CA 90210</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Plan Your Dream Event?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of happy clients and vendors who trust ShaadiDesk for their event planning needs.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/packages">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Find Your Package
                </Button>
              </Link>
              <Link href="/business/signup">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Become a Vendor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
