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
        desc: "Provided school supplies to 50+ students across 3 partner schools in the Columbus metro area.",
        image: "/images/events/community-1.jpg",
    },
    {
        title: "Holiday Family Support Event",
        date: "December 2025",
        desc: "Delivered holiday meals and gift packages to 40 families identified through school and community partners.",
        image: "/images/events/community-2.jpg",
    },
    {
        title: "Community Partnership Day",
        date: "October 2025",
        desc: "Mobilized 25+ volunteers for a day of on-site service at two local schools — classroom support, campus cleanup, and family engagement.",
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

            {/* Why Events Matter */}
            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Why Events Matter"
                    title="Gather Around Meaningful Action"
                />
                <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
                    {[
                        { title: "Build Community", desc: "Events bring together volunteers, donors, families, and school partners in one place." },
                        { title: "Deliver Support", desc: "Every event is designed to deliver tangible value — supplies, meals, or direct service." },
                        { title: "Create Momentum", desc: "Consistent events build trust, visibility, and long-term community engagement." },
                    ].map((item) => (
                        <div key={item.title} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80">
                            <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Upcoming Events */}
            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="Coming Up" title="Upcoming Events" />
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-12">
                        <div className="text-4xl mb-4"><span role="img" aria-hidden="true">📅</span></div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Spring 2026 Events Coming Soon</h3>
                        <p className="text-neutral-600 mb-6">
                            We are currently planning spring events including a community food drive and volunteer appreciation day. Check back soon or contact us to get notified.
                        </p>
                        <Button href="/contact/" variant="primary">Get Notified About Events</Button>
                    </div>
                </div>
            </Section>

            {/* Past Events */}
            <Section className="bg-white">
                <SectionHeader eyebrow="Recent Highlights" title="Past Events" />
                <div className="max-w-4xl mx-auto space-y-6">
                    {pastEvents.map((event) => (
                        <div key={event.title} className="bg-neutral-50 rounded-2xl border border-neutral-200/80 overflow-hidden sm:flex">
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
            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Want to Support or Attend an Event?</h2>
                    <p className="text-lg text-neutral-600 mb-6">We welcome volunteers, sponsors, and participants at every event.</p>
                    <Button href="/contact/" variant="primary">Contact Us About Events</Button>
                </div>
            </Section>
        </>
    );
}
