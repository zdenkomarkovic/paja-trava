import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
});

export const viewport: Viewport = {
  themeColor: "#1f4d2b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – održavanje zelenih površina i zalivni sistemi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "košenje trave",
    "zasnivanje travnjaka",
    "sadnja travnjaka",
    "orezivanje žive ograde",
    "sečenje drveća",
    "uređenje dvorišta",
    "održavanje zelenih površina",
    "automatski zalivni sistemi",
    "Hunter zalivni sistemi",
    "Paja Trava",
  ],
  category: "Uređenje dvorišta i održavanje zelenila",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
