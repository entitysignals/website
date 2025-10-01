import { Container } from "@redefinition/ui";

export const dynamic = "force-static";

export default function TermsPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: September 28, 2025
          </p>
          
          <p className="mb-6">
            Welcome to Entity Signals. By accessing or using our website https://entitysignals.com you agree to these Terms of Service. If you do not agree, please discontinue use.
          </p>
          
          <h2>1. Services</h2>
          <p>
            Entity Signals provides consulting services related to Generative Engine Optimization (GEO) and AI-SEO. Information on our website is for general purposes only and does not constitute binding offers. Formal services require a signed agreement (SOW, MSA, or equivalent).
          </p>
          
          <h2>2. Use of Website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Misuse, disrupt, or attempt unauthorized access to our site.</li>
            <li>Copy, distribute, or exploit content without permission.</li>
            <li>Submit unlawful, defamatory, or harmful material through our forms.</li>
          </ul>
          
          <h2>3. Intellectual Property</h2>
          <p>
            All content, branding, logos, text, graphics, and designs on this site are owned by Entity Signals or licensed to us. You may not reproduce or use them without prior written consent.
          </p>
          
          <h2>4. Links to Third Parties</h2>
          <p>
            Our website may contain links to third-party services (e.g., Calendly, LinkedIn). We are not responsible for the privacy or practices of those external sites.
          </p>
          
          <h2>5. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law:</p>
          <ul>
            <li>Entity Signals is not liable for indirect, incidental, or consequential damages arising from use of our site or services.</li>
            <li>Our liability is limited to the maximum extent permitted by applicable law.</li>
          </ul>
          
          <h2>6. Changes</h2>
          <p>
            We may update these Terms at any time. Updates will be posted with a revised "Last updated" date.
          </p>
          
          <h2>7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of British Columbia, Canada.
          </p>
          
          <h2>8. Contact</h2>
          <p>For any questions regarding these Terms, contact:</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-2"><strong>Entity Signals</strong></p>
            <p className="mb-2">52-3111 Beckman Pl., Richmond BC, Canada, V6X 3R3</p>
            <p>Email: <a href="mailto:info@entitysignals.com" className="text-emerald-600 hover:text-emerald-700">info@entitysignals.com</a></p>
          </div>
        </div>
      </Container>
    </main>
  );
}


