import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrderUp",
  description: "Easy daily ordering",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
