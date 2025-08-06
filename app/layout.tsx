// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthProvider } from "./context/auth-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShaadiDesk - Complete Event Management Platform",
  description:
    "Book wedding halls, find makeup artists, caterers, and all event services in Pakistan",
  keywords:
    "wedding halls, event management, makeup artist, catering, Pakistan, shaadi",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}