import * as React from "react";
import { cn } from "@/lib/utils";
import { useFlavor } from "@/lib/flavor-context";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  const flavor = useFlavor();
  const shape = flavor === "institutional" ? "rounded-xl p-4" : "rounded-md px-3 py-2";
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-20 w-full border border-input bg-background text-sm shadow-sm",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        shape,
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
