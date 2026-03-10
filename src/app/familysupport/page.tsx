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

            {/* What We Provide */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="What We Provide"
                    title="Practical Help When It Matters"
                    description="Support looks different for every family. Here are the kinds of assistance we can provide or connect you with."
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
                    {[
                        { title: "Meals & Food Assistance", desc: "Emergency meals, food boxes, and connections to local food pantries and community kitchens." },
                        { title: "School Supplies & Essentials", desc: "Backpacks, supplies, clothing, and basic necessities for students and families." },
                        { title: "Resource Referrals", desc: "Connections to utility assistance, housing resources, healthcare access, and social services." },
                        { title: "Community Connection", desc: "Linking families with churches, civic organizations, and other local support networks." },
                        { title: "Holiday & Seasonal Support", desc: "Special events during holidays and back-to-school season with targeted family assistance." },
                        { title: "Ongoing Encouragement", desc: "Check-ins, follow-ups, and consistent presence — not just a one-time interaction." },
                    ].map((item) => (
                        <div key={item.title} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* How to Access */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="How It Works"
                    title="How to Access Support"
                />
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Reach Out", desc: "Contact us through the form, a school partner referral, or a community connection. There is no wrong door." },
                            { step: "2", title: "Have a Conversation", desc: "We listen first. We want to understand what you need and how we can help in a way that respects your situation." },
                            { step: "3", title: "Receive Support", desc: "We deliver or connect you with the right resources — whether that is supplies, meals, referrals, or ongoing check-ins." },
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

            {/* Trust */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100 text-center">
                        <h3 className="text-xl font-bold text-brand-800 mb-3">Your Privacy and Dignity Matter</h3>
                        <p className="text-brand-700 leading-relaxed">
                            We never share personal information. We treat every family with respect and confidentiality.
                            You do not need to explain your circumstances in detail — we just want to help.
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">We Want to Help</h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        If you or someone you know needs support, reaching out is the first step. We will do our best to help or connect you with someone who can.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact/" variant="primary" size="lg">Reach Out for Support</Button>
                        <Button href="/about/" variant="secondary">Learn About Our Mission</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
