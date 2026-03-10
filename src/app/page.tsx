import { generatePageMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/constants";
import { Section, SectionHeader, Button, Card } from "@/components/ui";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = generatePageMetadata({
  title: `${SITE_NAME} — Strengthening Our Community`,
  description:
    "Feeding the Future Project serves children, families, and schools through practical community support, partnerships, and real action.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData page="home" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-warm-100/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] animate-fade-in-up">
              Feeding the Future Project Helps Strengthen Families, Support
              Students, and Serve Our Community.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-100">
              Through practical support, school partnerships, volunteer
              engagement, and community action, Feeding the Future Project
              exists to help children and families move forward with dignity,
              encouragement, and real care.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
              <Button href="/donate/" variant="primary" size="lg">
                Donate Now
              </Button>
              <Button href="/volunteer/" variant="outline" size="lg">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Snapshot — replaces the old generic mission section */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Our Impact So Far"
          title="Turning Support Into Action"
        />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { figure: "200+", label: "Families Served" },
            { figure: "5", label: "School Partnerships" },
            { figure: "75+", label: "Active Volunteers" },
            { figure: "12", label: "Community Events" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-4 py-6 bg-brand-50 rounded-2xl border border-brand-100"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-brand-900 block">
                {stat.figure}
              </span>
              <span className="text-sm font-medium text-brand-700 mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/impact/" variant="secondary">
            See Full Impact Report
          </Button>
        </div>
      </Section>

      {/* How We Help */}
      <Section className="bg-neutral-50">
        <SectionHeader
          eyebrow="How We Help"
          title="Practical Support, Real Impact"
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <Card
            icon={
              <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            }
            title="Support for Families"
            description="We work to make practical support more accessible to families who need encouragement, resources, and community connection."
          />
          <Card
            icon={
              <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            }
            title="Partnerships With Schools"
            description="We collaborate with schools and local leaders to help create stronger support systems for students and families."
          />
          <Card
            icon={
              <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" />
              </svg>
            }
            title="Volunteer-Powered Service"
            description="We believe meaningful community impact happens when people show up, serve well, and build trust over time."
          />
        </div>
      </Section>

      {/* Schools Pathway */}
      <Section className="bg-brand-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="For Schools"
            title="Partner With Us"
            description="If you are a school leader, counselor, staff member, or community liaison looking for a strong local partner, we would love to connect."
          />
          <Button href="/schools/" variant="primary">
            Learn About School Partnerships
          </Button>
        </div>
      </Section>

      {/* Volunteer Pathway */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="Volunteer"
            title="Be Part of Meaningful Work"
            description="If you want to be part of work that directly supports children, families, and schools, there is a place for you here."
          />
          <Button href="/volunteer/" variant="primary">
            See Volunteer Opportunities
          </Button>
        </div>
      </Section>

      {/* Events */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="Events & Engagement"
            title="Get Involved in Our Community"
            description="Events help bring the mission to life by creating opportunities for service, participation, support, and community connection."
          />
          <Button href="/events/" variant="secondary">
            View Events
          </Button>
        </div>
      </Section>

      {/* Single Donation CTA — removed second duplicate */}
    </>
  );
}
