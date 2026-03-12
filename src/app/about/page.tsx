import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "About Feeding the Future Project",
    description:
        "Founded in Alpharetta, GA, Feeding the Future Project is a 501(c)(3) nonprofit serving families, supporting students, and strengthening community through practical action.",
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
                description="A 501(c)(3) nonprofit organization based in Alpharetta, Georgia, serving the greater Atlanta metro area through practical support, trusted relationships, and mission-driven action."
            />

            {/* Origin Story */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="Our Story"
                        title="Built for Meaningful Impact"
                        centered={false}
                    />
                    <div className="space-y-4">
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            Feeding the Future Project was founded in November 2025 with a clear conviction: when communities invest in children and families with practical, consistent support, outcomes change. Not just for individuals, but for entire neighborhoods.
                        </p>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            What started as grassroots volunteer work — delivering supplies, organizing food drives, and showing up at local schools — is growing into a structured nonprofit organization with school partnerships, active volunteer teams, community events, and measurable impact across the greater Atlanta metro area.
                        </p>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            We are not trying to be the biggest organization in the room. We are trying to be the most reliable, the most present, and the most practical.
                        </p>
                    </div>
                </div>
            </Section>

            {/* By the Numbers */}
            <Section className="bg-brand-50/50">
                <SectionHeader
                    eyebrow="At a Glance"
                    title="Feeding the Future Project by the Numbers"
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { figure: "2025", label: "Year Founded" },
                        { figure: "200", label: "2026 Family Goal" },
                        { figure: "5", label: "2026 School Partnership Goal" },
                        { figure: "75", label: "2026 Volunteer Goal" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center px-4 py-6 bg-white rounded-2xl border border-brand-100">
                            <span className="text-3xl sm:text-4xl font-extrabold text-brand-900 block">{stat.figure}</span>
                            <span className="text-sm font-medium text-brand-700 mt-1 block">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Values */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Our Values"
                    title="What We Believe"
                    description="These values are not aspirational statements. They are the standards we hold ourselves to in every partnership, every event, and every interaction."
                />
                <div className="max-w-3xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: "Practical", desc: "We measure success by outcomes, not just intentions." },
                            { label: "Relational", desc: "We invest in trust before we ask for anything." },
                            { label: "Consistent", desc: "We show up when we say we will, every time." },
                            { label: "Community-Centered", desc: "We listen to the people we serve, not just our own plans." },
                            { label: "Accountable", desc: "We report our impact honestly and welcome questions." },
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

            {/* Leadership */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="Leadership"
                    title="Who We Are"
                />
                <div className="max-w-3xl mx-auto">
                    <p className="text-neutral-600 leading-relaxed text-lg text-center mb-8">
                        Feeding the Future Project is led by a team that believes in doing the work, not just talking about it. Our leadership is hands-on, community-present, and committed to building something that lasts.
                    </p>
                    <div className="bg-white rounded-xl p-6 border border-neutral-200/80 text-center">
                        <h3 className="font-semibold text-neutral-900 text-lg mb-1">Brad Strawbridge</h3>
                        <p className="text-sm text-brand-700 font-medium mb-3">Founder & Executive Director</p>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Brad founded Feeding the Future Project to channel his conviction that communities grow stronger when practical support meets consistent action. He brings experience in leadership, community engagement, and organizational development to the mission.
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="Join the Mission"
                        title="Be Part of This Work"
                        description="Whether you want to partner, volunteer, donate, or simply learn more, we welcome the conversation."
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact/" variant="primary">Get in Touch</Button>
                        <Button href="/donate/" variant="secondary">Support the Mission</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
