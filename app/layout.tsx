import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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
  title: "Ashar Ullah Khan | Senior Full Stack & AI Developer Portfolio",
  description:
    "Explore the professional portfolio of Ashar Ullah Khan — Senior Full Stack MERN & AI Chatbot Developer specializing in high-performance web applications, RAG systems, and digital automation.",
    
  keywords: [
    "Ashar Ullah Khan",
    "Ashar Portfolio",
    "AI Chatbot Developer",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "FastAPI RAG Developer",
    "Web Developer Pakistan",
    "Freelance Web Developer",
    "Senior Full Stack Developer"
  ],
  authors: [
    {
      name: "Ashar Ullah Khan",
      url: "https://ashar.innovatesoftwaresolution.com/",
    },
  ],
  creator: "Ashar Ullah Khan",
  publisher: "Ashar Ullah Khan",
  metadataBase: new URL("https://ashar.innovatesoftwaresolution.com/"),
  alternates: {
    canonical: "https://ashar.innovatesoftwaresolution.com/",
  },
  openGraph: {
    title: "Ashar Ullah Khan | Full Stack & AI Developer Portfolio",
    description:
      "Check out the portfolio of Ashar Ullah Khan, a professional MERN & AI Developer specializing in full-stack web, AI Chatbots, and mobile apps.",
    url: "https://ashar.innovatesoftwaresolution.com/",
    siteName: "Ashar Ullah Khan Portfolio",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/anonymous%40gmail.com%20%2B%201753123017625?alt=media&token=b658759c-25da-4c4e-a989-a0c8692ebcea",
        width: 1200,
        height: 630,
        alt: "Ashar Ullah Khan Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar Ullah Khan | Senior Full Stack & AI Developer",
    description:
      "Explore the portfolio of Full Stack & AI Chatbot Developer Ashar Ullah Khan.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/anonymous%40gmail.com%20%2B%201753123017625?alt=media&token=b658759c-25da-4c4e-a989-a0c8692ebcea",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-[#09090B] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

