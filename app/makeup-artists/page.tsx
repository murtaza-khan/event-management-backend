import { VendorFilters } from "@/components/vendor-filters"
import { MakeupArtistGrid } from "@/components/makeup-artist-grid"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function MakeupArtistsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Makeup Artists</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Makeup Artists</h1>
          <p className="text-gray-600">Find the perfect makeup artist to make you look stunning on your special day</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <VendorFilters type="makeup" />
          </div>
          <div className="lg:col-span-3">
            <MakeupArtistGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
