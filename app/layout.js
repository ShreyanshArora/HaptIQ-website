import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "HaptIQ — Feel the Game",
  description: "HaptIQ is a next-gen haptic feedback game that lets you feel every touch, tap, and vibration. Download now on the App Store.",
  keywords: "HaptIQ, haptic game, mobile game, iOS game, haptic feedback, touch game",
  openGraph: {
    title: "HaptIQ — Feel the Game",
    description: "A next-gen haptic feedback game. Feel every touch.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
