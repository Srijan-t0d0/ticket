import NextAuth from "next-auth";
import { authConfig } from "./auth";
import { NextResponse } from "next/server";

const auth = NextAuth(authConfig).auth;

export const middleware = auth((req) => {
  console.log("middleware", req.auth, req.nextUrl);
  if (!req.auth) {
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${req.nextUrl.href}`, req.nextUrl)
    );
  }
});
export const config = {
  matcher: ["/bookticket", "/checkout", "/print-ticket"],
};
