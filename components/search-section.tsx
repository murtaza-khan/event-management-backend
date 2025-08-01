"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Calendar, Users } from "lucide-react"

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Event Solution</h2>
          <p className="text-gray-600 text-lg">Search from thousands of venues and vendors across Pakistan</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location
                </label>
                <Select onValueChange={(value) => setSearchData({ ...searchData, location: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    <SelectItem value="multan">Multan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Event Date
                </label>
                <Input
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Guests
                </label>
                <Select onValueChange={(value) => setSearchData({ ...searchData, guests: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100</SelectItem>
                    <SelectItem value="100-200">100-200</SelectItem>
                    <SelectItem value="200-500">200-500</SelectItem>
                    <SelectItem value="500-1000">500-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <Select onValueChange={(value) => setSearchData({ ...searchData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venues">Wedding Venues</SelectItem>
                    <SelectItem value="makeup">Makeup Artists</SelectItem>
                    <SelectItem value="catering">Caterers</SelectItem>
                    <SelectItem value="photography">Photographers</SelectItem>
                    <SelectItem value="decoration">Decorators</SelectItem>
                    <SelectItem value="music">Music & Entertainment</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="favors">Wedding Favors</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-transparent">Search</label>
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 h-10">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
