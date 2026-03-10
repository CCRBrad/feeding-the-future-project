import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { PageHero, Section, SectionHeader, Button } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Partner With Us Through Your School",
    description:
        "Schools are often some of the most important places where support, stability, and encouragement can reach children and families. Partner with Feeding the Future Project.",
    path: "/schools/",
});

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
                description="Schools are often some of the most important places where support, stability, and encouragement can reach children and families. Feeding the Future Project is committed to partnering with schools in ways that are practical, respectful, and community-minded."
                primaryCta={{ label: "Start a School Partnership Conversation", href: "/contact/" }}
            />

            <Section className="bg-white">
                <SectionHeader eyebrow="Who This Is For" title="Designed for School Leaders & Staff" />
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-neutral-600 leading-relaxed mb-8 text-center">
                        This page is for:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            "School Administrators",
                            "Counselors",
                            "Teachers",
                            "Family Engagement Staff",
                            "Local Education Partners",
                        ].map((role) => (
                            <div key={role} className="flex items-center gap-3 px-5 py-4 bg-brand-50 rounded-xl border border-brand-100">
                                <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0" />
                                <span className="font-medium text-neutral-800">{role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-neutral-50">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="How It Works"
                        title="How Partnership Can Work"
                        description="We want to understand your needs, your students, and your community. From there, we can explore where partnership makes sense and how support can be provided in a way that is thoughtful and effective."
                    />
                </div>
            </Section>

            <Section className="bg-brand-50/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ready to Connect?</h2>
                    <p className="text-lg text-neutral-600 mb-8">
                        If your school is looking for a local partner, we would welcome the conversation.
                    </p>
                    <Button href="/contact/" variant="primary" size="lg">
                        Start a School Partnership Conversation
                    </Button>
                </div>
            </Section>
        </>
    );
}
