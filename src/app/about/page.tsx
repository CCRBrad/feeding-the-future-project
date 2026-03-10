import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "About Feeding the Future Project",
    description:
        "Feeding the Future Project exists to serve children, families, and the broader community through practical support, trusted relationships, and mission-driven action.",
    path: "/about/",
});

export default function AboutPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "About", url: `${SITE_URL}/about/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "About" }]} />

            <PageHero
                title="About Feeding the Future Project"
                description="Feeding the Future Project exists to serve children, families, and the broader community through practical support, trusted relationships, and mission-driven action."
            />

            {/* Organization Story */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="Our Story"
                        title="Built for Meaningful Impact"
                        centered={false}
                    />
                    <div className="prose prose-lg prose-neutral max-w-none">
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            This work was built out of a desire to create meaningful community
                            impact, not just talk about it. Feeding the Future Project is
                            focused on serving with dignity, partnering with local schools and
                            community leaders, and helping connect generosity to real-world
                            outcomes.
                        </p>
                    </div>
                </div>
            </Section>

            {/* What We Believe */}
            <Section className="bg-neutral-50">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="Our Values"
                        title="What We Believe"
                        description="We believe communities are stronger when children are supported, families are encouraged, and local partnerships are treated with seriousness and care."
                    />
                </div>
            </Section>

            {/* How We Approach the Work */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Our Approach"
                    title="How We Approach the Work"
                />
                <div className="max-w-3xl mx-auto">
                    <p className="text-neutral-600 leading-relaxed text-lg mb-8 text-center">
                        We aim to serve in a way that is:
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: "Practical", desc: "Results-focused action over theory" },
                            { label: "Relational", desc: "Built on trust and partnership" },
                            { label: "Consistent", desc: "Steady, dependable service" },
                            { label: "Community-Centered", desc: "Rooted in local needs" },
                            { label: "Accountable", desc: "Transparent and responsible" },
                        ].map((value) => (
                            <div
                                key={value.label}
                                className="bg-brand-50 rounded-xl p-5 border border-brand-100"
                            >
                                <h3 className="font-semibold text-brand-800 mb-1">
                                    {value.label}
                                </h3>
                                <p className="text-sm text-brand-700">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why This Matters */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="Our Purpose"
                        title="Why This Matters"
                        description="Support is most meaningful when it is timely, thoughtful, and connected to real needs. Feeding the Future Project exists to help create that kind of support."
                    />
                    <Button href="/contact/" variant="primary">
                        Get in Touch
                    </Button>
                </div>
            </Section>
        </>
    );
}
