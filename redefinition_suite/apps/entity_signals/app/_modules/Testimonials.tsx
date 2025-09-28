"use client";

import { Container } from "@redefinition/ui";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-50/85 to-teal-50/85">
      <Container>
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our clients achieve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from businesses who've transformed their AI discoverability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Entity Signals helped us increase our AI query visibility by 147% in just 3 months. Their strategic approach is exceptional.",
              author: "Sarah Martinez",
              role: "VP Marketing",
              company: "TechFlow Solutions",
              result: "+147% AI visibility",
            },
            {
              quote:
                "The entity mapping and content optimization delivered results faster than any previous SEO investment we've made.",
              author: "David Kim",
              role: "Growth Director",
              company: "ScaleUp Dynamics",
              result: "+203% organic traffic",
            },
            {
              quote:
                "Finally, an agency that truly understands how to optimize for both search engines and AI discovery systems.",
              author: "Lisa Rodriguez",
              role: "CMO",
              company: "Digital Innovators",
              result: "+89% answer features",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="text-emerald-600 text-sm font-bold mb-4">{testimonial.result}</div>
                <p className="text-gray-700 text-lg leading-relaxed italic">“{testimonial.quote}”</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-lg">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


