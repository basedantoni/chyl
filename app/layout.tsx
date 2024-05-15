import Navigation from "@/components/Navigation";
import Watermark from "@/components/Watermark";
import LayloProvider from "@/context/LayloProvider";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import VideoProvider from "@/context/VideoProvider";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CHYL",
  description: "CHYL 2024 Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${space.className}`}>
        <Watermark />
        <VideoProvider>
          <LayloProvider>
            <div className='sm:hidden'>
              <Navigation />
            </div>
            {children}
          </LayloProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
