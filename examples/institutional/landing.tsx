/**
 * Institutional example — full marketing landing.
 * Run via Next.js / Vite by mounting this component at the root after
 * importing `foundation.css` + `institutional.css`.
 */

import { FlavorProvider } from "@/lib/flavor-context";
import {
  Hero, Section, CTA, Navbar, Footer,
  FeatureCard, FeatureQuote, Testimonial,
  PricingCard, LogoCloud, Stats, FAQ,
} from "@/components/institutional";
import {
  Sparkles, Shield, Zap, BarChart3, Lock, Workflow,
} from "lucide-react";

export default function Landing() {
  return (
    <FlavorProvider flavor="institutional">
      <Navbar
        brand={<span>Checkgrow</span>}
        links={[
          { label: "Product", href: "#" },
          { label: "Pricing", href: "#pricing" },
          { label: "Docs",    href: "#" },
          { label: "Blog",    href: "#" },
        ]}
        cta={{ label: "Get started", href: "#" }}
      />

      <Hero
        eyebrow={<span>New · v2 launch</span>}
        title="Simplify scheduling. Strengthen compliance."
        description="Checkgrow brings modern scheduling to regulated teams with SOC 2, HIPAA, and total admin control, all in one place."
        primaryAction={{ label: "Talk to sales", href: "#" }}
        secondaryAction={{ label: "Get started",  href: "#" }}
      />

      <LogoCloud
        label="Trusted by serious teams"
        logos={[
          { name: "Acme",   src: "/logos/acme.svg" },
          { name: "Wonka",  src: "/logos/wonka.svg" },
          { name: "Stark",  src: "/logos/stark.svg" },
          { name: "Hooli",  src: "/logos/hooli.svg" },
        ]}
      />

      <Section
        eyebrow="What you get"
        title="Built for serious teams"
        description="Everything you need to run scheduling at scale, designed to feel effortless."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard icon={Sparkles} title="Magical"   description="One link, infinite availability windows. Magic happens behind the scenes." />
          <FeatureCard icon={Shield}   title="Compliant" description="SOC 2 Type II, HIPAA-ready, GDPR-friendly. Auditors love us." />
          <FeatureCard icon={Zap}      title="Fast"      description="Built on edge runtimes. Bookings load in under 200ms anywhere." />
          <FeatureCard icon={BarChart3} title="Analytics" description="See where time goes. Identify bottlenecks. Coach better." />
          <FeatureCard icon={Lock}      title="Secure"    description="SSO, SCIM, audit logs. Enterprise-grade controls from day one." />
          <FeatureCard icon={Workflow}  title="Automated" description="Triggers, webhooks, and a full API. Wire Checkgrow into anything." />
        </div>
      </Section>

      <Stats
        items={[
          { value: "99.99%", label: "Uptime SLA" },
          { value: "200+",   label: "Integrations" },
          { value: "12M",    label: "Bookings / month" },
          { value: "<200ms", label: "Median response" },
        ]}
      />

      <FeatureQuote
        portrait="/avatars/charlie.jpg"
        author="Charlie Sutton"
        role="Chief Design Officer, Atlassian"
        quote="Understanding the underlying material of new technologies is essential for designers to move beyond surface-level interaction and truly innovate."
      />

      <Section
        eyebrow="Testimonials"
        title="Don't just take our word for it"
        description="Our users are our best ambassadors. Discover why we're the top choice for scheduling meetings."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Testimonial quote="Just gave it a go and it's definitely the easiest meeting I've ever scheduled." author="Aria Minaei" role="CEO, Theatre.JS" />
          <Testimonial quote="Switched from Calendly to Checkgrow in a week." author="Guillermo Rauch" role="CEO, Vercel" />
          <Testimonial quote="I finally made the move after I couldn't find how to do this in the Calendly dashboard." author="Ant Wilson" role="Co-Founder & CTO, Supabase" />
        </div>
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple, honest pricing"
        description="Start free. Upgrade when you outgrow it."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <PricingCard
            name="Starter" price="$0" description="Everything you need to try Checkgrow."
            features={["1 user", "Unlimited bookings", "Email reminders"]}
            cta={{ label: "Start free", href: "#" }}
          />
          <PricingCard
            highlighted name="Team" price="$12" description="For teams that mean business."
            features={["Up to 25 users", "Round-robin routing", "SSO + audit logs", "Priority support"]}
            cta={{ label: "Start free trial", href: "#" }}
          />
          <PricingCard
            name="Enterprise" price="Custom" period=""
            description="HIPAA, custom SLA, dedicated CSM."
            features={["Unlimited users", "Custom contracts", "Dedicated infra"]}
            cta={{ label: "Talk to sales", href: "#" }}
          />
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <FAQ
          items={[
            { question: "Is Checkgrow HIPAA-compliant?", answer: "Yes — we sign BAAs on the Team and Enterprise plans." },
            { question: "Do you support SSO?", answer: "Yes, on all Team and Enterprise plans. SAML + OIDC." },
            { question: "Can I import from Calendly?", answer: "Yes, in under five minutes. We'll handle availability, event types, and integrations." },
          ]}
        />
      </Section>

      <CTA
        title="Ready to ship?"
        description="Start free. Upgrade when you need to. No credit card required."
        primaryAction={{ label: "Get started", href: "#" }}
        secondaryAction={{ label: "Talk to sales", href: "#" }}
      />

      <Footer
        brand="Checkgrow"
        description="Modern scheduling for regulated teams."
        groups={[
          { title: "Product", links: [{label:"Features",href:"#"},{label:"Pricing",href:"#"},{label:"Integrations",href:"#"}]},
          { title: "Company", links: [{label:"About",href:"#"},{label:"Blog",href:"#"},{label:"Careers",href:"#"}]},
          { title: "Legal",   links: [{label:"Terms",href:"#"},{label:"Privacy",href:"#"},{label:"DPA",href:"#"}]},
        ]}
        socials={[
          { name: "Twitter",   href: "#" },
          { name: "LinkedIn",  href: "#" },
          { name: "Github",    href: "#" },
          { name: "Instagram", href: "#" },
        ]}
        copyright="© 2026 Checkgrow Inc. All rights reserved."
      />
    </FlavorProvider>
  );
}
