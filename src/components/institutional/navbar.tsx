import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives/button";

export function Navbar({
  brand,
  links = [],
  cta,
  className,
}: {
  brand: React.ReactNode;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <header className={cn("sticky top-4 z-40 mx-auto w-[calc(100%-2rem)] max-w-6xl", className)}>
      <nav className="flex h-14 items-center justify-between rounded-full border bg-card/80 px-5 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 font-semibold tracking-tight">{brand}</div>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {cta && (
          <Button variant="primary" size="sm" asChild>
            <a href={cta.href}>{cta.label}</a>
          </Button>
        )}
      </nav>
    </header>
  );
}
