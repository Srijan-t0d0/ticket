"use client";
import { Scanner, centerText } from "@yudiel/react-qr-scanner";

export default function Page() {
  return (
    <Scanner
      components={{
        audio: true,
        onOff: true,
        torch: true,
        zoom: true,
        finder: true,
        tracker: centerText,
      }}
      allowMultiple={true}
      onScan={(result) => console.log(result)}
    />
  );
}
