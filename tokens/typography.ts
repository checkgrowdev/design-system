/**
 * Typography tokens.
 *
 * Single font family — Geist — used for everything. Geist Mono is
 * available for code/numerics. Two scales are exposed:
 *
 *   institutional  large, generous, marketing-feel
 *   platform       tight, dense, dashboard-feel (mirrors shadcn defaults)
 */

export const fontFamily = {
  sans: ["Geist", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Institutional scale — marketing / web / presentations.
 * Headings run larger and looser; pair with `space.institutional`.
 */
export const institutional = {
  display: { size: "5rem",   line: "1.05", weight: 700, tracking: "-0.04em" },  // 80
  h1:      { size: "4rem",   line: "1.05", weight: 700, tracking: "-0.035em" }, // 64
  h2:      { size: "3rem",   line: "1.1",  weight: 700, tracking: "-0.03em"  }, // 48
  h3:      { size: "2.25rem",line: "1.15", weight: 600, tracking: "-0.02em"  }, // 36
  h4:      { size: "1.5rem", line: "1.25", weight: 600, tracking: "-0.01em"  }, // 24
  lead:    { size: "1.25rem",line: "1.6",  weight: 400, tracking: "0"        }, // 20
  body:    { size: "1.0625rem", line: "1.65", weight: 400, tracking: "0"     }, // 17
  small:   { size: "0.9375rem", line: "1.55", weight: 400, tracking: "0"     }, // 15
  eyebrow: { size: "0.8125rem", line: "1.2",  weight: 500, tracking: "0.08em", upper: true }, // 13
} as const;

/**
 * Platform scale — dashboards / app shells. Tighter and denser,
 * matching shadcn's default text sizes.
 */
export const platform = {
  display: { size: "2.25rem", line: "1.15", weight: 700, tracking: "-0.02em" }, // 36
  h1:      { size: "1.875rem",line: "1.2",  weight: 600, tracking: "-0.015em"}, // 30
  h2:      { size: "1.5rem",  line: "1.25", weight: 600, tracking: "-0.01em" }, // 24
  h3:      { size: "1.25rem", line: "1.3",  weight: 600, tracking: "-0.005em"}, // 20
  h4:      { size: "1rem",    line: "1.4",  weight: 600, tracking: "0"       }, // 16
  body:    { size: "0.875rem",line: "1.5",  weight: 400, tracking: "0"       }, // 14
  small:   { size: "0.8125rem",line: "1.45",weight: 400, tracking: "0"       }, // 13
  micro:   { size: "0.75rem", line: "1.4",  weight: 500, tracking: "0.02em"  }, // 12
  mono:    { size: "0.8125rem",line: "1.5", weight: 400, tracking: "0", family: "mono" },
} as const;
