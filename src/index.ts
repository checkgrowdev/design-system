/**
 * @checkgrow/design-system — public entry.
 *
 * Two flavors, one foundation:
 *   • Institutional  → /institutional  (web, marketing, presentations)
 *   • Platform       → /platform       (dashboards, app shells)
 *
 * Shared primitives live under /primitives. Wrap your tree with
 * <FlavorProvider flavor="institutional" | "platform"> and every
 * primitive auto-adapts.
 */

export * from "./lib/utils";
export * from "./lib/flavor-context";
export * as primitives from "./components/primitives";
export * as institutional from "./components/institutional";
export * as platform from "./components/platform";
export * as social from "./components/social";
export * as tokens from "../tokens";
