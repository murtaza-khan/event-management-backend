import { Search, Calendar, Heart, CheckCircle } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Planning your wedding is simple with ShaadiDesk. Follow these easy steps to create your perfect day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mb-4">
              <Search className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Discover</h3>
            <p className="text-gray-700">Browse through our extensive list of venues, packages, and vendors.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Shortlist</h3>
            <p className="text-gray-700">Add your favorites to your wishlist and compare options side-by-side.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Book</h3>
            <p className="text-gray-700">Secure your chosen services with our easy and secure booking process.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Celebrate</h3>
            <p className="text-gray-700">Relax and enjoy your perfectly planned wedding day!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
