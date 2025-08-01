import { BusinessSignupForm } from "@/components/business-signup-form"
import { BusinessSignupBenefits } from "@/components/business-signup-benefits"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BusinessSignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
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
              <BreadcrumbPage>Vendor Signup</BreadcrumbPage>
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
              Planning an event instead?{" "}
              <Link href="/auth/signup" className="text-pink-600 hover:text-pink-700 font-medium">
                Switch to Event Planner Signup
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grow Your Business with ShaadiDesk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Pakistan's leading event management platform and connect with thousands of customers looking for your
            services. Start growing your business today with our powerful vendor tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Section */}
          <div className="lg:col-span-1">
            <BusinessSignupBenefits />
          </div>

          {/* Signup Form */}
          <div className="lg:col-span-2">
            <BusinessSignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
