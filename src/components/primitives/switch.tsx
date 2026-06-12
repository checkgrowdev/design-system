import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => (
    <label className={cn("relative inline-flex h-5 w-9 cursor-pointer items-center", className)}>
      <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
      <span
        className="absolute inset-0 rounded-full bg-input transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2"
        aria-hidden
      />
      <span
        className="relative ml-0.5 h-4 w-4 rounded-full bg-background shadow transition-transform peer-checked:translate-x-4"
        aria-hidden
      />
    </label>
  )
);
Switch.displayName = "Switch";
