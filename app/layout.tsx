import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: "NS Fitness Revolution | Best Gym in AECS Layout, Bangalore",
  description: "NS Fitness Revolution – AECS Layout's most spacious gym. Premium equipment, certified trainers, and real transformations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}