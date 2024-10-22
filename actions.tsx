"use server";

import { auth } from "./auth";
import { prisma } from "./prisma";
import { signIn as originalSignIn } from "./auth";

export const signIn = async (...args: any[]) => {
  return await originalSignIn(...args);
};

export async function getBookedSeats() {
  let bookedSeats: string[] = [];
  const bookings = await prisma.bookings.findMany();
  bookings.forEach((b) => {
    bookedSeats = bookedSeats.concat(b.seats);
  });

  return bookedSeats;
}

export async function createBooking(
  seats: string[]
): Promise<{ error: string; seats: string[] }> {
  let session = await auth();
  if (!session) return { error: "unauthorized", seats: [] };

  const conflictingSeats = await prisma.bookings.findMany({
    where: {
      seats: {
        hasSome: seats,
      },
    },
  });

  if (conflictingSeats.length > 0) {
    return { error: "Already booked seats", seats: conflictingSeats[0].seats };
  }

  let user = await prisma.user.findFirst({
    where: { email: session?.user?.email! },
  });
  let booking;
  try {
    booking = await prisma.bookings.create({
      data: { seats, userId: user?.id!, attended: false },
    });
  } catch (e) {
    return { error: "Something went wrong", seats: [] };
  }

  return { error: "", seats: booking.seats };
}

export async function getBookingData() {
  let session = await auth();
  console.log("actions.tsx -> get booking data", { session });

  if (!session) return { error: "unauthorized" };

  const booking = await prisma.bookings.findFirst({
    where: { userId: session.user?.id },
  });
  console.error("getPrintData", { booking }, { session });
  return {
    user: session.user,
    booking,
  };
}
