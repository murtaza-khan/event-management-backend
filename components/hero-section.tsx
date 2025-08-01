import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Image
        src="/images/hero-wedding-venue.png"
        alt="Elegant wedding venue"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Your Dream Wedding, Perfectly Planned
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          Discover exquisite venues, comprehensive packages, and top-rated vendors to create your unforgettable day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/packages">
            <Button
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Packages
            </Button>
          </Link>
          <Link href="/venues">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-pink-600 bg-transparent"
            >
              Find Venues
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
