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
import { Upload, Building2, User, MapPin, Camera, Plus, Trash2, Package, Star } from "lucide-react"

interface CustomPackage {
  id: string
  name: string
  description: string
  price: string
  duration: string
  includes: string[]
  excludes: string[]
  validityPeriod: string
  maxBookings: string
  isPopular: boolean
}

export function BusinessSignupForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [customPackages, setCustomPackages] = useState<CustomPackage[]>([])
  const [showCustomPackageForm, setShowCustomPackageForm] = useState(false)
  const [formData, setFormData] = useState({
    // Business Information
    businessName: "",
    businessType: "",
    category: "",
    description: "",
    establishedYear: "",

    // Contact Information
    ownerName: "",
    email: "",
    phone: "",
    whatsapp: "",
    website: "",

    // Location
    address: "",
    city: "",
    area: "",

    // Services & Pricing
    services: "",

    // Dynamic pricing fields (will be populated based on category)
    // Venue fields
    perHeadPrice: "",
    venueRental: "",
    minGuests: "",
    maxGuests: "",
    decorationCharges: "",
    parkingCapacity: "",

    // Makeup fields
    bridalPackage: "",
    partyMakeup: "",
    engagementPackage: "",
    mehndiBridal: "",
    trialMakeup: "",
    airbrushMakeup: "",

    // Photography fields
    weddingPackage: "",
    preWeddingShoot: "",
    engagementCoverage: "",
    mehndiBarat: "",
    cinematography: "",
    albumPrinting: "",

    // Catering fields
    perPlateBasic: "",
    perPlatePremium: "",
    perPlateLuxury: "",
    liveCounters: "",
    dessertStation: "",
    serviceCharges: "",

    // Decoration fields
    stageDecoration: "",
    hallDecoration: "",
    flowerDecoration: "",
    lightingPackage: "",
    backdropRental: "",

    // Music fields
    djServices: "",
    liveMusic: "",
    soundSystem: "",
    lightingEffects: "",
    equipmentRental: "",

    // General fields
    basicPackage: "",
    premiumPackage: "",
    luxuryPackage: "",
    customization: "",

    // Offers & Terms
    earlyBirdDiscount: "",
    seasonalOffer: "",
    packageDeal: "",
    minimumBooking: "",
    advancePayment: "",
    cancellationPolicy: "",

    // Documents & Media
    businessLicense: null,
    portfolio: [],

    // Terms
    agreeToTerms: false,
    agreeToMarketing: false,
  })

  const [newPackage, setNewPackage] = useState<CustomPackage>({
    id: "",
    name: "",
    description: "",
    price: "",
    duration: "",
    includes: [""],
    excludes: [""],
    validityPeriod: "",
    maxBookings: "",
    isPopular: false,
  })

  const handleNext = () => {
    if (currentStep < 4) {
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
    const finalData = {
      ...formData,
      customPackages: customPackages,
    }
    console.log("Form submitted:", finalData)
    // Handle form submission
  }

  // Custom Package Functions
  const addCustomPackage = () => {
    if (newPackage.name && newPackage.price) {
      const packageWithId = {
        ...newPackage,
        id: Date.now().toString(),
        includes: newPackage.includes.filter((item) => item.trim() !== ""),
        excludes: newPackage.excludes.filter((item) => item.trim() !== ""),
      }
      setCustomPackages([...customPackages, packageWithId])
      setNewPackage({
        id: "",
        name: "",
        description: "",
        price: "",
        duration: "",
        includes: [""],
        excludes: [""],
        validityPeriod: "",
        maxBookings: "",
        isPopular: false,
      })
      setShowCustomPackageForm(false)
    }
  }

  const removeCustomPackage = (id: string) => {
    setCustomPackages(customPackages.filter((pkg) => pkg.id !== id))
  }

  const addIncludeItem = () => {
    setNewPackage({
      ...newPackage,
      includes: [...newPackage.includes, ""],
    })
  }

  const addExcludeItem = () => {
    setNewPackage({
      ...newPackage,
      excludes: [...newPackage.excludes, ""],
    })
  }

  const updateIncludeItem = (index: number, value: string) => {
    const updatedIncludes = [...newPackage.includes]
    updatedIncludes[index] = value
    setNewPackage({ ...newPackage, includes: updatedIncludes })
  }

  const updateExcludeItem = (index: number, value: string) => {
    const updatedExcludes = [...newPackage.excludes]
    updatedExcludes[index] = value
    setNewPackage({ ...newPackage, excludes: updatedExcludes })
  }

  const removeIncludeItem = (index: number) => {
    setNewPackage({
      ...newPackage,
      includes: newPackage.includes.filter((_, i) => i !== index),
    })
  }

  const removeExcludeItem = (index: number) => {
    setNewPackage({
      ...newPackage,
      excludes: newPackage.excludes.filter((_, i) => i !== index),
    })
  }

  const getPackageSuggestions = (category: string) => {
    switch (category) {
      case "venue":
        return {
          suggestions: [
            "Complete venue decoration",
            "Bridal room access",
            "Parking for 200+ cars",
            "Sound system setup",
            "Stage and lighting",
            "Security services",
            "Catering kitchen access",
            "Generator backup",
            "Air conditioning",
            "Photography area setup",
          ],
          samplePackages: [
            { name: "Wedding Bliss Package", price: "₹1,50,000", duration: "Full Day" },
            { name: "Intimate Ceremony", price: "₹80,000", duration: "6 Hours" },
            { name: "Grand Celebration", price: "₹2,50,000", duration: "2 Days" },
          ],
        }
      case "makeup":
        return {
          suggestions: [
            "Bridal makeup trial",
            "HD makeup application",
            "Airbrush makeup",
            "Hair styling",
            "Saree draping",
            "Touch-up kit",
            "False eyelashes",
            "Makeup removal",
            "Photography makeup",
            "Family makeup (2 people)",
          ],
          samplePackages: [
            { name: "Bridal Glam Package", price: "₹35,000", duration: "Full Day" },
            { name: "Engagement Special", price: "₹18,000", duration: "4 Hours" },
            { name: "Mehndi Makeover", price: "₹15,000", duration: "3 Hours" },
          ],
        }
      case "photography":
        return {
          suggestions: [
            "Pre-wedding photoshoot",
            "Ceremony coverage",
            "Reception photography",
            "Candid photography",
            "Traditional portraits",
            "Drone photography",
            "Video highlights",
            "Photo album (50 pages)",
            "Digital gallery access",
            "Raw photo backup",
          ],
          samplePackages: [
            { name: "Complete Wedding Story", price: "₹1,20,000", duration: "3 Days" },
            { name: "Single Day Coverage", price: "₹60,000", duration: "12 Hours" },
            { name: "Pre-Wedding Special", price: "₹35,000", duration: "4 Hours" },
          ],
        }
      case "catering":
        return {
          suggestions: [
            "Welcome drinks",
            "Starter selection (5 items)",
            "Main course (8 dishes)",
            "Dessert counter",
            "Live cooking stations",
            "Beverage service",
            "Waiter service",
            "Crockery and cutlery",
            "Table setup",
            "Cleanup service",
          ],
          samplePackages: [
            { name: "Royal Feast", price: "₹2,500/plate", duration: "Per Event" },
            { name: "Traditional Spread", price: "₹1,800/plate", duration: "Per Event" },
            { name: "Continental Delight", price: "₹2,200/plate", duration: "Per Event" },
          ],
        }
      case "decoration":
        return {
          suggestions: [
            "Stage backdrop design",
            "Floral arrangements",
            "Lighting setup",
            "Entrance decoration",
            "Table centerpieces",
            "Ceiling draping",
            "Photo booth setup",
            "Mandap decoration",
            "Aisle decoration",
            "Cleanup after event",
          ],
          samplePackages: [
            { name: "Royal Elegance", price: "₹1,80,000", duration: "Setup + Event" },
            { name: "Floral Paradise", price: "₹1,20,000", duration: "Setup + Event" },
            { name: "Modern Chic", price: "₹95,000", duration: "Setup + Event" },
          ],
        }
      case "music":
        return {
          suggestions: [
            "DJ services (8 hours)",
            "Sound system setup",
            "Wireless microphones",
            "Dance floor lighting",
            "Music playlist curation",
            "Live announcements",
            "Special effects",
            "Backup equipment",
            "Setup and breakdown",
            "Coordinator on-site",
          ],
          samplePackages: [
            { name: "Party Night Package", price: "₹45,000", duration: "8 Hours" },
            { name: "Mehndi Beats", price: "₹25,000", duration: "4 Hours" },
            { name: "Wedding Celebration", price: "₹65,000", duration: "12 Hours" },
          ],
        }
      default:
        return {
          suggestions: [
            "Basic service included",
            "Premium add-ons available",
            "Customer support",
            "Quality guarantee",
            "Timely delivery",
          ],
          samplePackages: [
            { name: "Standard Package", price: "₹25,000", duration: "As Required" },
            { name: "Premium Package", price: "₹45,000", duration: "As Required" },
          ],
        }
    }
  }

  // Add this helper function at the top of the component
  const getPricingFields = (category: string) => {
    switch (category) {
      case "venue":
        return {
          title: "Venue Pricing & Capacity",
          fields: [
            { key: "perHeadPrice", label: "Price per Head", type: "number", placeholder: "₹1,200", required: true },
            {
              key: "venueRental",
              label: "Venue Rental (Base)",
              type: "number",
              placeholder: "₹50,000",
              required: true,
            },
            { key: "minGuests", label: "Minimum Guests", type: "number", placeholder: "100", required: true },
            { key: "maxGuests", label: "Maximum Guests", type: "number", placeholder: "1000", required: true },
            { key: "decorationCharges", label: "Decoration Charges", type: "number", placeholder: "₹25,000" },
            { key: "parkingCapacity", label: "Parking Capacity", type: "number", placeholder: "200 cars" },
          ],
        }
      case "makeup":
        return {
          title: "Makeup Packages",
          fields: [
            {
              key: "bridalPackage",
              label: "Bridal Makeup Package",
              type: "number",
              placeholder: "₹25,000",
              required: true,
            },
            { key: "partyMakeup", label: "Party Makeup", type: "number", placeholder: "₹8,000" },
            { key: "engagementPackage", label: "Engagement Package", type: "number", placeholder: "₹15,000" },
            { key: "mehndiBridal", label: "Mehndi Bridal", type: "number", placeholder: "₹12,000" },
            { key: "trialMakeup", label: "Trial Makeup", type: "number", placeholder: "₹3,000" },
            { key: "airbrushMakeup", label: "Airbrush Makeup (Additional)", type: "number", placeholder: "₹5,000" },
          ],
        }
      case "photography":
        return {
          title: "Photography Packages",
          fields: [
            {
              key: "weddingPackage",
              label: "Complete Wedding Package",
              type: "number",
              placeholder: "₹80,000",
              required: true,
            },
            { key: "preWeddingShoot", label: "Pre-Wedding Shoot", type: "number", placeholder: "₹25,000" },
            { key: "engagementCoverage", label: "Engagement Coverage", type: "number", placeholder: "₹35,000" },
            { key: "mehndiBarat", label: "Mehndi/Barat Coverage", type: "number", placeholder: "₹45,000" },
            { key: "cinematography", label: "Cinematography (Additional)", type: "number", placeholder: "₹30,000" },
            { key: "albumPrinting", label: "Album Printing", type: "number", placeholder: "₹15,000" },
          ],
        }
      case "catering":
        return {
          title: "Catering Packages",
          fields: [
            {
              key: "perPlateBasic",
              label: "Basic Menu (per plate)",
              type: "number",
              placeholder: "₹800",
              required: true,
            },
            { key: "perPlatePremium", label: "Premium Menu (per plate)", type: "number", placeholder: "₹1,500" },
            { key: "perPlateLuxury", label: "Luxury Menu (per plate)", type: "number", placeholder: "₹2,500" },
            { key: "liveCounters", label: "Live Counters (per counter)", type: "number", placeholder: "₹8,000" },
            { key: "dessertStation", label: "Dessert Station", type: "number", placeholder: "₹12,000" },
            { key: "serviceCharges", label: "Service Charges (%)", type: "number", placeholder: "15" },
          ],
        }
      case "decoration":
        return {
          title: "Decoration Packages",
          fields: [
            {
              key: "stageDecoration",
              label: "Stage Decoration",
              type: "number",
              placeholder: "₹35,000",
              required: true,
            },
            { key: "hallDecoration", label: "Complete Hall Decoration", type: "number", placeholder: "₹80,000" },
            { key: "mehndiBarat", label: "Mehndi/Barat Setup", type: "number", placeholder: "₹45,000" },
            { key: "flowerDecoration", label: "Fresh Flower Decoration", type: "number", placeholder: "₹25,000" },
            { key: "lightingPackage", label: "Lighting Package", type: "number", placeholder: "₹20,000" },
            { key: "backdropRental", label: "Backdrop Rental", type: "number", placeholder: "₹8,000" },
          ],
        }
      case "music":
        return {
          title: "Music & Entertainment Packages",
          fields: [
            {
              key: "djServices",
              label: "DJ Services (per event)",
              type: "number",
              placeholder: "₹25,000",
              required: true,
            },
            { key: "liveMusic", label: "Live Music Band", type: "number", placeholder: "₹50,000" },
            { key: "soundSystem", label: "Sound System Rental", type: "number", placeholder: "₹15,000" },
            { key: "lightingEffects", label: "Lighting Effects", type: "number", placeholder: "₹20,000" },
            { key: "mehndiBarat", label: "Mehndi/Barat Entertainment", type: "number", placeholder: "₹35,000" },
            { key: "equipmentRental", label: "Equipment Rental (per day)", type: "number", placeholder: "₹8,000" },
          ],
        }
      default:
        return {
          title: "Service Pricing",
          fields: [
            { key: "basicPackage", label: "Basic Package", type: "number", placeholder: "₹15,000", required: true },
            { key: "premiumPackage", label: "Premium Package", type: "number", placeholder: "₹35,000" },
            { key: "luxuryPackage", label: "Luxury Package", type: "number", placeholder: "₹60,000" },
            { key: "customization", label: "Customization Charges", type: "number", placeholder: "₹5,000" },
          ],
        }
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Building2 className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Business Information</h3>
              <p className="text-gray-600">Tell us about your business</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Enter your business name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="businessType">Business Type *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual/Freelancer</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="company">Private Limited Company</SelectItem>
                    <SelectItem value="llc">LLC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venue">Wedding Venue</SelectItem>
                    <SelectItem value="makeup">Makeup Artist</SelectItem>
                    <SelectItem value="catering">Catering Service</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="decoration">Decoration</SelectItem>
                    <SelectItem value="music">Music & Entertainment</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="establishedYear">Established Year</Label>
                <Input
                  id="establishedYear"
                  type="number"
                  min="1950"
                  max="2024"
                  value={formData.establishedYear}
                  onChange={(e) => setFormData({ ...formData, establishedYear: e.target.value })}
                  placeholder="e.g., 2015"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Business Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your business, services, and what makes you unique..."
                rows={4}
                required
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-gray-600">How can customers reach you?</p>
            </div>

            <div>
              <Label htmlFor="ownerName">Owner/Manager Name *</Label>
              <Input
                id="ownerName"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="business@example.com"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+92 300 1234567"
                />
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://www.yourbusiness.com"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        const pricingConfig = getPricingFields(formData.category)
        const packageSuggestions = getPackageSuggestions(formData.category)

        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <MapPin className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Location & Pricing</h3>
              <p className="text-gray-600">Where do you operate and what are your rates?</p>
            </div>

            <div>
              <Label htmlFor="address">Complete Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter your complete business address"
                rows={2}
                required
              />
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
                <Label htmlFor="area">Area/Locality</Label>
                <Input
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="e.g., DHA Phase 5, Gulberg"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="services">Services Offered *</Label>
              <Textarea
                id="services"
                value={formData.services}
                onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                placeholder="List all services you provide..."
                rows={3}
                required
              />
            </div>

            {/* Dynamic Pricing Section */}
            {formData.category && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{pricingConfig.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pricingConfig.fields.map((field) => (
                    <div key={field.key}>
                      <Label htmlFor={field.key}>
                        {field.label} {field.required && "*"}
                      </Label>
                      <Input
                        id={field.key}
                        type={field.type}
                        value={formData[field.key] || ""}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Packages Section */}
            {formData.category && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-purple-600" />
                    Custom Packages & Offers
                  </h4>
                  <Button
                    type="button"
                    onClick={() => setShowCustomPackageForm(true)}
                    className="bg-purple-600 hover:bg-purple-700"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Package
                  </Button>
                </div>

                {/* Sample Package Ideas */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">💡 Popular package ideas for {formData.category}:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {packageSuggestions.samplePackages.map((sample, index) => (
                      <div key={index} className="bg-white p-3 rounded border text-sm">
                        <div className="font-medium text-purple-700">{sample.name}</div>
                        <div className="text-gray-600">
                          {sample.price} • {sample.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Existing Custom Packages */}
                {customPackages.length > 0 && (
                  <div className="space-y-3 mb-4">
                    <h5 className="font-medium text-gray-900">Your Custom Packages:</h5>
                    {customPackages.map((pkg) => (
                      <div key={pkg.id} className="bg-white p-4 rounded-lg border">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h6 className="font-semibold text-gray-900">{pkg.name}</h6>
                              {pkg.isPopular && (
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                                  <Star className="w-3 h-3 mr-1" />
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="font-medium text-purple-600">{pkg.price}</span>
                              <span className="text-gray-500">Duration: {pkg.duration}</span>
                              {pkg.maxBookings && (
                                <span className="text-gray-500">Max: {pkg.maxBookings} bookings</span>
                              )}
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCustomPackage(pkg.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Custom Package Form */}
                {showCustomPackageForm && (
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-900 mb-4">Create Custom Package</h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="packageName">Package Name *</Label>
                        <Input
                          id="packageName"
                          value={newPackage.name}
                          onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                          placeholder="e.g., Wedding Bliss Package"
                        />
                      </div>
                      <div>
                        <Label htmlFor="packagePrice">Price *</Label>
                        <Input
                          id="packagePrice"
                          value={newPackage.price}
                          onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                          placeholder="₹50,000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="packageDuration">Duration/Validity</Label>
                        <Input
                          id="packageDuration"
                          value={newPackage.duration}
                          onChange={(e) => setNewPackage({ ...newPackage, duration: e.target.value })}
                          placeholder="e.g., Full Day, 6 Hours, 1 Month"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maxBookings">Max Bookings (Optional)</Label>
                        <Input
                          id="maxBookings"
                          value={newPackage.maxBookings}
                          onChange={(e) => setNewPackage({ ...newPackage, maxBookings: e.target.value })}
                          placeholder="e.g., 10 per month"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Label htmlFor="packageDescription">Package Description</Label>
                      <Textarea
                        id="packageDescription"
                        value={newPackage.description}
                        onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                        placeholder="Describe what's included in this package..."
                        rows={2}
                      />
                    </div>

                    {/* What's Included */}
                    <div className="mb-4">
                      <Label className="mb-2 block">What's Included</Label>
                      <div className="space-y-2">
                        {newPackage.includes.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              value={item}
                              onChange={(e) => updateIncludeItem(index, e.target.value)}
                              placeholder="e.g., Professional makeup application"
                              className="flex-1"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeIncludeItem(index)}
                              className="text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addIncludeItem}
                          className="w-full bg-transparent"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Item
                        </Button>
                      </div>

                      {/* Quick Add Suggestions */}
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 mb-1">Quick add suggestions:</p>
                        <div className="flex flex-wrap gap-1">
                          {packageSuggestions.suggestions.slice(0, 5).map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                const emptyIndex = newPackage.includes.findIndex((item) => item === "")
                                if (emptyIndex !== -1) {
                                  updateIncludeItem(emptyIndex, suggestion)
                                } else {
                                  setNewPackage({
                                    ...newPackage,
                                    includes: [...newPackage.includes, suggestion],
                                  })
                                }
                              }}
                              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
                            >
                              + {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* What's Not Included */}
                    <div className="mb-4">
                      <Label className="mb-2 block">What's Not Included (Optional)</Label>
                      <div className="space-y-2">
                        {newPackage.excludes.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              value={item}
                              onChange={(e) => updateExcludeItem(index, e.target.value)}
                              placeholder="e.g., Transportation costs"
                              className="flex-1"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeExcludeItem(index)}
                              className="text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addExcludeItem}
                          className="w-full bg-transparent"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Exclusion
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 mb-4">
                      <Checkbox
                        id="isPopular"
                        checked={newPackage.isPopular}
                        onCheckedChange={(checked) => setNewPackage({ ...newPackage, isPopular: checked as boolean })}
                      />
                      <Label htmlFor="isPopular" className="text-sm">
                        Mark as "Popular" package (will be highlighted to customers)
                      </Label>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setShowCustomPackageForm(false)}>
                        Cancel
                      </Button>
                      <Button type="button" onClick={addCustomPackage} className="bg-purple-600 hover:bg-purple-700">
                        Add Package
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Special Offers Section */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-pink-600 text-white px-2 py-1 rounded text-sm mr-2">OFFERS</span>
                Special Deals & Discounts
              </h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="earlyBirdDiscount">Early Bird Discount (%)</Label>
                  <Input
                    id="earlyBirdDiscount"
                    type="number"
                    value={formData.earlyBirdDiscount || ""}
                    onChange={(e) => setFormData({ ...formData, earlyBirdDiscount: e.target.value })}
                    placeholder="e.g., 15% for bookings 3 months in advance"
                  />
                </div>
                <div>
                  <Label htmlFor="seasonalOffer">Seasonal Offer</Label>
                  <Input
                    id="seasonalOffer"
                    value={formData.seasonalOffer || ""}
                    onChange={(e) => setFormData({ ...formData, seasonalOffer: e.target.value })}
                    placeholder="e.g., 20% off during summer season"
                  />
                </div>
                <div>
                  <Label htmlFor="packageDeal">Package Deal</Label>
                  <Input
                    id="packageDeal"
                    value={formData.packageDeal || ""}
                    onChange={(e) => setFormData({ ...formData, packageDeal: e.target.value })}
                    placeholder="e.g., Book 3 services get 10% off total"
                  />
                </div>
                <div>
                  <Label htmlFor="minimumBooking">Minimum Booking Amount</Label>
                  <Input
                    id="minimumBooking"
                    type="number"
                    value={formData.minimumBooking || ""}
                    onChange={(e) => setFormData({ ...formData, minimumBooking: e.target.value })}
                    placeholder="₹10,000"
                  />
                </div>
              </div>
            </div>

            {/* Additional Terms */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Booking Terms</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="advancePayment">Advance Payment (%)</Label>
                  <Input
                    id="advancePayment"
                    type="number"
                    value={formData.advancePayment || ""}
                    onChange={(e) => setFormData({ ...formData, advancePayment: e.target.value })}
                    placeholder="50"
                  />
                </div>
                <div>
                  <Label htmlFor="cancellationPolicy">Cancellation Policy</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, cancellationPolicy: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexible">Flexible - Free cancellation 48hrs before</SelectItem>
                      <SelectItem value="moderate">Moderate - Free cancellation 7 days before</SelectItem>
                      <SelectItem value="strict">Strict - Free cancellation 30 days before</SelectItem>
                      <SelectItem value="no-refund">No Refund</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Camera className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Documents & Portfolio</h3>
              <p className="text-gray-600">Upload your business documents and showcase your work</p>
            </div>

            <div>
              <Label>Business License/Registration</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload business license or registration document</p>
                <Button variant="outline" size="sm">
                  Choose File
                </Button>
              </div>
            </div>

            <div>
              <Label>Portfolio Images</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload up to 10 images showcasing your work</p>
                <Button variant="outline" size="sm">
                  Choose Images
                </Button>
              </div>
            </div>

            {/* Custom Packages Summary */}
            {customPackages.length > 0 && (
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Package Summary</h4>
                <p className="text-sm text-gray-600 mb-3">
                  You've created {customPackages.length} custom package{customPackages.length > 1 ? "s" : ""}:
                </p>
                <div className="space-y-2">
                  {customPackages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center justify-between bg-white p-3 rounded">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{pkg.name}</span>
                        {pkg.isPopular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Popular</span>
                        )}
                      </div>
                      <span className="text-purple-600 font-medium">{pkg.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4 pt-4 border-t">
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
                  and
                  <a href="/privacy" className="text-pink-600 hover:underline ml-1">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketing"
                  checked={formData.agreeToMarketing}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToMarketing: checked as boolean })}
                />
                <Label htmlFor="marketing" className="text-sm leading-relaxed">
                  I agree to receive marketing communications and business tips from ShaadiDesk
                </Label>
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
          <span>Business Registration</span>
          <span className="text-sm font-normal text-gray-600">Step {currentStep} of 4</span>
        </CardTitle>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
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

            {currentStep < 4 ? (
              <Button type="button" onClick={handleNext} className="bg-pink-600 hover:bg-pink-700">
                Next Step
              </Button>
            ) : (
              <Button type="submit" className="bg-pink-600 hover:bg-pink-700" disabled={!formData.agreeToTerms}>
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
