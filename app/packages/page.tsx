import { Suspense } from "react"
import { PackageFilters } from "@/components/package-filters"
import { PackageGrid } from "@/components/package-grid"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wedding Packages</h1>
          <p className="text-lg text-gray-600">Complete wedding solutions tailored to your budget and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <PackageFilters />
          </aside>

          <main className="lg:w-3/4">
            <Suspense fallback={<div>Loading packages...</div>}>
              <PackageGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  )
}
