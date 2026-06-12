"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useFlavor } from "@/lib/flavor-context";

type TabsContextValue = { value: string; setValue: (v: string) => void };
const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({
  defaultValue,
  value: controlled,
  onValueChange,
  className,
  children,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  className?: string;
  children: React.ReactNode;
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const value = controlled ?? internal;
  const setValue = (v: string) => {
    if (controlled === undefined) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const flavor = useFlavor();
  const shape = flavor === "institutional" ? "rounded-full" : "rounded-md";
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1 bg-muted p-1 text-muted-foreground",
        shape,
        className
      )}
      role="tablist"
      {...props}
    />
  );
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(TabsContext)!;
  const flavor = useFlavor();
  const shape = flavor === "institutional" ? "rounded-full" : "rounded-sm";
  const active = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.setValue(value)}
      className={cn(
        "inline-flex h-7 items-center justify-center whitespace-nowrap px-3 text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active ? "bg-background text-foreground shadow-sm" : "hover:text-foreground",
        shape,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = React.useContext(TabsContext)!;
  if (ctx.value !== value) return null;
  return (
    <div role="tabpanel" className={cn("mt-3", className)} {...props}>
      {children}
    </div>
  );
}
