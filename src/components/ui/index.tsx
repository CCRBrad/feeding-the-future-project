import Link from "next/link";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
    return (
        <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}

interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    centered?: boolean;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    centered = true,
}: SectionHeaderProps) {
    return (
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 sm:mb-16`}>
            {eyebrow && (
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "default" | "lg";
    className?: string;
}

export function Button({
    children,
    href,
    variant = "primary",
    size = "default",
    className = "",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-semibold rounded-full transition-all";
    const sizes = {
        default: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };
    const variants = {
        primary:
            "text-white bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg",
        secondary:
            "text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200",
        outline:
            "text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-300 shadow-sm",
    };

    return (
        <Link
            href={href}
            className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    href?: string;
    className?: string;
}

export function Card({ icon, title, description, href, className = "" }: CardProps) {
    const content = (
        <div
            className={`bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 hover:shadow-lg hover:border-brand-200 transition-all group ${className}`}
        >
            {icon && (
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                    {icon}
                </div>
            )}
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
            <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }
    return content;
}

interface PageHeroProps {
    title: string;
    description: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    gradient?: boolean;
}

export function PageHero({
    title,
    description,
    primaryCta,
    secondaryCta,
    gradient = true,
}: PageHeroProps) {
    return (
        <section
            className={`relative overflow-hidden ${gradient
                ? "bg-gradient-to-br from-brand-50 via-white to-warm-50"
                : "bg-white"
                }`}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-warm-100/30 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight animate-fade-in-up">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100">
                        {description}
                    </p>
                    {(primaryCta || secondaryCta) && (
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
                            {primaryCta && (
                                <Button href={primaryCta.href} variant="primary" size="lg">
                                    {primaryCta.label}
                                </Button>
                            )}
                            {secondaryCta && (
                                <Button href={secondaryCta.href} variant="outline" size="lg">
                                    {secondaryCta.label}
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
