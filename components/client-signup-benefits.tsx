import { CheckCircle, Heart, Package, Users } from "lucide-react"

export function ClientSignupBenefits() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Why Sign Up as a Client?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full">
            <Heart className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Personalized Wishlist</h3>
            <p className="text-gray-700">
              Save your favorite venues, packages, and vendors in one place for easy access.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full">
            <Package className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Exclusive Packages</h3>
            <p className="text-gray-700">Access special deals and curated wedding packages tailored to your needs.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full">
            <Users className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Manage Bookings</h3>
            <p className="text-gray-700">
              Keep track of all your booked services and communicate with vendors seamlessly.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full">
            <CheckCircle className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Expert Support</h3>
            <p className="text-gray-700">
              Get personalized assistance from our wedding planning experts whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
