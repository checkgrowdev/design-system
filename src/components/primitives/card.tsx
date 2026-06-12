import * as React from "react";
import { cn } from "@/lib/utils";
import { useFlavor } from "@/lib/flavor-context";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const flavor = useFlavor();
    const shape =
      flavor === "institutional"
        ? "rounded-3xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.10)]"
        : "rounded-lg border shadow-sm";
    return (
      <div
        ref={ref}
        className={cn("bg-card text-card-foreground", shape, className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const flavor = useFlavor();
  const pad = flavor === "institutional" ? "p-8 pb-4" : "p-5 pb-3";
  return <div ref={ref} className={cn("flex flex-col gap-1.5", pad, className)} {...props} />;
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const flavor = useFlavor();
  const size = flavor === "institutional" ? "text-2xl" : "text-base";
  return (
    <h3 ref={ref} className={cn("font-semibold leading-tight", size, className)} {...props} />
  );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const flavor = useFlavor();
  const pad = flavor === "institutional" ? "p-8 pt-0" : "p-5 pt-0";
  return <div ref={ref} className={cn(pad, className)} {...props} />;
});
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const flavor = useFlavor();
  const pad = flavor === "institutional" ? "p-8 pt-0" : "p-5 pt-0";
  return <div ref={ref} className={cn("flex items-center gap-2", pad, className)} {...props} />;
});
CardFooter.displayName = "CardFooter";
