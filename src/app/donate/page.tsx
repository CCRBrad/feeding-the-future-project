import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Support the Mission — Donate",
    description:
        "Your gift directly funds family support, school partnerships, volunteer programs, and community events. Every dollar is used responsibly to strengthen our community.",
    path: "/donate/",
});

const givingTiers = [
    {
        amount: "$25",
        label: "Supporter",
        impact: "Provides school supplies for one student for a full semester.",
    },
    {
        amount: "$50",
        label: "Advocate",
        impact: "Covers meals and essentials for a family during a community event.",
    },
    {
        amount: "$100",
        label: "Partner",
        impact: "Funds a targeted support package for a family referred through a school partner.",
    },
    {
        amount: "$250",
        label: "Champion",
        impact: "Sponsors a full community service event including supplies, logistics, and volunteer coordination.",
    },
    {
        amount: "$500+",
        label: "Cornerstone",
        impact: "Supports a school partnership for an entire quarter, covering resources, outreach, and direct student support.",
    },
];

export default function DonatePage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Donate", url: `${SITE_URL}/donate/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Donate" }]} />

            <PageHero
                title="Your Giving Fuels This Mission"
                description="Every dollar you give directly supports families, students, schools, and community events. We steward every contribution with care and accountability."
                primaryCta={{ label: "Give Now", href: "#give" }}
            />

            {/* Direct Giving Section */}
            <Section className="bg-white" id="give">
                <SectionHeader
                    eyebrow="Make a Gift"
                    title="Choose Your Level of Impact"
                    description="Select a giving tier to see the real-world impact of your contribution. Every amount matters."
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {givingTiers.map((tier, i) => (
                        <div
                            key={tier.label}
                            className={`rounded-2xl p-6 border transition-all hover:shadow-lg ${i === 2
                                ? "bg-brand-900 border-brand-700 text-white shadow-md scale-[1.02]"
                                : "bg-white border-neutral-200 hover:border-brand-300"
                                }`}
                        >
                            <div className="mb-3">
                                <span
                                    className={`text-3xl font-extrabold tracking-tight ${i === 2 ? "text-warm-300" : "text-brand-900"
                                        }`}
                                >
                                    {tier.amount}
                                </span>
                                <span
                                    className={`ml-2 text-xs font-semibold uppercase tracking-wider ${i === 2 ? "text-brand-200" : "text-brand-600"
                                        }`}
                                >
                                    {tier.label}
                                </span>
                            </div>
                            <p
                                className={`text-sm leading-relaxed ${i === 2 ? "text-brand-100" : "text-neutral-600"
                                    }`}
                            >
                                {tier.impact}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Primary Donate CTA */}
                <div className="max-w-xl mx-auto mt-10 text-center">
                    <div className="bg-gradient-to-br from-brand-50 to-warm-50 rounded-2xl border border-brand-200 p-8 sm:p-10">
                        <h3 className="text-xl font-bold text-brand-900 mb-2">
                            Ready to Give?
                        </h3>
                        <p className="text-neutral-600 mb-6 text-sm">
                            Donations are processed securely. You will be directed to our payment partner to complete your gift.
                        </p>
                        <Button href="https://www.paypal.com/donate" variant="primary" size="lg" className="w-full sm:w-auto">
                            Donate Now — Secure Checkout
                        </Button>
                        <p className="text-xs text-neutral-500 mt-4">
                            Feeding the Future Project Inc. is a registered 501(c)(3) nonprofit organization. Your gift may be tax-deductible.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Donor Trust */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="Donor Trust"
                    title="Your Generosity, Used Responsibly"
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        {
                            title: "100% Mission-Directed",
                            desc: "Your donations go directly toward programs, supplies, events, and community partnerships — not overhead.",
                        },
                        {
                            title: "Transparent Reporting",
                            desc: "We publish impact data quarterly and welcome questions about how funds are used. See our Impact page for details.",
                        },
                        {
                            title: "Tax-Deductible",
                            desc: "As a 501(c)(3) nonprofit, your contribution may be tax-deductible. You will receive a donation receipt for your records.",
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
            </Section>

            {/* Other Ways to Give */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Other Ways to Give"
                    title="Beyond Financial Donations"
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Sponsor an Event",
                            desc: "Cover costs for a community service event, food drive, or partnership gathering.",
                            cta: "Contact us to learn more",
                            href: "/contact/",
                        },
                        {
                            title: "In-Kind Donations",
                            desc: "Contribute supplies, food, clothing, or professional services directly to our programs.",
                            cta: "See what we need",
                            href: "/contact/",
                        },
                        {
                            title: "Corporate Partnership",
                            desc: "Align your company with community impact through matching gifts, sponsorship, or employee engagement.",
                            cta: "Explore partnership",
                            href: "/contact/",
                        },
                        {
                            title: "Volunteer Your Time",
                            desc: "Time is one of the most valuable gifts. Join our volunteer team and serve alongside us.",
                            cta: "Get involved",
                            href: "/volunteer/",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all"
                        >
                            <h3 className="font-semibold text-neutral-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                                {item.desc}
                            </p>
                            <Button href={item.href} variant="outline">
                                {item.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
