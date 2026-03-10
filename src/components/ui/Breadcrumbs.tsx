import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        >
            <ol className="flex items-center gap-2 text-sm text-neutral-500">
                <li>
                    <Link
                        href="/"
                        className="hover:text-brand-600 transition-colors"
                    >
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <svg
                            className="w-3.5 h-3.5 text-neutral-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-brand-600 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-neutral-700 font-medium">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
