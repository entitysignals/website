import { Container } from "@redefinition/ui";

export const dynamic = "force-static";

export default function EditorialPolicyPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Editorial Policy</h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-lg text-gray-600 mb-8">
            At Entity Signals, accuracy and trust are central to our work.
          </p>
          
          <h2>Content Creation</h2>
          <p>
            Articles, guides, and case studies are created by our consulting team with direct expertise in GEO (Generative Engine Optimization) and AI-SEO.
          </p>
          
          <h2>Fact-Checking</h2>
          <p>
            Before publishing, all content is reviewed for accuracy, schema compliance, and alignment with industry best practices.
          </p>
          
          <h2>Updating</h2>
          <p>
            We review key pages at least every 6 months and update when new standards, tools, or AI search behaviors emerge.
          </p>
          
          <h2>Transparency</h2>
          <p>
            Any conflicts of interest, partnerships, or sponsorships will be clearly disclosed.
          </p>
          
          <h2>Corrections</h2>
          <p>
            If errors are identified, we correct them promptly and note the update.
          </p>
          
          <div className="bg-emerald-50 p-6 rounded-lg mt-8">
            <p className="text-emerald-800 font-medium mb-0">
              This ensures that what you read here is reliable, useful, and kept current.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}


