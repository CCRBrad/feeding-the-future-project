"use client";

import Link from "next/link";
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
                        className="flex items-center gap-3 group"
                        aria-label={`${SITE_NAME} - Home`}
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold text-neutral-900 tracking-tight">
                                Feeding the Future
                            </span>
                            <span className="block text-xs font-medium text-brand-600 -mt-0.5">
                                Project
                            </span>
                        </div>
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
