import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Tiny dependency-free SVG charts for the platform flavor. Use full
 * charting libs (recharts, visx) when you need axes, tooltips, etc.
 *
 * `BarChart` — vertical bars, neutral palette + accent for "selected".
 * `Sparkline` — single-row trend, used inside StatCard.
 */
export function BarChart({
  data,
  height = 96,
  highlightIndex,
  labels,
  className,
}: {
  data: number[];
  height?: number;
  highlightIndex?: number;
  labels?: string[];
  className?: string;
}) {
  const max = Math.max(1, ...data);
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end gap-1.5" style={{ height }}>
        {data.map((v, i) => {
          const h = (v / max) * height;
          const highlight = i === highlightIndex;
          return (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-sm",
                highlight ? "bg-foreground" : "bg-muted-foreground/30"
              )}
              style={{ height: h }}
              title={labels?.[i] ? `${labels[i]}: ${v}` : `${v}`}
            />
          );
        })}
      </div>
      {labels && (
        <div className="mt-1.5 flex gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          {labels.map((l, i) => (
            <span key={i} className="flex-1 text-center">
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Sparkline({
  data,
  width = 120,
  height = 32,
  className,
}: {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
}) {
  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const span = max - min || 1;
  const step = width / (data.length - 1);
  const d = data
    .map((v, i) => {
      const x = i * step;
      const y = height - ((v - min) / span) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={cn("text-foreground", className)}
      preserveAspectRatio="none"
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
