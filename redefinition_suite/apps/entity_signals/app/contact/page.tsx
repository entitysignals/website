"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Google Forms via fetch
      const formBody = new URLSearchParams({
        'entry.1856277916': formData.name,
        'entry.558330334': formData.email,
        'entry.14866584': formData.website,
        'entry.2002499312': formData.message
      });

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSd8PUji_mXTV6lLH8WZScFmO2mL5fa0Ws_SlbPTDYUF-Hoxhg/formResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
        mode: 'no-cors'
      });

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <main className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Tell us about your brand and goals. We'll reply with the next available walkthrough slot.</p>
        
        {/* Quick booking option */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-4">
            <span className="text-emerald-800 font-medium">Prefer to book directly?</span>
            <a 
              href="https://calendly.com/ricco-entitysignals/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
            >
              Schedule 30-min Call
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm grid gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              placeholder="Full name" 
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                placeholder="you@company.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input 
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                placeholder="Company website" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">What would you like help with? *</label>
            <textarea 
              rows={5} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              placeholder="Briefly describe your goals and current situation" 
            />
          </div>
          <div className="text-center">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Request a walkthrough'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}


