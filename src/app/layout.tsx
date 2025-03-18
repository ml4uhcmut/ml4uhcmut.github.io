import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FullPagePopupWrapper from "@components/page-wrapper";
import { getTrailingSlash } from "@/lib/get-trailing-slash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tech Lab | Research Team",
  description:
    "A research team focusing on cutting-edge AI technologies including computer vision, speech synthesis, 3D object detection, and deep learning applications.",
  keywords:
    "AI research, deep learning, computer vision, speech synthesis, 3D object detection, machine learning",
  authors: [
    { name: "Duc Dung Nguyen", url: "https://github.com/<yourusername>" }, // TODO: update username
  ],
  openGraph: {
    title: "AI Tech Lab | Research Team",
    description:
      "Advanced AI research in computer vision, speech synthesis, and deep learning",
    url: "https://<your-domain.com>", // TODO: update domain
    siteName: "AI Tech Lab",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trailingSlash = getTrailingSlash();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-screen scrollbar-hidden scroll-smooth overflow-y-auto`}
      >
        {/* Decorated background */}
        <div className={`fixed top-0 left-0 w-full h-screen`}>
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={trailingSlash + "images/hcm-pic/no1.avif"}
              alt=""
              className="absolute w-full h-full object-cover  bottom-0 left-0 "
            />
            <div className="w-full h-full bg-[#102542] bg-opacity-65 relative z-10">
              <div className="w-full h-full bg-gradient-to-b from-[#0A192F] from-[0.5%] via-transparent to-transparent bg-opacity-15"></div>
            </div>
          </div>
        </div>

        <main className="absolute z-10 top-0 left-0 h-screen w-full overflow-y-auto scrollbar-hidden ">
          <FullPagePopupWrapper>{children}</FullPagePopupWrapper>
        </main>
      </body>
    </html>
  );
}
