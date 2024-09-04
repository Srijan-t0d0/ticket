"use client";
import { MdEventSeat } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const rows = [1, 2, 3, 4, 5, 6];
  const [selectedSeat, setSelectedSeat] = useState<number[]>([]);

  useEffect(() => {
    console.log(selectedSeat);
  }, [selectedSeat]);

  const handleClick = (number: number) => {
    setSelectedSeat((prevSelected) => {
      if (prevSelected.includes(number)) {
        return prevSelected.filter((seat) => seat !== number);
      } else {
        return [...prevSelected, number];
      }
    });
  };

  return (
    <div className=" p-4 flex flex-col h-screen w-screen justify-center align-middle items-center ps-6">
      <div className="mb-40 relative w-[780px] flex justify-center  align-middle">
        <div className="absolute w-[780px] transitiona-all  opacity-100 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg"></div>
        <div className="relative w-[780px] flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl ">
          Screen
        </div>
      </div>

      {rows.map((r) => (
        <div className="flex gap-5 " key={`row-${r}`}>
          <div className="inline-flex">
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 1)}
              number={(r - 1) * 14 + 1}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 2)}
              number={(r - 1) * 14 + 2}
            />
          </div>
          <div className="inline-flex">
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 3)}
              number={(r - 1) * 14 + 3}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 4)}
              number={(r - 1) * 14 + 4}
            />
          </div>
          <div className="inline-flex">
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 5)}
              number={(r - 1) * 14 + 5}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 6)}
              number={(r - 1) * 14 + 6}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 7)}
              number={(r - 1) * 14 + 7}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 8)}
              number={(r - 1) * 14 + 8}
            />
          </div>
          <div className="flex">
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 9)}
              number={(r - 1) * 14 + 9}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 10)}
              number={(r - 1) * 14 + 10}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 11)}
              number={(r - 1) * 14 + 11}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 12)}
              number={(r - 1) * 14 + 12}
            />
          </div>
          <div className="flex">
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 13)}
              number={(r - 1) * 14 + 13}
            />
            <Seat
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 14)}
              number={(r - 1) * 14 + 14}
            />
          </div>
        </div>
      ))}
      <Link
        className="w-fit mt-10 bg-teal-500 px-4 py-2  rounded-md"
        href={{
          pathname: "/checkout",
          query: { seats: selectedSeat.join(",") },
        }}
      >
        Checkout
      </Link>
    </div>
  );
}

interface SeatProps {
  number: number;
  handleClick: (number: number) => void;
  selected?: boolean;
}

const Seat = ({ number, handleClick, selected }: SeatProps) => {
  return (
    <div
      className="relative  hover:cursor-pointer"
      onClick={() => handleClick(number)}
    >
      <MdEventSeat
        size={50}
        fill={selected ? "#8888FF" : "#ffffff"} //
      />

      <div
        className="absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -70%)" }}
      >
        <span
          className={`font-bold text-[1rem] ${
            !selected ? "text-black" : "text-white"
          }`}
        >
          {number.toString()}
        </span>
      </div>
    </div>
  );
};
