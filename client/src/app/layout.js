import { Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mt. Everest Summiters Club –Rolwaling, Dolakha",
  description: "Mt. Everest Summiters Club – Rolwaling, Dolakha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${montserrat.variable} ${josefin.variable}`}>
      <body
        itemType="https://schema.org/WebPage"
        itemScope
        className="min-h-screen"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
