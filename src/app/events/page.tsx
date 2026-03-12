import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";
import Image from "next/image";

export const metadata = generatePageMetadata({
    title: "Events",
    description:
        "Community events, food drives, volunteer days, and partnership gatherings — see what is coming up and how you can participate or support.",
    path: "/events/",
});

const pastEvents = [
    {
        title: "Back-to-School Supply Drive",
        date: "August 2025",
        desc: "Our 2026 goal is to provide school supplies to 50+ students across partner schools. Volunteers will assemble and deliver personalized supply kits to each student.",
        image: "/images/events/community-1.jpg",
    },
    {
        title: "Holiday Family Support Event",
        date: "December 2025",
        desc: "Planning to deliver holiday meals and gift packages to 40 families identified through school and community partners. Volunteers will prepare and personally deliver each package.",
        image: "/images/events/community-2.jpg",
    },
    {
        title: "Community Partnership Day",
        date: "October 2025",
        desc: "A planned service day to mobilize 25+ volunteers for on-site support at partner schools — classroom support, campus cleanup, and family engagement activities.",
        image: "/images/events/braves-game.webp",
    },
];

export default function EventsPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Events", url: `${SITE_URL}/events/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Events" }]} />

            <PageHero
                title="Events & Community Engagement"
                description="Events bring the mission to life. Whether it is a food drive, volunteer day, or school partnership gathering, every event creates an opportunity to serve, connect, and strengthen our community."
                primaryCta={{ label: "Get Involved", href: "/contact/" }}
            />

            {/* Event Impact Stats */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 mb-12">
                    {[
                        { figure: "12", label: "2026 Event Goal" },
                        { figure: "300", label: "2026 Participant Goal" },
                        { figure: "75", label: "2026 Volunteer Goal" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center px-4 py-5 bg-brand-50 rounded-xl border border-brand-100">
                            <span className="text-2xl font-extrabold text-brand-900 block">{stat.figure}</span>
                            <span className="text-sm font-medium text-brand-700 mt-1 block">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <SectionHeader
                    eyebrow="Why Events Matter"
                    title="Gather Around Meaningful Action"
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        { title: "Build Community", desc: "Events bring together volunteers, donors, families, and school partners in one place — strengthening the relationships that make everything else possible." },
                        { title: "Deliver Tangible Support", desc: "Every event is designed to deliver real value — supplies, meals, or direct service — not just awareness." },
                        { title: "Create Momentum", desc: "Consistent events build trust, visibility, and long-term engagement. People come back because they see results." },
                    ].map((item) => (
                        <div key={item.title} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80">
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* How to Participate */}
            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="Get Involved" title="How to Participate" />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        {
                            title: "Attend",
                            desc: "Show up, bring your family, and be part of the community. All events are free and open to the public.",
                            icon: "🎪",
                        },
                        {
                            title: "Volunteer",
                            desc: "Help with setup, distribution, outreach, or cleanup. We provide all training and materials — just bring yourself.",
                            icon: "🙋",
                        },
                        {
                            title: "Sponsor",
                            desc: "Cover the cost of an event or specific supplies. We will recognize your support and share the impact with you.",
                            icon: "💼",
                        },
                        {
                            title: "Donate Supplies",
                            desc: "Contribute food, school supplies, hygiene products, or other essentials directly to an upcoming event.",
                            icon: "📦",
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-white rounded-xl p-6 border border-neutral-200/80 hover:border-brand-200 hover:shadow-md transition-all text-center">
                            <div className="text-3xl mb-3"><span role="img" aria-hidden="true">{item.icon}</span></div>
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Upcoming Events */}
            <Section className="bg-white">
                <SectionHeader eyebrow="Coming Up" title="Upcoming Events" />
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-brand-50 to-warm-50 rounded-2xl border border-brand-200 p-8 sm:p-12">
                        <div className="text-4xl mb-4"><span role="img" aria-hidden="true">📅</span></div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Spring 2026 Events Coming Soon</h3>
                        <p className="text-neutral-600 mb-3">
                            We are currently planning spring events including a community food drive and volunteer appreciation day.
                        </p>
                        <p className="text-sm text-neutral-500 mb-6">
                            Get notified when dates and details are confirmed — we will send you just one email, no spam.
                        </p>
                        <Button href="/contact/" variant="primary">Get Notified About Events</Button>
                    </div>
                </div>
            </Section>

            {/* Past Events */}
            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="Event Plans" title="Planned Events" />
                <div className="max-w-4xl mx-auto space-y-6">
                    {pastEvents.map((event) => (
                        <div key={event.title} className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden sm:flex">
                            <div className="sm:w-48 sm:flex-shrink-0">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 sm:h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="font-semibold text-neutral-900 text-lg">{event.title}</h3>
                                    <span className="text-xs font-medium text-brand-700 bg-brand-50 px-3 py-1 rounded-full mt-1 sm:mt-0">
                                        {event.date}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed">{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-brand-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Want to Support or Attend an Event?</h2>
                    <p className="text-lg text-brand-200 mb-8">We welcome volunteers, sponsors, and participants at every event. Let us know how you would like to be involved.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact/" variant="primary">Contact Us About Events</Button>
                        <Button href="/volunteer/" variant="outline">Join as a Volunteer</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
