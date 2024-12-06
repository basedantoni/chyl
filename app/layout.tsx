import Navigation from "@/components/Navigation";
import LayloProvider from "@/context/LayloProvider";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import VideoProvider from "@/context/VideoProvider";
import SmoothScroll from "@/components/SmoothScroll";
import MetaPixel from "@/components/pixel/MetaPixel";

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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={`${inter.className} ${space.className}`}>
        <SmoothScroll>
          <VideoProvider>
            <LayloProvider>
              <div className='sm:hidden'>
                <Navigation />
              </div>
              {children}
              <MetaPixel />
              <noscript
                id="meta-pixel-noscript"
                dangerouslySetInnerHTML={{
                  __html: `
                                          <img
                                            height="1"
                                            width="1"
                                            style={{ display: "none" }}
                                            src="https://www.facebook.com/tr?id=574999218820481&ev=PageView&noscript=1"
                                          />
                                ` }}
              >
              </noscript>
            </LayloProvider>
          </VideoProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
