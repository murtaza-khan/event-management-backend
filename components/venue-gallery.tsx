"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Grid3X3, Heart, Share2 } from "lucide-react"

interface VenueGalleryProps {
  images: string[]
  venueName: string
}

export function VenueGallery({ images, venueName }: VenueGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image Grid */}
      <div className="grid grid-cols-4 gap-2 h-96">
        {/* Large Main Image */}
        <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
          <img
            src={images[0] || "/placeholder.svg"}
            alt={`${venueName} - Main view`}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
        </div>

        {/* Smaller Images */}
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => {
              setCurrentImage(index + 1)
              setIsGalleryOpen(true)
            }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${venueName} - View ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">+{images.length - 5} more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => setIsGalleryOpen(true)} className="flex items-center space-x-2">
          <Grid3X3 className="w-4 h-4" />
          <span>View all {images.length} photos</span>
        </Button>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      {/* Full Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
          <div className="relative w-full h-full bg-black">
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt={`${venueName} - View ${currentImage + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-12 object-cover rounded cursor-pointer flex-shrink-0 ${
                    index === currentImage ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
