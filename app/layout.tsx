import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Sidebarright from "../components/layout/Sidebarright";
import Sidebarleft from "../components/layout/Sidebarleft";
import Sidebardown from "../components/layout/Sidebadown";

const inter = Inter({
  weight: ["200", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Color Hunt Clone",
  description: "A beautiful palette explorer built with Next.js 15",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <div className="flex md:flex-row flex-col">
          <div className="w-[300px]  min-h-screen  hidden md:flex">
            <Sidebarleft />
          </div>
          <main className="w-full">{children}</main>
          <div className="block md:hidden">
            <Sidebardown />
          </div>
          <div className="w-[500px]  min-h-screen  hidden md:flex ">
            <Sidebarright />
          </div>
        </div>
      </body>
    </html>
  );
}
