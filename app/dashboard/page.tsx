import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign, Users, CheckCircle } from "lucide-react"
import { mockBookedEvents, mockBookedVendors } from "@/lib/mock-data"
import { format } from "date-fns"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ClientDashboardOverview() {
  const upcomingEvents = mockBookedEvents
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const totalGuests = mockBookedEvents.reduce((sum, event) => sum + event.guests, 0)
  const totalSpend = mockBookedEvents.reduce((sum, event) => sum + event.totalCost, 0)
  const completedEvents = mockBookedEvents.filter((event) => event.status === "Completed").length

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">Your next big day is coming!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalGuests.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all your events</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpend.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">On all your bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Events</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedEvents}</div>
            <p className="text-xs text-muted-foreground">Memories made!</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.slice(0, 3).map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-semibold text-lg">{event.name}</h3>
                    <p className="text-sm text-gray-600">
                      {format(new Date(event.date), "PPP")} at {event.time} - {event.location}
                    </p>
                  </div>
                  <Link href={`/dashboard/events/${event.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              ))}
              {upcomingEvents.length > 3 && (
                <div className="text-center mt-4">
                  <Link href="/dashboard/events">
                    <Button variant="link">View All Upcoming Events</Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-600">No upcoming events. Start planning your next one!</p>
          )}
        </CardContent>
      </Card>

      {/* Recently Booked Vendors */}
      <Card>
        <CardHeader>
          <CardTitle>Recently Booked Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          {mockBookedVendors.length > 0 ? (
            <div className="space-y-4">
              {mockBookedVendors.slice(0, 3).map((vendor) => (
                <div key={vendor.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-semibold text-lg">{vendor.name}</h3>
                    <p className="text-sm text-gray-600">{vendor.service}</p>
                  </div>
                  <Button variant="outline">Contact Vendor</Button>
                </div>
              ))}
              {mockBookedVendors.length > 3 && (
                <div className="text-center mt-4">
                  <Link href="/dashboard/vendors">
                    <Button variant="link">View All Booked Vendors</Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-600">No vendors booked yet. Explore our services!</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
