import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={rubik.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
