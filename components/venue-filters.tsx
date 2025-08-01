"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function VenueFilters() {
  const [priceRange, setPriceRange] = useState([1000, 10000])
  const [capacity, setCapacity] = useState([50, 500])

  return (
    <Card className="p-4 shadow-md">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold text-gray-900">Filters</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-6">
        {/* Search */}
        <div>
          <Label htmlFor="search" className="text-lg font-semibold mb-2 block">
            Search
          </Label>
          <Input id="search" placeholder="Search venues..." />
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label htmlFor="price-range" className="text-lg font-semibold mb-4 block">
            Price Range
          </Label>
          <Slider
            id="price-range"
            min={500}
            max={15000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
            range
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <Separator />

        {/* Guest Capacity */}
        <div>
          <Label htmlFor="capacity" className="text-lg font-semibold mb-4 block">
            Guest Capacity
          </Label>
          <Slider
            id="capacity"
            min={10}
            max={1000}
            step={10}
            value={capacity}
            onValueChange={setCapacity}
            range
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{capacity[0]} guests</span>
            <span>{capacity[1]} guests</span>
          </div>
        </div>

        <Separator />

        {/* Venue Type */}
        <div>
          <Label className="text-lg font-semibold mb-3 block">Venue Type</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="ballroom" />
              <Label htmlFor="ballroom">Ballroom</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="garden" />
              <Label htmlFor="garden">Garden</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="farmhouse" />
              <Label htmlFor="farmhouse">Farmhouse</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="resort" />
              <Label htmlFor="resort">Resort</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="convention" />
              <Label htmlFor="convention">Convention Center</Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Amenities */}
        <div>
          <Label className="text-lg font-semibold mb-3 block">Amenities</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="parking" />
              <Label htmlFor="parking">Parking</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="catering-service" />
              <Label htmlFor="catering-service">In-house Catering</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="decorations" />
              <Label htmlFor="decorations">Decorations</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ac" />
              <Label htmlFor="ac">Air Conditioning</Label>
            </div>
          </div>
        </div>

        <Button className="w-full bg-pink-600 hover:bg-pink-700 mt-6">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
