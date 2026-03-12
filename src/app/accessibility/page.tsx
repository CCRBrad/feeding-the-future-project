import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { PageHero, Section } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Accessibility Statement",
    description:
        "Our commitment to making the Feeding the Future Project website accessible to everyone.",
    path: "/accessibility/",
});

export default function AccessibilityPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Accessibility", url: `${SITE_URL}/accessibility/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Accessibility" }]} />

            <PageHero
                title="Accessibility Statement"
                description="We are committed to ensuring our website is accessible to everyone."
            />

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
                    <p className="text-sm text-neutral-500 mb-8">Last updated: March 2026</p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Our Commitment</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        {SITE_NAME} is committed to making our website accessible to all visitors, including individuals with disabilities. We strive to follow the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">What We&apos;re Doing</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We are actively working to improve the accessibility of our website through the following measures:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                        <li><strong>Semantic HTML:</strong> We use proper heading structure, landmark regions, and semantic elements for clear content organization.</li>
                        <li><strong>Keyboard Navigation:</strong> All interactive elements on our site are accessible via keyboard navigation.</li>
                        <li><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios between text and background colors.</li>
                        <li><strong>Alt Text:</strong> Images include descriptive alt text to convey meaning to screen reader users.</li>
                        <li><strong>Form Labels:</strong> All form fields include clear labels and instructions.</li>
                        <li><strong>Responsive Design:</strong> Our website adapts to different screen sizes, devices, and user preferences.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Known Limitations</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        As a growing nonprofit, we are continually working to improve accessibility. If you encounter any barriers while using our website, we want to hear from you so we can make improvements.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Feedback</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We welcome your feedback on the accessibility of the {SITE_NAME} website. If you experience any difficulties accessing content or have suggestions for improvement, please contact us:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                        <li>Email: <a href="mailto:feedingthefutureproject@capitalcityroofing.net" className="text-brand-600 hover:text-brand-700 underline">feedingthefutureproject@capitalcityroofing.net</a></li>
                        <li>Contact form: <a href="/contact/" className="text-brand-600 hover:text-brand-700 underline">feedingthefutureproject.org/contact</a></li>
                    </ul>
                    <p className="text-neutral-600 leading-relaxed">
                        We aim to respond to accessibility feedback within 5 business days and to resolve issues as quickly as possible.
                    </p>
                </div>
            </Section>
        </>
    );
}
