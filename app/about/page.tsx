import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Building, MapPin, Award, CheckCircle, Phone, Mail, Map, DollarSign } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">About ShaadiDesk</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Your trusted partner in creating unforgettable wedding experiences. We connect you with the best venues and
            vendors to make your dream wedding a reality.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up delay-400">
            <Link href="/packages">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Explore Packages
              </Button>
            </Link>
            <Link href="/business/signup">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg bg-transparent"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Users className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Happy Couples</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Building className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Trusted Vendors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <MapPin className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-4xl font-bold text-gray-900">5 Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about/our-story.png"
              alt="Our Story"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story: From a Dream to Reality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ShaadiDesk was founded in 2020 by Sarah Ahmed, a passionate event planner who saw a gap in the market for
              a streamlined, trustworthy platform connecting couples with top-tier wedding vendors. Frustrated by the
              fragmented and often overwhelming process of wedding planning, she envisioned a solution that would
              simplify every step, from venue selection to vendor coordination.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting as a small team, ShaadiDesk quickly grew, driven by a commitment to transparency, quality, and
              exceptional customer service. We built strong relationships with verified vendors, curated comprehensive
              packages, and developed intuitive tools to empower couples to plan their perfect day with confidence and
              ease.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, ShaadiDesk is a leading platform, having helped thousands of couples create unforgettable memories.
              We continue to innovate, expand our network, and refine our services, always keeping our founding vision
              at heart: to make wedding planning a joyful and stress-free experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We partner only with top-rated venues and vendors, ensuring excellence in every service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We offer personalized support and tailored solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <DollarSign className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees. Clear, upfront pricing for all packages and services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team of experienced planners is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                <Image src="/images/about/team-sarah.png" alt="Sarah Ahmed" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Ahmed</h3>
              <p className="text-pink-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2">Visionary leader passionate about simplifying wedding planning.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                <Image src="/images/about/team-ali.png" alt="Ali Hassan" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ali Hassan</h3>
              <p className="text-purple-600 font-medium">Head of Operations</p>
              <p className="text-gray-600 mt-2">Ensures seamless execution and operational excellence.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                <Image src="/images/about/team-fatima.png" alt="Fatima Khan" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fatima Khan</h3>
              <p className="text-pink-600 font-medium">Customer Success Manager</p>
              <p className="text-gray-600 mt-2">Dedicated to ensuring every client has a delightful experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            To empower couples to plan their dream wedding with ease, confidence, and joy, by providing a comprehensive,
            transparent, and supportive platform that connects them with the best wedding professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose ShaadiDesk?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Verified Vendors: Handpicked and vetted professionals.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Complete Packages: All-inclusive options for every budget.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Expert Support: Dedicated team to assist you.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Best Prices: Competitive and transparent pricing.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading global platform for wedding planning, recognized for our innovation, reliability, and
                commitment to creating magical moments for couples worldwide. We aim to continuously expand our services
                and reach, making dream weddings accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Phone className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
              <p className="text-gray-600">Mon - Fri, 9 AM - 6 PM EST</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Mail className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@shaadidesk.com</p>
              <p className="text-gray-600">We respond within 24 hours</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Map className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Wedding Lane, Suite 456</p>
              <p className="text-gray-600">Dream City, DC 98765</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of happy couples who trusted ShaadiDesk for their special day.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/packages">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Explore Packages
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg bg-transparent"
              >
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
