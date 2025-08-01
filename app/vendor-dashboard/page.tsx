import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign, Star } from "lucide-react"
import { mockVendorBookings, mockVendorServices } from "@/lib/mock-data"
import { format } from "date-fns"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VendorDashboardOverview() {
  const totalBookings = mockVendorBookings.length
  const upcomingBookings = mockVendorBookings
    .filter((booking) => new Date(booking.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const totalEarnings = mockVendorBookings.reduce((sum, booking) => sum + booking.amount, 0)
  const averageRating = 4.8 // Mock average rating for demonstration

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">Across all services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingBookings.length}</div>
            <p className="text-xs text-muted-foreground">Get ready for action!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">From confirmed bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating}</div>
            <p className="text-xs text-muted-foreground">Based on client reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
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
                      Client: {booking.clientName} - {format(new Date(booking.date), "PPP")}
                    </p>
                  </div>
                  <Link href={`/vendor-dashboard/bookings/${booking.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              ))}
              {mockVendorBookings.length > 3 && (
                <div className="text-center mt-4">
                  <Link href="/vendor-dashboard/bookings">
                    <Button variant="link">View All Bookings</Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-600">No recent bookings. List your services to get started!</p>
          )}
        </CardContent>
      </Card>

      {/* My Services */}
      <Card>
        <CardHeader>
          <CardTitle>My Services</CardTitle>
        </CardHeader>
        <CardContent>
          {mockVendorServices.length > 0 ? (
            <div className="space-y-4">
              {mockVendorServices.slice(0, 3).map((service) => (
                <div key={service.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-sm text-gray-600">
                      {service.category} - ${service.price.toLocaleString()}
                    </p>
                  </div>
                  <Link href={`/vendor-dashboard/services/${service.id}`}>
                    <Button variant="outline">Edit Service</Button>
                  </Link>
                </div>
              ))}
              {mockVendorServices.length > 3 && (
                <div className="text-center mt-4">
                  <Link href="/vendor-dashboard/services">
                    <Button variant="link">View All Services</Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-600">You haven't added any services yet. Add your first service!</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
