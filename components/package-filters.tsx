"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PackageFilters() {
  const [priceRange, setPriceRange] = useState([200000, 1000000])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Location */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Location</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div>
            <Label className="text-sm font-medium mb-2 block">
              Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={2000000}
              min={100000}
              step={50000}
              className="mt-2"
            />
          </div>

          {/* Package Type */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Package Type</Label>
            <div className="space-y-2">
              {["Basic", "Premium", "Luxury", "Royal"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Count */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Guest Count</Label>
            <div className="space-y-2">
              {["100-200", "200-400", "400-600", "600-1000", "1000+"].map((count) => (
                <div key={count} className="flex items-center space-x-2">
                  <Checkbox id={count} />
                  <Label htmlFor={count} className="text-sm">
                    {count} guests
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Services Included */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Services Included</Label>
            <div className="space-y-2">
              {[
                "Venue",
                "Photography",
                "Catering",
                "Decoration",
                "Music & DJ",
                "Transportation",
                "Makeup Artist",
                "Wedding Favors",
              ].map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox id={service} />
                  <Label htmlFor={service} className="text-sm">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Event Duration */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Event Duration</Label>
            <div className="space-y-2">
              {["Single Day", "2 Days", "3 Days", "Full Week"].map((duration) => (
                <div key={duration} className="flex items-center space-x-2">
                  <Checkbox id={duration} />
                  <Label htmlFor={duration} className="text-sm">
                    {duration}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-pink-600 hover:bg-pink-700">Apply Filters</Button>
        </CardContent>
      </Card>
    </div>
  )
}
