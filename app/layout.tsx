import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShaktiFlow Motivator | Daily Fitness & Yogic Inspiration",
  description: "AI-powered daily motivation for fitness, yoga, and mindful living by Sheryl",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
