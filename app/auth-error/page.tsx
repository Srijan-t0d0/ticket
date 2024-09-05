"use client";
import { signIn } from "@/actions";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
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
