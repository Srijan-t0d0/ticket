import NextAuth from "next-auth"
import Google , {GoogleProfile} from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import {AccessDenied, AuthError} from "@auth/core/errors"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks:{
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      
      console.log(auth)
      return !!auth
    }
  ,
    signIn({account,profile,user}){
      const emailDomain = user.email?.split('@')[1];
      if (emailDomain !== "iitjammu.ac.in") {
        return false
      } 
      return true
      
    }
  },
  session: {
    strategy: "jwt",
  },
  pages:{
    error:'/auth-error'
  }

})