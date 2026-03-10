import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Events",
    description:
        "Events help bring the mission to life by creating opportunities for service, participation, support, and community connection.",
    path: "/events/",
});

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
                title="Events"
                description="Events help bring the mission to life by creating opportunities for service, participation, support, and community connection."
                primaryCta={{ label: "Contact Us", href: "/contact/" }}
            />

            <Section className="bg-white">
                <SectionHeader
                    eyebrow="Why Events Matter"
                    title="Gather Around Meaningful Action"
                    description="Whether an event is focused on fundraising, family support, volunteer engagement, or partnership-building, the goal is the same: gather people around meaningful action that helps move the mission forward."
                />
            </Section>

            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="Stay Connected" title="Upcoming Events" />
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-12">
                        <div className="text-4xl mb-4"><span role="img" aria-hidden="true">📅</span></div>
                        <p className="text-neutral-600 mb-6">
                            Event details will be shared here as they are scheduled. Check back for upcoming opportunities to participate, support, or help.
                        </p>
                        <Button href="/contact/" variant="secondary">Get Notified About Events</Button>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Interested in Supporting an Event?</h2>
                    <p className="text-lg text-neutral-600 mb-6">Interested in attending, supporting, or helping with an event?</p>
                    <Button href="/contact/" variant="primary">Contact Us</Button>
                </div>
            </Section>
        </>
    );
}
