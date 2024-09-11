"use client";

import { Margin, usePDF } from "react-to-pdf";
import { useReactToPrint } from "react-to-print";

export default function PrintTicket({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toPDF, targetRef } = usePDF({
    filename: "page.pdf",
    page: { margin: Margin.SMALL },
  });
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
  });

  return (
    <div className=" s">
      <div ref={targetRef} className="border w-[75rem] print-backdrop-fix">
        {children}
      </div>
      <button
        className="px-3 py-2 mt-5 bg-teal-500 rounded-lg"
        onClick={() => {
          handlePrint();
        }}
      >
        Print
      </button>
    </div>
  );
}
