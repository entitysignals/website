export const dynamic = "force-static";
import { Button, Section, Card, Hero, Grid, Stat, FeatureCard } from "@redefinition/ui";

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Enhanced hero background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Company Name and Innovation Lab */}
            <div className="mb-8">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3">
                Redefinition Tech Inc.
              </h1>
              <p className="text-lg sm:text-xl text-accent font-medium tracking-wide">
                Innovation Lab
              </p>
            </div>
            
            {/* Main Title */}
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-10 max-w-4xl mx-auto leading-tight">
              Building the future of intelligent software that enhances<br />
              how people learn and work.
            </h2>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">View Portfolio</Button>
              <Button size="lg">Partner with us</Button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Current Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three focused products addressing real challenges in search intelligence, advisory services, and learning technology.
          </p>
        </div>
        
        <Grid cols={3} gap={8}>
          <Card className="group">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-cyan-500"></div>
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Signals GEO
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI and search readiness scoring platform. Comprehensive analysis across technical health, content quality, and discoverability factors.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Platform</span>
              <span className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Live
              </span>
            </div>
          </Card>

          <Card className="group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-emerald-500"></div>
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Entity Signals
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Strategic consultancy focused on AI discoverability and search optimization. Clear entity structures and answer-driven content.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Advisory</span>
              <span className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Active
              </span>
            </div>
          </Card>

          <Card className="group">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              LearnChat
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Intelligent learning tools that adapt to individual needs. Advanced AI assistance for education and skill development.
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Platform</span>
              <span className="flex items-center text-amber-600">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Development
              </span>
            </div>
          </Card>
        </Grid>
      </Section>

      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Company Metrics
          </h2>
          <p className="text-lg text-muted-foreground">
            Growth driven by practical solutions and exceptional client outcomes.
          </p>
        </div>
        
        <Grid cols={4} gap={8}>
          <Stat
            value="3"
            label="Products Shipped"
            description="Live platforms serving users"
          />
          <Stat
            value="240+"
            label="Platform Users"
            description="Across all products"
          />
          <Stat
            value="98%"
            label="Client Satisfaction"
            description="Measured quarterly"
          />
          <Stat
            value="85%"
            label="Revenue Growth"
            description="Year over year"
          />
        </Grid>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Practical AI that solves real problems
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe AI should enhance human capability, not replace it. Our products focus on making complex tasks simpler, decisions clearer, and outcomes more predictable.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From helping businesses understand their search visibility to building platforms that scale knowledge, we create tools that teams actually want to use.
            </p>
            <Button size="lg">Learn Our Approach</Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card hover={false} className="p-6">
              <Stat
                value="24mo"
                label="Average Partnership"
                description="Client retention"
              />
            </Card>
            <Card hover={false} className="p-6">
              <Stat
                value="40+"
                label="Metrics Tracked"
                description="Per analysis"
              />
            </Card>
            <Card hover={false} className="p-6 col-span-2">
              <h4 className="font-medium text-foreground mb-3">Current Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Search Intelligence</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-sm rounded-full">Entity Optimization</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm rounded-full">Learning Systems</span>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-background to-muted/20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're exploring platform integrations, advisory services, or investment opportunities, we'd love to hear from you.
          </p>
          <div className="flex justify-center">
            <Button size="lg">Get in Touch</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}