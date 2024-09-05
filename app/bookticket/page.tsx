import { getBookedSeats } from "@/actions";
import { auth } from "@/auth";
import { Seats } from "@/components/seats";
import { prisma } from "@/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  await Promise.all([auth()]);
  const user = await auth();
  const userBooked = await prisma.bookings.findFirst({
    where: { userId: user?.user?.id },
  });
  if (userBooked) {
    redirect("/print-ticket");
  }
  const bookings = await getBookedSeats();
  return <Seats bookings={bookings} />;
}
