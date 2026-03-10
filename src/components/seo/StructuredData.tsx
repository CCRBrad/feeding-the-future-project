import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

interface StructuredDataProps {
    page?: string;
    breadcrumbs?: { name: string; url: string }[];
}

export default function StructuredData({ page, breadcrumbs }: StructuredDataProps) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        foundingDate: "2024",
        sameAs: [],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "General Inquiry",
            url: `${SITE_URL}/contact/`,
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
        },
    };

    const breadcrumbSchema = breadcrumbs
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: crumb.url,
            })),
        }
        : null;

    return (
        <>
            {/* Organization Schema — always present */}
            {page === "home" && (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(organizationSchema),
                        }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(websiteSchema),
                        }}
                    />
                </>
            )}

            {/* BreadcrumbList Schema — on inner pages */}
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />
            )}
        </>
    );
}
