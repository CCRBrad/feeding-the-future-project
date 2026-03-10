"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { INQUIRY_CATEGORIES } from "@/lib/constants";

const inquiryCards = [
    { label: "General Questions", desc: "Broad questions, information requests, or general interest.", icon: "💬" },
    { label: "School Partnerships", desc: "For school leaders, staff, and partners exploring collaboration.", icon: "🏫" },
    { label: "Volunteer Inquiries", desc: "Ready to serve? Let us know.", icon: "🙋" },
    { label: "Donation or Sponsorship", desc: "Financial gifts, in-kind donations, or corporate sponsorship.", icon: "💝" },
    { label: "Family Support", desc: "Families or referrals seeking connection and guidance.", icon: "👨‍👩‍👧" },
    { label: "Events", desc: "Event participation, support, or questions.", icon: "📅" },
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
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitted(true);
        } catch {
            setError("Something went wrong. Please try again or email us directly.");
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

            {/* Hero — simplified */}
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
            </Section>

            {/* Contact Form */}
            <Section className="bg-neutral-50" id="contact-form">
                <div className="max-w-2xl mx-auto">
                    <SectionHeader eyebrow="Step 2" title="Send Us a Message" />

                    {submitted ? (
                        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 sm:p-12 text-center animate-fade-in" role="status">
                            <div className="text-4xl mb-4">
                                <span role="img" aria-hidden="true">✅</span>
                            </div>
                            <h3 className="text-xl font-semibold text-brand-800 mb-2">Thank You!</h3>
                            <p className="text-brand-700 mb-1">Your message has been received.</p>
                            <p className="text-sm text-brand-600">We typically respond within 1–2 business days.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
                            <div className="space-y-5">
                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm" role="alert">
                                        {error}
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                                            placeholder="Your full name"
                                            disabled={submitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            Email <span className="text-red-500">*</span>
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
                                            Phone <span className="text-neutral-400 text-xs">(optional)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                                            placeholder="(555) 555-5555"
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
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-neutral-900 placeholder-neutral-400 resize-none"
                                        placeholder="How can we help?"
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

                    <p className="text-center text-xs text-neutral-500 mt-6">
                        We typically respond within 1–2 business days. For urgent needs, call us directly.
                    </p>
                </div>
            </Section>
        </>
    );
}
