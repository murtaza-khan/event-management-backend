import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">About ShaadiDesk</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Your trusted partner in creating unforgettable wedding experiences. We connect couples with the best
              vendors and simplify wedding planning.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
              <Link href="/packages">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 transition-colors shadow-lg">
                  Explore Packages
                </Button>
              </Link>
              <Link href="/business/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 transition-colors shadow-lg bg-transparent"
                >
                  List Your Business
                </Button>
              </Link>
            </div>
          </div>
          {/* Abstract shapes for background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white opacity-10 rounded-full mix-blend-overlay animate-float" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-float animation-delay-500" />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-5xl font-extrabold text-pink-600">10K+</span>
                <p className="text-lg text-gray-600 mt-2">Happy Couples</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-5xl font-extrabold text-purple-600">500+</span>
                <p className="text-lg text-gray-600 mt-2">Trusted Vendors</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-5xl font-extrabold text-pink-600">50+</span>
                <p className="text-lg text-gray-600 mt-2">Cities Served</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <span className="text-5xl font-extrabold text-purple-600">5+</span>
                <p className="text-lg text-gray-600 mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story: From a Dream to Your Dream Wedding
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ShaadiDesk was founded with a simple yet powerful vision: to simplify wedding planning and make dream
                  weddings accessible to everyone. Our journey began when our founder, Sarah Ahmed, experienced
                  firsthand the complexities and stress of organizing a wedding. She realized there was a need for a
                  platform that seamlessly connects couples with reliable vendors, offering transparent pricing and
                  comprehensive packages.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since our inception, we&apos;ve grown from a small startup to a leading wedding planning platform,
                  serving thousands of happy couples across multiple cities. We pride ourselves on our commitment to
                  quality, customer satisfaction, and innovation. Every day, we strive to enhance our platform, expand
                  our network of trusted vendors, and provide unparalleled support to make your special day truly
                  unforgettable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe that planning a wedding should be an exciting and joyful experience, not a stressful one.
                  Let ShaadiDesk handle the details, so you can focus on celebrating your love story.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/public/images/about/our-story.png"
                  alt="ShaadiDesk team working together"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We partner only with top-tier vendors who meet our rigorous standards for excellence and reliability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focused</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen, adapt, and go the extra mile to exceed your
                  expectations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe in clear, upfront pricing for all our packages and services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our dedicated team of wedding experts is always here to guide you, from planning to execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <Image
                  src="/public/images/about/sarah-ahmed.png"
                  alt="Sarah Ahmed"
                  width={160}
                  height={160}
                  className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-pink-500"
                />
                <h3 className="text-xl font-semibold text-gray-800">Sarah Ahmed</h3>
                <p className="text-pink-600 font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600">
                  With a passion for event planning and a vision for seamless weddings, Sarah founded ShaadiDesk to
                  revolutionize the industry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <Image
                  src="/public/images/about/ali-hassan.png"
                  alt="Ali Hassan"
                  width={160}
                  height={160}
                  className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-purple-500"
                />
                <h3 className="text-xl font-semibold text-gray-800">Ali Hassan</h3>
                <p className="text-purple-600 font-medium mb-2">Head of Operations</p>
                <p className="text-gray-600">
                  Ali ensures that every aspect of ShaadiDesk's operations runs smoothly, from vendor onboarding to
                  customer support.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <Image
                  src="/public/images/about/fatima-khan.png"
                  alt="Fatima Khan"
                  width={160}
                  height={160}
                  className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-pink-500"
                />
                <h3 className="text-xl font-semibold text-gray-800">Fatima Khan</h3>
                <p className="text-pink-600 font-medium mb-2">Customer Success Manager</p>
                <p className="text-gray-600">
                  Fatima is dedicated to ensuring every couple has a delightful experience, providing personalized
                  assistance and guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission: Making Your Dream Wedding a Reality</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              At ShaadiDesk, our mission is to empower couples with the tools and resources they need to plan their
              perfect wedding with ease and confidence. We are committed to building a vibrant community where trust,
              transparency, and exceptional service are paramount.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <p className="text-lg">Access to a curated network of verified, high-quality vendors.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <p className="text-lg">Comprehensive and customizable wedding packages for every budget.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <p className="text-lg">Expert guidance and personalized support throughout your planning journey.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white shrink-0 mt-1" />
                <p className="text-lg">Transparent pricing and clear communication to avoid surprises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon - Fri, 9 AM - 6 PM EST</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <Mail className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">info@shaadidesk.com</p>
                <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <MapPin className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                <p className="text-gray-600 text-center">
                  123 Wedding Lane, Suite 100
                  <br />
                  Dream City, DC 12345
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Dream Wedding?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of happy couples who trusted ShaadiDesk for their special day.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/packages">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 transition-colors shadow-lg">
                  Explore Packages
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 transition-colors shadow-lg bg-transparent"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
