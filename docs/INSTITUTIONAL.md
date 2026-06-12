# Institutional Flavor

Big headings. Generous spacing. Soft gradients. Pill-shaped buttons.
This is what we use for **the marketing site, presentations, sales
collateral, the blog, and pitch decks** — anywhere the audience is
external and we're trying to wow them.

> Activate it with `<FlavorProvider flavor="institutional">`. Every
> primitive inside (Button, Card, Input, Badge…) auto-switches to its
> Institutional appearance.

---

## When to use

- ✅ Landing pages
- ✅ Pricing page
- ✅ Customer stories / testimonials
- ✅ About / Careers / Blog index
- ✅ Presentations and pitch decks (Claude Design)
- ❌ Anything inside the product app — use Platform.

## Core components

| Component             | What it is                                    |
| --------------------- | --------------------------------------------- |
| `<Hero />`            | Above-the-fold with display heading + 2 CTAs  |
| `<Section />`         | Section frame with eyebrow + title + description |
| `<CTA />`             | Big call-to-action band with aurora background |
| `<Navbar />`          | Floating, rounded, blur-backed top nav        |
| `<Footer />`          | Multi-column footer with social icons         |
| `<FeatureCard />`     | Round card, optional background image         |
| `<FeatureQuote />`    | Editorial portrait + pull-quote               |
| `<Testimonial />`     | Customer quote card (or feature variant)      |
| `<PricingCard />`     | Tier card with features + CTA                 |
| `<LogoCloud />`       | "Trusted by" logo strip                       |
| `<Stats />`           | Huge-number stats row                         |
| `<FAQ />`             | Accordion-style Q&A                           |
| `<GradientBackground />` | Soft lavender wash (aurora / radial / linear) |

## Typography rules

- Hero / page title → `display` or `h1` class.
- Section title → `h2`.
- Subhead → `lead`.
- Body → default `<p>` (auto 17px / 1.65).

## Example skeleton

```tsx
import { FlavorProvider } from "@checkgrow/design-system";
import {
  Navbar, Hero, Section, FeatureCard, CTA, Footer,
} from "@checkgrow/design-system/institutional";
import { Sparkles, Shield, Zap } from "lucide-react";

export default function Landing() {
  return (
    <FlavorProvider flavor="institutional">
      <Navbar
        brand="Checkgrow"
        links={[
          { label: "Product", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Docs",    href: "#" },
        ]}
        cta={{ label: "Get started", href: "#" }}
      />
      <Hero
        eyebrow="New · v2 launch"
        title="Simplify scheduling. Strengthen compliance."
        description="Checkgrow brings modern scheduling to regulated teams with SOC 2, HIPAA, and total admin control, all in one place."
        primaryAction={{ label: "Talk to sales", href: "#" }}
        secondaryAction={{ label: "Get started",  href: "#" }}
      />
      <Section
        eyebrow="What you get"
        title="Built for serious teams"
        description="Everything you need to run scheduling at scale, in one place."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard icon={Sparkles} title="Magical" description="…" />
          <FeatureCard icon={Shield}   title="Compliant" description="…" />
          <FeatureCard icon={Zap}      title="Fast" description="…" />
        </div>
      </Section>
      <CTA
        title="Ready to ship?"
        description="Start free, upgrade when you need to."
        primaryAction={{ label: "Get started", href: "#" }}
      />
      <Footer brand="Checkgrow" copyright="© 2026 Checkgrow Inc." />
    </FlavorProvider>
  );
}
```
