import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MixCast Studios | Next Generation Virtual Production",
  description:
    "MixCast enables filmmakers to capture real actors inside 3D digital environments in real-time. A proprietary virtual production platform that is efficient, flexible, and affordable.",
  keywords: [
    "virtual production",
    "real-time compositing",
    "green screen technology",
    "film production",
    "VFX",
    "Unreal Engine",
    "volumetric capture",
    "MixCast",
  ],
  metadataBase: new URL("https://website-cyan-three-79.vercel.app"),
  openGraph: {
    title: "MixCast Studios | Next Generation Virtual Production",
    description:
      "Capture real actors inside 3D digital environments in real-time. Efficient, flexible, affordable virtual production.",
    type: "website",
    locale: "en_US",
    siteName: "MixCast Studios",
  },
  other: {
    "theme-color": "#050508",
  },
  twitter: {
    card: "summary_large_image",
    title: "MixCast Studios | Next Generation Virtual Production",
    description:
      "Capture real actors inside 3D digital environments in real-time.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg-primary focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
