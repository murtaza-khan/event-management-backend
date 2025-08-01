"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Building2, Camera, Utensils, Palette, Music, Car, Sparkles, CheckCircle } from "lucide-react"

const accountTypes = [
  {
    id: "client",
    title: "Client Account",
    subtitle: "Planning your special day",
    description: "Find and book the perfect vendors for your wedding",
    icon: Heart,
    color: "bg-rose-500",
    benefits: [
      "Browse thousands of verified vendors",
      "Compare prices and packages",
      "Read authentic reviews",
      "Get personalized recommendations",
      "Secure booking and payments",
      "Wedding planning tools",
    ],
    href: "/auth/signup?type=client",
    popular: true,
  },
  {
    id: "business",
    title: "Business Account",
    subtitle: "Grow your wedding business",
    description: "List your services and connect with couples",
    icon: Building2,
    color: "bg-blue-500",
    benefits: [
      "Create professional business profile",
      "Showcase your portfolio",
      "Receive booking requests",
      "Manage your calendar",
      "Process secure payments",
      "Analytics and insights",
    ],
    href: "/business/signup",
    popular: false,
  },
]

const vendorTypes = [
  { name: "Venues", icon: Building2, count: "500+" },
  { name: "Photographers", icon: Camera, count: "300+" },
  { name: "Caterers", icon: Utensils, count: "200+" },
  { name: "Decorators", icon: Palette, count: "150+" },
  { name: "Musicians", icon: Music, count: "100+" },
  { name: "Transportation", icon: Car, count: "80+" },
  { name: "Makeup Artists", icon: Sparkles, count: "120+" },
]

export function AccountTypeSelection() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Account Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accountTypes.map((type) => {
          const IconComponent = type.icon
          return (
            <Card
              key={type.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedType === type.id ? "ring-2 ring-rose-500" : ""
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              {type.popular && <Badge className="absolute top-4 right-4 bg-yellow-500">Most Popular</Badge>}

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${type.color} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.subtitle}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="space-y-3 mb-6">
                  {type.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href={type.href}>Get Started as {type.title.split(" ")[0]}</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Vendor Types */}
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-xl font-semibold text-center mb-6">Join Our Network of Vendors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {vendorTypes.map((vendor) => {
            const IconComponent = vendor.icon
            return (
              <div key={vendor.name} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <IconComponent className="h-6 w-6 mx-auto text-gray-600" />
                </div>
                <div className="text-sm font-medium">{vendor.name}</div>
                <div className="text-xs text-gray-500">{vendor.count}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-lg p-6">
          <div className="text-3xl font-bold text-rose-600 mb-2">10,000+</div>
          <div className="text-gray-600">Happy Couples</div>
        </div>
        <div className="bg-white rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 mb-2">1,500+</div>
          <div className="text-gray-600">Verified Vendors</div>
        </div>
        <div className="bg-white rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
          <div className="text-gray-600">Successful Events</div>
        </div>
      </div>
    </div>
  )
}
