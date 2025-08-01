"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PackageFilters() {
  const [priceRange, setPriceRange] = useState([5000, 50000])
  const [guestCapacity, setGuestCapacity] = useState([50, 500])
  const [duration, setDuration] = useState("full-day")

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
          <Input id="search" placeholder="Search packages..." />
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label htmlFor="price-range" className="text-lg font-semibold mb-4 block">
            Price Range
          </Label>
          <Slider
            id="price-range"
            min={1000}
            max={100000}
            step={1000}
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
          <Label htmlFor="guest-capacity" className="text-lg font-semibold mb-4 block">
            Guest Capacity
          </Label>
          <Slider
            id="guest-capacity"
            min={10}
            max={1000}
            step={10}
            value={guestCapacity}
            onValueChange={setGuestCapacity}
            range
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{guestCapacity[0]} guests</span>
            <span>{guestCapacity[1]} guests</span>
          </div>
        </div>

        <Separator />

        {/* Package Type */}
        <div>
          <Label className="text-lg font-semibold mb-3 block">Package Type</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="luxury" />
              <Label htmlFor="luxury">Luxury</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="premium" />
              <Label htmlFor="premium">Premium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="standard" />
              <Label htmlFor="standard">Standard</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="essential" />
              <Label htmlFor="essential">Essential</Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Included Services */}
        <div>
          <Label className="text-lg font-semibold mb-3 block">Included Services</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="venue" />
              <Label htmlFor="venue">Venue</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="catering" />
              <Label htmlFor="catering">Catering</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="photography" />
              <Label htmlFor="photography">Photography</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="decoration" />
              <Label htmlFor="decoration">Decoration</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="makeup" />
              <Label htmlFor="makeup">Makeup Artist</Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Event Duration */}
        <div>
          <Label htmlFor="duration" className="text-lg font-semibold mb-3 block">
            Event Duration
          </Label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-day">Full Day</SelectItem>
              <SelectItem value="half-day">Half Day</SelectItem>
              <SelectItem value="multi-day">Multi-Day</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-pink-600 hover:bg-pink-700 mt-6">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
