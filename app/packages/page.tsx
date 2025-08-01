import { Suspense } from "react"
import { PackageFilters } from "@/components/package-filters"
import { PackageGrid } from "@/components/package-grid"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Wedding Packages</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Complete wedding solutions tailored to your budget and preferences. From intimate ceremonies to grand
              celebrations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <PackageFilters />
          </div>
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <Suspense fallback={<div>Loading packages...</div>}>
              <PackageGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
