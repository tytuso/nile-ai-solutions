import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nileai.solutions"),
  title: {
    default: "Nile AI Solutions | Intelligent Systems for Africa",
    template: "%s | Nile AI Solutions",
  },
  description:
    "Nile AI Solutions builds AI software, agents, automation, websites and custom digital systems for organisations across Africa.",
  applicationName: "Nile AI Solutions",
  keywords: [
    "Nile AI Solutions",
    "AI company Uganda",
    "AI software development Uganda",
    "AI automation Africa",
    "AI agents",
    "custom software development",
    "website development Uganda",
    "digital transformation Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "/",
    siteName: "Nile AI Solutions",
    title: "Nile AI Solutions | Intelligent Systems for Africa",
    description:
      "AI-powered software, automation and digital solutions built for organisations across Africa.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nile AI Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nile AI Solutions | Intelligent Systems for Africa",
    description:
      "AI-powered software, automation and digital solutions built for organisations across Africa.",
    images: ["/opengraph-image"],
  },
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
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
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
