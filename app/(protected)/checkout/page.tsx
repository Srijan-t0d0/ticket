"use client";
import { createBooking, getBookedSeats } from "@/actions";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Page() {
  return (
    <Suspense>
      <Checkout />
    </Suspense>
  );
}

function Checkout() {
  const router = useRouter();
  const seats = useSearchParams().get("seat");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  let bookings = [];
  useEffect(() => {
    if (seats) {
      setSelectedSeats(seats.toString().split(","));
    }

    getBookedSeats().then((val) => {
      // console.log(val);
    });
  }, [seats]);

  const handleClick = async () => {
    const newBooking = await createBooking(selectedSeats);
    if (newBooking.error) {
      alert(newBooking.error + seats?.toString());
      router.back();
    } else {
      alert("successfully booked" + newBooking.seats);
      router.push("/print-ticket");
    }
  };

  return (
    <Suspense>
      <div>
        <h1>Checkout Page</h1>
        <p>Selected Seats: {selectedSeats?.toString()}</p>
        <p>Amount : {selectedSeats?.length * 40}</p>
        <button onClick={handleClick}>Confirm</button>
        {/* Your checkout logic here */}
      </div>
    </Suspense>
  );
}
