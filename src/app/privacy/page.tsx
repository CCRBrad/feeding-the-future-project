import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { PageHero, Section } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
    title: "Privacy Policy",
    description:
        "Learn how Feeding the Future Project collects, uses, and protects your personal information.",
    path: "/privacy/",
});

export default function PrivacyPage() {
    return (
        <>
            <StructuredData
                breadcrumbs={[
                    { name: "Home", url: SITE_URL },
                    { name: "Privacy Policy", url: `${SITE_URL}/privacy/` },
                ]}
            />
            <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

            <PageHero
                title="Privacy Policy"
                description="Your privacy matters to us. This policy explains how we handle your information."
            />

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
                    <p className="text-sm text-neutral-500 mb-8">Last updated: March 2026</p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Who We Are</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        {SITE_NAME} is a 501(c)(3) nonprofit organization founded in Alpharetta, Georgia.
                        This privacy policy describes how we collect, use, and protect information gathered through our website at feedingthefutureproject.org.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Information We Collect</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We may collect the following types of information when you interact with our website:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                        <li><strong>Contact Information:</strong> Name, email address, and phone number when you submit our contact form or volunteer inquiry.</li>
                        <li><strong>Donation Information:</strong> When you make a donation through our website, your payment information is handled securely by our third-party payment processor. We do not store credit card numbers.</li>
                        <li><strong>Usage Data:</strong> We may use analytics tools to understand how visitors use our site. This data is anonymized and used to improve the visitor experience.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                        <li>To respond to your inquiries and requests</li>
                        <li>To process and acknowledge donations</li>
                        <li>To communicate about volunteer opportunities, events, and organizational updates (only with your consent)</li>
                        <li>To improve our website and services</li>
                    </ul>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Information Sharing</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information with trusted service providers who assist us in operating our website and conducting our mission, but only as necessary for those purposes.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Data Security</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of internet transmission is 100% secure.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Cookies</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        Our website may use cookies and similar technologies to enhance your browsing experience and gather analytics data. You can control cookies through your browser settings.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Your Rights</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        You may request access to, correction of, or deletion of your personal information at any time by contacting us at feedingthefutureproject@capitalcityroofing.net.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Changes to This Policy</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
                    </p>

                    <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-3">Contact Us</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        If you have questions about this privacy policy, please contact us at{" "}
                        <a href="mailto:feedingthefutureproject@capitalcityroofing.net" className="text-brand-600 hover:text-brand-700 underline">
                            feedingthefutureproject@capitalcityroofing.net
                        </a>.
                    </p>
                </div>
            </Section>
        </>
    );
}
