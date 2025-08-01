import { ClientSignupForm } from "@/components/client-signup-form"
import { ClientSignupBenefits } from "@/components/client-signup-benefits"

export default function ClientSignupPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-center">
          <ClientSignupForm />
        </div>
        <div className="flex items-center justify-center p-6">
          <ClientSignupBenefits />
        </div>
      </div>
    </div>
  )
}
