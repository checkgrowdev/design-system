import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives/button";

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  cta,
  highlighted = false,
  className,
}: {
  name: string;
  price: React.ReactNode;
  period?: string;
  description?: string;
  features: string[];
  cta: { label: string; href?: string };
  highlighted?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "surface relative flex flex-col p-8",
        highlighted && "ring-2 ring-cg-solid bg-gradient-to-b from-cg-soft/40 to-transparent",
        className
      )}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="my-6 flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-[-0.03em]">{price}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <ul className="mb-8 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        className="mt-auto"
        variant={highlighted ? "primary" : "outline"}
        size="lg"
        asChild={!!cta.href}
      >
        {cta.href ? <a href={cta.href}>{cta.label}</a> : <span>{cta.label}</span>}
      </Button>
    </article>
  );
}
