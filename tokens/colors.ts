/**
 * Checkgrow Design System — Color Tokens
 *
 * Foundation = shadcn neutral palette (HSL form, dark+light).
 * Accent     = single Checkgrow accent (lavender) used for soft blurry
 *              backgrounds, highlights, gradients. Two tints only:
 *              - `accent.soft`  #E4EAFD  (background washes, surfaces)
 *              - `accent.solid` #9BA6FF  (active highlight, focus glow)
 *
 * Both Institutional and Platform consume the same tokens — only the
 * usage rules differ (see docs/INSTITUTIONAL.md and docs/PLATFORM.md).
 */

export const neutral = {
  50:  "hsl(0 0% 98%)",
  100: "hsl(0 0% 96%)",
  200: "hsl(0 0% 90%)",
  300: "hsl(0 0% 83%)",
  400: "hsl(0 0% 64%)",
  500: "hsl(0 0% 45%)",
  600: "hsl(0 0% 32%)",
  700: "hsl(0 0% 25%)",
  800: "hsl(0 0% 15%)",
  900: "hsl(0 0% 9%)",
  950: "hsl(0 0% 4%)",
} as const;

export const accent = {
  soft:  "#E4EAFD",
  solid: "#9BA6FF",
  softHSL:  "hsl(228 84% 95%)",
  solidHSL: "hsl(232 100% 80%)",
} as const;

export const semantic = {
  success: "hsl(142 71% 45%)",
  warning: "hsl(38 92% 50%)",
  danger:  "hsl(0 72% 51%)",
  info:    "hsl(232 100% 80%)",
} as const;

/**
 * Light + dark variable map fed into globals.css.
 * Names match shadcn conventions so any shadcn component drops in.
 */
export const cssVars = {
  light: {
    "--background": "0 0% 100%",
    "--foreground": "0 0% 9%",
    "--card": "0 0% 100%",
    "--card-foreground": "0 0% 9%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "0 0% 9%",
    "--primary": "0 0% 9%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "0 0% 96%",
    "--secondary-foreground": "0 0% 9%",
    "--muted": "0 0% 96%",
    "--muted-foreground": "0 0% 45%",
    "--accent": "228 84% 95%",
    "--accent-foreground": "232 100% 30%",
    "--accent-solid": "232 100% 80%",
    "--destructive": "0 72% 51%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "0 0% 90%",
    "--input": "0 0% 90%",
    "--ring": "232 100% 80%",
    "--radius": "0.625rem",
  },
  dark: {
    "--background": "0 0% 4%",
    "--foreground": "0 0% 98%",
    "--card": "0 0% 9%",
    "--card-foreground": "0 0% 98%",
    "--popover": "0 0% 9%",
    "--popover-foreground": "0 0% 98%",
    "--primary": "0 0% 98%",
    "--primary-foreground": "0 0% 9%",
    "--secondary": "0 0% 15%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "0 0% 15%",
    "--muted-foreground": "0 0% 64%",
    "--accent": "232 40% 22%",
    "--accent-foreground": "228 84% 95%",
    "--accent-solid": "232 100% 80%",
    "--destructive": "0 62% 40%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "0 0% 15%",
    "--input": "0 0% 15%",
    "--ring": "232 100% 80%",
    "--radius": "0.625rem",
  },
} as const;

export type ColorToken = keyof typeof neutral;
