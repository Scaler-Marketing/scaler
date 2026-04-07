import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Esposito Property Maintenance | Professional Landscaping & Property Care — Rockland, MA",
  description:
    "Full-service landscape construction, maintenance, and excavation. Trusted by South Shore homeowners and businesses since day one. Call (781) 857-8327.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
