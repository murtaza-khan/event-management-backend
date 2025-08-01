import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail, MapPin, Users, Star, Building, CalendarDays } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Dream Event, Our Passion
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            At ShaadiDesk, we believe every celebration is a unique story waiting to be told. We connect you with the
            finest vendors to bring your vision to life, seamlessly and stress-free.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/packages">
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Explore Packages
              </Button>
            </Link>
            <Link href="/business/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-transparent"
              >
                List Your Business
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">ShaadiDesk by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Users className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Happy Couples</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Star className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Trusted Vendors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <MapPin className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <CalendarDays className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">5 Years</h3>
              <p className="text-gray-600">Experience</p>
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
            <p className="text-gray-700 leading-relaxed mb-6">
              ShaadiDesk was founded in 2019 by Sarah Ahmed, a passionate event planner who saw a gap in the market for
              a reliable and comprehensive platform connecting clients with top-tier event vendors. Frustrated by the
              fragmented process of finding and coordinating services, she envisioned a seamless solution that would
              simplify event planning for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Starting with a small team and a big dream, ShaadiDesk quickly grew, driven by a commitment to quality,
              transparency, and exceptional customer service. We've expanded our network to include hundreds of verified
              vendors across various categories, from luxurious venues to talented makeup artists, ensuring every aspect
              of your event is covered.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, ShaadiDesk stands as a testament to our dedication to making event planning joyful and stress-free.
              We are proud to have helped thousands of couples and families create their perfect celebrations, building
              a community where dreams come to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We partner only with verified, top-rated vendors to ensure every service meets the highest standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide personalized support and tailor solutions to your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees. We ensure clear and competitive pricing for all our packages and services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Star className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team of experienced planners is always ready to assist you at every step of your journey.
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
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Image
                src="/images/about/sarah-ahmed.png"
                alt="Sarah Ahmed"
                width={160}
                height={160}
                className="rounded-full mx-auto mb-4 object-cover w-40 h-40"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Ahmed</h3>
              <p className="text-pink-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                With a background in event management and a passion for creating memorable experiences, Sarah leads
                ShaadiDesk with vision and dedication.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Image
                src="/images/about/ali-hassan.png"
                alt="Ali Hassan"
                width={160}
                height={160}
                className="rounded-full mx-auto mb-4 object-cover w-40 h-40"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Ali Hassan</h3>
              <p className="text-purple-600 font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600">
                Ali ensures the smooth functioning of all our services, optimizing processes to deliver seamless
                experiences for clients and vendors.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Image
                src="/images/about/fatima-khan.png"
                alt="Fatima Khan"
                width={160}
                height={160}
                className="rounded-full mx-auto mb-4 object-cover w-40 h-40"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Fatima Khan</h3>
              <p className="text-indigo-600 font-medium mb-2">Customer Success Manager</p>
              <p className="text-gray-600">
                Fatima is dedicated to ensuring every client has a positive experience, providing support and guidance
                throughout their planning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            To empower individuals and businesses to create extraordinary events by providing a trusted, user-friendly
            platform that connects them with the best event services and resources.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose ShaadiDesk?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start text-left">
              <CheckCircle className="w-6 h-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <strong className="font-semibold">Verified Vendors:</strong> Access a curated list of top-rated and
                reliable professionals.
              </p>
            </div>
            <div className="flex items-start text-left">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <strong className="font-semibold">Complete Packages:</strong> Find comprehensive packages tailored to
                various needs and budgets.
              </p>
            </div>
            <div className="flex items-start text-left">
              <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <strong className="font-semibold">Expert Support:</strong> Get personalized assistance from our
                experienced event planners.
              </p>
            </div>
            <div className="flex items-start text-left">
              <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <strong className="font-semibold">Best Prices:</strong> Enjoy competitive pricing and exclusive deals on
                services.
              </p>
            </div>
            <div className="flex items-start text-left">
              <CheckCircle className="w-6 h-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <strong className="font-semibold">Seamless Planning:</strong> Our platform simplifies every step, from
                discovery to booking.
              </p>
            </div>
            <div className="flex items-start text-left">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <strong className="font-semibold">Customer Reviews:</strong> Make informed decisions with real client
                testimonials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Have questions or need assistance? Our team is here to help you plan your perfect event.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Phone className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">+92 300 1234567</p>
              <p className="text-sm text-gray-500">Mon - Fri, 9 AM - 6 PM (PKT)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Mail className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">info@shaadidesk.com</p>
              <p className="text-sm text-gray-500">We typically respond within 24 hours.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <MapPin className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">123 Event Plaza, Gulberg III, Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Perfect Event?</h2>
          <p className="text-lg md:text-xl mb-8">Join ShaadiDesk today and turn your event dreams into reality.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Sign Up Now
              </Button>
            </Link>
            <Link href="/packages">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pink-600 text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-transparent"
              >
                Browse Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
