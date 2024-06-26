import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./style/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-background`}>{children}</body>
    </html>
  );
}
