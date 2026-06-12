"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Tooltip({
  children,
  content,
  side = "top",
  className,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
}) {
  const pos = {
    top: "bottom-full mb-1.5 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-1.5 left-1/2 -translate-x-1/2",
    left: "right-full mr-1.5 top-1/2 -translate-y-1/2",
    right: "left-full ml-1.5 top-1/2 -translate-y-1/2",
  }[side];
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 hidden whitespace-nowrap rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground shadow",
          "group-hover/tip:block group-focus-within/tip:block animate-fade-in",
          pos,
          className
        )}
      >
        {content}
      </span>
    </span>
  );
}
