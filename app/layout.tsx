import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: {
    default: "SpyVPN",
    template: "%s | SpyVpn",
  },

  description: "The best VPN in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 container px-10 xl:px-0 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
