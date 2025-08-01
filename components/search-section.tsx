"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchSection() {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    location: "",
    date: "",
    guests: "",
    category: "",
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Navigate based on selected category
    if (searchData.category) {
      const categoryRoutes = {
        venues: "/venues",
        makeup: "/makeup-artists",
        catering: "/caterers",
        photography: "/photographers",
        decoration: "/decorators",
        music: "/musicians",
        transportation: "/transportation",
        favors: "/favors",
      }

      const route = categoryRoutes[searchData.category as keyof typeof categoryRoutes]
      if (route) {
        // Build query parameters for filtering
        const params = new URLSearchParams()
        if (searchData.location) params.append("location", searchData.location)
        if (searchData.date) params.append("date", searchData.date)
        if (searchData.guests) params.append("guests", searchData.guests)

        const queryString = params.toString()
        const fullRoute = queryString ? `${route}?${queryString}` : route

        router.push(fullRoute)
      }
    } else {
      // If no category selected, show all results or redirect to general search
      router.push("/search")
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Find Your Perfect Wedding Service</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Search for venues, packages, photographers, caterers, and more to make your wedding day special.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Search for venues, caterers, etc."
            className="flex-1 h-12 px-4 rounded-md border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
          />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white h-12 px-6 rounded-md flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
