import { HeroSection } from "@/components/hero-section"
import { SearchSection } from "@/components/search-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedVenues } from "@/components/featured-venues"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <FeaturedVenues />
      <HowItWorks />
      <TestimonialsSection />
    </div>
  )
}
