import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";



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
// app/layout.tsx or wherever you're exporting metadata
export const metadata: Metadata = {
  title: "Ashar Ullah Khan | MERN Stack Developer Portfolio",
  description: "Explore the professional portfolio of Ashar Ullah Khan — a Full Stack MERN Developer specializing in modern web and mobile application development.",
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
    "Professional Portfolio"
  ],
  authors: [{ name: "Ashar Ullah Khan", url: "https://practice-nextjs-iota-one.vercel.app/" }],
  creator: "Ashar Ullah Khan",
  publisher: "Ashar Ullah Khan",
  metadataBase: new URL("https://practice-nextjs-iota-one.vercel.app/"),
  alternates: {
    canonical: "https://practice-nextjs-iota-one.vercel.app/",
  },
  openGraph: {
    title: "Ashar Ullah Khan | Full Stack Web Developer Portfolio",
    description:
      "Check out the portfolio of Ashar Ullah Khan, a professional MERN Stack Developer specializing in full-stack web and mobile apps.",
    url: "https://practice-nextjs-iota-one.vercel.app/",
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
    description: "Explore the portfolio of MERN Stack Developer Ashar Ullah Khan.",
    images: ["https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/anonymous%40gmail.com%20%2B%201753123017625?alt=media&token=b658759c-25da-4c4e-a989-a0c8692ebcea"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100  scrollbar-hide `}
      >
         
            <Navbar/>
            {children}
          
      </body>
    </html>
  );
}
