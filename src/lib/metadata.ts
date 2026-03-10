import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string;
    ogImage?: string;
}

export function generatePageMetadata({
    title,
    description,
    path,
    ogImage = "/images/og-default.jpg",
}: PageMetadataOptions): Metadata {
    const url = `${SITE_URL}${path}`;
    const ogTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: ogTitle,
            description,
            url,
            siteName: SITE_NAME,
            type: "website",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: ogTitle,
            description,
            images: [ogImage],
        },
    };
}
