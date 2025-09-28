export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://entitysignals.com/#org',
                  name: 'Redefinition Technologies Inc.',
                  alternateName: 'Entity Signals',
                  url: 'https://entitysignals.com/',
                  logo: 'https://entitysignals.com/images/logo.png',
                  founder: {
                    '@type': 'Person',
                    '@id': 'https://entitysignals.com/#ricco',
                  },
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      contactType: 'sales',
                      email: 'ricco@entitysignals.com',
                      telephone: '+1-604-906-6333',
                      areaServed: ['CA', 'US', 'GB', 'IE', 'AU', 'NZ', 'AE'],
                      availableLanguage: ['en'],
                    },
                  ],
                  sameAs: [
                    'https://www.linkedin.com/in/your-handle',
                    'https://twitter.com/your-handle',
                  ],
                },
                {
                  '@type': 'Person',
                  '@id': 'https://entitysignals.com/#ricco',
                  name: 'Ricco Yeung',
                  jobTitle: 'Founder',
                  image: 'https://entitysignals.com/images/ricco.jpg',
                  worksFor: { '@id': 'https://entitysignals.com/#org' },
                  url: 'https://entitysignals.com/about',
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://entitysignals.com/about#webpage',
                  url: 'https://entitysignals.com/about',
                  name: 'About Entity Signals',
                  isPartOf: { '@id': 'https://entitysignals.com/#org' },
                },
              ],
            }),
          }}
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Entity Signals is a focused consultancy helping brands improve how AI systems understand and recommend them.</p>

        {/* Founder bio (Ricco) */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm grid md:grid-cols-[140px_1fr] gap-6 items-start">
            <div className="w-32 h-32 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">Headshot</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ricco — Founder</h2>
              <p className="text-gray-700 leading-relaxed">Ricco has spent years helping organizations clarify entities, structure data, and build durable authority signals that modern AI systems trust. Work spans healthcare, legal, multi-location services, and property—always with a monthly scorecard and clear next actions.</p>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                {[
                  "10+ years in search & entity optimization",
                  "Lead on 40+ complex implementations",
                  "Specialties: schema, IA, profiles, reviews",
                ].map((c, i) => (
                  <div key={i} className="bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 text-emerald-900">{c}</div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-emerald-700">
                <a className="underline" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="underline" href="#" target="_blank" rel="noreferrer">Speaking</a>
                <a className="underline" href="#" target="_blank" rel="noreferrer">Media features</a>
              </div>
            </div>
          </div>
        </section>

        {/* EEAT essentials */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Editorial & Quality policy</h2>
            <p className="text-gray-600 leading-relaxed">Content is created by practitioners, reviewed for accuracy, and updated when guidance or platform behavior changes. We cite sources where appropriate and avoid claims we can’t measure.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Research, review, and updates</h2>
            <p className="text-gray-600 leading-relaxed">We test changes in controlled environments, validate with client data where possible, and document outcomes in your monthly scorecard. Pages include last-reviewed dates and update notes.</p>
          </div>
        </section>

        {/* Strengths */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {["Structured data expertise","Information architecture","Profiles, citations, and reviews"].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="text-gray-900 font-semibold mb-1">{item}</div>
              <div className="text-sm text-gray-600">Core strengths we bring to every engagement.</div>
            </div>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="text-gray-700 mb-6">
            Prefer to talk? Email <a className="underline text-emerald-700" href="mailto:info@entitysignals.com">info@entitysignals.com</a> or use our contact page.
          </div>
          <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg">Go to Contact</a>
        </section>
      </div>
    </main>
  );
}


