import { AccountTypeSelection } from "@/components/account-type-selection"

export default function SignupTypePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Platform</h1>
          <p className="text-lg text-gray-600">Choose your account type to get started</p>
        </div>
        <AccountTypeSelection />
      </div>
    </div>
  )
}
