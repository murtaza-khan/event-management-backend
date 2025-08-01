import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Loader2 className="h-10 w-10 animate-spin text-pink-600" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
