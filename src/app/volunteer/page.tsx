import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Volunteer With Feeding the Future Project",
    description:
        "See how you can serve alongside us — event support, family outreach, school partnerships, and hands-on community service. We make volunteering meaningful and accessible.",
    path: "/volunteer/",
});

const volunteerRoles = [
    {
        title: "Event Support Volunteer",
        commitment: "2–4 hours per event",
        desc: "Help set up, manage logistics, serve food, and interact with families at community events and food drives.",
        icon: "📋",
    },
    {
        title: "School Partnership Volunteer",
        commitment: "2–3 hours per week during school year",
        desc: "Support school-based initiatives like supply distribution, family nights, and on-campus resource coordination.",
        icon: "🏫",
    },
    {
        title: "Family Outreach Volunteer",
        commitment: "Flexible — as-needed basis",
        desc: "Help deliver supplies, connect families with resources, and follow up on referrals from school partners.",
        icon: "🤝",
    },
    {
        title: "Administrative & Communications",
        commitment: "2–4 hours per week (remote-friendly)",
        desc: "Assist with social media, donor communication, event promotion, data entry, or organizational coordination.",
        icon: "💻",
    },
    {
        title: "Special Projects & Skilled Volunteering",
        commitment: "Project-based",
        desc: "Bring professional skills like photography, graphic design, grant writing, or event planning to specific initiatives.",
        icon: "🌟",
    },
];

export default function VolunteerPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Volunteer", url: `${SITE_URL}/volunteer/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Volunteer" }]} />

            <PageHero
                title="Volunteer With Us"
                description="When people show up and serve with care, communities get stronger. We are looking for volunteers who want to be part of meaningful, consistent work that supports children, families, and schools."
                primaryCta={{ label: "Sign Up to Volunteer", href: "/contact/" }}
            />

            {/* Role Types */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Volunteer Roles"
                    title="Find Your Place"
                    description="We offer a variety of volunteer roles to match different schedules, skill sets, and interests. Here is what is currently available."
                />
                <div className="max-w-4xl mx-auto space-y-4">
                    {volunteerRoles.map((role) => (
                        <div
                            key={role.title}
                            className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-2xl flex-shrink-0 mt-1" role="img" aria-hidden="true">
                                    {role.icon}
                                </span>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                        <h3 className="font-semibold text-neutral-900 text-lg">{role.title}</h3>
                                        <span className="text-xs font-medium text-brand-700 bg-brand-50 px-3 py-1 rounded-full mt-1 sm:mt-0">
                                            {role.commitment}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{role.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* What to Expect */}
            <Section className="bg-neutral-50">
                <SectionHeader
                    eyebrow="What to Expect"
                    title="Volunteering With Us Is Simple"
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Flexible Scheduling",
                            desc: "We work around your availability. Most roles can be done weekly, monthly, or on a per-event basis.",
                        },
                        {
                            title: "Clear Communication",
                            desc: "You will always know what to expect — when, where, and what your role will be. No surprises.",
                        },
                        {
                            title: "Meaningful Work",
                            desc: "Every volunteer hour goes directly toward supporting families, students, or community events. Nothing is wasted.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-xl p-6 border border-neutral-200/80"
                        >
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Testimonial */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100 text-center">
                        <blockquote className="text-lg sm:text-xl text-brand-800 italic leading-relaxed mb-4">
                            &ldquo;I started volunteering because I wanted to do something that mattered. What I found was a team that actually shows up and serves with real purpose.&rdquo;
                        </blockquote>
                        <p className="text-sm text-brand-700 font-medium">
                            — FTFP Volunteer, Alpharetta, GA
                        </p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ready to Get Involved?</h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        Fill out our volunteer interest form and we will follow up within 48 hours to discuss next steps and find the right fit for you.
                    </p>
                    <Button href="/contact/" variant="primary" size="lg">
                        Sign Up to Volunteer
                    </Button>
                </div>
            </Section>
        </>
    );
}
