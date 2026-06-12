import * as React from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/primitives/avatar";

export function Testimonial({
  quote,
  author,
  role,
  avatarSrc,
  variant = "card",
  className,
}: {
  quote: React.ReactNode;
  author: string;
  role?: string;
  avatarSrc?: string;
  variant?: "card" | "feature";
  className?: string;
}) {
  if (variant === "feature") {
    return (
      <figure className={cn("grid items-center gap-10 lg:grid-cols-[260px_1fr]", className)}>
        <Avatar src={avatarSrc} alt={author} size="xl" className="h-56 w-56 rounded-2xl" />
        <div>
          <Quote className="mb-4 h-8 w-8 text-foreground" />
          <blockquote className="h3 text-balance font-bold">{quote}</blockquote>
          <figcaption className="mt-6">
            <div className="font-semibold">{author}</div>
            {role && <div className="text-sm text-muted-foreground">{role}</div>}
          </figcaption>
        </div>
      </figure>
    );
  }

  return (
    <figure className={cn("surface flex h-full flex-col justify-between p-8", className)}>
      <blockquote className="text-lg font-semibold leading-snug text-balance">{quote}</blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar src={avatarSrc} alt={author} size="md" />
        <div>
          <div className="text-sm font-medium">{author}</div>
          {role && <div className="text-xs text-muted-foreground">{role}</div>}
        </div>
      </figcaption>
    </figure>
  );
}
