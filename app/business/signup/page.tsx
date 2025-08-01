import { BusinessSignupForm } from "@/components/business-signup-form"
import { BusinessSignupBenefits } from "@/components/business-signup-benefits"

export default function BusinessSignupPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-center">
          <BusinessSignupForm />
        </div>
        <div className="flex items-center justify-center p-6">
          <BusinessSignupBenefits />
        </div>
      </div>
    </div>
  )
}
