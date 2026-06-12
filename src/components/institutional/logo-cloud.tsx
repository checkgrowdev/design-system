import * as React from "react";
import { cn } from "@/lib/utils";

export function LogoCloud({
  label,
  logos,
  className,
}: {
  label?: React.ReactNode;
  logos: { name: string; src: string }[];
  className?: string;
}) {
  return (
    <section className={cn("section", className)}>
      {label && (
        <p className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {logos.map((l) => (
          <img
            key={l.name}
            src={l.src}
            alt={l.name}
            className="h-8 w-auto grayscale transition-all hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
