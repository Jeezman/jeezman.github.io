import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/src/provider";
import { Layout } from "@/src/components/Layout";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Jeezman",
    default: "Jeezman - Software engineer and Bitcoiner",
  },
  openGraph: {
    type: "website",
    title: "Jeezman - Software dev, Bitcoiner",
    description: "Software engineer, building Bitcoin and Lightning products",
  },
  metadataBase: new URL("https://jeezman.github.io"),
  description: "Software engineer, building Bitcoin and Lightning products",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-full bg-zinc-50 dark:bg-black`}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
