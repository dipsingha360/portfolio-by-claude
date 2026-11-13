import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ImageFade } from "@/components/ImageFade";
import { ViewTransition } from "react";
import { Footer } from "@/components/Footer";
import { ContactProvider } from "@/components/ContactModal";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Product designer based in Bangladesh, working worldwide. I turn messy problems into simple and user friendly products.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Dip Singha — Product Designer",
    template: "%s | Dip Singha",
  },
  description,
  applicationName: "Dip Singha",
  // Each page points to its own address unless it sets something else.
  alternates: { canonical: "./" },
  // The share image comes from src/app/opengraph-image.tsx. Pages set only a
  // title and description, so this block applies everywhere.
  openGraph: {
    type: "website",
    siteName: "Dip Singha",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="text-label sr-only rounded-control bg-action-primary px-4 py-3 text-text-inverse focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <ContactProvider>
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            <ViewTransition>{children}</ViewTransition>
          </main>
          <ImageFade />
          <Footer />
        </ContactProvider>
      </body>
    </html>
  );
}
