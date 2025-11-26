import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "BeHealthy - Your Complete Health & Wellness Companion",
  description: "Transform your lifestyle with personalized diet plans, guided workouts, smart health monitoring, and AI-powered medical insights — all in one powerful app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
