import { Playfair_Display, Quicksand, Parisienne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const parisienne = Parisienne({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const quicksand = Quicksand({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Cini Wedding Studio | Bridal Makeup & Wedding Photography · Bangalore",
  description:
    "Cini Wedding Studio — bridal makeup, hair styling, wedding photography and cinematic video coverage in Bangalore. Capturing your special day with love and detail.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${parisienne.variable} ${quicksand.variable}`}
    >
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
