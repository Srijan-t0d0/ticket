import { getBookedSeats, getBookingData } from "@/actions";
import { auth } from "@/auth";
import { Seats } from "@/components/seats";
import { prisma } from "@/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  const { booking } = await getBookingData();
  if (booking) {
    redirect("/print-ticket");
  }
  const bookings = await getBookedSeats();
  return <Seats bookings={bookings} />;
}
