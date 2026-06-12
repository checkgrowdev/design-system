# Platform Flavor

Sharp. Dense. shadcn-grade. This is what we use inside **the product
app, dashboards, admin panels, settings pages, and internal tools**.

> Activate it with `<FlavorProvider flavor="platform">`. Every primitive
> inside switches to its Platform appearance (smaller controls, square
> radii, tighter spacing).

The Platform flavor is intentionally drop-in compatible with **shadcn's
`b0` preset** — if you scaffold a new app with
`pnpm dlx shadcn@latest init --preset b0 --template next`, you can use
Platform components alongside any shadcn block without visual conflict.

---

## When to use

- ✅ The product app (every signed-in screen)
- ✅ Internal dashboards
- ✅ Admin / settings / billing
- ✅ Data-heavy screens (tables, charts, forms)
- ❌ Marketing or sales surfaces — use Institutional.

## App-shell components

| Component       | What it is                                          |
| --------------- | --------------------------------------------------- |
| `<Sidebar />`   | Left rail with nested nav items, badges, footer    |
| `<Topbar />`    | Sticky top bar with search and actions             |
| `<PageHeader />`| Page title + breadcrumb + actions row              |
| `<Breadcrumb />`| Trail of links                                     |
| `<Command />`   | ⌘K command palette body                            |
| `<Kbd />`       | Keyboard shortcut chip                             |

## Data + forms

| Component         | What it is                          |
| ----------------- | ----------------------------------- |
| `<DataTable />`   | Generic typed table with columns    |
| `<StatCard />`    | Number + label + delta              |
| `<BarChart />`    | Compact dependency-free bar chart   |
| `<Sparkline />`   | Tiny trend line                     |
| `<FormField />`   | Label + control + hint/error wrap   |
| `<EmptyState />`  | Friendly empty placeholder          |
| `<Notification />`| Inline notification card            |

## Typography rules

- Page title → `h1` (30px, 600).
- Section title → `h2` (24px, 600).
- Card title → `h4` (16px, 600).
- Body → 14px default. Numbers in monospace where alignment matters.

## Example app shell

```tsx
import { FlavorProvider } from "@checkgrow/design-system";
import {
  Sidebar, Topbar, PageHeader, Breadcrumb, StatCard, DataTable,
} from "@checkgrow/design-system/platform";
import { Button } from "@checkgrow/design-system/primitives";
import { LayoutDashboard, Users, CreditCard, Settings, Plus } from "lucide-react";

export default function AppShell() {
  return (
    <FlavorProvider flavor="platform">
      <div className="flex min-h-svh">
        <Sidebar
          brand="Checkgrow"
          items={[
            { label: "Dashboard", icon: LayoutDashboard, active: true },
            { label: "Members",   icon: Users },
            { label: "Billing",   icon: CreditCard },
            { label: "Settings",  icon: Settings },
          ]}
        />
        <div className="flex-1">
          <Topbar
            search={{ placeholder: "Search members, invoices…" }}
            actions={<Button size="sm"><Plus className="h-4 w-4"/>New</Button>}
          />
          <main className="p-6 space-y-6">
            <PageHeader
              breadcrumb={<Breadcrumb items={[{label:"Home",href:"/"},{label:"Dashboard"}]} />}
              title="Dashboard"
              description="What happened across your accounts today."
              actions={<Button size="sm" variant="outline">Export</Button>}
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="MRR" value="$48,210" delta={{value:"12%",direction:"up"}}/>
              <StatCard label="Active users" value="2,431" delta={{value:"3%",direction:"up"}}/>
              <StatCard label="Churn" value="0.8%" delta={{value:"0.1%",direction:"down"}}/>
              <StatCard label="NPS" value="62" hint="Last 30 days"/>
            </div>
          </main>
        </div>
      </div>
    </FlavorProvider>
  );
}
```
