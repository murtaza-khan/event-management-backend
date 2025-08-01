import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Briefcase, MapPin, Phone, Mail, DollarSign } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About ShaadiDesk</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Your trusted partner in creating unforgettable wedding experiences. We connect dreams with reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/packages">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-md"
            >
              Explore Packages
            </Button>
          </Link>
          <Link href="/business/signup">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full shadow-md bg-transparent"
            >
              List Your Business
            </Button>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-50 rounded-lg shadow-md mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-pink-600 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Happy Couples</p>
          </div>
          <div className="flex flex-col items-center">
            <Briefcase className="w-12 h-12 text-purple-600 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Trusted Vendors</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-pink-600 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Cities Covered</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">5 Years</h3>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 bg-white rounded-lg shadow-md mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about/our-story.png"
              alt="Our Story"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ShaadiDesk was founded in 2018 with a simple yet powerful vision: to simplify wedding planning and make
              dream weddings accessible to everyone. We started as a small team passionate about connecting couples with
              reliable vendors, and over the years, we've grown into a leading platform, serving thousands of happy
              couples across Pakistan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey has been driven by a commitment to excellence, transparency, and personalized service. We
              understand that every wedding is unique, and we strive to provide a seamless and enjoyable planning
              experience, from the first click to the final celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <CheckCircle className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-700">
              We partner only with top-rated venues and vendors to ensure exceptional service.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Users className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
            <p className="text-gray-700">
              Your satisfaction is our priority. We're here to support you every step of the way.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <DollarSign className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
            <p className="text-gray-700">
              Clear and upfront pricing with no hidden fees, so you can plan with confidence.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Briefcase className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-700">Our team of wedding planning experts is always ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white rounded-lg shadow-md mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src="/images/about/sarah-ahmed.png"
                alt="Sarah Ahmed"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sarah Ahmed</h3>
            <p className="text-pink-600 mb-2">Founder & CEO</p>
            <p className="text-gray-700">
              With a passion for event planning, Sarah founded ShaadiDesk to revolutionize the wedding industry.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src="/images/about/ali-hassan.png"
                alt="Ali Hassan"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Ali Hassan</h3>
            <p className="text-pink-600 mb-2">Head of Operations</p>
            <p className="text-gray-700">
              Ali ensures seamless operations and vendor relations, bringing efficiency to every aspect.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src="/images/about/fatima-khan.png"
                alt="Fatima Khan"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Fatima Khan</h3>
            <p className="text-pink-600 mb-2">Customer Success Manager</p>
            <p className="text-gray-700">
              Fatima is dedicated to ensuring every couple has a delightful and stress-free planning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg mb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-8">
            To empower couples with the tools and resources they need to plan their perfect wedding, while providing
            vendors with a platform to showcase their talent and grow their businesses. We aim to be the most trusted
            and comprehensive wedding planning platform.
          </p>
          <h3 className="text-2xl font-bold mb-4">Why Choose ShaadiDesk?</h3>
          <ul className="list-none space-y-3 text-lg">
            <li className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 mr-3 text-white" /> Verified Vendors
            </li>
            <li className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 mr-3 text-white" /> Complete Packages
            </li>
            <li className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 mr-3 text-white" /> Expert Support
            </li>
            <li className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 mr-3 text-white" /> Best Prices Guaranteed
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white rounded-lg shadow-md mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <Phone className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-700">+1 (123) 456-7890</p>
            <p className="text-gray-700">Mon - Fri, 9 AM - 6 PM</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <Mail className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700">info@shaadidesk.com</p>
            <p className="text-gray-700">We respond within 24 hours</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <MapPin className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-700">123 Wedding Lane, Dream City</p>
            <p className="text-gray-700">DC 12345, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Join thousands of happy couples and start your stress-free wedding planning journey today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/auth/signup-type">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-md"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full shadow-md bg-transparent"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
