"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function PackageFilters() {
  const [priceRange, setPriceRange] = useState([50000, 500000])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedGuests, setSelectedGuests] = useState<string[]>([])

  const packageTypes = [
    "Royal Wedding",
    "Premium Celebration",
    "Grand Luxury",
    "Essential Wedding",
    "Elegant Affair",
    "Dream Wedding",
  ]

  const guestCapacities = ["50-100 guests", "100-200 guests", "200-300 guests", "300-500 guests", "500+ guests"]

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    }
  }

  const handleGuestChange = (capacity: string, checked: boolean) => {
    if (checked) {
      setSelectedGuests([...selectedGuests, capacity])
    } else {
      setSelectedGuests(selectedGuests.filter((g) => g !== capacity))
    }
  }

  const clearFilters = () => {
    setPriceRange([50000, 500000])
    setSelectedTypes([])
    setSelectedGuests([])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500000}
              min={50000}
              step={10000}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Package Types */}
          <div>
            <h3 className="font-medium mb-3">Package Type</h3>
            <div className="space-y-2">
              {packageTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
                  />
                  <label htmlFor={type} className="text-sm text-gray-700">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Capacity */}
          <div>
            <h3 className="font-medium mb-3">Guest Capacity</h3>
            <div className="space-y-2">
              {guestCapacities.map((capacity) => (
                <div key={capacity} className="flex items-center space-x-2">
                  <Checkbox
                    id={capacity}
                    checked={selectedGuests.includes(capacity)}
                    onCheckedChange={(checked) => handleGuestChange(capacity, checked as boolean)}
                  />
                  <label htmlFor={capacity} className="text-sm text-gray-700">
                    {capacity}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
