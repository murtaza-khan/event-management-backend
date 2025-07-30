import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Dream
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              {" "}
              Wedding{" "}
            </span>
            Starts Here
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Find the perfect venue, book top vendors, and create unforgettable memories. Everything you need for your
            special day, all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8">
              Start Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Browse Venues
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 mt-12">
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
      </div>
    </section>
  )
}
