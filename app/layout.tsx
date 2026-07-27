import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nileai.solutions",
  ),

  title: {
    default:
      "AI Solutions Uganda | AI Software & Automation | Nile Ai Solutions",
    template:
      "%s | Nile Ai Solutions",
  },

  description:
    "Nile Ai Solutions is an AI company in Uganda building AI software, automation systems, AI agents, websites and custom digital platforms for organisations across Africa.",

  applicationName:
    "Nile Ai Solutions",

  keywords: [
    "Nile Ai Solutions",
    "AI company Uganda",
    "AI software development Uganda",
    "artificial intelligence Africa",
    "AI automation Uganda",
    "custom software development Uganda",
    "website development Uganda",
    "AI agents",
    "business automation",
    "digital transformation Africa",
  ],

  authors: [
    {
      name: "Nile Ai Solutions",
      url: "https://nileai.solutions",
    },
  ],

  creator: "Nile Ai Solutions",
  publisher: "Nile Ai Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "/",
    siteName: "Nile Ai Solutions",

    title:
      "Nile Ai Solutions | Intelligent Systems for Africa",

    description:
      "AI-powered software, automation and digital solutions that help organisations operate smarter, grow faster and create greater impact.",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nile Ai Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Nile Ai Solutions | Intelligent Systems for Africa",

    description:
      "AI-powered software, automation and digital solutions for organisations across Africa.",

    images: [
      "/opengraph-image",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <OrganizationSchema />

        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>

        <script
          id="nileflow-website-widget"
          src="https://nileflow-five.vercel.app/widget/nileflow.js?v=715a80f"
          data-widget-key="9f505426-fe5e-4165-b2f8-50a2beba96b6"
          async
        />
      </body>
    </html>
  );
}