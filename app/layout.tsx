import Navigation from "@/components/Navigation";
import LayloProvider from "@/context/LayloProvider";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
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
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=574999218820481&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '574999218820481'); 
              fbq('track', 'PageView');           
        `}
      </Script>


      <body className={`${inter.className} ${space.className}`}>
        <SmoothScroll>
          <VideoProvider>
            <LayloProvider>
              <div className='sm:hidden'>
                <Navigation />
              </div>
              {children}
              <MetaPixel />
            </LayloProvider>
          </VideoProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
