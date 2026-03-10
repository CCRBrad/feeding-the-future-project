"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change (U5)
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center group"
                        aria-label={`${SITE_NAME} - Home`}
                    >
                        <Image
                            src="/images/logo.png"
                            alt={SITE_NAME}
                            width={240}
                            height={80}
                            className="w-auto h-12 sm:h-14 object-contain group-hover:opacity-90 transition-opacity"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(item.href)
                                    ? "text-brand-700 bg-brand-50 font-semibold"
                                    : "text-neutral-600 hover:text-brand-700 hover:bg-brand-50"
                                    }`}
                                {...(isActive(item.href) ? { "aria-current": "page" as const } : {})}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/donate/"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 shadow-md hover:shadow-lg transition-all"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div
                    id="mobile-menu"
                    className="lg:hidden border-t border-neutral-200 bg-white animate-fade-in"
                >
                    <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive(item.href)
                                    ? "text-brand-700 bg-brand-50 font-semibold"
                                    : "text-neutral-700 hover:text-brand-700 hover:bg-brand-50"
                                    }`}
                                {...(isActive(item.href) ? { "aria-current": "page" as const } : {})}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-3 border-t border-neutral-100">
                            <Link
                                href="/donate/"
                                className="block px-4 py-3 text-center text-base font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-colors"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
