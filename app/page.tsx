"use client";
import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-cover bg-center lg:bg-[url('/Home_16_9.webp')] bg-[url('/Home_9_16.webp')]">
      <div className="flex flex-col items-center gap-5">
        <Image
          alt="LOGO"
          className=""
          src={"/logo.png"}
          width={250}
          height={250}
        />
        <div className=" text-center text-xl text-white ">PRESENTS</div>
        <div className="text-3xl text-center lg:text-4xl text-white ">
          A SECRET
          <br />
          <span className="font-bold text-8xl lg:text-[7rem] text-[#fdcc69]">
            MOVIE
            <br />
            NIGHT
          </span>
        </div>
        <div className="inline-block text-center font-semibold text-lg text-black bg-yellow-50 p-2">
          Sep 6, 2024 | 8:30 PM | 11AC3027
        </div>
        <Link
          href={"/bookticket"}
          className="rounded-lg text-slate-800 bg-teal-500 active:border border-teal-300 p-3 font-bold hover:bg-teal-300 active:text-white"
        >
          BOOK TICKET
        </Link>
      </div>
    </main>
  );
}
