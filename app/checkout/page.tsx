"use client";
import { createBooking, getBookedSeats } from "@/actions";
import { prisma } from "@/prisma";

import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Checkout() {
  const seats = useSearchParams().get("seats");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  let bookings = [];
  useEffect(() => {
    if (seats) {
      setSelectedSeats(seats.toString().split(","));
    }

    getBookedSeats().then((val) => {
      console.log(val);
    });
  }, [seats]);

  const handleClick = async () => {
    const newBooking = await createBooking(selectedSeats);
    if (newBooking.error) {
      alert(newBooking.error + seats?.toString());
    } else {
      alert("successfully booked" + newBooking.seats);
    }
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <p>Selected Seats: {selectedSeats?.toString()}</p>
      <p>Amount : {selectedSeats?.length * 40}</p>
      <button onClick={handleClick}>Confirm</button>
      {/* Your checkout logic here */}
    </div>
  );
}
