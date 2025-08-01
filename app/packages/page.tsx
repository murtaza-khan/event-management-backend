import { PackageGrid } from "@/components/package-grid"
import { PackageFilters } from "@/components/package-filters"

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Wedding Packages</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <PackageFilters />
        </div>
        <div className="lg:col-span-3">
          <PackageGrid />
        </div>
      </div>
    </div>
  )
}
