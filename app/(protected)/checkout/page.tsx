"use client";
import { getBookedSeats } from "@/actions";
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
  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 40 * 100,
          seat: selectedSeats,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const handleClick = async () => {
    const orderId = await createOrderId();
    const options = {
      key: process.env.NEXT_PUBLIC_RP_key_id, // Replace with your Razorpay key_id
      amount: "4000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",

      order_id: orderId, // This is the order_id created in the backend
      callback_url: ` ${process.env.NEXT_PUBLIC_AUTH_URL}/api/payment-success`, // Your success URL
      redirect: true,

      theme: {
        color: "#F37254",
      },
      notes: {
        testnote: "This is a test note",
      },
    };
    //@ts-expect-error
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <Suspense>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="p-5 border-2 border-gray-500 flex flex-col gap-2 min-w-96 rounded-3xl shadow-lg ">
          <h1 className="text-4xl font-bold my-2"> Checkout</h1>
          <hr></hr>
          <p>Selected Seat: {selectedSeats?.toString()}</p>
          <p>Amount :&#x20b9; {selectedSeats?.length * 40}</p>
          <button
            className="bg-teal-600 p-2 m-2 rounded-lg hover:bg-teal-700 active:bg-teal-900"
            onClick={handleClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </Suspense>
  );
}
