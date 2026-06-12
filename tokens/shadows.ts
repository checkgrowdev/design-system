/**
 * Elevation tokens.
 * Institutional uses softer, larger, blurrier shadows (marketing feel).
 * Platform uses tight, crisp shadows that match shadcn defaults.
 */

export const shadows = {
  none: "none",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 0 rgb(0 0 0 / 0.06)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
  "2xl": "0 35px 60px -15px rgb(0 0 0 / 0.20)",
  inner: "inset 0 1px 2px 0 rgb(0 0 0 / 0.06)",
  glow: "0 0 0 4px rgb(155 166 255 / 0.20)",
  focus: "0 0 0 3px rgb(155 166 255 / 0.35)",
} as const;

export const institutional = {
  card: shadows.lg,
  hover: shadows.xl,
  hero: shadows["2xl"],
} as const;

export const platform = {
  card: shadows.sm,
  hover: shadows.md,
  overlay: shadows.lg,
} as const;
