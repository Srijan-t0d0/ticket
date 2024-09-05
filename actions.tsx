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
  console.log(bookedSeats);
  console.log(bookedSeats.length);
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
  console.log({ booking });
  return { error: "", seats: booking.seats };
}

export async function getPrintData() {
  let session = await auth();
  if (!session) return { error: "unauthorized", seats: [] };
  const dbUser = await prisma.user.findFirst({
    where: { email: session?.user?.email! },
  });
  const seat = await prisma.bookings.findFirst({
    where: { userId: dbUser?.id },
  });
  return {
    email: session.user?.email,
    seat: seat?.seats[0],
    bookingId: seat?.id,
  };
}
