"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { INQUIRY_CATEGORIES } from "@/lib/constants";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
            // Simulate form submission — replace with real API call
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
        // Auto-scroll to form
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Breadcrumbs items={[{ label: "Contact" }]} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-warm-50">
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-warm-100/30 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight animate-fade-in-up">
                            Contact Us
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed animate-fade-in-up delay-100">
                            We would be glad to hear from you. Use this page to reach out about volunteering, donating, school partnerships, family support, events, or general questions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Inquiry Categories */}
            <Section className="bg-white">
                <SectionHeader eyebrow="How Can We Help?" title="Choose Your Inquiry Type" />
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {[
                        { label: "General Questions", desc: "For broad questions, support requests, or general interest.", icon: "💬" },
                        { label: "School Partnerships", desc: "For school leaders, staff, and partners exploring collaboration.", icon: "🏫" },
                        { label: "Volunteer Inquiries", desc: "For people who want to serve and get involved.", icon: "🙋" },
                        { label: "Donation or Sponsorship", desc: "For supporters who want to give, sponsor, or discuss contribution opportunities.", icon: "💝" },
                        { label: "Family Support", desc: "For families or referrals seeking connection and guidance.", icon: "👨‍👩‍👧" },
                        { label: "Events", desc: "For event participation, support, or questions.", icon: "📅" },
                    ].map((category) => (
                        <button
                            key={category.label}
                            type="button"
                            aria-pressed={formData.category === category.label}
                            className={`text-left bg-neutral-50 rounded-xl p-5 border transition-all cursor-pointer ${formData.category === category.label
                                    ? "border-brand-500 bg-brand-50 shadow-md"
                                    : "border-neutral-200/80 hover:border-brand-200 hover:shadow-md"
                                }`}
                            onClick={() => handleCategoryClick(category.label)}
                        >
                            <div className="text-2xl mb-2">
                                <span role="img" aria-hidden="true">{category.icon}</span>
                            </div>
                            <h3 className="font-semibold text-neutral-900 text-sm mb-1">{category.label}</h3>
                            <p className="text-xs text-neutral-600">{category.desc}</p>
                        </button>
                    ))}
                </div>
            </Section>

            {/* Contact Form */}
            <Section className="bg-neutral-50" id="contact-form">
                <div className="max-w-2xl mx-auto">
                    <SectionHeader title="Send Us a Message" />

                    {submitted ? (
                        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 sm:p-12 text-center animate-fade-in" role="status">
                            <div className="text-4xl mb-4">
                                <span role="img" aria-hidden="true">✅</span>
                            </div>
                            <h3 className="text-xl font-semibold text-brand-800 mb-2">Thank You!</h3>
                            <p className="text-brand-700">Your message has been received. We look forward to connecting with you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
                            <div className="space-y-5">
                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm" role="alert">
                                        {error}
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1.5">Name</label>
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
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
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

                                <div>
                                    <label htmlFor="contact-category" className="block text-sm font-medium text-neutral-700 mb-1.5">Inquiry Type</label>
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

                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
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

                    <p className="text-center text-sm text-neutral-500 mt-6">We look forward to connecting with you.</p>
                </div>
            </Section>
        </>
    );
}
