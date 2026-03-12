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
        outcome: "2026 goal: 500 supply kits",
    },
    {
        title: "Family Outreach",
        desc: "Through school referrals, we connect families with community resources — food assistance, utility support, and local services.",
        outcome: "2026 goal: connect 200 families with support",
    },
    {
        title: "On-Site Volunteer Presence",
        desc: "Our volunteers can support school events, parent nights, and campus activities, adding capacity without adding cost.",
        outcome: "2026 goal: deploy 75 volunteers to schools",
    },
    {
        title: "Community Event Collaboration",
        desc: "We co-organize back-to-school drives, holiday support events, and service days that bring school communities together.",
        outcome: "2026 goal: host 12 collaborative events",
    },
];

const faqs = [
    {
        q: "Does it cost the school anything?",
        a: "No. Our partnerships are fully funded through donations, grants, and community sponsorship. There is no financial obligation for partner schools.",
    },
    {
        q: "How much time does this require from school staff?",
        a: "Very little. We handle logistics, volunteer coordination, and resource delivery. We typically need only a primary point of contact at the school for communication and referrals.",
    },
    {
        q: "What types of schools do you partner with?",
        a: "We primarily partner with Title I and community schools in the greater Atlanta metro area, but we are open to conversations with any school serving families who could benefit from additional community support.",
    },
    {
        q: "How quickly can a partnership begin?",
        a: "After an initial conversation and scope agreement, most partnerships can begin delivering resources within 2–4 weeks.",
    },
    {
        q: "Can you work with multiple schools at once?",
        a: "Yes. We currently maintain 5 active school partnerships and have the capacity and volunteer base to support additional schools.",
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
                description="Schools are where support meets students and families every day. We build partnerships with schools in the greater Atlanta metro area that are practical, respectful, and focused on real outcomes."
                primaryCta={{ label: "Start a Conversation", href: "/contact/" }}
            />

            {/* Partnership Track Record */}
            <Section className="bg-white">
                <SectionHeader eyebrow="Our Goals" title="Building School Partnerships in 2026" />
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-neutral-600 leading-relaxed mb-8 text-center">
                        Since our founding in November 2025, we are building trusted partnerships with schools across the greater Atlanta metro area. Each partnership is built on consistent follow-through, respectful communication, and practical support that makes a real difference for students and families.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { figure: "5", label: "Active Partnerships" },
                            { figure: "500", label: "2026 Supply Kit Goal" },
                            { figure: "200", label: "2026 Family Goal" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center px-4 py-5 bg-brand-50 rounded-xl border border-brand-100">
                                <span className="text-2xl font-extrabold text-brand-900 block">{stat.figure}</span>
                                <span className="text-sm font-medium text-brand-700 mt-1 block">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Who This Is For */}
            <Section className="bg-neutral-50">
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
                            <div key={item.role} className="flex items-start gap-3 px-5 py-4 bg-white rounded-xl border border-neutral-200/80">
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
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="What We Offer"
                    title="What Partnership Looks Like"
                    description="Every school is different. We start by listening to your needs, then build a partnership scope that makes sense for your students, staff, and community context."
                />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
                    {partnershipTypes.map((type) => (
                        <div
                            key={type.title}
                            className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all"
                        >
                            <h3 className="font-semibold text-neutral-900 mb-2">{type.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-3">{type.desc}</p>
                            <p className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full inline-block">
                                {type.outcome}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Partner Testimonial */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 sm:p-10 border border-brand-100 shadow-sm">
                        <svg className="w-8 h-8 text-brand-300 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                        <blockquote className="text-lg text-neutral-700 leading-relaxed mb-6 italic">
                            &ldquo;We have worked with community organizations before, but Feeding the Future Project is different. They actually listen to what our students need, follow through on every commitment, and treat our families with real respect. Our teachers notice the difference.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                                <span className="text-brand-700 font-bold text-sm">ES</span>
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 text-sm">Elementary School Administrator</p>
                                <p className="text-xs text-neutral-500">Partner School, Alpharetta, GA</p>
                            </div>
                        </div>
                    </div>
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

            {/* FAQ */}
            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="Common Questions" title="School Partnership FAQ" />
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.q} className="bg-white rounded-xl p-6 border border-neutral-200/80">
                            <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Connect?</h2>
                    <p className="text-lg text-brand-200 mb-4">
                        If your school is looking for a local partner who shows up consistently and serves with care, we would welcome the conversation.
                    </p>
                    <p className="text-sm text-brand-300 mb-8">
                        When you reach out, let us know your school name, your role, and what kinds of support would be most helpful. We will take it from there.
                    </p>
                    <Button href="/contact/" variant="primary" size="lg">
                        Start a School Partnership Conversation
                    </Button>
                </div>
            </Section>
        </>
    );
}
