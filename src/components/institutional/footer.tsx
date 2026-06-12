import * as React from "react";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/components/social/social-icon";

export function Footer({
  brand,
  description,
  groups = [],
  socials = [],
  copyright,
  className,
}: {
  brand: React.ReactNode;
  description?: React.ReactNode;
  groups?: { title: string; links: { label: string; href: string }[] }[];
  socials?: { name: string; href: string }[];
  copyright?: React.ReactNode;
  className?: string;
}) {
  return (
    <footer className={cn("section", className)}>
      <div className="surface p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <div className="mb-4 font-semibold tracking-tight">{brand}</div>
            {description && (
              <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
            )}
            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    <SocialIcon name={s.name} variant="black" className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="mb-3 text-sm font-semibold">{g.title}</h4>
                <ul className="space-y-2">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {copyright && (
          <div className="mt-10 border-t pt-6 text-xs text-muted-foreground">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
