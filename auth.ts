import NextAuth from "next-auth"
import Google , {GoogleProfile} from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks:{
    signIn({account,profile,user}){
      console.log({account,profile,user});
      console.log(user.email?.split('@'))
      return true
      
    }
  },
  session: {
    strategy: "jwt",
  },

})