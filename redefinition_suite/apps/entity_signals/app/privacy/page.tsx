import { Container } from "@redefinition/ui";

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: September 28, 2025
          </p>
          
          <p className="mb-6">
            Entity Signals ("we," "our," "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you use our website https://entitysignals.com and related services.
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Information you provide directly:</strong> such as your name, email address, phone number, or company details when you submit a form, schedule a call, or contact us.</li>
            <li><strong>Automatically collected data:</strong> technical information like IP address, browser type, device info, and pages visited (through Google Analytics and similar tools).</li>
            <li><strong>Third-party integrations:</strong> when you book a meeting through Calendly or interact with embedded content.</li>
          </ul>
          
          <h2>2. How We Use Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Respond to your inquiries and provide consulting services.</li>
            <li>Improve our website performance and user experience.</li>
            <li>Communicate updates, offers, or resources (if you've opted in).</li>
            <li>Meet legal and compliance obligations.</li>
          </ul>
          
          <h2>3. Sharing of Information</h2>
          <p>We do not sell or rent your personal data. We may share information:</p>
          <ul>
            <li>With trusted third-party service providers (e.g., hosting, analytics, scheduling) who support our operations.</li>
            <li>If required by law, regulation, or legal request.</li>
          </ul>
          
          <h2>4. Cookies & Tracking</h2>
          <ul>
            <li>Our site uses cookies and similar technologies (e.g., GA4, Bing Webmaster Tools, IndexNow) to improve functionality and measure traffic.</li>
            <li>You can manage or disable cookies in your browser settings.</li>
          </ul>
          
          <h2>5. Data Retention</h2>
          <p>
            We keep your personal information only as long as needed to provide services, comply with legal obligations, or for reasonable business purposes.
          </p>
          
          <h2>6. Your Rights</h2>
          <ul>
            <li>Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data.</li>
            <li>To exercise these rights, contact us at info@entitysignals.com</li>
          </ul>
          
          <h2>7. Security</h2>
          <p>
            We take reasonable steps to protect your information, but no system is 100% secure. Please use caution when transmitting data online.
          </p>
          
          <h2>8. Contact</h2>
          <p>If you have questions about this Privacy Policy, contact:</p>
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


