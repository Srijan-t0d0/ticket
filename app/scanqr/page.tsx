"use client"
import { QRScanner } from "@/components/QRScanner";
import { Ticket } from "@/components/ticket";
import { Button } from "@/components/ui/button";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { stringify } from "querystring";
import { useState } from "react";

export default function page (){
  const [data,SetData] = useState<null|IDetectedBarcode[]>(null)
  const onScan = (data:IDetectedBarcode[]) => {
    SetData(data)
    console.log(data)
  }

  return(
    <div>
      <Ticket/>
     </div>
    )
}