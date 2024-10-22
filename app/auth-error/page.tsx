"use client";
import { signIn } from "@/actions";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/dist/server/api-utils";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    signOut();
  });

  const session = useSession();
  if (session?.data?.user) return router.push("/book-ticket");
  return (
    <div className="h-screen bg-slate-900 w-screen flex justify-center items-center">
      <div className="bg-black p-5 rounded-lg flex flex-col justify-center items-center gap-4">
        <h1 className="text-center">Sign-in Error</h1>
        <p>Please use an IIT Jammu email address (@iitjammu.ac.in).</p>
        <Button
          onClick={async () => {
            await signIn("google");
          }}
        >
          SignIn
        </Button>
      </div>
    </div>
  );
}
