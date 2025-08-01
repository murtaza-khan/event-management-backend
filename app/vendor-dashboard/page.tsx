import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockVendorBookings, mockVendorServices } from "@/lib/mock-data"
import { Calendar, DollarSign, Star, CheckCircle, Clock, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VendorDashboardOverviewPage() {
  const totalBookings = mockVendorBookings.length
  const upcomingBookings = mockVendorBookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed",
  ).length
  const totalEarnings = mockVendorBookings.reduce((sum, booking) => sum + booking.amount, 0)
  const averageRating =
    mockVendorServices.reduce((sum, service) => sum + service.rating, 0) / mockVendorServices.length || 0

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">Across all your services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingBookings}</div>
            <p className="text-xs text-muted-foreground">Confirmed or pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">From all completed bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">Across all your services</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {mockVendorBookings.length > 0 ? (
            <div className="space-y-4">
              {mockVendorBookings.slice(0, 3).map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.eventName}</h3>
                    <p className="text-sm text-gray-600">
                      <Calendar className="inline-block w-4 h-4 mr-1" /> {booking.eventDate}
                    </p>
                    <p className="text-sm text-gray-600">Client: {booking.clientName}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">${booking.amount.toLocaleString()}</span>
                    {booking.status === "confirmed" && (
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" /> Confirmed
                      </Badge>
                    )}
                    {booking.status === "pending" && (
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        <Clock className="w-3 h-3 mr-1" /> Pending
                      </Badge>
                    )}
                    {booking.status === "cancelled" && (
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        <XCircle className="w-3 h-3 mr-1" /> Cancelled
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No recent bookings. Your services are waiting to be discovered!</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Services</CardTitle>
        </CardHeader>
        <CardContent>
          {mockVendorServices.length > 0 ? (
            <div className="space-y-4">
              {mockVendorServices.map((service) => (
                <div key={service.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.category}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-700">Bookings: {service.bookings}</div>
                    <div className="text-sm text-gray-700 flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" /> {service.rating.toFixed(1)}
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">You haven't added any services yet. Add your services to get bookings!</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
