import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase } from "lucide-react"

export function AccountTypeSelection() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Join ShaadiDesk</h1>
      <p className="text-lg text-gray-600 mb-12">Choose the account type that best suits your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/auth/signup" className="block">
          <Card className="p-6 flex flex-col items-center justify-center h-64 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardHeader className="p-0 mb-4">
              <User className="w-16 h-16 text-pink-600" />
            </CardHeader>
            <CardContent className="p-0 text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">I'm a Client</CardTitle>
              <p className="text-gray-700">Find and book wedding venues, packages, and vendors for your special day.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/business/signup" className="block">
          <Card className="p-6 flex flex-col items-center justify-center h-64 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardHeader className="p-0 mb-4">
              <Briefcase className="w-16 h-16 text-purple-600" />
            </CardHeader>
            <CardContent className="p-0 text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">I'm a Business</CardTitle>
              <p className="text-gray-700">List your services, manage bookings, and grow your wedding business.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
      <p className="mt-12 text-gray-600">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-pink-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  )
}
