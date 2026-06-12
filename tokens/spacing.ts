/**
 * Spacing tokens — base 4 grid, with two opinionated scales:
 *
 *   institutional   generous gutters & section padding for marketing
 *   platform        tight, dashboard-grade rhythm matching shadcn
 */

export const base = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
} as const;

export const institutional = {
  gutter: "1.5rem",         // base side padding on small screens
  container: "1280px",
  sectionY: "8rem",         // vertical padding between sections
  sectionYSm: "5rem",
  cardPadding: "2.5rem",
  inlineGap: "1.25rem",
  stackGap: "2rem",
  heroPaddingY: "10rem",
} as const;

export const platform = {
  gutter: "1rem",
  container: "100%",
  sectionY: "1.5rem",
  cardPadding: "1.25rem",
  inlineGap: "0.5rem",
  stackGap: "0.75rem",
  sidebarWidth: "16rem",
  topbarHeight: "3.5rem",
  rowHeight: "2.25rem",
} as const;
