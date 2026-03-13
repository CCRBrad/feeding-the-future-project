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

      {/* Impact Snapshot */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="2026 Goals"
          title="Turning Support Into Action"
        />
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { figure: "200", label: "2026 Family Goal" },
            { figure: "5", label: "2026 School Partnership Goal" },
            { figure: "75", label: "2026 Volunteer Goal" },
            { figure: "12", label: "2026 Event Goal" },
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

      {/* Community Proof — testimonial + stewardship */}
      <Section className="bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200/80 shadow-sm">
              <svg className="w-8 h-8 text-brand-300 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="text-lg text-neutral-700 leading-relaxed mb-6 italic">
                &ldquo;Feeding the Future Project has been a consistent and reliable partner for our school. They show up when they say they will, they treat our families with dignity, and they help us extend our reach into the community. That kind of partnership is rare.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-700 font-bold text-sm">SC</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">School Counselor</p>
                  <p className="text-xs text-neutral-500">Partner School, Alpharetta, GA</p>
                </div>
              </div>
            </div>

            {/* Stewardship Promise */}
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Our Promise</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Every Dollar Tracked. Every Outcome Measured.
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We believe accountability is the foundation of trust. Every contribution is stewarded with care, every program outcome is measured and reviewed quarterly, and every family we serve is treated with dignity and respect.
              </p>
              <ul className="space-y-3">
                {[
                  "Quarterly impact reports published openly",
                  "Direct-to-program resource allocation",
                  "School-verified partnership outcomes",
                  "Donor-accessible reporting on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Community Visual Strip */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { label: "Volunteers In Action", gradient: "from-brand-100 to-brand-200" },
              { label: "Community Food Drive", gradient: "from-warm-100 to-warm-200" },
              { label: "School Partnership", gradient: "from-earth-100 to-earth-200" },
            ].map((item) => (
              <div
                key={item.label}
                className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center p-4`}
              >
                <p className="text-sm font-medium text-neutral-700 text-center leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-400 mt-3">
            Real community photos coming soon
          </p>
        </div>
      </section>

      {/* How Support Gets Delivered */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Our Process"
          title="How Support Gets Delivered"
          description="From identifying needs to delivering results, here is how every act of support reaches the families and students who need it."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Identify", desc: "Schools and community partners refer families with specific, verified needs." },
              { step: "2", title: "Mobilize", desc: "We match donors, volunteers, and resources to each identified need." },
              { step: "3", title: "Deliver", desc: "Support is delivered personally — with dignity, care, and follow-through." },
              { step: "4", title: "Measure", desc: "We track outcomes quarterly and share results with partners and donors." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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

      {/* Final CTA */}
      <Section className="bg-brand-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Help Us Feed the Future
          </h2>
          <p className="text-brand-200 text-lg mb-8 leading-relaxed">
            Every gift, every volunteer hour, and every partnership makes a real difference in the lives of families and students in our community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/donate/" variant="primary" size="lg">
              Donate Now
            </Button>
            <Button href="/contact/" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
