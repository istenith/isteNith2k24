import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISTE NITH Official Website",
  description: "Created by Technical Team @ISTE-NITH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

    <html lang="en">
      <body className=  {inter.className} >
        <main >{children}</main> 

      </body>
    </html>

  );
}
