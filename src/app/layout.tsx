import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onzi Labs — Product Designer & Developer",
  description:
    "Portfolio de Esteban Herrero. Product Designer & Full Stack Developer basado en Buenos Aires, Argentina.",
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
    },
    openGraph: {
      title: "Onzi Labs — Product Designer & Developer",
      description:
        "Portfolio de Esteban Herrero. Diseño y desarrollo de productos digitales de extremo a extremo.",
      url: "https://onzi.dev",
      siteName: "Onzi Labs",
      locale: "es_AR",
      type: "website",
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="bg-white text-onzi-dark antialiased">
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}