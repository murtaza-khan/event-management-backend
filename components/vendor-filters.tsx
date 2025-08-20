"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VendorFiltersProps {
  category?: string
  city?: string
}

export function VendorFilters({ category, city }: VendorFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([50000, 200000])
  const [selectedCity, setSelectedCity] = useState(city || "")
  const [selectedCategory, setSelectedCategory] = useState(category || "")

  const cities = ["lahore", "karachi", "islamabad", "rawalpindi", "faisalabad", "multan"]
  const categories = [
    { value: "venue", label: "Wedding Venue" },
    { value: "makeup", label: "Makeup Artist" },
    { value: "catering", label: "Catering Service" },
    { value: "photography", label: "Photography" },
    { value: "decoration", label: "Decoration" },
    { value: "music", label: "Music & Entertainment" },
    { value: "transportation", label: "Transportation" }
  ]

  const applyFilters = () => {
    const params = new URLSearchParams()
    
    if (selectedCategory) params.set("category", selectedCategory)
    if (selectedCity) params.set("city", selectedCity)
    
    router.push(`/vendors?${params.toString()}`)
  }

  useEffect(() => {
    if (category) setSelectedCategory(category)
    if (city) setSelectedCity(city)
  }, [category, city])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Category */}
          {/* <div>
            <Label className="text-sm font-medium mb-2 block">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          {/* Location */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Location</Label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          {/* <div>
            <Label className="text-sm font-medium mb-2 block">
              Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500000}
              min={25000}
              step={5000}
              className="mt-2"
            />
          </div> */}

          <Button 
            className="w-full bg-pink-600 hover:bg-pink-700"
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}