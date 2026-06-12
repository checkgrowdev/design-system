/**
 * Border radius tokens.
 * Institutional leans rounder for a soft, friendly feel.
 * Platform leans sharper to match shadcn's `--radius: 0.625rem`.
 */

export const radius = {
  none: "0",
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.625rem",
  xl: "0.875rem",
  "2xl": "1.25rem",
  "3xl": "1.75rem",
  full: "9999px",
} as const;

export const institutional = {
  card: radius["2xl"],
  button: radius.full,
  surface: radius["3xl"],
  badge: radius.full,
  input: radius.xl,
} as const;

export const platform = {
  card: radius.lg,
  button: radius.md,
  surface: radius.lg,
  badge: radius.sm,
  input: radius.md,
} as const;
