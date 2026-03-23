import type { Metadata } from "next";
import { Fira_Code, Lora, Poppins } from "next/font/google";
import SideNav from "@/components/SideNav";
import "./globals.css";

const policeSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

const policeMono = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-code",
});

const policeSerif = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Mon Portfolio - Développeuse Web",
  description: "Portfolio de Yasmine HENNI-ZOURGUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${policeSans.variable} ${policeMono.variable} ${policeSerif.variable} antialiased`}
      >
        <SideNav />
        {children}
      </body>
    </html>
  );
}
