import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFlavor } from "@/lib/flavor-context";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    const flavor = useFlavor();
    const shape = flavor === "institutional" ? "h-12 rounded-xl px-4" : "h-9 rounded-md px-3";
    return (
      <div className="relative inline-block w-full">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none border border-input bg-background pr-9 text-sm shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            shape,
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    );
  }
);
Select.displayName = "Select";
