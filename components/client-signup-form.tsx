"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Calendar, Heart, Shield } from "lucide-react"

export function ClientSignupForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // Event Information
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    city: "",
    area: "",

    // Preferences
    interests: [] as string[],
    communicationPreference: "",
    specialRequirements: "",

    // Terms
    agreeToTerms: false,
    agreeToMarketing: false,
    agreeToOffers: false,
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Client signup data:", formData)
    // Handle form submission
  }

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest],
    })
  }

  const interests = [
    "Wedding Venues",
    "Makeup Artists",
    "Photography",
    "Catering",
    "Decoration",
    "Music & Entertainment",
    "Transportation",
    "Wedding Favors",
    "Bridal Wear",
    "Groom Wear",
  ]

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <p className="text-gray-600">Let's get to know you better</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 8 characters with letters and numbers</p>
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Event Information</h3>
              <p className="text-gray-600">Tell us about your upcoming event</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="mehndi">Mehndi</SelectItem>
                    <SelectItem value="reception">Reception</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="eventDate">Expected Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guestCount">Expected Guest Count</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, guestCount: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 guests</SelectItem>
                    <SelectItem value="100-200">100-200 guests</SelectItem>
                    <SelectItem value="200-500">200-500 guests</SelectItem>
                    <SelectItem value="500-1000">500-1000 guests</SelectItem>
                    <SelectItem value="1000+">1000+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5lac">Under ₹5 Lakh</SelectItem>
                    <SelectItem value="5-10lac">₹5-10 Lakh</SelectItem>
                    <SelectItem value="10-20lac">₹10-20 Lakh</SelectItem>
                    <SelectItem value="20-50lac">₹20-50 Lakh</SelectItem>
                    <SelectItem value="above-50lac">Above ₹50 Lakh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, city: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    <SelectItem value="multan">Multan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="area">Preferred Area</Label>
                <Input
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="e.g., DHA, Gulberg, Clifton"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                placeholder="Any specific requirements or preferences for your event..."
                rows={3}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Preferences & Interests</h3>
              <p className="text-gray-600">Help us personalize your experience</p>
            </div>

            <div>
              <Label className="mb-3 block">What services are you interested in? (Select all that apply)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label htmlFor={interest} className="text-sm">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="communicationPreference">Preferred Communication Method</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, communicationPreference: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="How would you like us to contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h4 className="font-semibold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Terms & Preferences
              </h4>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms" className="text-pink-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-pink-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="marketing"
                    checked={formData.agreeToMarketing}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToMarketing: checked as boolean })}
                  />
                  <Label htmlFor="marketing" className="text-sm leading-relaxed">
                    I want to receive event planning tips, vendor recommendations, and platform updates via email
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="offers"
                    checked={formData.agreeToOffers}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToOffers: checked as boolean })}
                  />
                  <Label htmlFor="offers" className="text-sm leading-relaxed">
                    I want to receive exclusive offers, discounts, and promotional deals from vendors
                  </Label>
                </div>
              </div>
            </div>

            {/* Account Benefits Preview */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-gray-900 mb-3">🎉 Your Account Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Personalized vendor recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Exclusive member discounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Priority booking support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Event planning dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Wishlist & favorites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span>Review & rating system</span>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Create Your Account</span>
          <span className="text-sm font-normal text-gray-600">Step {currentStep} of 3</span>
        </CardTitle>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
              Previous
            </Button>

            {currentStep < 3 ? (
              <Button type="button" onClick={handleNext} className="bg-pink-600 hover:bg-pink-700">
                Next Step
              </Button>
            ) : (
              <Button type="submit" className="bg-pink-600 hover:bg-pink-700" disabled={!formData.agreeToTerms}>
                Create Account
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
