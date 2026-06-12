# Foundation

The Foundation is the shared layer both flavors build on. Every token
here is exposed in `tokens/` (TypeScript) and as CSS variables in
`src/styles/foundation.css`.

---

## Color

### Neutral (shadcn baseline)

| Token       | Light HSL        | Dark HSL         | Use                         |
| ----------- | ---------------- | ---------------- | --------------------------- |
| background  | `0 0% 100%`      | `0 0% 4%`        | Page background             |
| foreground  | `0 0% 9%`        | `0 0% 98%`       | Body text                   |
| card        | `0 0% 100%`      | `0 0% 9%`        | Card surface                |
| muted       | `0 0% 96%`       | `0 0% 15%`       | Subtle backgrounds, dividers|
| muted-fg    | `0 0% 45%`       | `0 0% 64%`       | Secondary text              |
| border      | `0 0% 90%`       | `0 0% 15%`       | Hairlines                   |
| primary     | `0 0% 9%`        | `0 0% 98%`       | Default action color        |
| destructive | `0 72% 51%`      | `0 62% 40%`      | Errors / destructive        |

### Brand accent — Checkgrow Lavender

Exactly **two** accent tokens, used for soft washes and focus glows.
Nothing else.

| Token  | Hex       | HSL                |
| ------ | --------- | ------------------ |
| soft   | `#E4EAFD` | `228 84% 95%`      |
| solid  | `#9BA6FF` | `232 100% 80%`     |

CSS:

```css
background: var(--cg-soft);   /* #E4EAFD */
color:      var(--cg-solid);  /* #9BA6FF */
```

Tailwind:

```html
<div class="bg-cg-soft text-cg-solid"> … </div>
<div class="cg-aurora">…</div> <!-- soft radial blend -->
```

---

## Typography

Single family — **Geist** (and Geist Mono for code). Two scales:

### Institutional scale

| Style    | Size (responsive)             | Weight | Tracking |
| -------- | ----------------------------- | ------ | -------- |
| display  | `clamp(3rem, 6vw+1rem, 5rem)` | 700    | −0.04em  |
| h1       | `clamp(2.5rem, 5vw+1rem, 4rem)` | 700  | −0.035em |
| h2       | `clamp(2rem, 3vw+1rem, 3rem)` | 700    | −0.03em  |
| h3       | 36px                          | 600    | −0.02em  |
| lead     | 20px / 1.6                    | 400    | 0        |
| body     | 17px / 1.65                   | 400    | 0        |
| eyebrow  | 13px UPPERCASE                | 500    | 0.08em   |

### Platform scale (shadcn-aligned)

| Style    | Size  | Weight | Tracking |
| -------- | ----- | ------ | -------- |
| display  | 36px  | 700    | −0.02em  |
| h1       | 30px  | 600    | −0.015em |
| h2       | 24px  | 600    | −0.01em  |
| h3       | 20px  | 600    | −0.005em |
| body     | 14px  | 400    | 0        |
| small    | 13px  | 400    | 0        |
| micro    | 12px  | 500    | 0.02em   |

---

## Spacing

Both flavors use the same base scale (Tailwind defaults, base-4).
Composite tokens differ:

| Token        | Institutional | Platform    |
| ------------ | ------------- | ----------- |
| gutter       | 1.5rem        | 1rem        |
| sectionY     | 8rem          | 1.5rem      |
| cardPadding  | 2.5rem        | 1.25rem     |
| stackGap     | 2rem          | 0.75rem     |

## Radius

| Token   | Institutional | Platform |
| ------- | ------------- | -------- |
| card    | 1.25rem (2xl) | 0.625rem (lg) |
| button  | full (pill)   | 0.5rem (md)   |
| input   | 0.875rem (xl) | 0.5rem (md)   |

## Shadows

| Token   | Institutional         | Platform        |
| ------- | --------------------- | --------------- |
| card    | `lg` — soft, blurry   | `sm` — crisp    |
| hover   | `xl`                  | `md`            |
| overlay | `2xl`                 | `lg`            |
