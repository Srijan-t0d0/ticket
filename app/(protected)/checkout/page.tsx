"use client";
import { createBooking, getBookedSeats } from "@/actions";
import { useSeatContext } from "@/components/SeatProvider";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect, useState } from "react";

export default function Page() {
  const { selectedSeats } = useSeatContext();
  const router = useRouter();
  console.log("checkout", { selectedSeats });

  if (selectedSeats.length == 0) router.replace("/bookticket");
  return <Checkout selectedSeats={selectedSeats} />;
}

function Checkout({ selectedSeats }: { selectedSeats: number[] }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    const res = await createBooking([selectedSeats[0].toString()]);
    if (res.error) {
      alert(`Seat ${selectedSeats[0]} is already booked`);
      router.push("booktiket");
    }
    router.push("/print-ticket");
    setLoading(false);
  };

  return (
    <Suspense>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="p-5 border-2 border-gray-500 flex flex-col gap-2 min-w-96 rounded-3xl shadow-lg ">
          <h1 className="text-4xl font-bold my-2"> Checkout</h1>
          <hr></hr>
          <p>Selected Seat: {selectedSeats?.toString()}</p>
          <button
            disabled={loading}
            className="bg-teal-600 p-2 m-2 rounded-lg hover:bg-teal-700 active:bg-teal-900"
            onClick={handleClick}
          >
            {loading ? "Loading...." : "Checkout"}
          </button>
        </div>
      </div>
    </Suspense>
  );
}
