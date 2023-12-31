import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./../components/Footer";
import Footer from "./../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bappi Next App",
  description: "Generated for test by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
