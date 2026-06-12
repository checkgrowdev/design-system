import * as React from "react";
import { cn } from "@/lib/utils";
import { useFlavor } from "@/lib/flavor-context";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const flavor = useFlavor();
    const shape = flavor === "institutional" ? "h-12 rounded-xl px-4" : "h-9 rounded-md px-3";
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex w-full border border-input bg-background text-sm shadow-sm transition-colors",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          shape,
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
