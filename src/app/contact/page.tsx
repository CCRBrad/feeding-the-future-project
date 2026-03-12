"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { INQUIRY_CATEGORIES } from "@/lib/constants";

const inquiryCards = [
    { label: "General Questions", desc: "Broad questions, information requests, or general interest.", icon: "💬" },
    { label: "School Partnerships", desc: "For school leaders, staff, and partners exploring collaboration.", icon: "🏫" },
    { label: "Volunteer Inquiries", desc: "Ready to serve? Let us know your interests and availability.", icon: "🙋" },
    { label: "Donation or Sponsorship", desc: "Financial gifts, in-kind donations, or corporate sponsorship.", icon: "💝" },
    { label: "Family Support", desc: "Families or referrals seeking connection, help, and guidance.", icon: "👨‍👩‍👧" },
    { label: "Events", desc: "Event participation, sponsorship, or questions about upcoming events.", icon: "📅" },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setSubmitted(true);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again or email us directly at feedingthefutureproject@capitalcityroofing.net."
            );
        } finally {
            setSubmitting(false);
        }
    };

    const handleCategoryClick = (label: string) => {
        setFormData({ ...formData, category: label });
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Breadcrumbs items={[{ label: "Contact" }]} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-brand-50 via-white to-warm-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                            Whether you want to volunteer, partner, donate, or learn more — this is the best place to start. Select your inquiry type below, then fill out the form.
                        </p>
                    </div>
                </div>
            </section>

            {/* Inquiry Type Selection */}
            <Section className="bg-white">
                <SectionHeader eyebrow="Step 1" title="What Brings You Here?" />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inquiryCards.map((category) => (
                        <button
                            key={category.label}
                            type="button"
                            aria-pressed={formData.category === category.label}
                            className={`text-left rounded-xl p-5 border transition-all cursor-pointer ${formData.category === category.label
                                    ? "border-brand-500 bg-brand-50 shadow-md ring-2 ring-brand-200"
                                    : "border-neutral-200/80 bg-neutral-50 hover:border-brand-200 hover:shadow-md"
                                }`}
                            onClick={() => handleCategoryClick(category.label)}
                        >
                            <div className="text-2xl mb-2">
                                <span role="img" aria-hidden="true">{category.icon}</span>
                            </div>
                            <h3 className="font-semibold text-neutral-900 text-sm mb-1">{category.label}</h3>
                            <p className="text-xs text-neutral-600 leading-relaxed">{category.desc}</p>
                        </button>
                    ))}
                </div>

                {/* Selected category confirmation */}
                {formData.category && (
                    <div className="max-w-4xl mx-auto mt-6 animate-fade-in">
                        <div className="flex items-center justify-center gap-2 text-sm text-brand-700 bg-brand-50 rounded-full px-5 py-2.5 w-fit mx-auto border border-brand-200">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Selected: <span className="font-semibold">{formData.category}</span>
                        </div>
                    </div>
                )}
            </Section>

            {/* Contact Form */}
            <Section className="bg-neutral-50" id="contact-form">
                <div className="max-w-2xl mx-auto">
                    <SectionHeader eyebrow="Step 2" title="Send Us a Message" />

                    {submitted ? (
                        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 sm:p-12 text-center animate-fade-in" role="status">
                            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-brand-800 mb-2">Thank You for Reaching Out!</h3>
                            <p className="text-brand-700 mb-4">Your message has been received.</p>

                            <div className="bg-white rounded-xl p-5 border border-brand-100 text-left max-w-sm mx-auto mb-6">
                                <h4 className="font-semibold text-neutral-900 text-sm mb-3">What Happens Next</h4>
                                <ul className="space-y-2">
                                    {[
                                        "We'll review your message within 1 business day",
                                        "A team member will respond via email",
                                        "If urgent, you can reach us directly below",
                                    ].map((step) => (
                                        <li key={step} className="flex items-start gap-2 text-sm text-neutral-600">
                                            <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setSubmitted(false);
                                    setFormData({ name: "", email: "", phone: "", category: "", message: "" });
                                }}
                                className="text-sm text-brand-600 hover:text-brand-700 font-medium underline underline-offset-2 cursor-pointer"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
                            <div className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm flex items-start gap-3" role="alert">
                                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                                            placeholder="Jane Smith"
                                            disabled={submitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                                            placeholder="you@example.com"
                                            disabled={submitting}
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            Phone Number <span className="text-neutral-400 text-xs font-normal">(optional)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                                            placeholder="(706) 555-0123"
                                            disabled={submitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-category" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            Inquiry Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="contact-category"
                                            name="category"
                                            required
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900"
                                            disabled={submitting}
                                        >
                                            <option value="">Select a category</option>
                                            {INQUIRY_CATEGORIES.map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400 resize-none"
                                        placeholder="Tell us how we can help, what you're interested in, or any questions you have..."
                                        disabled={submitting}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full px-6 py-3.5 text-base font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </Section>

            {/* Direct Contact Info */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80">
                            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-neutral-900 text-sm mb-1">Email</h3>
                            <a href="mailto:feedingthefutureproject@capitalcityroofing.net" className="text-sm text-brand-600 hover:text-brand-700 underline underline-offset-2 break-all">
                                feedingthefutureproject@capitalcityroofing.net
                            </a>
                        </div>
                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80">
                            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-neutral-900 text-sm mb-1">Location</h3>
                            <p className="text-sm text-neutral-600">Alpharetta, Georgia</p>
                        </div>
                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80">
                            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-neutral-900 text-sm mb-1">Response Time</h3>
                            <p className="text-sm text-neutral-600">Within 1–2 business days</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
