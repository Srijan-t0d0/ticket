// /app/api/printData/route.js (or /api/printData if using pages)
import { getPrintData } from "@/actions";

export async function GET() {
  const data = await getPrintData();
  return new Response(JSON.stringify(data));
}
