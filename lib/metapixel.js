export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const pageview = () => {
        window.fbq("track", "PageView");
}

export const event = (name, options = {}) => {
        window.fbq("track", name, options)
}
