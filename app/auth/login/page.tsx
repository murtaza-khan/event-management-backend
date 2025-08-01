import { Suspense } from "react"
import { ClientLoginForm } from "@/components/client-login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-lg text-gray-600">Sign in to your account</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientLoginForm />
        </Suspense>
      </div>
    </div>
  )
}
