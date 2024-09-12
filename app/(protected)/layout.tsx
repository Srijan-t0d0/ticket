import { getBookedSeats, getBookingData } from "@/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return <>{children}</>;
}