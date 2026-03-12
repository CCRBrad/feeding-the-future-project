import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
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

            {/* Program 1: Family Support */}
            <Section className="bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Program Area 1</p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Family Support</h2>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                At the heart of everything we do is direct, practical support for families who need it most.
                                Through school referrals and community outreach, we connect families with meals, supplies,
                                resource referrals, and genuine community care — all delivered with dignity and respect.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "Meals, groceries, and essential supplies for families in need",
                                    "Referrals to local services like utility assistance, housing, and counseling",
                                    "Back-to-school kits and seasonal support packages",
                                    "Personalized outreach — not one-size-fits-all",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className="text-sm text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button href="/familysupport/" variant="primary">Learn More About Family Support</Button>
                        </div>
                        <div className="bg-gradient-to-br from-brand-50 to-warm-50 rounded-2xl p-8 border border-brand-100">
                            <h3 className="font-bold text-brand-900 text-lg mb-4">2026 Goals</h3>
                            <div className="space-y-4">
                                {[
                                    { figure: "200", label: "Families supported" },
                                    { figure: "500", label: "Supply kits delivered" },
                                    { figure: "100%", label: "Referral follow-through" },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-4">
                                        <span className="text-2xl font-extrabold text-brand-900 w-20 text-right">{stat.figure}</span>
                                        <span className="text-sm text-brand-700">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-brand-600 mt-4 pt-4 border-t border-brand-200">
                                Founded November 2025. These are our targets for the first full year of operations.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Program 2: School Partnerships */}
            <Section className="bg-neutral-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div className="lg:order-2">
                            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Program Area 2</p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">School Partnerships</h2>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Schools are where we meet students and families where they already are. We build structured
                                partnerships with Title I and community schools in the greater Atlanta metro area — providing
                                on-site resources, volunteer support, family outreach, and collaborative events that extend
                                each school&apos;s ability to serve its community.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "On-site volunteer presence for events and campus activities",
                                    "Student resource support: supplies, meals, and essentials",
                                    "Family outreach and referral coordination through school staff",
                                    "Co-organized community events and seasonal drives",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className="text-sm text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button href="/schools/" variant="primary">Explore School Partnerships</Button>
                        </div>
                        <div className="lg:order-1 bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-sm">
                            <h3 className="font-bold text-neutral-900 text-lg mb-4">How It Works</h3>
                            <div className="space-y-5">
                                {[
                                    { step: "1", title: "Reach Out", desc: "A school leader or staff member contacts us to start a conversation." },
                                    { step: "2", title: "Scope the Partnership", desc: "We listen to the school's unique needs and build a support plan together." },
                                    { step: "3", title: "Deliver & Measure", desc: "We begin providing resources, volunteers, and events — and track outcomes quarterly." },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold text-xs">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-neutral-900 text-sm">{item.title}</h4>
                                            <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Program 3: Community Engagement */}
            <Section className="bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Program Area 3</p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Community Engagement</h2>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Community events are where the mission comes to life. Through service days, food drives,
                                volunteer mobilization, and partnership gatherings, we create tangible opportunities for
                                people to give their time, resources, and care to families and students who benefit most.
                            </p>
                            <div className="space-y-3 mb-6">
                                {[
                                    "Back-to-school supply drives and holiday support events",
                                    "Volunteer service days at partner schools",
                                    "Food drives and community meal coordination",
                                    "Partnership gatherings to strengthen community networks",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className="text-sm text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button href="/events/" variant="primary">View Events</Button>
                                <Button href="/volunteer/" variant="outline">Volunteer With Us</Button>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-warm-50 to-brand-50 rounded-2xl p-8 border border-warm-100">
                            <h3 className="font-bold text-neutral-900 text-lg mb-4">2026 Goals</h3>
                            <div className="space-y-4">
                                {[
                                    { figure: "12", label: "Community events organized" },
                                    { figure: "300", label: "Total participants engaged" },
                                    { figure: "75", label: "Active volunteers mobilized" },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-4">
                                        <span className="text-2xl font-extrabold text-brand-900 w-20 text-right">{stat.figure}</span>
                                        <span className="text-sm text-brand-700">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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
                            desc: "Every family and individual we serve is treated with respect, confidentiality, and care. Support is delivered with warmth, not paperwork.",
                            icon: "💜",
                        },
                        {
                            title: "School-Referred",
                            desc: "Our primary referral pathway is through school partners who already know their students and families — support reaches people through people they already trust.",
                            icon: "🏫",
                        },
                        {
                            title: "Community-Powered",
                            desc: "Everything we do is made possible by local volunteers, donors, and partners. The best solutions come from the community itself.",
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
                                desc: "Our active volunteers are the backbone of program delivery. We invest in training, communication, and meaningful volunteer experiences to maintain quality.",
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
