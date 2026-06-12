"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SidebarItem {
  label: string;
  icon?: LucideIcon;
  href?: string;
  active?: boolean;
  badge?: React.ReactNode;
  children?: SidebarItem[];
}

export function Sidebar({
  brand,
  items,
  footer,
  className,
}: {
  brand?: React.ReactNode;
  items: SidebarItem[];
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "flex h-svh w-64 shrink-0 flex-col border-r bg-card text-card-foreground",
        className
      )}
    >
      {brand && <div className="flex h-14 items-center px-4 font-semibold tracking-tight">{brand}</div>}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="flex flex-col gap-0.5">
          {items.map((it, i) => (
            <SidebarNode key={i} item={it} />
          ))}
        </ul>
      </nav>
      {footer && <div className="border-t p-3">{footer}</div>}
    </aside>
  );
}

function SidebarNode({ item, depth = 0 }: { item: SidebarItem; depth?: number }) {
  const [open, setOpen] = React.useState(item.active ?? false);
  const Icon = item.icon;
  const hasChildren = !!item.children?.length;
  return (
    <li>
      <a
        href={item.href ?? "#"}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        className={cn(
          "group flex h-8 items-center gap-2 rounded-md px-2 text-sm transition-colors",
          "hover:bg-secondary",
          item.active && "bg-secondary font-medium text-foreground"
        )}
        style={{ paddingLeft: `${0.5 + depth * 0.75}rem` }}
      >
        {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />}
        <span className="flex-1 truncate">{item.label}</span>
        {item.badge}
        {hasChildren && (
          <ChevronDown
            className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")}
          />
        )}
      </a>
      {hasChildren && open && (
        <ul className="mt-0.5 flex flex-col gap-0.5">
          {item.children!.map((c, i) => (
            <SidebarNode key={i} item={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
