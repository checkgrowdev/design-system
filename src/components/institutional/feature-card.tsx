import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
  image?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "surface group relative flex h-full flex-col overflow-hidden p-8 transition-transform hover:-translate-y-1",
        className
      )}
    >
      {image && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30 transition-opacity group-hover:opacity-50"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      )}
      {Icon && (
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cg-soft text-foreground">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
}
