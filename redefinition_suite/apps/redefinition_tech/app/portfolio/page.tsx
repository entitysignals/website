export const dynamic = "force-static";
import { Button, Section, Card, Hero, Grid } from "@redefinition/ui";

export default function PortfolioPage() {
  return (
    <main>
      <Hero
        eyebrow="Portfolio"
        title="Building tomorrow's software today"
        subtitle="Three focused products addressing real challenges in search intelligence, advisory services, and learning technology."
      />

      <Section>
        <div className="space-y-24">
          {/* Signals GEO */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 rounded-lg bg-accent"></div>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Signals GEO</h2>
                  <p className="text-muted-foreground">AI & Search Readiness Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Comprehensive scoring platform that evaluates websites across technical health, content quality, authority signals, and AI discoverability.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-medium text-foreground">Key Capabilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    Real-time domain scoring across 40+ factors
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    Technical SEO and Core Web Vitals analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    AI readiness assessment and recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    Competitor comparison and benchmarking
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button>Visit Platform</Button>
                <Button variant="ghost">API Documentation</Button>
              </div>
            </div>
            
            <Card hover={false} className="bg-accent/5">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Sample Analysis</span>
                  <span className="text-3xl font-heading font-semibold text-foreground">78</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Technical Health", score: 80, color: "bg-accent" },
                    { label: "Content Quality", score: 75, color: "bg-accent" },
                    { label: "Authority Signals", score: 70, color: "bg-accent" },
                    { label: "AI Readiness", score: 85, color: "bg-accent" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.score}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Entity Signals */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card hover={false} className="bg-emerald-500/5 lg:order-1">
              <div className="space-y-6">
                <h3 className="font-medium text-foreground">Service Portfolio</h3>
                <Grid cols={2} gap={4}>
                  {[
                    { title: "Site Audit", desc: "Complete review" },
                    { title: "Blueprint", desc: "90-day roadmap" },
                    { title: "Advisory", desc: "Ongoing support" },
                    { title: "Training", desc: "Team enablement" },
                  ].map((service) => (
                    <div key={service.title} className="bg-emerald-500/10 rounded-xl p-4 text-center">
                      <div className="font-medium text-foreground">{service.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{service.desc}</div>
                    </div>
                  ))}
                </Grid>
                
                <div className="pt-4 border-t border-emerald-500/20">
                  <div className="text-sm text-muted-foreground">Current Clients</div>
                  <div className="text-2xl font-semibold text-foreground">12</div>
                </div>
              </div>
            </Card>
            
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500"></div>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Entity Signals</h2>
                  <p className="text-muted-foreground">Strategic AI & SEO Consultancy</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Specialized consultancy helping organizations improve their AI discoverability and search performance through entity optimization and content strategy.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-medium text-foreground">Core Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Entity clarity and knowledge graph optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    AI-ready content structure and Q&A development
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Technical SEO and site architecture
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Performance measurement and analytics
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button variant="secondary">Learn More</Button>
                <Button variant="ghost">Case Studies</Button>
              </div>
            </div>
          </div>

          {/* LearnChat */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mr-4">
                  <div className="w-6 h-6 rounded-lg bg-blue-500"></div>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">LearnChat</h2>
                  <p className="text-muted-foreground">Intelligent Learning Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Next-generation learning tools that adapt to individual needs and learning styles. Advanced AI assistance for education and professional development.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-medium text-foreground">Planned Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    Adaptive learning paths based on progress
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    AI-powered content recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    Real-time comprehension assessment
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    Collaborative learning environments
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Join Waitlist</Button>
                <Button variant="ghost">Research Paper</Button>
              </div>
            </div>
            
            <Card hover={false} className="bg-blue-500/5">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Development Progress</div>
                  <div className="text-3xl font-heading font-semibold text-foreground">65%</div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { phase: "Core Platform", status: "Complete", color: "text-green-600" },
                    { phase: "AI Integration", status: "In Progress", color: "text-blue-600" },
                    { phase: "User Testing", status: "Planned", color: "text-amber-600" },
                    { phase: "Public Launch", status: "Q2 2024", color: "text-muted-foreground" },
                  ].map((item) => (
                    <div key={item.phase} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.phase}</span>
                      <span className={item.color}>{item.status}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-blue-500/20">
                  <div className="text-sm text-muted-foreground">Expected Launch</div>
                  <div className="text-lg font-semibold text-foreground">Q2 2024</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}