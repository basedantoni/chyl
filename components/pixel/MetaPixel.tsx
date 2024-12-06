"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as pixel from "../../lib/metapixel";

const MetaPixel = () => {
        const [loaded, setLoaded] = useState(false);
        const pathname = usePathname();

        useEffect(() => {
                if (!loaded) return;

                pixel.pageview();
        }, [pathname, loaded]);

        return (
                <div>
                        <Script
                                id="meta-pixel"
                                src="/scripts/pixel.js"
                                strategy="afterInteractive"
                                onLoad={() => setLoaded(true)}
                                data-pixel-id={pixel.META_PIXEL_ID}
                        />
                </div>
        );
};

export default MetaPixel;
