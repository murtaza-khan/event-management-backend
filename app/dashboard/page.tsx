// app/dashboard/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { mockBookedEvents } from "@/lib/mock-data";
import { Calendar, Users, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { withClientAuth } from "../hoc/with-client-auth";
import { useAuth } from "../context/auth-context";

function ClientDashboardOverview() {
  const { user } = useAuth();
  const upcomingEvents = mockBookedEvents.filter((event) => event.status === "upcoming");
  const completedEvents = mockBookedEvents.filter((event) => event.status === "completed");
  const totalGuests = mockBookedEvents.reduce((sum, event) => sum + event.guests, 0);
  const totalSpend = mockBookedEvents.reduce((sum, event) => sum + event.totalCost, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
        {user && (
          <div className="text-lg font-medium">
            Welcome back, {user.firstName}!
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">Events scheduled</p>
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
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingEvents.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingEvents.slice(0, 5).map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.package}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{event.status}</Badge>
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
            <p className="text-center text-muted-foreground">No upcoming events found.</p>
          )}
          {upcomingEvents.length > 5 && (
            <div className="text-center mt-4">
              <Link href="/dashboard/events">
                <Button variant="link">View All Events</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recently Booked Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          {mockBookedEvents.some((event) => event.vendors.length > 0) ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendor Name</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockBookedEvents.slice(0, 3).flatMap((event) =>
                  event.vendors.slice(0, 2).map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell className="font-medium">{vendor.name}</TableCell>
                      <TableCell>{vendor.service}</TableCell>
                      <TableCell>{event.name}</TableCell>
                      <TableCell>
                        <Badge variant={vendor.status === "confirmed" ? "default" : "secondary"}>{vendor.status}</Badge>
                      </TableCell>
                    </TableRow>
                  )),
                )}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground">No recently booked vendors found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default withClientAuth(ClientDashboardOverview);