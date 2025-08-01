"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function PackageFilters() {
  const [priceRange, setPriceRange] = useState([100000, 2000000])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const packageTypes = ["Basic", "Premium", "Luxury", "Royal"]
  const services = [
    "Photography",
    "Videography",
    "Catering",
    "Decoration",
    "Music & DJ",
    "Transportation",
    "Makeup",
    "Event Planning",
  ]
  const locations = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"]

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    }
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    }
  }

  const clearAllFilters = () => {
    setPriceRange([100000, 2000000])
    setSelectedTypes([])
    setSelectedServices([])
    setSelectedLocations([])
  }

  const activeFiltersCount = selectedTypes.length + selectedServices.length + selectedLocations.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All ({activeFiltersCount})
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTypes.map((type) => (
              <Badge key={type} variant="secondary" className="flex items-center gap-1">
                {type}
                <X className="w-3 h-3 cursor-pointer" onClick={() => handleTypeChange(type, false)} />
              </Badge>
            ))}
            {selectedServices.map((service) => (
              <Badge key={service} variant="secondary" className="flex items-center gap-1">
                {service}
                <X className="w-3 h-3 cursor-pointer" onClick={() => handleServiceChange(service, false)} />
              </Badge>
            ))}
            {selectedLocations.map((location) => (
              <Badge key={location} variant="secondary" className="flex items-center gap-1">
                {location}
                <X className="w-3 h-3 cursor-pointer" onClick={() => handleLocationChange(location, false)} />
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={2000000}
            min={100000}
            step={50000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Package Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Package Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {packageTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={selectedTypes.includes(type)}
                onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
              />
              <Label htmlFor={type} className="text-sm font-normal">
                {type}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Services Included</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={service}
                checked={selectedServices.includes(service)}
                onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
              />
              <Label htmlFor={service} className="text-sm font-normal">
                {service}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox
                id={location}
                checked={selectedLocations.includes(location)}
                onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
              />
              <Label htmlFor={location} className="text-sm font-normal">
                {location}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Guest Count */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Guest Count</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {["50-100", "100-200", "200-400", "400-600", "600+"].map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <Checkbox id={range} />
              <Label htmlFor={range} className="text-sm font-normal">
                {range} guests
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {["Single Day", "2 Days", "3 Days", "4+ Days"].map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox id={duration} />
              <Label htmlFor={duration} className="text-sm font-normal">
                {duration}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
