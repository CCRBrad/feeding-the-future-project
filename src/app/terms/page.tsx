import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { PageHero, Section } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Terms of Use",
    description:
        "Terms and conditions for using the Feeding the Future Project website.",
    path: "/terms/",
});

export default function TermsPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Terms of Use", url: `${SITE_URL}/terms/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Terms of Use" }]} />

            <PageHero
                title="Terms of Use"
                description="Please review these terms before using the Feeding the Future Project website."
            />

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
                    <p className="text-sm text-neutral-500 mb-8">Last updated: March 2026</p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Acceptance of Terms</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        By accessing and using the {SITE_NAME} website (feedingthefutureproject.org), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the website.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Use of the Website</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        This website is provided for informational purposes about {SITE_NAME}, a 501(c)(3) nonprofit organization based in Alpharetta, Georgia. You may use the site to learn about our mission, programs, events, and to contact us. You agree not to use the site for any unlawful or prohibited purpose.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Intellectual Property</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        All content on this website, including text, images, logos, and design elements, is the property of {SITE_NAME} unless otherwise noted. You may not reproduce, distribute, or use any content without our written permission.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Donations</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        Donations made through our website are processed by third-party payment processors. All donations to {SITE_NAME} are tax-deductible to the extent allowed by law. Donation refund requests may be submitted by contacting us directly.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Third-Party Links</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those sites. We encourage you to review the terms and privacy policies of any third-party site you visit.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Disclaimer</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        This website and its content are provided &ldquo;as is.&rdquo; {SITE_NAME} makes no warranties, express or implied, regarding the accuracy, completeness, or reliability of any information on the site.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Limitation of Liability</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        {SITE_NAME} shall not be liable for any damages arising from the use of or inability to use this website.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Changes to These Terms</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Contact Us</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        If you have questions about these terms, please contact us at{" "}
                        <a href="mailto:feedingthefutureproject@capitalcityroofing.net" className="text-brand-600 hover:text-brand-700 underline">
                            feedingthefutureproject@capitalcityroofing.net
                        </a>.
                    </p>
                </div>
            </Section>
        </>
    );
}
