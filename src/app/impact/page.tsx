import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Our Impact",
    description:
        "Impact matters because trust matters. See how Feeding the Future Project is turning support into action and making a difference in our community.",
    path: "/impact/",
});

export default function ImpactPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Impact", url: `${SITE_URL}/impact/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Impact" }]} />

            <PageHero
                title="Our Impact"
                description="Impact matters because trust matters. This page exists to show how support is being turned into action and why the work of Feeding the Future Project is worth believing in."
                primaryCta={{ label: "Get Involved", href: "/volunteer/" }}
            />

            <Section className="bg-white">
                <SectionHeader
                    eyebrow="How We Report"
                    title="Transparency and Accountability"
                    description="As the organization grows, this page will become a clear and reliable place to show the results of our work."
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { label: "Families Served", desc: "Direct support reaching those who need it most", icon: "👨‍👩‍👧‍👦" },
                        { label: "Schools Supported", desc: "Partnerships that strengthen student outcomes", icon: "🏫" },
                        { label: "Events Hosted", desc: "Community gatherings that unite and uplift", icon: "🎉" },
                        { label: "Volunteers Engaged", desc: "People who show up and make a difference", icon: "🙌" },
                        { label: "Community Partnerships", desc: "Relationships that expand our reach", icon: "🤝" },
                    ].map((metric) => (
                        <div key={metric.label} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all">
                            <div className="text-3xl mb-3"><span role="img" aria-hidden="true">{metric.icon}</span></div>
                            <h3 className="font-semibold text-neutral-900 mb-1">{metric.label}</h3>
                            <p className="text-sm text-neutral-600">{metric.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-sm text-neutral-500 mt-8 italic">
                    Specific metrics will be updated as the organization continues to grow and track outcomes.
                </p>
            </Section>

            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="Beyond the Numbers"
                        title="Impact Is Also Seen in Relationships"
                        description="Impact is not only measured in numbers. It is also seen in stronger relationships, greater encouragement, and the practical support that helps communities move forward."
                    />
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Want to Be Part of the Impact?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/volunteer/" variant="primary">Get Involved</Button>
                        <Button href="/donate/" variant="secondary">Donate</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
