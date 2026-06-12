import * as React from "react";
import { Bell, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  default: Bell,
};

export function Notification({
  variant = "default",
  title,
  description,
  time,
  onDismiss,
  className,
}: {
  variant?: keyof typeof icons;
  title: React.ReactNode;
  description?: React.ReactNode;
  time?: string;
  onDismiss?: () => void;
  className?: string;
}) {
  const Icon = icons[variant];
  return (
    <div className={cn("flex gap-3 rounded-lg border bg-card p-3 shadow-sm", className)}>
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cg-soft text-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-medium">{title}</p>
          {time && <span className="shrink-0 text-xs text-muted-foreground">{time}</span>}
        </div>
        {description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="rounded-md p-1 text-muted-foreground hover:bg-secondary"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
