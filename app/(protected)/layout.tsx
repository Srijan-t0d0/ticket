import { getBookedSeats, getBookingData } from "@/actions";
import { auth } from "@/auth";
import SeatProvider from "@/components/SeatProvider";
import { redirect } from "next/navigation";
import Script from "next/script";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SeatProvider>
      <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        {children}
      </>
    </SeatProvider>
  );
}
