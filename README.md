<!-- ============================================================== -->
<!--                  Checkgrow Design System                       -->
<!-- ============================================================== -->

<div align="center">

# Checkgrow Design System

**One foundation. Two flavors. Every surface covered.**

Marketing pages, presentations, dashboards, apps, internal tools, AI
clients — all from a single, opinionated React + Tailwind + shadcn-based
system that knows when to feel _generous_ and when to feel _precise_.

[Foundation](docs/FOUNDATION.md) · [Institutional](docs/INSTITUTIONAL.md) · [Platform](docs/PLATFORM.md) · [Usage](docs/USAGE.md) · [AI Rules](.ai/rules.md)

</div>

---

## The big idea

We ship **two flavors** of the same design language:

| | **Institutional** | **Platform** |
|---|---|---|
| **For** | Web, marketing, presentations, sales | Dashboards, app, internal tools |
| **Feel** | Big, generous, friendly, spacious | Sharp, dense, precise, shadcn-aligned |
| **Headings** | Huge — `display` up to 80px | Tight — `h1` 30px |
| **Buttons** | Pill-shaped, large | Rounded-md, compact |
| **Cards** | `rounded-3xl`, soft drop shadow | `rounded-lg`, subtle border |
| **Backgrounds** | Soft lavender washes (`#E4EAFD`/`#9BA6FF`) | Solid neutrals |
| **Mirrors** | High-end marketing sites (Cal.com, Linear, Vercel) | shadcn `b0` preset (Next.js) |

Both flavors **share the same tokens, font, icons, primitives, and CSS
variables**. Switching is a one-line provider change.

```tsx
<FlavorProvider flavor="institutional">  // marketing / presentations
<FlavorProvider flavor="platform">       // dashboard / app
```

---

## 🎨 Foundation at a glance

### Color — shadcn neutral + Checkgrow lavender

The foundation is shadcn's **neutral** palette. We add **exactly one**
brand accent — Checkgrow Lavender — in two tints. Nothing else.

```
┌────────────────────────────────────────────────────────────────┐
│  NEUTRAL                                                       │
│  ▓▓▓▓▓ ▒▒▒▒▒ ░░░░░ ░░░░░ ░░░░░ ░░░░░ ░░░░░ ▒▒▒▒▒ ▓▓▓▓▓ ████  │
│  50    100   200   300   400   500   600   700   800   900    │
├────────────────────────────────────────────────────────────────┤
│  ACCENT — Checkgrow Lavender                                   │
│  ████████  #E4EAFD  soft   (backgrounds, washes)               │
│  ████████  #9BA6FF  solid  (focus, highlights, hover glow)     │
├────────────────────────────────────────────────────────────────┤
│  SEMANTIC                                                      │
│  ████ success #22C55E   ████ warning #F59E0B                   │
│  ████ danger  #DC2626   ████ info    #9BA6FF                   │
└────────────────────────────────────────────────────────────────┘
```

The lavender wash is the ONLY accent allowed in soft, blurry
backgrounds. It's the signature look of Institutional heroes and CTAs.

```tsx
<GradientBackground variant="aurora"> ...hero content... </GradientBackground>
// or raw:
<div className="cg-aurora"> ... </div>
```

### Typography — Geist, two scales

We use **Geist** (sans) and **Geist Mono** for everything. Two scales
ship side-by-side:

**Institutional** — for marketing and presentations
```
display   80px / 1.05 / -0.04em    "Simplify scheduling."
h1        64px / 1.05 / -0.035em   "Strengthen compliance."
h2        48px / 1.10 / -0.03em
h3        36px / 1.15 / -0.02em
lead      20px / 1.6                "Cal.com brings modern scheduling…"
body      17px / 1.65
```

**Platform** — for dashboards (shadcn-aligned)
```
h1        30px / 1.20 / -0.015em   "Dashboard"
h2        24px / 1.25 / -0.01em
h3        20px / 1.30
h4        16px / 1.40
body      14px / 1.50
small     13px / 1.45
micro     12px / 1.40 / 0.02em
```

### Spacing, radius, shadows

Same Tailwind base scale. Composite tokens differ per flavor — see
[`docs/FOUNDATION.md`](docs/FOUNDATION.md) for the full table.

### Icons

- **UI icons:** [Lucide](https://lucide.dev) via `lucide-react`. Re-exported as `Icons` from the primitives barrel.
- **Brand / social icons:** the `social-media/` folder. Always rendered via `<SocialIcon name="X" variant="black|white|color" />`. Never substitute with Lucide.

---

## 📦 What's in the box

```
design-system/
├── tokens/                ← TypeScript design tokens (colors, type, spacing, …)
├── src/
│   ├── styles/
│   │   ├── foundation.css       ← shared CSS vars + base reset (REQUIRED)
│   │   ├── institutional.css    ← scoped to .cg-institutional
│   │   └── platform.css         ← scoped to .cg-platform
│   ├── lib/
│   │   ├── utils.ts             ← cn(), flavorClass()
│   │   └── flavor-context.tsx   ← <FlavorProvider>, useFlavor()
│   └── components/
│       ├── primitives/    ← shared (Button, Card, Input, …) — auto-adapt
│       ├── institutional/ ← Hero, CTA, Pricing, Testimonial, …
│       ├── platform/      ← Sidebar, DataTable, StatCard, Command, …
│       └── social/        ← <SocialIcon /> for brand marks
├── social-media/          ← brand SVGs (svg/black/, svg/white/, svg/color/)
├── examples/              ← runnable demos for both flavors
├── docs/                  ← FOUNDATION / INSTITUTIONAL / PLATFORM / USAGE
└── .ai/rules.md           ← rules for AI agents (vibe coding contract)
```

---

## 🧩 Component catalog

### Shared primitives — both flavors

`Button`, `Card`, `Input`, `Textarea`, `Label`, `Badge`, `Avatar`,
`Separator`, `Checkbox`, `Switch`, `Select`, `Tabs`, `Tooltip`,
`Dialog`, `DropdownMenu`, `Alert`, `Progress`, `Skeleton`, `Table`,
`Icons`.

Each primitive reads the active flavor from `useFlavor()` and adjusts
shape, sizing, and padding accordingly — no duplication.

### Institutional — marketing & presentations

| Component | Use for |
|---|---|
| `Hero` | Above-the-fold display title + lead + CTAs |
| `Section` | Section frame with eyebrow + title + description |
| `CTA` | Big call-to-action band with aurora background |
| `Navbar` | Floating, blur-backed top nav |
| `Footer` | Multi-column footer with socials |
| `FeatureCard` | Round card, optional background image |
| `FeatureQuote` | Editorial portrait + pull-quote (à la "Charlie Sutton") |
| `Testimonial` | Customer quote card (or feature variant) |
| `PricingCard` | Tier card with feature list + CTA |
| `LogoCloud` | "Trusted by" logo strip |
| `Stats` | Huge-number stat row |
| `FAQ` | Accordion Q&A |
| `GradientBackground` | Soft aurora / radial / linear lavender wash |

### Platform — dashboards & apps

| Component | Use for |
|---|---|
| `Sidebar` | Left rail with nested nav, badges, footer slot |
| `Topbar` | Sticky top bar with search + actions |
| `PageHeader` | Page title + breadcrumb + actions row |
| `Breadcrumb` | Trail of links |
| `StatCard` | Number + label + delta |
| `DataTable<T>` | Typed table with column definitions |
| `BarChart` / `Sparkline` | Dependency-free SVG charts |
| `EmptyState` | Friendly empty placeholder |
| `Notification` | Inline notification card |
| `Command` | ⌘K command palette body |
| `FormField` | Label + control + hint/error wrapper |
| `Kbd` | Keyboard shortcut chip |

---

## 🚀 Quick start

```bash
pnpm add @checkgrow/design-system geist lucide-react
pnpm add class-variance-authority clsx tailwind-merge
```

```tsx
// app/layout.tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@checkgrow/design-system/styles/foundation.css";
import "@checkgrow/design-system/styles/institutional.css";
import "@checkgrow/design-system/styles/platform.css";

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// any page
import { FlavorProvider } from "@checkgrow/design-system";
import { Hero, Section, FeatureCard } from "@checkgrow/design-system/institutional";
import { Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <FlavorProvider flavor="institutional">
      <Hero
        title="Simplify scheduling. Strengthen compliance."
        description="Checkgrow brings modern scheduling to regulated teams."
        primaryAction={{ label: "Talk to sales", href: "/contact" }}
        secondaryAction={{ label: "Get started", href: "/signup" }}
      />
      <Section title="Built for serious teams">
        <FeatureCard icon={Sparkles} title="Magical" description="…" />
      </Section>
    </FlavorProvider>
  );
}
```

```tsx
// dashboard page
import { FlavorProvider } from "@checkgrow/design-system";
import { Sidebar, Topbar, StatCard } from "@checkgrow/design-system/platform";

export default function Dashboard() {
  return (
    <FlavorProvider flavor="platform">
      <div className="flex">
        <Sidebar brand="Checkgrow" items={[/* … */]} />
        <main className="flex-1">
          <Topbar />
          <div className="grid grid-cols-4 gap-4 p-6">
            <StatCard label="MRR" value="$48,210" delta={{value:"12%",direction:"up"}} />
            {/* … */}
          </div>
        </main>
      </div>
    </FlavorProvider>
  );
}
```

Full setup details (Tailwind preset, social-media static assets,
shadcn compatibility) in [`docs/USAGE.md`](docs/USAGE.md).

---

## 🤖 AI / "vibe coding" contract

This system is built to be driven by AI coding agents (Claude Code,
Claude Design, Cursor, etc.). Before any agent generates UI, it should
read [`.ai/rules.md`](.ai/rules.md).

The contract in one paragraph:

> **Ask the user which flavor — Institutional (web/marketing/
> presentations) or Platform (dashboard/app) — unless it's obvious from
> the prompt. Wrap the tree in `<FlavorProvider>`. Compose from listed
> components, never reinvent. Geist only. Lucide for UI icons,
> `<SocialIcon />` for brand marks. The only accent is Checkgrow
> Lavender (`#E4EAFD`, `#9BA6FF`). No other colors.**

`CLAUDE.md` at the repo root points Claude at the same rules.

---

## 🛠 Compatibility

- **React** 18 or 19
- **Tailwind CSS** 3.4+
- **shadcn/ui** — Platform flavor is drop-in compatible with the `b0`
  preset (`pnpm dlx shadcn@latest init --preset b0 --template next`).
  CSS variable names, radius scale, and component shapes are aligned —
  you can mix our `<DataTable />` with a shadcn `<Card />` without
  visual conflict.
- **Next.js / Vite / Remix** — works in all three; see
  [`docs/USAGE.md`](docs/USAGE.md) for the social-media static asset
  setup per bundler.
- **Server components** — primitives are server-safe by default. Files
  that need client state are explicitly marked `"use client"`.

---

## 🎯 Where this is used

- **The Checkgrow product app** (Platform)
- **Checkgrow marketing site** (Institutional)
- **Sales decks & presentations on Claude Design** (Institutional)
- **Internal tools and AI clients (Claude Code)** (Platform)
- **Any new React project from this org** — start here.

---

## License

MIT. Built by Checkgrow.
