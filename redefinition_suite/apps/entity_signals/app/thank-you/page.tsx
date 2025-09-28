"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    let tries = 0;
    const fire = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        // @ts-ignore
        window.gtag("event", "form_submit", {
          form_id: "contact_form",
          form_name: "Google Form Contact",
        });
      } else if (tries < 20) {
        tries += 1;
        setTimeout(fire, 200); // retry for ~4s total
      }
    };
    fire();
  }, []);

  return (
    <main className="py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your message and will get back to you within 24 hours with the next available walkthrough slot.
          </p>
          <div className="space-y-4 text-gray-600 mb-10">
            <p>In the meantime, feel free to:</p>
            <ul className="space-y-2">
              <li>• Learn more about our <a href="/services" className="text-emerald-600 hover:text-emerald-700 underline">services</a></li>
              <li>• Explore our <a href="/methods" className="text-emerald-600 hover:text-emerald-700 underline">methodology</a></li>
              <li>• Read about our <a href="/about" className="text-emerald-600 hover:text-emerald-700 underline">approach</a></li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              Return to Home
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Send Another Message
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
