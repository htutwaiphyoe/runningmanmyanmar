import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Running Man Myanmar Wiki",
  description: "Running Man Myanmar Wiki",
};

type RootLayoutProps = PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full flex flex-col justify-center items-center bg-image min-h-screen p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
