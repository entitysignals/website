export const dynamic = "force-static";

import Link from "next/link";

export default function MethodsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our proven method</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Exactly how we improve your entity signals and AI discoverability, step by step.</p>
        </header>

        {/* Step-by-step methodology (moved from homepage and expanded) */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-step</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Deep Analysis",
                    description: "Comprehensive audit of entity signals, content gaps, structured data, profile coverage, and technical barriers to AI discovery."
                  },
                  {
                    step: "02",
                    title: "Strategic Planning",
                    description: "A prioritized roadmap with quick wins and foundational work sequenced for compounding gains."
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description: "Guided execution across schema, site architecture, profiles/citations, and review acceleration."
                  },
                  {
                    step: "04",
                    title: "Measure & Iterate",
                    description: "Monthly scorecard, deltas, and next actions. We adapt the plan based on what moves your metrics."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">What a typical first 60–90 days looks like</h3>
                    <div className="space-y-4">
                      {[
                        { week: "Week 1–2", task: "Baseline audit, entity mapping, and schema fixes", status: "complete" },
                        { week: "Week 3–4", task: "Architecture & internal links; profile and citation cleanup", status: "in-progress" },
                        { week: "Week 5–8", task: "Content upgrades and topical clustering; review acceleration", status: "upcoming" },
                        { week: "Week 9+", task: "Iterate based on scorecard deltas and new opportunities", status: "upcoming" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'complete' ? 'bg-emerald-500' : 
                            item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                          }`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{item.week}</div>
                            <div className="text-sm text-gray-600">{item.task}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we optimize */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What we optimize</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Structured data across key templates",
              "Entity clarity on pages and profiles",
              "Internal linking and information architecture",
              "Business profiles and citation consistency",
              "Topical authority and content depth",
              "Reviews velocity and response process"
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="text-gray-900 font-semibold mb-1">{item}</div>
                <div className="text-sm text-gray-600">Included in baseline audit and iterated monthly.</div>
              </div>
            ))}
          </div>
        </section>

        {/* What we don't do */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What we don’t do</h2>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 text-gray-700">
            Massive one-off site rebuilds, heavy custom dev, manual link buys
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg">
              Start Free GEO Audit
            </Link>
            <Link href="/resources" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all duration-300">
              See resources
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}


