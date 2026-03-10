import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";

const footerLinks = {
    mission: [
        { label: "About Us", href: "/about/" },
        { label: "Our Programs", href: "/programs/" },
        { label: "Our Impact", href: "/impact/" },
        { label: "Events", href: "/events/" },
    ],
    getInvolved: [
        { label: "Volunteer", href: "/volunteer/" },
        { label: "Donate", href: "/donate/" },
        { label: "Partner With Us", href: "/schools/" },
        { label: "Contact", href: "/contact/" },
    ],
    support: [
        { label: "Family Support", href: "/familysupport/" },
        { label: "School Partnerships", href: "/schools/" },
        { label: "Contact Us", href: "/contact/" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-300">
            {/* Donation banner */}
            <div className="bg-gradient-to-r from-brand-700 to-brand-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Help Us Strengthen Our Community
                    </h2>
                    <p className="text-brand-100 mb-6 max-w-2xl mx-auto">
                        When you give, you help create practical support, stronger partnerships,
                        and meaningful community impact.
                    </p>
                    <Link
                        href="/donate/"
                        className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-brand-700 bg-white rounded-full hover:bg-brand-50 shadow-lg hover:shadow-xl transition-all"
                    >
                        Donate Today
                    </Link>
                </div>
            </div>

            {/* Footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center group">
                            <Image
                                src="/images/logo.png"
                                alt={SITE_NAME}
                                width={200}
                                height={60}
                                className="w-auto h-12 object-contain group-hover:opacity-90 transition-opacity bg-white/10 rounded sm:bg-transparent p-1 sm:p-0"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
                            Serving families, supporting students, and strengthening our community
                            through practical action, trusted partnerships, and real care.
                        </p>
                    </div>

                    {/* Our Mission */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Our Mission
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.mission.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Get Involved
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.getInvolved.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-400">
                        &copy; {currentYear} {SITE_NAME}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-neutral-400">
                        <Link
                            href="/privacy/"
                            className="hover:text-neutral-300 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms/"
                            className="hover:text-neutral-300 transition-colors"
                        >
                            Terms of Use
                        </Link>
                        <Link
                            href="/accessibility/"
                            className="hover:text-neutral-300 transition-colors"
                        >
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
