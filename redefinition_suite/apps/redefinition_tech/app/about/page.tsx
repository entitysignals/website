export const dynamic = "force-static";
import { Button, Container, Section, Card, Hero, Stat } from "@redefinition/ui";

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="About Us"
        title="Mission-driven innovation in AI and software"
        description="Founded with the belief that technology should amplify human potential, Redefinition Tech creates practical AI solutions that solve real-world problems for businesses and individuals."
        actions={
          <Button className="bg-accent text-white px-8 py-3">Join Our Mission</Button>
        }
      />

      <Section eyebrow="Mission" title="What we believe">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold">
              Technology should enhance human capability, not replace it
            </h3>
            <p className="text-muted-foreground">
              We believe the most powerful AI solutions are those that make complex tasks simpler, decisions clearer, and outcomes more predictable. Our approach focuses on practical applications that teams actually want to use.
            </p>
            <p className="text-muted-foreground">
              Every product we build starts with a real problem experienced by real people. We then engineer elegant solutions that scale naturally and integrate seamlessly into existing workflows.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Years of Research" value="5+" />
            <Stat label="Products Shipped" value="3" />
            <Stat label="Team Members" value="12" />
            <Stat label="Client Success Rate" value="98%" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Our team">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-accent rounded-full"></div>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Sarah Chen</h3>
            <p className="text-muted-foreground text-sm mb-3">Founder & CEO</p>
            <p className="text-sm text-muted-foreground">
              Former AI research lead at Google. 10+ years building scalable machine learning systems and leading cross-functional teams.
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-secondary rounded-full"></div>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Marcus Rodriguez</h3>
            <p className="text-muted-foreground text-sm mb-3">CTO</p>
            <p className="text-sm text-muted-foreground">
              Former principal engineer at Stripe. Expert in distributed systems, API design, and scaling platforms from startup to enterprise.
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-500 rounded-full"></div>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Dr. Priya Patel</h3>
            <p className="text-muted-foreground text-sm mb-3">Head of Research</p>
            <p className="text-sm text-muted-foreground">
              PhD in Computer Science from Stanford. Specializes in natural language processing and information retrieval systems.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Values" title="How we work">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-accent rounded"></div>
            </div>
            <h3 className="font-medium mb-2">Practical First</h3>
            <p className="text-sm text-muted-foreground">
              Every feature we build solves a real problem. We prioritize utility over novelty.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-secondary rounded"></div>
            </div>
            <h3 className="font-medium mb-2">Transparent Process</h3>
            <p className="text-sm text-muted-foreground">
              Open communication with clients, clear roadmaps, and honest timelines.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-emerald-500 rounded"></div>
            </div>
            <h3 className="font-medium mb-2">Quality Focus</h3>
            <p className="text-sm text-muted-foreground">
              We ship when it's ready, not when it's due. Quality is non-negotiable.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="font-medium mb-2">Long-term Thinking</h3>
            <p className="text-sm text-muted-foreground">
              Building sustainable solutions that grow with our clients' needs.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Timeline" title="Our journey">
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="p-6">
              <div className="text-2xl font-semibold text-accent mb-2">2022</div>
              <h3 className="font-medium mb-2">Foundation</h3>
              <p className="text-sm text-muted-foreground">
                Company founded with initial focus on search intelligence and AI discoverability.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-2xl font-semibold text-secondary mb-2">2023</div>
              <h3 className="font-medium mb-2">First Products</h3>
              <p className="text-sm text-muted-foreground">
                Launched Signals GEO platform and Entity Signals consultancy services.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-2xl font-semibold text-emerald-500 mb-2">2024</div>
              <h3 className="font-medium mb-2">Growth</h3>
              <p className="text-sm text-muted-foreground">
                Expanded team, onboarded enterprise clients, and began LearnChat development.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-2xl font-semibold text-blue-500 mb-2">2025</div>
              <h3 className="font-medium mb-2">Scale</h3>
              <p className="text-sm text-muted-foreground">
                LearnChat public launch, API partnerships, and international expansion.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-gradient-to-b from-accent/5 to-transparent">
        <Container>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold">Interested in joining us?</h2>
            <p className="text-muted-foreground">
              We're always looking for talented individuals who share our passion for building practical AI solutions that make a real difference.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-accent text-white px-8 py-3">View Open Positions</Button>
              <Button className="border border-white/20 bg-white/5 backdrop-blur text-foreground px-8 py-3">Learn About Our Culture</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}