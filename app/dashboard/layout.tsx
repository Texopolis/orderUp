import UserButtonComp from "@/components/UserButtonComp";
import "../globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MenuBarComp from "@/components/MenuBarComp";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "OrderUp",
  description: "Easy daily ordering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <MenuBarComp />
      {children}
    </div>
  );
}
