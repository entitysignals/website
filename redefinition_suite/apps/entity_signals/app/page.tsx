import { Container } from "@redefinition/ui";
import Link from "next/link";
import { Metadata } from "next";
import ClientAnimations from "./ClientAnimations";

export const metadata: Metadata = {
  title: "Entity Signals - AI Search Optimization Consultancy",
  description: "We expertly tune your brand and website signals so AI recommends your business. Improve your digital presence with our GEO optimization services.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Entity Signals",
  "legalName": "Redefinition Technologies Inc.",
  "url": "https://entitysignals.com/",
  "logo": "https://entitysignals.com/images/logo.png",
  "alternateName": ["EntitySignals"],
  "sameAs": [
    "https://www.linkedin.com/company/entitysignals",
    "https://x.com/entitysignals", 
    "https://github.com/entitysignals",
    "https://signalsgeo.com/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "info@entitysignals.com",
      "url": "https://entitysignals.com/contact"
    }
  ],
  "brand": {
    "@type": "Brand", 
    "name": "SignalsGEO",
    "url": "https://signalsgeo.com/"
  }
};

export default function Page() {
  return (
    <>
      {/* Organization JSON-LD for homepage only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <ClientAnimations />
      
      <div className="overflow-x-hidden relative">
      {/* Background pattern is now in globals.css on html/body */}

      {/* Hero - Split Layout Design */}
      <section className="min-h-screen flex items-center relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full scroll-animate fade-only">
                  AI Search Optimization Consultancy
                </span>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight scroll-animate">
                  <span className="text-gray-900">Improve Your</span><br />
                  <span className="text-emerald-600">Digital Presence</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg scroll-animate">
                We expertly tune your brand and website signals so AI recommends your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 scroll-animate">
                <Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Free GEO Audit
                </Link>
                <a href="https://calendly.com/ricco-entitysignals/30min" target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1">
                  Book 15-min Intro Call
                </a>
              </div>
            </div>
            
            <div className="relative scroll-animate slide-right">
              <div className="mb-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Check Your Website Scorecard Now!
                </Link>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Your Website GEO Scorecard</span>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Complete</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Entity Clarity</span>
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-200 rounded-full h-2 w-20">
                          <div className="bg-emerald-600 h-2 rounded-full w-[97%]"></div>
                        </div>
                        <span className="text-sm font-medium">97%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">AI Readiness</span>
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-200 rounded-full h-2 w-20">
                          <div className="bg-emerald-600 h-2 rounded-full w-[95%]"></div>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Search Signals</span>
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-200 rounded-full h-2 w-20">
                          <div className="bg-emerald-600 h-2 rounded-full w-[99%]"></div>
                        </div>
                        <span className="text-sm font-medium">99%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get recommended by AI more often.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                number: "Step 1",
                title: "Free Instant GEO Snapshot",
                description: "Enter your URL to get a quick scorecard of how AI reads your brand and website signals. Then we host a 30-minute walkthrough to highlight key issues, point out immediate opportunities, and outline where to invest for long-term gains.",
                color: "from-emerald-400 to-teal-500"
              },
              {
                number: "Step 2", 
                title: "Two-week Baseline Audit",
                description: "We run the full audit and implement the highest-impact fixes fast, including structured data, site architecture & internal linking, business profiles, and reviews. Your audit becomes a prioritized roadmap that sequences quick wins and foundational work for long-term gains.",
                color: "from-teal-400 to-cyan-500"
              },
              {
                number: "Step 3",
                title: "Entity Signals Growth Plan", 
                description: "Continuous implementation that steadily improves your brand and website signals for AI discoverability, including content, structured data, business profiles, topical authority, and local presence. You get a monthly scorecard and strategy call, with measurable lifts in AI visibility and recommendations.",
                color: "from-cyan-400 to-blue-500"
              }
            ].map((service, index) => (
              <div key={index} className="group scroll-animate h-full" style={{transitionDelay: `${index * 150}ms`}}>
                <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-sm font-bold uppercase text-white">{service.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-auto" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Section - Outcomes We Measure */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/70 via-white/80 to-teal-50/70 border-t border-gray-200/60 relative">
        <Container>
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Outcomes We Measure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We show progress in a scorecard, not buzzwords.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            {[
              {
                title: "AI Visibility",
                items: [
                  "ChatGPT (OpenAI)",
                  "Google SGE",
                  "Gemini",
                  "Bing Copilot",
                  "Perplexity"
                ]
              },
              {
                title: "Answers Won",
                items: [
                  { title: "Featured snippets", sub: ["Google, Bing"] },
                  "People Also Ask",
                  "Knowledge Panel mentions",
                  "FAQ rich results",
                  "Page-level attribution"
                ]
              },
              {
                title: "Reviews & Profiles",
                items: [
                  "Review velocity",
                  "Rating trend & quality",
                  "Feedback sentiment",
                  "Google Business Profile",
                  "Top listings (Yelp, etc.)"
                ]
              },
              {
                title: "GEO/SEO Metrics",
                items: [
                  "Entity Clarity",
                  "AI Readiness",
                  "Search Signals",
                  "Keyword Growth"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="scroll-animate" style={{transitionDelay: `${index * 100}ms`}}>
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-lg font-semibold text-gray-900 mb-3">{item.title}</div>
                  {Array.isArray((item as any).items) ? (
                    <ul className="text-sm text-gray-600 list-disc list-outside pl-5 space-y-1">
                      {(item as any).items.map((point: any, i: number) => (
                        <li key={i} className="leading-relaxed">
                          {typeof point === 'string' ? (
                            point
                          ) : (
                            <>
                              {point.title}
                              {Array.isArray(point.sub) && point.sub.length > 0 && (
                                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-[0.9em] text-gray-600">
                                  {point.sub.map((s: string, j: number) => (
                                    <li key={j}>{s}</li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-auto" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-10">Your scorecard shows baselines, month-over-month change, and next actions.</p>
        </Container>
      </section>

      {/* Methodology moved to /methods */}

      {/* Why Entity Signals - replaces testimonials for now */}
      <section className="py-24 bg-white/90 relative">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Entity Signals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "GEO-first focus: We optimize for AI recommendations, not just classic rankings.",
              "Audit → Fix → Prove: Scorecard baseline and visible gains every month.",
              "Depth where it counts: Schema, entities, profiles, reviews, and IA.",
              "Fast wins + durable gains: Quick momentum without sacrificing long-term authority.",
              "ICP fluency: Healthcare, legal, services, property—playbooks that fit your world.",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 hover:bg-emerald-50 transition-colors">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold">✓</span>
                <p className="text-gray-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA band */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="scroll-animate">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to see your score?</h2>
              <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">Get your free snapshot or book a 15-minute intro—your choice.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
              <a href="/contact" className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg">Get your free snapshot</a>
              <a href="https://calendly.com/ricco-entitysignals/30min" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">Book a 15-minute intro</a>
            </div>
          </div>
        </Container>
      </section>
      </div>
    </>
  );
}



