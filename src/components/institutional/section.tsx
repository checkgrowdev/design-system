import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: {
  className?: string;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("section", className)}>
      {(eyebrow || title || description) && (
        <header
          className={cn(
            "mb-12 flex flex-col gap-4",
            align === "center" && "items-center text-center"
          )}
        >
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          {title && <h2 className="h2 max-w-3xl text-balance font-bold">{title}</h2>}
          {description && (
            <p className="lead max-w-2xl text-balance text-muted-foreground">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
