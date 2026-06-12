import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <label className="inline-flex items-center">
      <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded border border-input bg-background text-transparent shadow-sm transition-colors",
          "peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        )}
      >
        <Check className="h-3 w-3" />
      </span>
    </label>
  )
);
Checkbox.displayName = "Checkbox";
