import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Our Impact",
    description:
        "See how Feeding the Future Project turns community support into measurable action — families served, schools supported, volunteers engaged, and events delivered.",
    path: "/impact/",
});

const impactMetrics = [
    {
        figure: "200+",
        label: "Families Served",
        desc: "Direct assistance including meals, supplies, referrals, and community resource connections since 2024.",
        icon: "👨‍👩‍👧‍👦",
    },
    {
        figure: "5",
        label: "School Partnerships",
        desc: "Active collaborations with Title I schools in the Columbus metro area, providing on-site support and student resources.",
        icon: "🏫",
    },
    {
        figure: "12",
        label: "Community Events",
        desc: "Service events, food drives, and partnership gatherings organized between 2024 and early 2026.",
        icon: "🎉",
    },
    {
        figure: "75+",
        label: "Active Volunteers",
        desc: "Community members who have contributed time, skills, and consistent effort to the mission.",
        icon: "🙌",
    },
    {
        figure: "10+",
        label: "Community Partners",
        desc: "Local businesses, churches, and civic organizations engaged in ongoing support or collaboration.",
        icon: "🤝",
    },
    {
        figure: "$50K+",
        label: "Resources Mobilized",
        desc: "Combined value of donations, in-kind support, and community contributions channeled through the organization.",
        icon: "💛",
    },
];

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
                description="Impact matters because trust matters. We believe in showing results, not just talking about them. Here is a snapshot of the work so far."
                primaryCta={{ label: "Support This Work", href: "/donate/" }}
            />

            {/* Impact Dashboard */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="2024–2026 Impact Snapshot"
                    title="Measurable Progress, Real Outcomes"
                    description="These figures represent the cumulative impact of Feeding the Future Project from its founding through early 2026. We update this data as new milestones are reached."
                />
                <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactMetrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-gradient-to-br from-brand-50 to-white rounded-2xl p-6 border border-brand-200/60 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-4xl sm:text-5xl font-extrabold text-brand-900 tracking-tight">
                                    {metric.figure}
                                </span>
                                <span className="text-2xl" role="img" aria-hidden="true">
                                    {metric.icon}
                                </span>
                            </div>
                            <h3 className="font-semibold text-brand-800 text-lg mb-1">
                                {metric.label}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                {metric.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-neutral-500 mt-8">
                    Figures reflect estimated cumulative impact as of March 2026. Data is reviewed and updated periodically.
                </p>
            </Section>

            {/* How We Track */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="Accountability"
                    title="How We Track and Report Impact"
                />
                <div className="max-w-3xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Direct Counting",
                                desc: "We track families served, events held, and volunteer hours to maintain honest, grounded reporting.",
                            },
                            {
                                title: "Partner Feedback",
                                desc: "School and community partners provide qualitative input on partnership effectiveness and student impact.",
                            },
                            {
                                title: "Quarterly Review",
                                desc: "Impact data is reviewed quarterly by leadership to identify gaps, celebrate progress, and guide next steps.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-xl p-6 border border-neutral-200/80"
                            >
                                <h3 className="font-semibold text-neutral-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Relationships Section */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="Beyond the Numbers"
                        title="Impact Is Also Seen in Relationships"
                    />
                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100 text-center">
                        <blockquote className="text-lg sm:text-xl text-brand-800 italic leading-relaxed mb-4">
                            &ldquo;Feeding the Future Project didn&apos;t just bring supplies — they brought consistency. Our students know that someone is showing up for them.&rdquo;
                        </blockquote>
                        <p className="text-sm text-brand-700 font-medium">
                            — Partner School Administrator, Columbus, GA
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                        Want to Be Part of the Impact?
                    </h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        Every dollar, every hour, and every partnership adds up. Here is how you can contribute to the next chapter of this work.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/donate/" variant="primary" size="lg">
                            Donate
                        </Button>
                        <Button href="/volunteer/" variant="secondary" size="lg">
                            Volunteer
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
