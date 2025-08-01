import { CheckCircle, Briefcase, DollarSign, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BusinessSignupBenefits() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">List Your Business with ShaadiDesk</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Expand your reach, get more bookings, and grow your wedding business by joining our trusted network of
          vendors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wider Reach</h3>
            <p className="text-gray-200">Connect with thousands of couples actively planning their weddings.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">More Bookings</h3>
            <p className="text-gray-200">Increase your booking rates with direct inquiries and package deals.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build Reputation</h3>
            <p className="text-gray-200">Showcase your best work and collect valuable client reviews.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
            <p className="text-gray-200">
              Manage your profile, services, and bookings through our intuitive dashboard.
            </p>
          </div>
        </div>
        <Link href="/business/signup">
          <Button
            size="lg"
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Join ShaadiDesk Today
          </Button>
        </Link>
      </div>
    </section>
  )
}
