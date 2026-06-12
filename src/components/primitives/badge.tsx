import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useFlavor } from "@/lib/flavor-context";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-cg-soft text-foreground",
        outline: "border text-foreground",
        success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
        warning: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
        danger: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: { variant: "secondary", size: "md" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  const flavor = useFlavor();
  const shape = flavor === "institutional" ? "rounded-full" : "rounded-md";
  return <span className={cn(badgeVariants({ variant, size }), shape, className)} {...props} />;
}
