import { ClientLoginForm } from "@/components/client-login-form"

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ClientLoginForm />
    </div>
  )
}
