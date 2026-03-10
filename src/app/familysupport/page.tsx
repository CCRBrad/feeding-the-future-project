import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Family Support",
    description:
        "Feeding the Future Project is committed to serving families with dignity, care, and practical support.",
    path: "/familysupport/",
});

export default function FamilySupportPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Family Support", url: `${SITE_URL}/familysupport/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Family Support" }]} />

            <PageHero
                title="Family Support"
                description="Feeding the Future Project is committed to serving families with dignity, care, and practical support."
                primaryCta={{ label: "Reach Out", href: "/contact/" }}
            />

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="Our Commitment"
                        title="Support That Feels Clear and Respectful"
                        description="Family support should feel clear, respectful, and accessible. This page should help families understand the heart behind the mission and the kinds of support or connection that may be available."
                    />
                </div>
            </Section>

            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="What to Expect" title="How We Can Help" />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
                    {[
                        { title: "A Welcoming First Step", desc: "We want to make reaching out easy and comfortable." },
                        { title: "Practical Support", desc: "Real help designed around what families actually need." },
                        { title: "Dignified Service", desc: "Every family is treated with respect and care." },
                        { title: "Community Connection", desc: "Linking families with resources and people who care." },
                    ].map((item) => (
                        <div key={item.title} className="bg-white rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">We Want to Help</h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        If you are looking for help, have questions, or want to connect, we want to make that first step as clear and welcoming as possible.
                    </p>
                    <Button href="/contact/" variant="primary" size="lg">Reach Out</Button>
                </div>
            </Section>
        </>
    );
}
