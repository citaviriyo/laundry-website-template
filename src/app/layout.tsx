import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KilauCuci Laundry & Dry Clean - Jasa Laundry Premium",
  description: "Laundry bersih, wangi, dan tepat waktu untuk keseharian Anda. Layanan antar-jemput gratis area apartemen dan perumahan.",
  keywords: ["Laundry", "Dry Clean", "KilauCuci", "Laundry Premium", "Antar Jemput", "Jakarta"],
  authors: [{ name: "KilauCuci Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "KilauCuci Laundry & Dry Clean",
    description: "Laundry bersih, wangi, dan tepat waktu untuk keseharian Anda",
    url: "https://kilaucuci-laundry.com",
    siteName: "KilauCuci Laundry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KilauCuci Laundry & Dry Clean",
    description: "Laundry bersih, wangi, dan tepat waktu untuk keseharian Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
