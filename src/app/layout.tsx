import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/preloader";
import { Analytics } from '@vercel/analytics/react';
import { WhatsAppFloat } from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Isotech Painting and Deco Works | Professional Painting Services",
  description: "AI-Powered Painting & Decoration Services",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Preloader />
        <div id="main-content" className="opacity-0 transition-opacity duration-500 border-y-8 border-primary/20">
          {children}
          <WhatsAppFloat />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
