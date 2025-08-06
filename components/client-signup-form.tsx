"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Heart, Shield, Eye, EyeOff } from "lucide-react"
import { FullscreenLoader } from "@/components/fullscreen-loader"
import { toast } from "@/components/ui/use-toast"

export function ClientSignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    interests: [] as string[],
    communicationPreference: "",
    specialRequirements: "",
    agreeToTerms: false,
    agreeToMarketing: false,
    agreeToOffers: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in all required fields",
        })
        return
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          variant: "destructive",
          title: "Password Mismatch",
          description: "Passwords do not match",
        })
        return
      }

      if (formData.password.length < 8) {
        toast({
          variant: "destructive",
          title: "Password Too Short",
          description: "Password must be at least 8 characters",
        })
        return
      }
    }
    
    setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest],
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreeToTerms) {
      toast({
        variant: "destructive",
        title: "Terms Not Accepted",
        description: "You must agree to the terms and conditions",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          interests: formData.interests,
          communicationPreference: formData.communicationPreference,
          agreeToTerms: formData.agreeToTerms,
          agreeToMarketing: formData.agreeToMarketing,
          agreeToOffers: formData.agreeToOffers,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Registration failed')
      }

      toast({
        title: "Registration Successful!",
        description: "Your account has been created successfully",
      })

      // Let the loader stay visible during navigation
      router.push('/auth/login?registered=true')
      // Don't set isSubmitting to false - let navigation handle it
      
    } catch (error) {
      setIsSubmitting(false)
      console.error('Registration error:', error)
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error instanceof Error ? error.message : 'An error occurred during registration',
      })
    }
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  required
                  className="pr-10"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isSubmitting}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <p className="text-xs text-gray-500 mt-1">Minimum 8 characters with letters and numbers</p>
              </div>
              <div className="relative">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                  required
                  className="pr-10"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isSubmitting}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        )

      case 2:
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
                      disabled={isSubmitting}
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
              <Select 
                onValueChange={(value) => setFormData({ ...formData, communicationPreference: value })}
                value={formData.communicationPreference}
                disabled={isSubmitting}
              >
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

            <div>
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                placeholder="Any specific requirements or preferences you have..."
                rows={3}
                disabled={isSubmitting}
              />
            </div>

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
                    required
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="offers" className="text-sm leading-relaxed">
                    I want to receive exclusive offers, discounts, and promotional deals from vendors
                  </Label>
                </div>
              </div>
            </div>

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
    <>
      {isSubmitting && <FullscreenLoader />}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Create Your Account</span>
            <span className="text-sm font-normal text-gray-600">Step {currentStep} of 2</span>
          </CardTitle>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handlePrevious} 
                disabled={currentStep === 1 || isSubmitting}
              >
                Previous
              </Button>

              {currentStep < 2 ? (
                <Button 
                  type="button" 
                  onClick={handleNext} 
                  className="bg-pink-600 hover:bg-pink-700"
                  disabled={isSubmitting}
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="bg-pink-600 hover:bg-pink-700" 
                  disabled={!formData.agreeToTerms || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Creating Account...
                    </>
                  ) : 'Create Account'}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}