# Usage

How to consume `@checkgrow/design-system` from a Next.js, Vite, or
Remix project.

## 1. Install

```bash
pnpm add @checkgrow/design-system
pnpm add geist lucide-react class-variance-authority clsx tailwind-merge
pnpm add -D tailwindcss postcss autoprefixer
```

## 2. Tailwind config

Extend your `tailwind.config.ts` so the design system's classes are
scanned:

```ts
import preset from "@checkgrow/design-system/tailwind.config";

export default {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@checkgrow/design-system/src/**/*.{ts,tsx}",
  ],
};
```

## 3. Import the foundation + your flavor of choice

Pick **one** flavor stylesheet per app root:

```ts
// Marketing site / presentations
import "@checkgrow/design-system/styles/foundation.css";
import "@checkgrow/design-system/styles/institutional.css";

// OR: Product app / dashboard
import "@checkgrow/design-system/styles/foundation.css";
import "@checkgrow/design-system/styles/platform.css";
```

If your app renders BOTH (e.g. marketing pages + an app shell), import
both stylesheets — the scoping selectors (`.cg-institutional` /
`.cg-platform`) keep them from leaking into each other.

## 4. Wire up Geist

The cleanest way is the `geist` package:

```tsx
// app/layout.tsx (Next.js)
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## 5. Wrap with `FlavorProvider`

```tsx
import { FlavorProvider } from "@checkgrow/design-system";

export default function MarketingPage() {
  return (
    <FlavorProvider flavor="institutional">
      {/* all components inside auto-switch to Institutional */}
    </FlavorProvider>
  );
}
```

## 6. Expose social-media icons as static assets

The `social-media/` folder ships in the package. Expose it so
`<SocialIcon />` can resolve the SVGs:

### Next.js

Copy or symlink `node_modules/@checkgrow/design-system/social-media`
into `public/social-media`. Then `<SocialIcon name="Instagram" />`
works out-of-the-box (default `basePath="/social-media"`).

### Vite

Add to `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "node_modules/@checkgrow/design-system/social-media", dest: "" },
      ],
    }),
  ],
});
```

Or pass `basePath="/your-path"` per call.

## 7. Sanity check

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent }
  from "@checkgrow/design-system/primitives";

<FlavorProvider flavor="platform">
  <Card>
    <CardHeader><CardTitle>Hello Platform</CardTitle></CardHeader>
    <CardContent><Button>Click me</Button></CardContent>
  </Card>
</FlavorProvider>
```

If the button is square-ish and the card has a thin border, you're set.
Swap to `flavor="institutional"` and it becomes pill-shaped + round.
