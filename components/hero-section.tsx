import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">Trusted by 10,000+ couples</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Dream
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                {" "}
                Wedding{" "}
              </span>
              Starts Here
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find the perfect venue, book top vendors, and create unforgettable memories. Everything you need for your
              special day, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8">
                Start Planning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Browse Venues
              </Button>
            </div>

            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Venues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/hero-wedding-venue.jpg"
                alt="Beautiful wedding venue with elegant decoration"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available Today</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="text-center">
                <div className="text-lg font-bold text-pink-600">₹50,000</div>
                <div className="text-sm text-gray-600">Starting from</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
