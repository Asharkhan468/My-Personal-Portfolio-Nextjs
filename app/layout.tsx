import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Monda } from "next/font/google";

const monda = Monda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-monda",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Ashar Ullah Khan | Software Developer Portfolio",
  description:
    "Explore the professional portfolio of Ashar Ullah Khan — a Full Stack MERN Developer specializing in modern web and mobile application development.",
    
  keywords: [
    "Ashar Ullah Khan",
    "Ashar Portfolio",
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer in Pakistan",
    "Freelance Web Developer",
    "Ashar Ullah Khan Website",
    "Professional Portfolio",
    "Ashar Software Developer"
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
    title: "Ashar Ullah Khan | Full Stack Web Developer Portfolio",
    description:
      "Check out the portfolio of Ashar Ullah Khan, a professional MERN Stack Developer specializing in full-stack web and mobile apps.",
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
    title: "Ashar Ullah Khan | Web Developer",
    description:
      "Explore the portfolio of MERN Stack Developer Ashar Ullah Khan.",
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
    <html lang="en">
      <body
        className={` ${monda.variable} antialiased  scrollbar-hide bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-200 font-monda `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
