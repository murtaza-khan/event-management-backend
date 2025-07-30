"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VendorFiltersProps {
  type: "makeup" | "catering" | "photography"
}

export function VendorFilters({ type }: VendorFiltersProps) {
  const [priceRange, setPriceRange] = useState([5000, 50000])

  const getSpecializations = () => {
    switch (type) {
      case "makeup":
        return ["Bridal Makeup", "Party Makeup", "Traditional", "Modern", "HD Makeup", "Airbrush"]
      case "catering":
        return ["Pakistani", "Continental", "Chinese", "BBQ", "Desserts", "Live Counters"]
      case "photography":
        return ["Wedding", "Pre-Wedding", "Engagement", "Mehndi", "Baraat", "Reception"]
      default:
        return []
    }
  }

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
              max={100000}
              min={2000}
              step={1000}
              className="mt-2"
            />
          </div>

          {/* Experience */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Experience</Label>
            <div className="space-y-2">
              {["1-2 years", "3-5 years", "5-10 years", "10+ years"].map((exp) => (
                <div key={exp} className="flex items-center space-x-2">
                  <Checkbox id={exp} />
                  <Label htmlFor={exp} className="text-sm">
                    {exp}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Specializations</Label>
            <div className="space-y-2">
              {getSpecializations().map((spec) => (
                <div key={spec} className="flex items-center space-x-2">
                  <Checkbox id={spec} />
                  <Label htmlFor={spec} className="text-sm">
                    {spec}
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
