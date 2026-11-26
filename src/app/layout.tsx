import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onzi Labs — Product Designer & Developer",
  description:
    "Portfolio de Esteban Herrero. Product Designer & Full Stack Developer basado en Buenos Aires, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="bg-white text-onzi-dark antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}