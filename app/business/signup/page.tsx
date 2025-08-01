import { Suspense } from "react"
import { BusinessSignupForm } from "@/components/business-signup-form"
import { BusinessSignupBenefits } from "@/components/business-signup-benefits"

export default function BusinessSignupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Wedding Business</h1>
            <p className="text-lg text-gray-600">Join thousands of vendors growing their business with us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <BusinessSignupForm />
              </Suspense>
            </div>
            <div>
              <BusinessSignupBenefits />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
