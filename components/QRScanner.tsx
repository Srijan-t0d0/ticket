import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';


interface Props{
    onScan:(result:IDetectedBarcode[])=>void
}

export const QRScanner = ({onScan}:Props) => {
    return(
   
    <Scanner allowMultiple onScan={(result) => onScan(result)} />

   )
};
