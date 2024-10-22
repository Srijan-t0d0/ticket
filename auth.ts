import NextAuth, { NextAuthConfig } from "next-auth";
import Google, { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import { AccessDenied, AuthError } from "@auth/core/errors";

export const authConfig: NextAuthConfig = {
  providers: [Google],
  callbacks: {
    // signIn({ account, profile, user }) {
    //   return !!user.email?.endsWith("@iitjammu.ac.in");
    // },
    session({ session, token }) {
      session.user.id = token.sub!;
      return session;
    },
    // authorized({ auth, request: { nextUrl } }) {
    //   console.log({ nextUrl, auth });
    //   return true;
    // },
    redirect({ baseUrl, url }) {
      console.log("auth.ts", baseUrl);
      return url;
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/auth-error",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
});
