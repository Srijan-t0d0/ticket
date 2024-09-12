import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astria-za",
  description: "Website for Astria-za club iit jammu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-white`}>
        <main className="h-dvh max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
