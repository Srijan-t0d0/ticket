import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { redirect } from "next/dist/server/api-utils";

type RazorpayParams = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

function validateRazorpayParams(params: URLSearchParams): RazorpayParams {
  const razorpay_payment_id = params.get("razorpay_payment_id");
  const razorpay_order_id = params.get("razorpay_order_id");
  const razorpay_signature = params.get("razorpay_signature");

  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
    throw new Error("Invalid Razorpay params");
  }

  return {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
  };
}

export async function POST(request: NextRequest) {
  const queryString = await request.text();
  const rpParams = new URLSearchParams(queryString);

  // Force to RazorpayParams type
  const razorpayParams = validateRazorpayParams(rpParams);
  const body =
    razorpayParams.razorpay_order_id + "|" + razorpayParams.razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RP_key_secret || "")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpayParams.razorpay_signature;
  if (isAuthentic) {
    const order = await prisma.orders.findFirst({
      where: {
        id: razorpayParams.razorpay_order_id,
        paymentStatus: "pending",
      },
    });
    if (!order) return NextResponse.json(null, { status: 404 });
    let updatedOrderPromise = prisma.orders.update({
      where: {
        id: order.id,
      },
      data: {
        paymentStatus: "success",
      },
    });
    let bookingPromise = prisma.bookings.create({
      data: {
        userId: order?.userId || "",
        attended: false,
        seats: [order.seatNumber],
      },
    });

    const [updatedOrder, booking] = await Promise.all([
      updatedOrderPromise,
      bookingPromise,
    ]);
    console.log({ updatedOrder, booking });

    return NextResponse.redirect(new URL("/print-ticket", request.url));
  }

  return NextResponse.json({
    message: "trying to fool me?",
  });
}
