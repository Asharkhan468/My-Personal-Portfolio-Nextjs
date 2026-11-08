import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/ChatBot";
import { productionUrl } from "@/data/site";
import "@/styles/theme.css";
import "@/styles/animations.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: {
    default: "Innovate Software Solution | Software & AI Development",
    template: "%s | Innovate Software Solution",
  },
  description:
    "Innovate Software Solution builds business websites, mobile applications, AI chatbots, and thoughtful software products for teams worldwide.",
  applicationName: "Innovate Software Solution",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Innovate Software Solution",
    title: "Innovate Software Solution | Software & AI Development",
    description:
      "Business websites, mobile applications, and AI solutions designed around real business needs.",
    url: productionUrl,
  },
  twitter: {
    card: "summary",
    title: "Innovate Software Solution | Software & AI Development",
    description:
      "Business websites, mobile applications, and AI solutions designed around real business needs.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innovate Software Solution",
  url: productionUrl,
  email: "ashar@innovatesoftwaresolution.com",
  sameAs: [
    "https://github.com/Asharkhan468",
    "https://www.linkedin.com/in/ashar-ullah-khan-644a20374/",
    "https://www.instagram.com/dev_ashar_khan/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
