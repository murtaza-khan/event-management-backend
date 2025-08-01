import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Camera, Utensils, Palette, Sparkles } from "lucide-react"

export function CategoriesSection() {
  const categories = [
    { name: "Venues", icon: Home, href: "/venues" },
    { name: "Packages", icon: Sparkles, href: "/packages" },
    { name: "Photographers", icon: Camera, href: "/photographers" },
    { name: "Caterers", icon: Utensils, href: "/caterers" },
    { name: "Decorators", icon: Palette, href: "/decorators" },
    { name: "Makeup Artists", icon: Sparkles, href: "/makeup-artists" },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Explore Our Categories</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Find everything you need for your wedding, from stunning venues to top-notch vendors, all in one place.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="flex flex-col items-center justify-center p-6 h-40 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <category.icon className="w-10 h-10 text-pink-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
