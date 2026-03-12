import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Family Support",
    description:
        "Feeding the Future Project provides practical support to families — meals, supplies, resource referrals, and community connections, all delivered with dignity and care.",
    path: "/familysupport/",
});

const faqs = [
    {
        q: "Will I be judged for asking for help?",
        a: "Never. We believe every family goes through seasons where extra support makes a difference. Our team treats every person with warmth, respect, and zero judgment. Your courage in reaching out is something we deeply respect.",
    },
    {
        q: "What information do I need to share?",
        a: "Very little. We will ask your name, how to reach you, and what kind of support you are looking for. You do not need to share detailed financial or personal information. We just want to understand how we can help.",
    },
    {
        q: "How quickly can I get help?",
        a: "For urgent needs like food or supplies, we can often respond within 24–48 hours. For referrals and ongoing support, we typically connect within one week. We move as quickly as we can.",
    },
    {
        q: "Can someone else refer a family to you?",
        a: "Absolutely. Many families are connected to us through school counselors, teachers, churches, and community organizations. If you know a family that could use support, you can reach out on their behalf with their knowledge.",
    },
    {
        q: "Is this only for families in the Atlanta area?",
        a: "We primarily serve the greater Atlanta metro area, including Alpharetta and surrounding communities. If you are outside this area, we are happy to help connect you with similar organizations closer to you.",
    },
    {
        q: "Do I need to meet any eligibility requirements?",
        a: "No formal eligibility requirements. If your family is going through a difficult season and needs practical support, you are welcome here. We focus on real need, not paperwork.",
    },
];

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
                description="We serve families with practical, respectful support — because every family deserves to feel seen, helped, and connected to their community."
                primaryCta={{ label: "Reach Out for Support", href: "/contact/" }}
            />

            {/* You're Not Alone */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-brand-50 to-warm-50 rounded-2xl p-8 sm:p-10 border border-brand-100">
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                            You Are Not Alone
                        </h2>
                        <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                            Every family goes through seasons where things get hard. Whether it is putting food on the table, keeping up with school supplies, or just feeling overwhelmed — reaching out is not a sign of weakness. It is a sign of strength.
                        </p>
                        <p className="text-neutral-600 leading-relaxed">
                            Our team is here to listen, to help, and to connect you with the support you need. No judgment, no red tape, no runaround. Just real people who care about your family.
                        </p>
                    </div>
                </div>
            </Section>

            {/* What We Provide */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="What We Provide"
                    title="Practical Help When It Matters"
                    description="Support looks different for every family. Here are the kinds of assistance we can provide or connect you with."
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
                    {[
                        { title: "Meals & Food Assistance", desc: "Emergency meals, food boxes, and connections to local food pantries and community kitchens. We can often deliver within 48 hours.", icon: "🍽️" },
                        { title: "School Supplies & Essentials", desc: "Backpacks, supplies, clothing, and basic necessities for students and families — provided free of charge through our school partnerships.", icon: "🎒" },
                        { title: "Resource Referrals", desc: "Connections to utility assistance, housing resources, healthcare access, and social services. We help you navigate what is available.", icon: "🔗" },
                        { title: "Community Connection", desc: "Linking families with churches, civic organizations, and other local support networks for longer-term community involvement.", icon: "🤝" },
                        { title: "Holiday & Seasonal Support", desc: "Special events during holidays and back-to-school season with targeted family assistance, gift packages, and celebration.", icon: "🎄" },
                        { title: "Ongoing Encouragement", desc: "Check-ins, follow-ups, and consistent presence — not just a one-time interaction. We want to walk with you, not just hand you something.", icon: "💛" },
                    ].map((item) => (
                        <div key={item.title} className="bg-white rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">{item.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* How to Access */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="How It Works"
                    title="How to Access Support"
                />
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Reach Out", desc: "Contact us through the form, a school partner referral, or a community connection. There is no wrong door — and no wrong way to ask." },
                            { step: "2", title: "Have a Conversation", desc: "We listen first. We want to understand what you need and how we can help in a way that respects your situation. This is a conversation, not an interview." },
                            { step: "3", title: "Receive Support", desc: "We deliver or connect you with the right resources — whether that is supplies, meals, referrals, or ongoing check-ins. We follow through on what we commit to." },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-5">
                                <div className="flex-shrink-0 w-10 h-10 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    {item.step}
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="Common Concerns" title="Questions Families Ask" />
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.q} className="bg-white rounded-xl p-6 border border-neutral-200/80">
                            <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Privacy & Dignity */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-800 mb-3">Your Privacy and Dignity Matter</h3>
                                <ul className="space-y-2">
                                    {[
                                        "We never share your personal information with anyone outside our team",
                                        "We do not require detailed financial disclosures or intrusive documentation",
                                        "Your situation is kept confidential — only the team members directly helping you will know",
                                        "We treat every conversation as private and every interaction as an honor",
                                        "You can end the relationship at any time with no questions asked",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-brand-700">
                                            <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">We Want to Help</h2>
                    <p className="text-lg text-brand-200 mb-8">
                        If you or someone you know needs support, reaching out is the first step. We will do our best to help or connect you with someone who can.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact/" variant="primary" size="lg">Reach Out for Support</Button>
                        <Button href="/about/" variant="outline">Learn About Our Mission</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
