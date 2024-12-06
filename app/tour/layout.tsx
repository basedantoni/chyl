import Navigation from "@/components/Navigation";
import MetaPixel from "@/components/pixel/MetaPixel";
import type { Metadata } from "next";

export const metadata: Metadata = {
        title: "CHYL - Music",
        description: "CHYL 2024 Website",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <>
                        <div className="">
                                <Navigation />
                        </div>
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
                        {children}
                </>
        );
}
