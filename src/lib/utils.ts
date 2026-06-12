import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Flavor = "institutional" | "platform";

/**
 * `flavorClass(flavor, base, { institutional, platform })` returns a
 * single className that applies the base + the flavor-specific overrides.
 * Use this on shared primitives that need to render differently in each
 * flavor without duplicating components.
 */
export function flavorClass(
  flavor: Flavor,
  base: string,
  overrides: { institutional?: string; platform?: string } = {}
) {
  return cn(base, flavor === "institutional" ? overrides.institutional : overrides.platform);
}
