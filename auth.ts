import NextAuth from "next-auth";
import Google, { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import { AccessDenied, AuthError } from "@auth/core/errors";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    // signIn({ account, profile, user }) {
    //   const emailDomain = user.email?.split("@")[1];
    //   if (emailDomain !== "iitjammu.ac.in") {
    //     return false;
    //   }
    //   return true;
    // },
    session({ session, token }) {
      session.user.id = token.sub!;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/auth-error",
  },
});
