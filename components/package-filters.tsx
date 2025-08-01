"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function PackageFilters() {
  const [priceRange, setPriceRange] = useState([50000, 500000])
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [guestRange, setGuestRange] = useState([50, 500])

  const services = [
    "Venue",
    "Catering",
    "Photography",
    "Decoration",
    "Music & Entertainment",
    "Transportation",
    "Makeup & Beauty",
    "Flowers",
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Packages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000000}
            min={25000}
            step={5000}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Guest Count */}
        <div>
          <h3 className="font-semibold mb-3">Guest Count</h3>
          <Slider value={guestRange} onValueChange={setGuestRange} max={1000} min={25} step={25} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{guestRange[0]} guests</span>
            <span>{guestRange[1]} guests</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Included Services</h3>
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                />
                <label htmlFor={service} className="text-sm">
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => {
            setPriceRange([50000, 500000])
            setSelectedServices([])
            setGuestRange([50, 500])
          }}
        >
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
}
