import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000"
  ),
  title: "DÉTOX COGNITIVE : Diagnostic et Recalibrage pour INFJ/INFP | BreakYourCycle",
  description:
    "La méthode DBR pour INFJ/INFP : identifiez vos failles cognitives et sortez définitivement de vos schémas amoureux toxiques. 47€ — 50 places.",
  openGraph: {
    title: "DÉTOX COGNITIVE pour INFJ/INFP",
    description:
      "Votre cerveau n'est pas cassé. Il est mal calibré. Voici comment le reconfigurer.",
    images: [{ url: "/images/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-bg text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
