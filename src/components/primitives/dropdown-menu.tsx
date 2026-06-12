"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Ctx = { open: boolean; setOpen: (v: boolean) => void; triggerRef: React.RefObject<HTMLElement> };
const DropdownContext = React.createContext<Ctx | null>(null);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLElement>(null);
  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactElement;
}) {
  const ctx = React.useContext(DropdownContext)!;
  return React.cloneElement(children, {
    ref: ctx.triggerRef,
    onClick: () => ctx.setOpen(!ctx.open),
    "aria-expanded": ctx.open,
  });
}

export function DropdownMenuContent({
  className,
  align = "start",
  children,
}: {
  className?: string;
  align?: "start" | "end";
  children: React.ReactNode;
}) {
  const ctx = React.useContext(DropdownContext)!;
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!ctx.open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node) && !ctx.triggerRef.current?.contains(e.target as Node)) {
        ctx.setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [ctx]);
  if (!ctx.open) return null;
  return (
    <div
      ref={ref}
      role="menu"
      className={cn(
        "absolute z-50 mt-1 min-w-44 rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-fade-in",
        align === "end" ? "right-0" : "left-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { inset?: boolean }) {
  const ctx = React.useContext(DropdownContext)!;
  return (
    <button
      type="button"
      role="menuitem"
      className={cn(
        "flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
        "hover:bg-secondary focus:bg-secondary",
        inset && "pl-8",
        className
      )}
      onClick={(e) => {
        props.onClick?.(e);
        ctx.setOpen(false);
      }}
      {...props}
    />
  );
}

export function DropdownMenuSeparator() {
  return <div role="separator" className="my-1 h-px bg-border" />;
}

export function DropdownMenuLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  );
}
