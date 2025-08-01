import { VenueGrid } from "@/components/venue-grid"
import { VenueFilters } from "@/components/venue-filters"

export default function VenuesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Venues</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <VenueFilters />
        </div>
        <div className="lg:col-span-3">
          <VenueGrid />
        </div>
      </div>
    </div>
  )
}
