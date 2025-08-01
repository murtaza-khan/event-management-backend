import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockBookedEvents } from "@/lib/mock-data"
import { Calendar, MapPin, Users, DollarSign, CheckCircle, XCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MyEventsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">My Events</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Your Booked Events</CardTitle>
        </CardHeader>
        <CardContent>
          {mockBookedEvents.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Total Cost</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockBookedEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          {event.date} at {event.time}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                          {event.location}
                        </div>
                      </TableCell>
                      <TableCell>{event.package}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                          {event.guests}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
                          {event.totalCost.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        {event.status === "upcoming" && (
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            <Clock className="w-3 h-3 mr-1" /> Upcoming
                          </Badge>
                        )}
                        {event.status === "completed" && (
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" /> Completed
                          </Badge>
                        )}
                        {event.status === "cancelled" && (
                          <Badge variant="outline" className="bg-red-100 text-red-800">
                            <XCircle className="w-3 h-3 mr-1" /> Cancelled
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/dashboard/events/${event.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <p className="text-gray-600">You haven't booked any events yet. Start planning your next celebration!</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
