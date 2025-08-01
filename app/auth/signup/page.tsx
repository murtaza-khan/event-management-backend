import { ClientSignupForm } from "@/components/client-signup-form"
import { ClientSignupBenefits } from "@/components/client-signup-benefits"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientSignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/auth/signup-type">Account Type</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Event Planner Signup</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between mb-8">
          <Link href="/auth/signup-type">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Account Types
            </Button>
          </Link>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Need a business account?{" "}
              <Link href="/business/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                Switch to Vendor Signup
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Event Planner Account</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of couples and families who have planned their perfect events with ShaadiDesk. Get exclusive
            access to verified vendors, special discounts, and planning tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Section */}
          <div className="lg:col-span-1">
            <ClientSignupBenefits />
          </div>

          {/* Signup Form */}
          <div className="lg:col-span-2">
            <ClientSignupForm />
          </div>
        </div>

        {/* Already have account */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-pink-600 hover:text-pink-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
