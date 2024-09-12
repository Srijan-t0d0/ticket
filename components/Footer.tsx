import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full flex h-60 bg-slate-900 p-5">
      <div className="md:w-xl gap-2 flex flex-row justify-between w-full lg:w-10/12 mx-auto">
        <ul className="basis-full">
          <li>
            <Link href={"/privacy-policy"}>Privacy policy</Link>
          </li>
          <li>
            <Link href={"/terms-conditions"}>Terms and conditions</Link>
          </li>
          <li>
            <Link href={"/refund"}>Refunds</Link>
          </li>
        </ul>

        <section className="text-sm font-light">
          <h3 className="font-bold">Contact Us:</h3>
          <p>
            <span className="font-semibold">Phone:</span> +91 9569579671
          </p>
          <p>
            <span className="font-semibold">Email:</span>
            shlok31dec2004@gmail.com
          </p>
          <p className="basis-full">
            <span className="font-semibold inline">Address:</span> IIT Jammu,
            NH-44 , PO Nagrota, Jagti, Jammu and Kashmir 181221
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
