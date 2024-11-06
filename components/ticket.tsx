import { getBookingData } from "@/actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import QRCode from "react-qr-code";

export const Ticket = async () => {
  const { booking, user } = await getBookingData();

  const seat = booking?.seats[0];
  if (!seat) return redirect("/bookticket");
  const bookingId = booking?.id;
  const email = user?.email;

  return (
    <div className="flex">
      <div className="bg-[url('/ticketBackground.png')]  bg-left flex flex-1 relative z-[1] overflow-hidden">
        <div className="h-full ticket-overlay absolute w-full backdrop-blur-sm backdrop brightness-50 -z-10"></div>
        <div className="flex flex-col">
          <Image
            alt="LOGO"
            src="/logo.png"
            height={479 / 2}
            width={372 / 2}
            className="z-auto"
          />
          <Image
            alt="LOGO"
            src="/popcorn.png"
            height={250}
            width={250}
            className="-translate-x-1/2  rotate-12"
          />
        </div>

        <div className="flex flex-col   flex-grow-[00.1] divide-y-2 divide-dashed  justify-center">
          <div className="text-3xl text-white">
            A SECRET{" "}
            <span className="block font-bold text-8xl text-white">
              MOVIE
              <br /> NIGHT
            </span>
          </div>
          <div>
            <div className=" text-white flex flex-grow justify-center gap-3 bottom-5 ">
              <div>ROW : {Math.round(Number(seat) / 14) + 1}</div>
              <div className="px-2">SEAT NUMBER : {seat}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 flex flex-col px-12 py-10 justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="p-2 px-6 text-center font-semibold text-lg text-yellow-100 text-opacity-75 bg-red-700  ">
            Nov 9, 2024
            <br />
            8:30 PM
          </div>
          <div className="pt-2 text-white">THEATRE : 11AC3027</div>
        </div>
        <div className="size-48 bg-white ">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            viewBox={`0 0 256 256`}
            value={JSON.stringify({ email, seat, bookingId })}
          />
        </div>
      </div>
    </div>
  );
};
