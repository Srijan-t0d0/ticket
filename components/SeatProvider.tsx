"use client";

import { getBookedSeats, getBookingData } from "@/actions";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the type of the context value
interface SeatContextType {
  selectedSeats: number[];
  setSelectedSeats: (seats: number[]) => void;
  booked: string[];
}

// Create the context with a default null value
const SeatContext = createContext<SeatContextType | null>(null);

// Custom hook to access the SeatContext
export const useSeatContext = () => {
  const context = useContext(SeatContext);
  if (!context) {
    throw new Error("useSeatContext must be used within a SeatProvider");
  }
  return context;
};

// Define the props for SeatProvider, which will accept children
interface SeatProviderProps {
  children: ReactNode;
}

export default function SeatProvider({ children }: SeatProviderProps) {
  // Manage state for selectedSeats
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [booked, setBooked] = useState<string[]>([]);
  const [userBooking, setUserBooking] = useState<string[]>();

  const fetchBookingData = async () => {
    try {
      const data = await getBookedSeats();
      setUserBooking(data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  return (
    <SeatContext.Provider value={{ selectedSeats, setSelectedSeats, booked }}>
      {children}
    </SeatContext.Provider>
  );
}
