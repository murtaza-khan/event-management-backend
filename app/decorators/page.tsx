import { DecoratorGrid } from "@/components/decorator-grid"
import { VendorFilters } from "@/components/vendor-filters"

export default function DecoratorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Decorators</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <VendorFilters />
        </div>
        <div className="lg:col-span-3">
          <DecoratorGrid />
        </div>
      </div>
    </div>
  )
}
