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
  title: "ANDRI - Solusi Profesional untuk Bisnis Anda",
  description: "ANDRI adalah mitra terpercaya untuk mengembangkan bisnis Anda dengan solusi profesional dan inovatif yang disesuaikan dengan kebutuhan spesifik Anda.",
  keywords: ["ANDRI", "bisnis", "konsultasi", "profesional", "solusi", "Bogor", "Indonesia"],
  authors: [{ name: "ANDRI Team" }],
  icons: {
    icon: "/logo-andri.png",
  },
  openGraph: {
    title: "ANDRI - Solusi Profesional untuk Bisnis Anda",
    description: "Mitra terpercaya untuk mengembangkan bisnis Anda dengan solusi profesional dan inovatif",
    url: "https://andri.com",
    siteName: "ANDRI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDRI - Solusi Profesional untuk Bisnis Anda",
    description: "Mitra terpercaya untuk mengembangkan bisnis Anda dengan solusi profesional dan inovatif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
