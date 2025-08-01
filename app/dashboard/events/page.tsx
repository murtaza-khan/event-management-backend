import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockBookedEvents } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MyEventsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">My Events</h2>

      <Card>
        <CardHeader>
          <CardTitle>All Booked Events</CardTitle>
        </CardHeader>
        <CardContent>
          {mockBookedEvents.length > 0 ? (
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
                      {event.date} at {event.time}
                    </TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.package}</TableCell>
                    <TableCell>{event.guests}</TableCell>
                    <TableCell>${event.totalCost.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          event.status === "upcoming"
                            ? "secondary"
                            : event.status === "completed"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {event.status}
                      </Badge>
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
          ) : (
            <p className="text-center text-muted-foreground">You have no booked events yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
