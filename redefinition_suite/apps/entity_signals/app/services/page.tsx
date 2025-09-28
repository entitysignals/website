export const dynamic = "force-static";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Practical programs designed to improve your entity signals and AI discoverability.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Free Instant GEO Snapshot",
              description: "Enter your URL to get a quick scorecard and a 30-minute walkthrough with opportunities and next steps.",
              href: "/contact",
            },
            {
              title: "Two-week Baseline Audit",
              description: "Full audit with prioritized roadmap. We implement high-impact fixes across schema, IA, profiles, and reviews.",
              href: "/methods",
            },
            {
              title: "Entity Signals Growth Plan",
              description: "Ongoing implementation and measurement—monthly scorecard, deltas, and next actions.",
              href: "/methods",
            },
            {
              title: "Advisory & Reviews Acceleration",
              description: "Programmatic improvements to review velocity, response process, and profile/citation consistency.",
              href: "/contact",
            }
          ].map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-6">{s.description}</p>
              <div className="mt-auto">
                <Link href={s.href} className="inline-flex items-center px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </section>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
            Start Free GEO Audit
          </Link>
        </div>
      </div>
    </main>
  );
}


