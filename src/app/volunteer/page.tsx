import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Volunteer With Feeding the Future Project",
    description:
        "Volunteers are a vital part of how this mission moves forward. Help turn generosity into practical support for children, families, and the broader community.",
    path: "/volunteer/",
});

export default function VolunteerPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Volunteer", url: `${SITE_URL}/volunteer/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Volunteer" }]} />

            <PageHero
                title="Volunteer With Feeding the Future Project"
                description="Volunteers are a vital part of how this mission moves forward. When people choose to serve, they help turn generosity into practical support for children, families, and the broader community."
                primaryCta={{ label: "Volunteer Now", href: "/contact/" }}
            />

            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Why Volunteer"
                    title="Make a Direct Difference"
                    description="Volunteering is one of the clearest ways to make a direct difference. Whether you can help at events, support special initiatives, or serve in hands-on ways, your time can help strengthen the people and partnerships this work depends on."
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        { title: "Event Support", desc: "Help organize and support community events", icon: "📋" },
                        { title: "Special Initiatives", desc: "Contribute to mission-focused projects", icon: "🌟" },
                        { title: "Hands-On Service", desc: "Provide direct community support", icon: "🤝" },
                    ].map((opp) => (
                        <div key={opp.title} className="text-center bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all">
                            <div className="text-3xl mb-3"><span role="img" aria-hidden="true">{opp.icon}</span></div>
                            <h3 className="font-semibold text-neutral-900 mb-2">{opp.title}</h3>
                            <p className="text-sm text-neutral-600">{opp.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl sm:text-3xl font-semibold text-neutral-800 leading-snug">
                        &ldquo;We are looking for people who care, show up, and want to be part of meaningful work done well.&rdquo;
                    </blockquote>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ready to Get Involved?</h2>
                    <Button href="/contact/" variant="primary" size="lg">
                        Volunteer Now
                    </Button>
                </div>
            </Section>
        </>
    );
}
