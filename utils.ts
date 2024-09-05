import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./prisma";

export const userTicket =async () => {
   
    const user = await auth();
    const userBooked = await prisma.bookings.findFirst({
      where: { userId: user?.user?.id },
    });
    if (userBooked) {
      redirect("/print-ticket");
    }
}