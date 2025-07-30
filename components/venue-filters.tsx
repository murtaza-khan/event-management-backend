"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VenueFilters() {
  const [priceRange, setPriceRange] = useState([50000, 200000])

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
              max={500000}
              min={25000}
              step={5000}
              className="mt-2"
            />
          </div>

          {/* Capacity */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Capacity</Label>
            <div className="space-y-2">
              {["50-100", "100-200", "200-500", "500-1000", "1000+"].map((capacity) => (
                <div key={capacity} className="flex items-center space-x-2">
                  <Checkbox id={capacity} />
                  <Label htmlFor={capacity} className="text-sm">
                    {capacity} guests
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Type */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Venue Type</Label>
            <div className="space-y-2">
              {["Banquet Hall", "Marquee", "Garden", "Farmhouse", "Hotel", "Resort"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Amenities</Label>
            <div className="space-y-2">
              {["AC", "Parking", "Catering", "Decoration", "Sound System", "Bridal Room"].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={amenity} />
                  <Label htmlFor={amenity} className="text-sm">
                    {amenity}
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
