import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Soft, blurry brand gradient surface — the accent #E4EAFD and #9BA6FF
 * tints are the only colors allowed in the wash. Use as a decorative
 * background behind hero text or CTA sections.
 */
export function GradientBackground({
  variant = "aurora",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "aurora" | "radial" | "linear";
}) {
  const bg = {
    aurora: "cg-aurora",
    radial: "bg-cg-soft-radial",
    linear: "bg-cg-soft-linear",
  }[variant];
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)} {...props}>
      <div aria-hidden className={cn("absolute inset-0 -z-10", bg)} />
      {children}
    </div>
  );
}
