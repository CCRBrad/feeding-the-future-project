import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Card, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Our Programs",
    description:
        "Our programs are designed to support children, families, schools, and local communities through practical action and trusted partnership.",
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
                description="Our programs are designed to support children, families, schools, and local communities through practical action and trusted partnership."
            />

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        The exact form of support may vary, but the purpose stays the same:
                        create meaningful help where it is needed most and build
                        relationships that strengthen the community over time.
                    </p>
                </div>
            </Section>

            <Section className="bg-neutral-50">
                <SectionHeader eyebrow="What We Do" title="Core Program Areas" />
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        }
                        title="Family Support"
                        description="Practical support that helps families feel seen, supported, and connected."
                        href="/familysupport/"
                    />
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        }
                        title="School Partnerships"
                        description="Collaboration with schools and local leaders to better support students and their families."
                        href="/schools/"
                    />
                    <Card
                        icon={
                            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                            </svg>
                        }
                        title="Community Engagement"
                        description="Service opportunities, events, and initiatives that bring people together around meaningful action."
                        href="/events/"
                    />
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-neutral-600 mb-6">
                        Want to learn more about how we serve or how to get involved?
                    </p>
                    <Button href="/contact/" variant="primary">
                        Contact Us
                    </Button>
                </div>
            </Section>
        </>
    );
}
