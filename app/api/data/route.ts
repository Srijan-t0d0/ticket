// /app/api/printData/route.js (or /api/printData if using pages)
import { getBookingData } from "@/actions";

export async function GET() {
  const data = await getBookingData();
  return new Response(JSON.stringify(data));
}
