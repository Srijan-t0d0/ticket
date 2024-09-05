import Image from "next/image";

export const Ticket = () => {
  return (
    <div className="flex w-[75rem] overflow-hidden">
      <div className="bg-[url('/ticketBackground.jpeg')]  bg-left h-96 w-[66.6%] relative p-2 z-[1]">
        <div className="absolute left-0 top-0 h-full w-full backdrop-blur-sm backdrop brightness-50 -z-10"></div>
        <Image
          alt="LOGO"
          src="/logo.png"
          height={479 / 2}
          width={372 / 2}
          className="z-auto"
        ></Image>
        <Image
          alt="LOGO"
          src="/popcorn.png"
          height={250}
          width={250}
          className="rotate-12 -translate-x-16 "
        ></Image>

        <div className="text-3xl text-white absolute left-60 top-16">
          A SECRET{" "}
          <span className="m-0 p-0 block font-bold text-8xl text-white">
            MOVIE
            <br /> NIGHT
          </span>
        </div>
        <div className="absolute text-white flex gap-3 bottom-5 left-1/2 -translate-x-1/2 divide-x divide-dashed">
          <div>ROW : 1</div>
          <div className="px-2">SEAT NUMBER : 12</div>
        </div>
      </div>
      <div className="bg-slate-800 relative flex-1">
        <div className="left-12 top-20 absolute">
          <div className="h-16 w-52 text-center font-semibold text-lg text-yellow-300 text-opacity-75 bg-red-500  p-2">
            Sep 6, 2024
            <br />
            8:30 PM
          </div>
          <div className="pt-2 text-white">THEATRE : 11AC3027</div>
        </div>
        <div className="size-40 bg-white absolute bottom-2 right-2">QRCODE</div>
      </div>
    </div>
  );
};
