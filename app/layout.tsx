import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awebo.wtf",
  description: "Launch and trade tokens on L1X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
