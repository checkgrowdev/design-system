import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives/button";

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: { label: string; href?: string };
  secondaryAction?: { label: string; href?: string };
  className?: string;
}) {
  return (
    <section className={cn("section", className)}>
      <div className="surface relative overflow-hidden p-12 text-center lg:p-20">
        <div aria-hidden className="absolute inset-0 -z-10 cg-aurora" />
        <h2 className="h2 mb-4 text-balance font-bold">{title}</h2>
        {description && <p className="lead mx-auto mb-8 max-w-xl text-muted-foreground">{description}</p>}
        <div className="flex flex-wrap justify-center gap-3">
          {primaryAction && (
            <Button variant="primary" size="xl" asChild>
              <a href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          )}
          {secondaryAction && (
            <Button variant="outline" size="xl" asChild>
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
