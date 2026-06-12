/**
 * Re-export Lucide so consumers always pull icons from one place.
 * Lucide is the chosen icon library for the entire design system —
 * the only exception is social-media brand marks, which live in
 * `social-media/` and are exposed via `components/social/SocialIcon`.
 */

export * from "lucide-react";
export { default as createIcons } from "lucide-react";
