"use client"
import { QRScanner } from "@/components/QRScanner";
import { Ticket } from "@/components/ticket";
import { Button } from "@/components/ui/button";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import { useState } from "react";

export default function home (){


  return(
<main className= "relative h-screen w-screen bg-cover bg-center  lg:bg-[url('/Home_16_9.webp')] bg-[url('/Home_9_16.webp')]  ">
<Image alt="LOGO" src={'/logo.png'} width={400} height={400} className="left-1/2 absolute -translate-x-1/2"></Image>
<div className="text-3xl lg:text-4xl text-white absolute left-1/2 top-1/3 -translate-y-1/2 lg:-translate-y-[30%] -translate-x-1/2">A SECRET <span className="m-0 p-0 block font-bold text-8xl lg:text-[7rem] text-white">MOVIE<br/> NIGHT</span></div>
<div className="inline-block text-center font-semibold text-lg text-yellow-30 bg-yellow-50 p-2 left-1/2 absolute -translate-x-1/2 top-1/2">
    Sep 6, 2024 | 8:30 PM | 11AC3027
</div>
<Link href={'/bookticket'} className="left-1/2 absolute rounded-lg text-slate-800 -translate-x-1/2 bottom-1/3 bg-teal-500 active:border border-teal-300 p-3 font-bold hover:bg-teal-300 active:text-white">BOOK TICKET</Link> 
</main>
    )
}