"use client";
import { MdEventSeat } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getBookedSeats } from "@/actions";

export default function Page() {
  const rows = [1, 2, 3, 4, 5, 6];
  const [bookings, setBookings] = useState<string[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<number[]>([]);

  useEffect(() => {
    getBookedSeats().then((val) => {
      setBookings(val);
    });
  }, []);

  useEffect(() => {
    console.log(selectedSeat);
  }, [selectedSeat, bookings]);

  const handleClick = (number: number) => {
    if (!bookings.includes(number.toString())) {
      setSelectedSeat((prevSelected) => {
        if (prevSelected.includes(number)) {
          return prevSelected.filter((seat) => seat !== number);
        } else {
          return [...prevSelected, number];
        }
      });
    }
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
              booked={bookings.includes(String((r - 1) * 14 + 1))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 1)}
              number={(r - 1) * 14 + 1}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 2))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 2)}
              number={(r - 1) * 14 + 2}
            />
          </div>
          <div className="inline-flex">
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 3))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 3)}
              number={(r - 1) * 14 + 3}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 4))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 4)}
              number={(r - 1) * 14 + 4}
            />
          </div>
          <div className="inline-flex">
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 5))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 5)}
              number={(r - 1) * 14 + 5}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 6))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 6)}
              number={(r - 1) * 14 + 6}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 7))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 7)}
              number={(r - 1) * 14 + 7}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 8))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 8)}
              number={(r - 1) * 14 + 8}
            />
          </div>
          <div className="flex">
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 9))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 9)}
              number={(r - 1) * 14 + 9}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 10))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 10)}
              number={(r - 1) * 14 + 10}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 11))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 11)}
              number={(r - 1) * 14 + 11}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 12))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 12)}
              number={(r - 1) * 14 + 12}
            />
          </div>
          <div className="flex">
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 13))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 13)}
              number={(r - 1) * 14 + 13}
            />
            <Seat
              booked={bookings.includes(String((r - 1) * 14 + 14))}
              handleClick={handleClick}
              selected={selectedSeat.includes((r - 1) * 14 + 14)}
              number={(r - 1) * 14 + 14}
            />
          </div>
        </div>
      ))}
      {!!selectedSeat.length && (
        <Link
          className={`rounded-lg mt-10 text-slate-800 bg-teal-500 active:border border-teal-300 px-3 py-2 font-bold hover:bg-teal-300 active:text-white`}
          href={{
            pathname: "/checkout",
            query: { seats: selectedSeat.join(",") },
          }}
        >
          Checkout
        </Link>
      )}
    </div>
  );
}

interface SeatProps {
  booked: boolean;
  number: number;
  handleClick: (number: number) => void;
  selected?: boolean;
}

const Seat = ({ number, handleClick, selected, booked }: SeatProps) => {
  return (
    <div
      className={`relative  hover:cursor-pointer ${
        booked ? "hover:cursor-not-allowed" : ""
      }`}
      onClick={() => handleClick(number)}
    >
      <MdEventSeat
        size={50}
        fill={booked ? "#555555" : selected ? "#8888FF" : "#ffffff"} //
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
