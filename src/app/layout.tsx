import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/components/layout/Header/Header";
import "the-new-css-reset/css/reset.css";
import "./globals.css";
import "./layout.css";

const sans = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortex",
  description: "Cortex landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body className="body">
        <Header />
        {children}
      </body>
    </html>
  );
}
