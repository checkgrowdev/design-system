import * as React from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Large editorial pull-quote with portrait — mirrors the "Charlie Sutton"
 * reference. Use sparingly; one per page is plenty.
 */
export function FeatureQuote({
  portrait,
  alt,
  quote,
  author,
  role,
  className,
}: {
  portrait: string;
  alt?: string;
  quote: React.ReactNode;
  author: string;
  role?: string;
  className?: string;
}) {
  return (
    <section className={cn("section", className)}>
      <figure className="grid items-center gap-10 lg:grid-cols-[minmax(260px,360px)_1fr] lg:gap-16">
        <img
          src={portrait}
          alt={alt ?? author}
          className="aspect-square w-full rounded-3xl object-cover"
        />
        <div>
          <Quote className="mb-6 h-10 w-10" />
          <blockquote className="h2 text-balance font-bold leading-tight">{quote}</blockquote>
          <figcaption className="mt-8">
            <div className="font-semibold">{author}</div>
            {role && <div className="text-sm text-muted-foreground">{role}</div>}
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
