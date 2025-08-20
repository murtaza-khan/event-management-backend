import { VendorFilters } from "@/components/vendor-filters"
import { VendorGrid } from "@/components/vendor-grid"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface SearchParams {
  category?: string
  city?: string
}

interface PageProps {
  searchParams: Promise<SearchParams>
}

const categoryNames: Record<string, string> = {
  venue: "Wedding Venues",
  makeup: "Makeup Artists",
  catering: "Catering Services",
  photography: "Photographers",
  decoration: "Decorators",
  music: "Music & Entertainment",
  transportation: "Transportation",
  favors: "Wedding Favors"
}

export default async function VendorsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const { category, city } = params

  const categoryName = category ? categoryNames[category] || "Vendors" : "Vendors"
  const locationText = city ? ` in ${city.charAt(0).toUpperCase() + city.slice(1)}` : ""

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
              <BreadcrumbPage>{categoryName}{locationText}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {categoryName}{locationText}
          </h1>
          <p className="text-gray-600">
            Discover the perfect {categoryName.toLowerCase()} for your special day from our curated collection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <VendorFilters category={category} city={city} />
          </div>
          <div className="lg:col-span-3">
            <VendorGrid category={category} city={city} />
          </div>
        </div>
      </div>
    </div>
  )
}