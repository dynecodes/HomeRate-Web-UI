
import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import MobileNav  from "@/components/Home/Navbar/MobileNav";

const font = Roboto({
  weight: ["100", "300", "400", "500", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Project | Next js",
  description: "Real Estate Website using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>   
        
        < ResponsiveNav />
        < MobileNav />
    

        {children}
      </body>
    </html>
  );
}
