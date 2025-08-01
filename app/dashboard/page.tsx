import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockBookedEvents } from "@/lib/mock-data"
import { Calendar, Users, DollarSign, CheckCircle, XCircle, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardOverviewPage() {
  const upcomingEvents = mockBookedEvents.filter((event) => event.status === "upcoming")
  const completedEvents = mockBookedEvents.filter((event) => event.status === "completed")
  const totalSpend = mockBookedEvents.reduce((sum, event) => sum + event.totalCost, 0)
  const totalGuests = mockBookedEvents.reduce((sum, event) => sum + event.guests, 0)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">
              {upcomingEvents.length > 0
                ? `Next: ${upcomingEvents[0].name} on ${upcomingEvents[0].date}`
                : "No upcoming events"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalGuests}</div>
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
            <p className="text-xs text-muted-foreground">On all booked services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Events</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedEvents.length}</div>
            <p className="text-xs text-muted-foreground">Successfully celebrated</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-semibold text-lg">{event.name}</h3>
                    <p className="text-sm text-gray-600">
                      <Calendar className="inline-block w-4 h-4 mr-1" /> {event.date} at {event.time}
                    </p>
                    <p className="text-sm text-gray-600">
                      <MapPin className="inline-block w-4 h-4 mr-1" /> {event.location}
                    </p>
                  </div>
                  <Link href={`/dashboard/events/${event.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">You have no upcoming events. Start planning your next celebration!</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recently Booked Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          {mockBookedEvents.some((event) => event.vendors.length > 0) ? (
            <div className="space-y-4">
              {mockBookedEvents.slice(0, 2).map(
                (
                  event, // Show vendors from first 2 events as example
                ) =>
                  event.vendors.map((vendor) => (
                    <div key={vendor.id} className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center">
                        {vendor.icon && <vendor.icon className="w-6 h-6 mr-3 text-pink-600" />}
                        <div>
                          <h3 className="font-semibold">{vendor.name}</h3>
                          <p className="text-sm text-gray-600">{vendor.service}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {vendor.status === "confirmed" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" /> Confirmed
                          </span>
                        )}
                        {vendor.status === "pending" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Clock className="w-3 h-3 mr-1" /> Pending
                          </span>
                        )}
                        {vendor.status === "cancelled" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <XCircle className="w-3 h-3 mr-1" /> Cancelled
                          </span>
                        )}
                        <Button variant="ghost" size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                  )),
              )}
            </div>
          ) : (
            <p className="text-gray-600">No vendors booked yet. Start booking services for your events!</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
