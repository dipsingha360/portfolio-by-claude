import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactProvider } from "@/components/ContactModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dip Singha — Product Designer",
    template: "%s | Dip Singha",
  },
  description:
    "Product designer based in Bangladesh, working worldwide. I turn messy problems into simple and user friendly products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ContactProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ContactProvider>
      </body>
    </html>
  );
}
