"use client"

import { Loader2 } from "lucide-react"

export function FullscreenLoader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-pink-600 animate-spin mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-700">loading...</p>
      </div>
    </div>
  )
}