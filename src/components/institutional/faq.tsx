"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ({
  items,
  className,
}: {
  items: { question: string; answer: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y rounded-3xl border bg-card", className)}>
      {items.map((it, i) => (
        <FaqItem key={i} {...it} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold">{question}</span>
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
        />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground">{answer}</div>}
    </div>
  );
}
