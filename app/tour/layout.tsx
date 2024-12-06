import Navigation from "@/components/Navigation";
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
                        {children}
                </>
        );
}
