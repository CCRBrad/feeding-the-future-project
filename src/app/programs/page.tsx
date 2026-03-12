import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Card, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Our Programs",
    description:
        "Feeding the Future Project operates through three core program areas — family support, school partnerships, and community engagement — each designed for practical, measurable impact.",
    path: "/programs/",
});

export default function ProgramsPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Programs", url: `${SITE_URL}/programs/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Programs" }]} />

            <PageHero
                title="Our Programs"
                description="Everything we do falls into three core areas. Each one is designed to create practical, measurable support for children, families, and communities."
            />

            {/* Core Programs */}
            <Section className="bg-white">
                <SectionHeader eyebrow="Core Program Areas" title="What We Do" />
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        }
                        title="Family Support"
                        description="Direct support including meals, supplies, referrals, and community connections for families identified through school partners and community outreach. 200+ families served since 2024."
                        href="/familysupport/"
                    />
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        }
                        title="School Partnerships"
                        description="Structured partnerships with Title I schools — providing on-site resources, volunteer support, family outreach, and collaborative events. 5 active partnerships."
                        href="/schools/"
                    />
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                            </svg>
                        }
                        title="Community Engagement"
                        description="Service events, food drives, volunteer mobilization, and partnership gatherings that bring people together. 12 events hosted, 300+ participants engaged."
                        href="/events/"
                    />
                </div>
            </Section>

            {/* Program Principles */}
            <Section className="bg-brand-50/50">
                <SectionHeader
                    eyebrow="What Sets Us Apart"
                    title="Our Program Principles"
                    description="These principles guide every program decision we make and every interaction we have with the families and communities we serve."
                />
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Dignity First",
                            desc: "Every family and individual we serve is treated with respect, confidentiality, and care. We never make people feel like a case number. Support is delivered with warmth, not paperwork.",
                            icon: "💜",
                        },
                        {
                            title: "School-Referred",
                            desc: "Our primary referral pathway is through school partners who already know their students and families. This means support reaches the people who need it most, through people they already trust.",
                            icon: "🏫",
                        },
                        {
                            title: "Community-Powered",
                            desc: "Everything we do is made possible by local volunteers, donors, and partners. We believe the best solutions come from the community itself — we just help organize and deliver them.",
                            icon: "🤝",
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-100 text-center">
                            <div className="text-3xl mb-4"><span role="img" aria-hidden="true">{item.icon}</span></div>
                            <h3 className="font-bold text-neutral-900 text-lg mb-3">{item.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* How Programs Work */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Our Approach"
                    title="How Our Programs Work"
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        { title: "Identify Needs", desc: "We work with schools and community leaders to identify where support is needed most — not through guesswork, but through trusted relationships and referrals." },
                        { title: "Mobilize Resources", desc: "We connect donors, volunteers, and partners with specific, actionable opportunities. Every resource is matched to a real, identified need." },
                        { title: "Deliver & Measure", desc: "We deliver support, track results, and report outcomes quarterly. This keeps us accountable and helps us improve continuously." },
                    ].map((item) => (
                        <div key={item.title} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80 text-center">
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Operating Model */}
            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="How We Operate" title="Built for Accountability" />
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80">
                    <div className="space-y-6">
                        {[
                            {
                                title: "Referral-Based Intake",
                                desc: "Families are connected to us through school partners, community organizations, and direct outreach — ensuring support reaches those who need it through trusted channels.",
                            },
                            {
                                title: "Quarterly Impact Reviews",
                                desc: "Every quarter, we review program outcomes, volunteer engagement, financial stewardship, and partnership effectiveness. Results are shared with donors and partners.",
                            },
                            {
                                title: "Volunteer-Driven Delivery",
                                desc: "Our 75+ active volunteers are the backbone of program delivery. We invest in training, communication, and meaningful volunteer experiences to maintain quality and consistency.",
                            },
                            {
                                title: "Transparent Financials",
                                desc: "As a 501(c)(3), we steward every dollar with care. Donors can request detailed information about how their contributions are used at any time.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 mt-2.5" />
                                <div>
                                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        See the Impact in Action
                    </h2>
                    <p className="text-lg text-brand-200 mb-8">
                        Want to learn more about our programs or explore how to get involved? We welcome the conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact/" variant="primary">Contact Us</Button>
                        <Button href="/impact/" variant="outline">See Our Impact</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
