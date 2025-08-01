"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function VendorFilters() {
  const [priceRange, setPriceRange] = useState([100, 5000])
  const [rating, setRating] = useState(3)

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
          <Input id="search" placeholder="Search vendors..." />
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label htmlFor="price-range" className="text-lg font-semibold mb-4 block">
            Price Range
          </Label>
          <Slider
            id="price-range"
            min={50}
            max={10000}
            step={50}
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

        {/* Rating */}
        <div>
          <Label htmlFor="rating" className="text-lg font-semibold mb-4 block">
            Minimum Rating
          </Label>
          <Slider
            id="rating"
            min={1}
            max={5}
            step={1}
            value={[rating]}
            onValueChange={(val) => setRating(val[0])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{rating} Stars & Up</span>
          </div>
        </div>

        <Separator />

        {/* Service Type (example, can be dynamic based on page) */}
        <div>
          <Label className="text-lg font-semibold mb-3 block">Service Options</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="bridal-makeup" />
              <Label htmlFor="bridal-makeup">Bridal Makeup</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="event-photography" />
              <Label htmlFor="event-photography">Event Photography</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="full-catering" />
              <Label htmlFor="full-catering">Full Catering Service</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="stage-decor" />
              <Label htmlFor="stage-decor">Stage Decoration</Label>
            </div>
          </div>
        </div>

        <Button className="w-full bg-pink-600 hover:bg-pink-700 mt-6">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
