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
                        description="Direct support including meals, supplies, referrals, and community connections for families identified through school partners and community outreach."
                        href="/familysupport/"
                    />
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        }
                        title="School Partnerships"
                        description="Structured partnerships with Title I schools — providing on-site resources, volunteer support, family outreach, and collaborative events."
                        href="/schools/"
                    />
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                            </svg>
                        }
                        title="Community Engagement"
                        description="Service events, food drives, volunteer mobilization, and partnership gatherings that bring people together to strengthen the community."
                        href="/events/"
                    />
                </div>
            </Section>

            {/* How Programs Work */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="Our Approach"
                    title="How Our Programs Work"
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        { title: "Identify Needs", desc: "We work with schools and community leaders to identify where support is needed most." },
                        { title: "Mobilize Resources", desc: "We connect donors, volunteers, and partners with specific, actionable opportunities." },
                        { title: "Deliver & Measure", desc: "We deliver support, track results, and report outcomes to maintain trust and improve." },
                    ].map((item) => (
                        <div key={item.title} className="bg-white rounded-xl p-6 border border-neutral-200/80 text-center">
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-neutral-600 mb-6">
                        Want to learn more about our programs or explore how to get involved?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact/" variant="primary">Contact Us</Button>
                        <Button href="/impact/" variant="secondary">See Our Impact</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
