"use client";
import { Ticket } from "@/components/ticket";
import { useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";

export default function PrintTicket({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div className=" s">
      <div ref={targetRef} className="border w-[75rem] print-backdrop-fix">
        {children}
      </div>
      <button
        className="px-3 py-2 mt-5 bg-teal-500 rounded-lg"
        onClick={() => toPDF()}
      >
        Print
      </button>
    </div>
  );
}
