import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ShaadiDesk</h3>
          <p className="text-sm leading-relaxed">
            Your ultimate partner in planning unforgettable weddings. We connect you with the best venues, packages, and
            vendors to make your dream day a reality.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-white transition-colors">
                Wedding Packages
              </Link>
            </li>
            <li>
              <Link href="/venues" className="hover:text-white transition-colors">
                Venues
              </Link>
            </li>
            <li>
              <Link href="/business/signup" className="hover:text-white transition-colors">
                List Your Business
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/photographers" className="hover:text-white transition-colors">
                Photographers
              </Link>
            </li>
            <li>
              <Link href="/caterers" className="hover:text-white transition-colors">
                Caterers
              </Link>
            </li>
            <li>
              <Link href="/makeup-artists" className="hover:text-white transition-colors">
                Makeup Artists
              </Link>
            </li>
            <li>
              <Link href="/decorators" className="hover:text-white transition-colors">
                Decorators
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-white transition-colors">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <p className="text-sm">123 Wedding Lane, Dream City, DC 12345</p>
          <p className="text-sm mt-2">Email: info@shaadidesk.com</p>
          <p className="text-sm mt-2">Phone: +1 (123) 456-7890</p>
          <p className="text-sm mt-2">Hours: Mon - Fri, 9 AM - 6 PM</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} ShaadiDesk. All rights reserved.
      </div>
    </footer>
  )
}
