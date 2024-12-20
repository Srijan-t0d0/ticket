import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { auth } from "@/auth";

type Order = {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: "INR";
  entity: "order";
  id: string;
  notes: any[]; // If the notes are more specific, you can define a more detailed type.
  offer_id: string | null;
  receipt: string | null;
  status: "created" | "attempted" | "paid" | "failed"; // Based on possible statuses, add more if needed.
};

export async function POST(request: NextRequest) {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RP_key_id!,
    key_secret: process.env.RP_key_secret,
  });
  const session = await auth();
  console.log("api/order", { user: session?.user });

  const { amount, seat } = (await request.json()) as {
    amount: string;
    seat: string[];
  };
  console.log("/api/order", { amount, seat });

  if (!seat) return NextResponse.json(null, { status: 400 });

  var options = {
    amount: amount,
    currency: "INR",
  };
  console.log("/api/order", { options });
  let order;
  try {
    order = await razorpay.orders.create(options);
  } catch (error) {
    console.log(error);
    order = { id: crypto.randomUUID() };
  }

  console.log("/api/order", { order });
  const dbOrder = await prisma.orders.create({
    data: {
      id: order.id,
      paymentStatus: "pending",
      seatNumber: seat[0].toString(),
      userId: session?.user?.id || "",
    },
  });
  console.log("api/order", { order, dbOrder });
  return NextResponse.json({ orderId: order.id }, { status: 200 });
}
