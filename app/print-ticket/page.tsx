"use client";
import { Ticket } from "@/components/ticket";

import { usePDF } from "react-to-pdf";

export default function Page() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div className="flex align-middle items-center flex-col ">
      <div ref={targetRef} className=" border w-[75rem] ">
        <Ticket />
      </div>
      <button
        className="px-3 py-2 mt-5 bg-teal-500 rounded-lg "
        onClick={() => toPDF()}
      >
        Print
      </button>
    </div>
  );
}
