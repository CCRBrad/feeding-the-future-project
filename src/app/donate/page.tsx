import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Support the Mission",
    description:
        "Your generosity helps Feeding the Future Project serve children, support families, strengthen school partnerships, and create lasting community impact.",
    path: "/donate/",
});

export default function DonatePage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Donate", url: `${SITE_URL}/donate/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Donate" }]} />

            <PageHero
                title="Support the Mission"
                description="Your generosity helps Feeding the Future Project serve children, support families, strengthen school partnerships, and create lasting community impact."
                primaryCta={{ label: "Donate Today", href: "#donate-form" }}
            />

            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Why Giving Matters"
                    title="Your Support Creates Real Impact"
                    description="Every donation helps make practical support possible. Giving helps create the resources, opportunities, and relationships needed to serve with consistency, dignity, and care."
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Families Supported", icon: "❤️" },
                        { label: "Schools Partnered", icon: "🏫" },
                        { label: "Events Hosted", icon: "📅" },
                        { label: "Volunteers Engaged", icon: "🤝" },
                    ].map((item) => (
                        <div key={item.label} className="text-center bg-brand-50 rounded-2xl p-6 border border-brand-100">
                            <div className="text-3xl mb-3"><span role="img" aria-hidden="true">{item.icon}</span></div>
                            <p className="font-medium text-neutral-800 text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-neutral-50">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="Donor Trust"
                        title="Your Generosity, Used Responsibly"
                        description="We believe support should be handled responsibly and used to help create real, meaningful outcomes in the community."
                    />
                </div>
            </Section>

            <Section className="bg-white" id="donate-form">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Make a Difference Today</h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        If you want to be part of this mission, giving is one of the strongest ways to help move it forward.
                    </p>
                    <div className="bg-gradient-to-br from-brand-50 to-warm-50 rounded-2xl border border-brand-200 p-8 sm:p-12">
                        <p className="text-neutral-700 mb-6">
                            To donate, please contact us directly or visit our secure donation page.
                        </p>
                        <Button href="/contact/" variant="primary" size="lg">
                            Donate Today
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
