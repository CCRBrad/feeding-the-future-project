import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Partner With Us Through Your School",
    description:
        "Schools are where support meets students and families every day. Feeding the Future Project partners with schools to provide resources, outreach, and hands-on community support.",
    path: "/schools/",
});

const partnershipTypes = [
    {
        title: "Student Resource Support",
        desc: "We provide supplies, meals, and essentials to students identified by school staff, helping remove barriers that affect attendance and performance.",
    },
    {
        title: "Family Outreach",
        desc: "Through school referrals, we connect families with community resources — food assistance, utility support, and local services.",
    },
    {
        title: "On-Site Volunteer Presence",
        desc: "Our volunteers can support school events, parent nights, and campus activities, adding capacity without adding cost.",
    },
    {
        title: "Community Event Collaboration",
        desc: "We co-organize back-to-school drives, holiday support events, and service days that bring school communities together.",
    },
];

export default function SchoolsPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Schools", url: `${SITE_URL}/schools/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Schools" }]} />

            <PageHero
                title="Partner With Us Through Your School"
                description="Schools are where support meets students and families every day. We build partnerships with schools in the Columbus, GA metro area that are practical, respectful, and focused on real outcomes."
                primaryCta={{ label: "Start a Conversation", href: "/contact/" }}
            />

            {/* Who This Is For */}
            <Section className="bg-white">
                <SectionHeader eyebrow="Who This Is For" title="Designed for School Leaders & Staff" />
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-neutral-600 leading-relaxed mb-8 text-center">
                        This partnership is designed for people who are already working hard to support students and families but need a reliable community partner to help extend their reach.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { role: "School Administrators", desc: "Principals and assistant principals looking for community partnerships." },
                            { role: "Counselors", desc: "School counselors connecting students and families with outside support." },
                            { role: "Teachers", desc: "Educators who see needs in the classroom and want to help address them." },
                            { role: "Family Engagement Staff", desc: "Staff focused on parent communication, attendance, and family support." },
                            { role: "District Leaders", desc: "Coordinators exploring scalable community partnerships across schools." },
                        ].map((item) => (
                            <div key={item.role} className="flex items-start gap-3 px-5 py-4 bg-brand-50 rounded-xl border border-brand-100">
                                <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 mt-2" />
                                <div>
                                    <span className="font-medium text-neutral-800 block">{item.role}</span>
                                    <span className="text-sm text-neutral-600">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* What Partnership Looks Like */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="What We Offer"
                    title="What Partnership Looks Like"
                    description="Every school is different. We start by listening to your needs, then build a partnership scope that makes sense for your students, staff, and community context."
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                    {partnershipTypes.map((type) => (
                        <div
                            key={type.title}
                            className="bg-white rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all"
                        >
                            <h3 className="font-semibold text-neutral-900 mb-2">{type.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{type.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* How It Works */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Getting Started"
                    title="How the Process Works"
                />
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Reach Out", desc: "Contact us through the form below or via email. Let us know your school, your role, and the kinds of support you are looking for." },
                            { step: "2", title: "Discovery Conversation", desc: "We schedule a 15–20 minute call or meeting to understand your school's unique needs, student demographics, and existing support infrastructure." },
                            { step: "3", title: "Partnership Scope", desc: "We propose a scope of partnership — what we can provide, how often, and what mutual expectations look like." },
                            { step: "4", title: "Launch & Ongoing Support", desc: "We begin delivering resources, coordinating volunteers, or supporting events. We check in regularly to make sure the partnership is working." },
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

            {/* CTA */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ready to Connect?</h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        If your school is looking for a local partner who shows up consistently and serves with care, we would welcome the conversation.
                    </p>
                    <Button href="/contact/" variant="primary" size="lg">
                        Start a School Partnership Conversation
                    </Button>
                </div>
            </Section>
        </>
    );
}
