import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives/button";

/**
 * Institutional Hero — large heading, lead paragraph, primary +
 * secondary CTAs, soft aurora gradient background. Mirrors the
 * "Simplify scheduling. Strengthen compliance." style.
 */
export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  pattern = "aurora",
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: { label: string; href?: string; onClick?: () => void };
  secondaryAction?: { label: string; href?: string; onClick?: () => void };
  pattern?: "aurora" | "radial" | "none";
  className?: string;
}) {
  return (
    <section className={cn("hero relative overflow-hidden rounded-3xl bg-card", className)}>
      {pattern !== "none" && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 -z-10",
            pattern === "aurora" && "cg-aurora",
            pattern === "radial" && "bg-cg-soft-radial"
          )}
        />
      )}
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:py-32">
        {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
        <h1 className="display mb-6 text-balance font-bold tracking-[-0.04em]">{title}</h1>
        {description && <p className="lead mb-10 max-w-2xl text-balance">{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {primaryAction && (
            <Button asChild={!!primaryAction.href} variant="primary" size="xl">
              {primaryAction.href ? (
                <a href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <span onClick={primaryAction.onClick}>
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="outline" size="xl" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
