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
import { Upload, Building2, User, MapPin, Camera, Plus, Trash2, Package, Star, IndianRupee } from "lucide-react"

interface PriceTier {
  id: string
  price: string
  description: string
  includes: string[]
}

interface CustomPackage {
  id: string
  name: string
  description: string
  priceTiers: PriceTier[]
  duration: string
  validityPeriod: string
  maxBookings: string
  isPopular: boolean
}

interface FormDataState {
  // Authentication fields
  email: string;
  password: string;
  confirmPassword: string;
  
  // Business Information
  businessName: string;
  businessType: string;
  category: string;
  description: string;
  establishedYear: string | null;

  // Contact Information
  ownerName: string;
  phone: string;
  whatsapp: string | null;
  website: string | null;

  // Location
  address: string;
  city: string;
  area: string | null;

  // Services & Pricing
  services: string;

  // Dynamic pricing fields
  perHeadPrice: string | null;
  venueRental: string | null;
  minGuests: string | null;
  maxGuests: string | null;
  decorationCharges: string | null;
  parkingCapacity: string | null;
  bridalPackage: string | null;
  partyMakeup: string | null;
  engagementPackage: string | null;
  mehndiBridal: string | null;
  trialMakeup: string | null;
  airbrushMakeup: string | null;
  weddingPackage: string | null;
  preWeddingShoot: string | null;
  engagementCoverage: string | null;
  mehndiBarat: string | null;
  cinematography: string | null;
  albumPrinting: string | null;
  perPlateBasic: string | null;
  perPlatePremium: string | null;
  perPlateLuxury: string | null;
  liveCounters: string | null;
  dessertStation: string | null;
  serviceCharges: string | null;
  stageDecoration: string | null;
  hallDecoration: string | null;
  flowerDecoration: string | null;
  lightingPackage: string | null;
  backdropRental: string | null;
  djServices: string | null;
  liveMusic: string | null;
  soundSystem: string | null;
  lightingEffects: string | null;
  equipmentRental: string | null;
  basicPackage: string | null;
  premiumPackage: string | null;
  luxuryPackage: string | null;
  customization: string | null;

  // Offers & Terms
  earlyBirdDiscount: string | null;
  seasonalOffer: string | null;
  packageDeal: string | null;
  minimumBooking: string | null;
  advancePayment: string | null;
  cancellationPolicy: string;

  // Documents & Media
  businessLicense: any;
  portfolio: any[];

  // Terms
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

export function BusinessSignupForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [customPackages, setCustomPackages] = useState<CustomPackage[]>([])
  const [showCustomPackageForm, setShowCustomPackageForm] = useState(false)
  
  const [formData, setFormData] = useState<FormDataState>({
    // Authentication fields
    email: "",
    password: "",
    confirmPassword: "",
    
    // Business Information
    businessName: "",
    businessType: "",
    category: "",
    description: "",
    establishedYear: null,

    // Contact Information
    ownerName: "",
    phone: "",
    whatsapp: null,
    website: null,

    // Location
    address: "",
    city: "",
    area: null,

    // Services & Pricing
    services: "",

    // Dynamic pricing fields
    perHeadPrice: null,
    venueRental: null,
    minGuests: null,
    maxGuests: null,
    decorationCharges: null,
    parkingCapacity: null,
    bridalPackage: null,
    partyMakeup: null,
    engagementPackage: null,
    mehndiBridal: null,
    trialMakeup: null,
    airbrushMakeup: null,
    weddingPackage: null,
    preWeddingShoot: null,
    engagementCoverage: null,
    mehndiBarat: null,
    cinematography: null,
    albumPrinting: null,
    perPlateBasic: null,
    perPlatePremium: null,
    perPlateLuxury: null,
    liveCounters: null,
    dessertStation: null,
    serviceCharges: null,
    stageDecoration: null,
    hallDecoration: null,
    flowerDecoration: null,
    lightingPackage: null,
    backdropRental: null,
    djServices: null,
    liveMusic: null,
    soundSystem: null,
    lightingEffects: null,
    equipmentRental: null,
    basicPackage: null,
    premiumPackage: null,
    luxuryPackage: null,
    customization: null,

    // Offers & Terms
    earlyBirdDiscount: null,
    seasonalOffer: null,
    packageDeal: null,
    minimumBooking: null,
    advancePayment: null,
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
    priceTiers: [
      {
        id: Date.now().toString(),
        price: "",
        description: "",
        includes: [""],
      },
    ],
    duration: "",
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

  const preparePayload = (formData: FormDataState) => {
    // Remove pricing and offer fields from top level
    const { confirmPassword, ...rest } = formData;
    const payload = { ...rest };
    
    // Add custom packages if any
    if (customPackages.length > 0) {
      payload.customPackages = customPackages;
    }

    return payload;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address")
      return;
    }
    
    // Validate password strength
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long")
      return;
    }
    
    // Validate required fields
    const requiredFields = [
      'businessName', 'businessType', 'category', 'description',
      'ownerName', 'phone', 'address', 'city', 'services'
    ] as (keyof FormDataState)[];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      alert(`Missing required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    // Validate terms agreement
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions")
      return
    }
    
    // Prepare payload
    const payload = preparePayload(formData);

    try {
      const response = await fetch('/api/auth/register/vendor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Registration failed')
      }

      const data = await response.json()
      console.log('Registration successful:', data)
      // Redirect or show success message
    } catch (error) {
      console.error('Registration error:', error)
      if (error instanceof Error) {
        alert(`Registration failed: ${error.message}`)
      } else {
        alert("Registration failed: An unknown error occurred")
      }
    }
  }

  // Custom Package Functions
  const addCustomPackage = () => {
    if (newPackage.name && newPackage.priceTiers.every(tier => tier.price && tier.includes.some(inc => inc.trim() !== ""))) {
      const packageWithId = {
        ...newPackage,
        id: Date.now().toString(),
        priceTiers: newPackage.priceTiers.map(tier => ({
          ...tier,
          includes: tier.includes.filter((item) => item.trim() !== ""),
        })),
      }
      setCustomPackages([...customPackages, packageWithId])
      setNewPackage({
        id: "",
        name: "",
        description: "",
        priceTiers: [
          {
            id: Date.now().toString(),
            price: "",
            description: "",
            includes: [""],
          },
        ],
        duration: "",
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

  // Price Tier Functions
  const addPriceTier = () => {
    setNewPackage({
      ...newPackage,
      priceTiers: [
        ...newPackage.priceTiers,
        {
          id: Date.now().toString(),
          price: "",
          description: "",
          includes: [""],
        },
      ],
    })
  }

  const removePriceTier = (tierId: string) => {
    if (newPackage.priceTiers.length > 1) {
      setNewPackage({
        ...newPackage,
        priceTiers: newPackage.priceTiers.filter((tier) => tier.id !== tierId),
      })
    }
  }

  const updatePriceTier = (tierId: string, field: keyof PriceTier, value: string) => {
    setNewPackage({
      ...newPackage,
      priceTiers: newPackage.priceTiers.map((tier) =>
        tier.id === tierId ? { ...tier, [field]: value } : tier
      ),
    })
  }

  // Include/Exclude Functions
  const addIncludeItem = (tierId: string) => {
    setNewPackage({
      ...newPackage,
      priceTiers: newPackage.priceTiers.map((tier) =>
        tier.id === tierId
          ? { ...tier, includes: [...tier.includes, ""] }
          : tier
      ),
    })
  }

  const updateIncludeItem = (tierId: string, index: number, value: string) => {
    setNewPackage({
      ...newPackage,
      priceTiers: newPackage.priceTiers.map((tier) =>
        tier.id === tierId
          ? {
              ...tier,
              includes: tier.includes.map((item, i) =>
                i === index ? value : item
              ),
            }
          : tier
      ),
    })
  }

  const removeIncludeItem = (tierId: string, index: number) => {
    setNewPackage({
      ...newPackage,
      priceTiers: newPackage.priceTiers.map((tier) =>
        tier.id === tierId
          ? {
              ...tier,
              includes: tier.includes.filter((_, i) => i !== index),
            }
          : tier
      ),
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
            { 
              name: "Wedding Bliss Package", 
              tiers: [
                { price: "₹1,500/head", description: "Standard package with basic amenities" },
                { price: "₹2,500/head", description: "Premium package with enhanced services" },
                { price: "₹3,500/head", description: "Luxury package with all inclusive services" }
              ],
              duration: "Full Day" 
            },
            { 
              name: "Intimate Ceremony", 
              tiers: [
                { price: "₹2,000/head", description: "Small gathering package" }
              ],
              duration: "6 Hours" 
            },
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
            { 
              name: "Bridal Glam Package", 
              tiers: [
                { price: "₹25,000", description: "Basic bridal package" },
                { price: "₹35,000", description: "Premium bridal package with additional services" }
              ],
              duration: "Full Day" 
            },
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
            { 
              name: "Complete Wedding Story", 
              tiers: [
                { price: "₹80,000", description: "Basic coverage for main events" },
                { price: "₹1,20,000", description: "Full coverage with additional services" }
              ],
              duration: "3 Days" 
            },
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
            { 
              name: "Royal Feast", 
              tiers: [
                { price: "₹1,500/plate", description: "Standard menu with 3 starters, 5 main courses" },
                { price: "₹2,500/plate", description: "Premium menu with 5 starters, 8 main courses, live counters" },
                { price: "₹3,500/plate", description: "Luxury menu with all inclusive services" }
              ],
              duration: "Per Event" 
            },
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
            { 
              name: "Royal Elegance", 
              tiers: [
                { price: "₹1,00,000", description: "Basic stage and hall decoration" },
                { price: "₹1,80,000", description: "Premium decoration with floral arrangements" }
              ],
              duration: "Setup + Event" 
            },
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
            { 
              name: "Party Night Package", 
              tiers: [
                { price: "₹25,000", description: "Basic DJ services" },
                { price: "₹45,000", description: "Premium package with lighting effects" }
              ],
              duration: "8 Hours" 
            },
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
            { 
              name: "Standard Package", 
              tiers: [
                { price: "₹25,000", description: "Basic services" }
              ],
              duration: "As Required" 
            },
          ],
        }
    }
  }

  const getPricingFields = (category: string) => {
    switch (category) {
      case "venue":
        return {
          title: "Venue Pricing & Capacity",
          fields: [
            { key: "perHeadPrice", label: "Price per Head", type: "number", placeholder: "₹1,200", required: false },
            {
              key: "venueRental",
              label: "Venue Rental (Base)",
              type: "number",
              placeholder: "₹50,000",
              required: false,
            },
            { key: "minGuests", label: "Minimum Guests", type: "number", placeholder: "100", required: false },
            { key: "maxGuests", label: "Maximum Guests", type: "number", placeholder: "1000", required: false },
            { key: "decorationCharges", label: "Decoration Charges", type: "number", placeholder: "₹25,000", required: false },
            { key: "parkingCapacity", label: "Parking Capacity", type: "number", placeholder: "200 cars", required: false },
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
              required: false,
            },
            { key: "partyMakeup", label: "Party Makeup", type: "number", placeholder: "₹8,000", required: false },
            { key: "engagementPackage", label: "Engagement Package", type: "number", placeholder: "₹15,000", required: false },
            { key: "mehndiBridal", label: "Mehndi Bridal", type: "number", placeholder: "₹12,000", required: false },
            { key: "trialMakeup", label: "Trial Makeup", type: "number", placeholder: "₹3,000", required: false },
            { key: "airbrushMakeup", label: "Airbrush Makeup (Additional)", type: "number", placeholder: "₹5,000", required: false },
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
              required: false,
            },
            { key: "preWeddingShoot", label: "Pre-Wedding Shoot", type: "number", placeholder: "₹25,000", required: false },
            { key: "engagementCoverage", label: "Engagement Coverage", type: "number", placeholder: "₹35,000", required: false },
            { key: "mehndiBarat", label: "Mehndi/Barat Coverage", type: "number", placeholder: "₹45,000", required: false },
            { key: "cinematography", label: "Cinematography (Additional)", type: "number", placeholder: "₹30,000", required: false },
            { key: "albumPrinting", label: "Album Printing", type: "number", placeholder: "₹15,000", required: false },
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
              required: false,
            },
            { key: "perPlatePremium", label: "Premium Menu (per plate)", type: "number", placeholder: "₹1,500", required: false },
            { key: "perPlateLuxury", label: "Luxury Menu (per plate)", type: "number", placeholder: "₹2,500", required: false },
            { key: "liveCounters", label: "Live Counters (per counter)", type: "number", placeholder: "₹8,000", required: false },
            { key: "dessertStation", label: "Dessert Station", type: "number", placeholder: "₹12,000", required: false },
            { key: "serviceCharges", label: "Service Charges (%)", type: "number", placeholder: "15", required: false },
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
              required: false,
            },
            { key: "hallDecoration", label: "Complete Hall Decoration", type: "number", placeholder: "₹80,000", required: false },
            { key: "flowerDecoration", label: "Fresh Flower Decoration", type: "number", placeholder: "₹25,000", required: false },
            { key: "lightingPackage", label: "Lighting Package", type: "number", placeholder: "₹20,000", required: false },
            { key: "backdropRental", label: "Backdrop Rental", type: "number", placeholder: "₹8,000", required: false },
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
              required: false,
            },
            { key: "liveMusic", label: "Live Music Band", type: "number", placeholder: "₹50,000", required: false },
            { key: "soundSystem", label: "Sound System Rental", type: "number", placeholder: "₹15,000", required: false },
            { key: "lightingEffects", label: "Lighting Effects", type: "number", placeholder: "₹20,000", required: false },
            { key: "equipmentRental", label: "Equipment Rental (per day)", type: "number", placeholder: "₹8,000", required: false },
          ],
        }
      default:
        return {
          title: "Service Pricing",
          fields: [
            { key: "basicPackage", label: "Basic Package", type: "number", placeholder: "₹15,000", required: false },
            { key: "premiumPackage", label: "Premium Package", type: "number", placeholder: "₹35,000", required: false },
            { key: "luxuryPackage", label: "Luxury Package", type: "number", placeholder: "₹60,000", required: false },
            { key: "customization", label: "Customization Charges", type: "number", placeholder: "₹5,000", required: false },
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
                <Select 
                  onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                  required
                >
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
                <Select 
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
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
                  value={formData.establishedYear || ""}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    establishedYear: e.target.value || null 
                  })}
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
                  value={formData.whatsapp || ""}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    whatsapp: e.target.value || null 
                  })}
                  placeholder="+92 300 1234567"
                />
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website || ""}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    website: e.target.value || null 
                  })}
                  placeholder="https://www.yourbusiness.com"
                />
              </div>
            </div>
            
            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a password (min 8 characters)"
                  required
                />
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
                <Select 
                  onValueChange={(value) => setFormData({ ...formData, city: value })}
                  required
                >
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
                  value={formData.area || ""}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    area: e.target.value || null 
                  })}
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
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
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
                        value={formData[field.key as keyof FormDataState] || ""}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          [field.key]: e.target.value || null 
                        })}
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
                        <div className="space-y-1 mt-1">
                          {sample.tiers.map((tier, i) => (
                            <div key={i} className="text-gray-600">
                              <span className="font-medium">{tier.price}</span>: {tier.description}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{sample.duration}</div>
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
                            {pkg.description && (
                              <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                            )}
                            
                            <div className="space-y-3">
                              {pkg.priceTiers.map((tier, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-purple-600 flex items-center">
                                      <IndianRupee className="w-4 h-4 mr-1" />
                                      {tier.price}
                                    </span>
                                    {tier.description && (
                                      <span className="text-sm text-gray-600">{tier.description}</span>
                                    )}
                                  </div>
                                  {tier.includes.length > 0 && (
                                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                      {tier.includes.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                          <span className="text-green-500 mr-2">✓</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm mt-2">
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

                    <div className="mb-4">
                      <Label htmlFor="packageName">Package Name *</Label>
                      <Input
                        id="packageName"
                        value={newPackage.name}
                        onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                        placeholder="e.g., Wedding Bliss Package"
                      />
                    </div>

                    <div className="mb-4">
                      <Label htmlFor="packageDescription">Package Description</Label>
                      <Textarea
                        id="packageDescription"
                        value={newPackage.description}
                        onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                        placeholder="Describe what this package is about..."
                        rows={2}
                      />
                    </div>

                    {/* Price Tiers */}
                    <div className="space-y-4 mb-6">
                      <Label>Price Tiers *</Label>
                      {newPackage.priceTiers.map((tier) => (
                        <div key={tier.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-sm">Price Tier</span>
                            {newPackage.priceTiers.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removePriceTier(tier.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <Label htmlFor={`price-${tier.id}`}>Price *</Label>
                              <Input
                                id={`price-${tier.id}`}
                                value={tier.price}
                                onChange={(e) => updatePriceTier(tier.id, "price", e.target.value)}
                                placeholder="e.g., ₹1,500/head or ₹50,000"
                              />
                            </div>
                            <div>
                              <Label htmlFor={`description-${tier.id}`}>Description</Label>
                              <Input
                                id={`description-${tier.id}`}
                                value={tier.description}
                                onChange={(e) => updatePriceTier(tier.id, "description", e.target.value)}
                                placeholder="Brief description of what this price includes"
                              />
                            </div>
                          </div>

                          {/* What's Included */}
                          <div className="mb-4">
                            <Label className="mb-2 block">What's Included *</Label>
                            <div className="space-y-2">
                              {tier.includes.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Input
                                    value={item}
                                    onChange={(e) => updateIncludeItem(tier.id, index, e.target.value)}
                                    placeholder="e.g., Professional makeup application"
                                    className="flex-1"
                                  />
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeIncludeItem(tier.id, index)}
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
                                onClick={() => addIncludeItem(tier.id)}
                                className="w-full bg-transparent"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Included Item
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
                                      const emptyIndex = tier.includes.findIndex((item) => item === "")
                                      if (emptyIndex !== -1) {
                                        updateIncludeItem(tier.id, emptyIndex, suggestion)
                                      } else {
                                        addIncludeItem(tier.id)
                                        updateIncludeItem(tier.id, tier.includes.length, suggestion)
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
                        </div>
                      ))}

                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addPriceTier}
                        className="w-full bg-transparent"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Price Tier
                      </Button>
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

                    <div className="flex items-center space-x-3 mb-4">
                      <Checkbox
                        id="isPopular"
                        checked={newPackage.isPopular}
                        onCheckedChange={(checked) => setNewPackage({ ...newPackage, isPopular: !!checked })}
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
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      earlyBirdDiscount: e.target.value || null 
                    })}
                    placeholder="e.g., 15% for bookings 3 months in advance"
                  />
                </div>
                <div>
                  <Label htmlFor="seasonalOffer">Seasonal Offer</Label>
                  <Input
                    id="seasonalOffer"
                    value={formData.seasonalOffer || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      seasonalOffer: e.target.value || null 
                    })}
                    placeholder="e.g., 20% off during summer season"
                  />
                </div>
                <div>
                  <Label htmlFor="packageDeal">Package Deal</Label>
                  <Input
                    id="packageDeal"
                    value={formData.packageDeal || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      packageDeal: e.target.value || null 
                    })}
                    placeholder="e.g., Book 3 services get 10% off total"
                  />
                </div>
                <div>
                  <Label htmlFor="minimumBooking">Minimum Booking Amount</Label>
                  <Input
                    id="minimumBooking"
                    type="number"
                    value={formData.minimumBooking || ""}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      minimumBooking: e.target.value || null 
                    })}
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
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      advancePayment: e.target.value || null 
                    })}
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
                    <div key={pkg.id} className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{pkg.name}</span>
                          {pkg.isPopular && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{pkg.duration}</span>
                      </div>
                      <div className="space-y-2">
                        {pkg.priceTiers.map((tier, index) => (
                          <div key={index} className="bg-gray-50 p-2 rounded">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-purple-600 flex items-center">
                                <IndianRupee className="w-4 h-4 mr-1" />
                                {tier.price}
                              </span>
                              {tier.description && <span className="text-sm text-gray-600">{tier.description}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
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
                  onCheckedChange={(checked) => setFormData({ 
                    ...formData, 
                    agreeToTerms: !!checked 
                  })}
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
                  onCheckedChange={(checked) => setFormData({ 
                    ...formData, 
                    agreeToMarketing: !!checked 
                  })}
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