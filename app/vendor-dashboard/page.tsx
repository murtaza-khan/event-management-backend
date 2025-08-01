import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { mockVendorBookings, mockVendorServices } from "@/lib/mock-data"
import { Calendar, DollarSign, Star } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function VendorDashboardOverview() {
  const upcomingBookings = mockVendorBookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed",
  )
  const totalEarnings = mockVendorBookings.reduce((sum, booking) => sum + booking.amount, 0)
  const averageRating =
    mockVendorServices.reduce((sum, service) => sum + service.rating, 0) / mockVendorServices.length || 0

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockVendorBookings.length}</div>
            <p className="text-xs text-muted-foreground">Across all your services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingBookings.length}</div>
            <p className="text-xs text-muted-foreground">Pending or Confirmed</p>
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
            <p className="text-xs text-muted-foreground">Based on service reviews</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {mockVendorBookings.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockVendorBookings.slice(0, 5).map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.eventName}</TableCell>
                    <TableCell>{booking.eventDate}</TableCell>
                    <TableCell>{booking.clientName}</TableCell>
                    <TableCell>{booking.service}</TableCell>
                    <TableCell>${booking.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          booking.status === "confirmed"
                            ? "default"
                            : booking.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/vendor-dashboard/bookings/${booking.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground">No recent bookings found.</p>
          )}
          {mockVendorBookings.length > 5 && (
            <div className="text-center mt-4">
              <Link href="/vendor-dashboard/bookings">
                <Button variant="link">View All Bookings</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Services</CardTitle>
        </CardHeader>
        <CardContent>
          {mockVendorServices.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Bookings</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockVendorServices.slice(0, 3).map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell>{service.category}</TableCell>
                    <TableCell>${service.price.toLocaleString()}</TableCell>
                    <TableCell>{service.bookings}</TableCell>
                    <TableCell>
                      {service.rating.toFixed(1)}{" "}
                      <Star className="inline-block h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/vendor-dashboard/services/${service.id}`}>
                        <Button variant="outline" size="sm">
                          Edit Service
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground">No services listed yet.</p>
          )}
          {mockVendorServices.length > 3 && (
            <div className="text-center mt-4">
              <Link href="/vendor-dashboard/services">
                <Button variant="link">View All Services</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
