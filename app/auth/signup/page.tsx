import { Suspense } from "react"
import { ClientSignupForm } from "@/components/client-signup-form"
import { ClientSignupBenefits } from "@/components/client-signup-benefits"

export default function ClientSignupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Client Account</h1>
            <p className="text-lg text-gray-600">Start planning your dream wedding today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <ClientSignupForm />
              </Suspense>
            </div>
            <div>
              <ClientSignupBenefits />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
