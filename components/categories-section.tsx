import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Palette, ChefHat, Camera, Flower, Music, Car, Gift } from "lucide-react"

const categories = [
  {
    name: "Wedding Venues",
    icon: Building2,
    count: "500+",
    href: "/venues",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Makeup Artists",
    icon: Palette,
    count: "200+",
    href: "/makeup-artists",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Caterers",
    icon: ChefHat,
    count: "150+",
    href: "/caterers",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Photographers",
    icon: Camera,
    count: "300+",
    href: "/photographers",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Decorators",
    icon: Flower,
    count: "100+",
    href: "/decorators",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Musicians",
    icon: Music,
    count: "80+",
    href: "/musicians",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Transportation",
    icon: Car,
    count: "50+",
    href: "/transportation",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Wedding Favors",
    icon: Gift,
    count: "120+",
    href: "/favors",
    color: "bg-yellow-100 text-yellow-600",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 text-lg">Find everything you need for your perfect event</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count} options</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
