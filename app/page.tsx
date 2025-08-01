import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedVenues } from "@/components/featured-venues"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BusinessSignupBenefits } from "@/components/business-signup-benefits"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedVenues />
      <HowItWorks />
      <TestimonialsSection />
      <BusinessSignupBenefits />
    </main>
  )
}
