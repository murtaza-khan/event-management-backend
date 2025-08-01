"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VenueGalleryProps {
  images: string[]
}

export function VenueGallery({ images }: VenueGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="mb-8">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt="Main venue image"
          layout="fill"
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => setSelectedImage(images[0])}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="relative w-full h-24 rounded-md overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Venue thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
        {images.length > 5 && (
          <div
            className="relative w-full h-24 rounded-md overflow-hidden flex items-center justify-center bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 transition-colors"
            onClick={() => setSelectedImage(images[0])}
          >
            {" "}
            {/* Can open main image or a gallery view */}
            <span className="text-lg font-semibold">+{images.length - 5} More</span>
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative w-full h-[600px]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected venue image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
