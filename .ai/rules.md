# Checkgrow Design System — AI Agent Rules

> Read this file before generating any UI. It tells you **which flavor to
> use**, **what's allowed**, and **what's forbidden**. Most mistakes come
> from mixing Institutional and Platform — don't.

---

## 1. Decide the flavor BEFORE you write code

Every screen you generate is one of two flavors. If you can't tell from
the prompt, **ask the user**:

> "Is this for the marketing site / presentation (Institutional) or for
> the product dashboard / app (Platform)?"

| Use **Institutional** when…                | Use **Platform** when…              |
| ------------------------------------------ | ----------------------------------- |
| Landing pages, marketing pages             | Dashboards, admin panels            |
| Pitch decks, presentations, slides         | Forms-heavy app screens             |
| Blog, docs home, pricing, about            | Tables, data grids, settings pages  |
| Hero sections, big CTAs, testimonials      | Sidebars, topbars, command palettes |
| Anything client-facing & "wow"             | Anything internal, dense, daily-use |

Then wrap the tree:

```tsx
import { FlavorProvider } from "@checkgrow/design-system";

<FlavorProvider flavor="institutional"> ... </FlavorProvider>
// or
<FlavorProvider flavor="platform"> ... </FlavorProvider>
```

All primitives auto-adapt.

---

## 2. Hard rules that apply to BOTH flavors

- **Font:** Geist (sans) for everything, Geist Mono for code/numbers. Never substitute.
- **Icons (UI):** Lucide via `lucide-react`. Re-exported from
  `@checkgrow/design-system/primitives` as `Icons`.
- **Icons (social/brand):** ALWAYS use `<SocialIcon name="X" />` from
  `@checkgrow/design-system/social` — never Lucide brand glyphs, never
  guessed SVGs. The brand files live under `social-media/`.
- **Color palette:** shadcn `neutral` scale (foundation) plus exactly
  **one** brand accent with two tints:
  - `#E4EAFD` (soft) — backgrounds, washes, gradient stops
  - `#9BA6FF` (solid) — focus rings, highlighted bars, hover glow
  Do not introduce other accent colors. No teal, no orange, no purple
  beyond these two values.
- **Radii, spacing, shadows:** consume from `tokens/` — do not hardcode.

---

## 3. Institutional rules

- Headings are LARGE. Use `display` / `h1` / `h2` classes (set in
  `institutional.css`). Never shrink them below the responsive minimum.
- Sections breathe. Use the `section` class — its vertical padding is
  intentionally generous.
- Cards are round (`rounded-3xl`), buttons are pill (`rounded-full`).
- Soft blurry backgrounds are encouraged. Reach for `GradientBackground`
  or `cg-aurora` / `bg-cg-soft-radial` utilities — but only in hero or CTA
  sections. Never on small UI chrome.
- Heroes use big text + lead paragraph + 2 CTAs (primary + outline).
- Prefer image-rich layouts (`FeatureCard` with `image`, `FeatureQuote`
  with portrait).
- Default to `<Hero />`, `<Section />`, `<CTA />`, `<Testimonial />`,
  `<FeatureCard />`, `<PricingCard />`, `<LogoCloud />`, `<Stats />`,
  `<FAQ />`, `<Navbar />`, `<Footer />`.

## 4. Platform rules

- Density first. Tight rhythm, smaller text (14px body), `h-9` controls.
- Cards are subtly bordered (`rounded-lg border shadow-sm`). No big shadows.
- Buttons are square-ish (`rounded-md`). No pill shapes in app chrome.
- Sidebars and topbars are sticky and persistent. Use `<Sidebar />` +
  `<Topbar />` + `<PageHeader />` for shells.
- Forms are stacked, with `<FormField label hint error>` wrapping inputs.
- Data is displayed in `<DataTable />` or compact `<StatCard />` grids.
- Reach for `<EmptyState />`, `<Notification />`, `<Command />` (⌘K), and
  `<Kbd />` instead of inventing.
- Mirror shadcn defaults — anything you'd get from
  `pnpm dlx shadcn@latest init --preset b0 --template next` should work
  drop-in here; we kept the variable names compatible.

---

## 5. What you must NEVER do

- ❌ Mix flavor styles in one tree (e.g. pill buttons on a dashboard).
- ❌ Add new accent colors. Lavender (`#E4EAFD`, `#9BA6FF`) is the only one.
- ❌ Use any font besides Geist / Geist Mono.
- ❌ Use Lucide for social brand marks.
- ❌ Hardcode hex / px values when a token exists.
- ❌ Build components from scratch when one of the listed components
  already covers the use case.

---

## 6. Quick component map

| Need…                    | Institutional             | Platform                |
| ------------------------ | ------------------------- | ----------------------- |
| Above-the-fold landing   | `<Hero />`                | (n/a — use `PageHeader`)|
| Section frame            | `<Section />`             | `section` div + p-6     |
| Card                     | `<Card />` (round)        | `<Card />` (sharp)      |
| Primary CTA              | `<Button size="xl">` pill | `<Button size="md">`    |
| Form input               | `<Input />`               | `<FormField><Input/>`   |
| Pricing                  | `<PricingCard />`         | (n/a)                   |
| Testimonial              | `<Testimonial />`         | (n/a)                   |
| Logo strip               | `<LogoCloud />`           | (n/a)                   |
| Stats                    | `<Stats />` (huge nums)   | `<StatCard />` (small)  |
| FAQ                      | `<FAQ />`                 | (n/a)                   |
| App shell                | (n/a)                     | `<Sidebar/>` + `<Topbar/>`|
| Data list                | (n/a)                     | `<DataTable />`         |
| Empty state              | (n/a)                     | `<EmptyState />`        |
| Notifications            | (n/a)                     | `<Notification />`      |
| Command palette          | (n/a)                     | `<Command />`           |
| Social icon              | `<SocialIcon />`          | `<SocialIcon />`        |
| UI icon                  | `lucide-react`            | `lucide-react`          |
