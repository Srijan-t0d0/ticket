"use client";
import {
  IDetectedBarcode,
  Scanner,
  centerText,
} from "@yudiel/react-qr-scanner";
import { useState } from "react";

export default function Page() {
  const [tiketInfo, setTiketInfo] = useState<IDetectedBarcode[]>([]);
  let info: {
    name: string;
    email: string;
    seat: string;
  } | null = null;

  try {
    info = JSON.parse(tiketInfo[0]?.rawValue) || {};
  } catch (error) {
    console.error("Error parsing ticket information:", error);
    info = null; // Assign a default value or handle error as needed
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <Scanner
        classNames={{ container: "max-w-screen-md" }}
        styles={{ finderBorder: 1 }}
        components={{
          audio: true,
          onOff: true,
          torch: true,
          zoom: true,
          finder: true,
          tracker: centerText,
        }}
        allowMultiple={true}
        onScan={(result) => {
          console.log(result);
          setTiketInfo(result);
        }}
      />
      {info && (
        <div className="p-4 mt-5 text-xl">
          <div>Name : {info.name}</div>
          <div>Seat No : {info.seat}</div>
          <div>Email : {info.email}</div>
        </div>
      )}
    </div>
  );
}
