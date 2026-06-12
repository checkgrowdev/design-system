/**
 * Platform example — typical app shell.
 * Mount after importing `foundation.css` + `platform.css`.
 */

import * as React from "react";
import { FlavorProvider } from "@/lib/flavor-context";
import {
  Sidebar, Topbar, PageHeader, Breadcrumb, StatCard, DataTable, EmptyState,
  Notification, BarChart, Sparkline, Command, Kbd, FormField,
} from "@/components/platform";
import {
  Button, Card, CardHeader, CardTitle, CardContent, CardDescription,
  Input, Label, Badge, Switch, Select, Tabs, TabsList, TabsTrigger, TabsContent,
} from "@/components/primitives";
import {
  LayoutDashboard, Users, CreditCard, Settings, Plus, Filter,
  Inbox, Search, Bell,
} from "lucide-react";

type Row = { id: string; name: string; email: string; plan: string; mrr: number };

const rows: Row[] = [
  { id: "1", name: "Aria Minaei", email: "aria@theatre.js", plan: "Team",       mrr:  300 },
  { id: "2", name: "Ant Wilson",  email: "ant@supabase.io", plan: "Enterprise", mrr: 2400 },
  { id: "3", name: "Lin Lao",     email: "lin@example.com", plan: "Starter",    mrr:    0 },
];

export default function Dashboard() {
  return (
    <FlavorProvider flavor="platform">
      <div className="flex min-h-svh bg-background">
        <Sidebar
          brand={<span>Checkgrow</span>}
          items={[
            { label: "Dashboard", icon: LayoutDashboard, active: true },
            { label: "Members",   icon: Users, badge: <Badge size="sm">24</Badge> },
            { label: "Billing",   icon: CreditCard },
            { label: "Settings",  icon: Settings, children: [
              { label: "General" }, { label: "Security" }, { label: "Integrations" },
            ]},
          ]}
          footer={<div className="text-xs text-muted-foreground">v0.1.0</div>}
        />
        <div className="flex flex-1 flex-col">
          <Topbar
            search={{ placeholder: "Search members, invoices…" }}
            actions={
              <>
                <Button size="icon" variant="ghost"><Bell className="h-4 w-4"/></Button>
                <Button size="sm"><Plus className="h-4 w-4"/>New</Button>
              </>
            }
          />
          <main className="flex-1 space-y-6 p-6">
            <PageHeader
              breadcrumb={<Breadcrumb items={[{label:"Home",href:"/"},{label:"Dashboard"}]} />}
              title="Dashboard"
              description="What happened across your accounts today."
              actions={
                <>
                  <Button size="sm" variant="outline"><Filter className="h-4 w-4"/>Filter</Button>
                  <Button size="sm">Export</Button>
                </>
              }
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="MRR"          value="$48,210" delta={{value:"12%",direction:"up"}}   hint="vs last month" />
              <StatCard label="Active users" value="2,431"   delta={{value:"3%", direction:"up"}}   hint="+71 this week" />
              <StatCard label="Churn"        value="0.8%"    delta={{value:"0.1%",direction:"down"}} hint="3-month avg" />
              <StatCard label="NPS"          value="62"      hint="Last 30 days" />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Revenue</CardTitle>
                  <CardDescription>Monthly recurring revenue, last 12 months.</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[12,15,18,22,25,30,28,31,35,40,42,48]}
                    labels={["J","F","M","A","M","J","J","A","S","O","N","D"]}
                    highlightIndex={11}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Recent activity</CardTitle></CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Notification variant="success" title="New customer"   description="Aria Minaei upgraded to Team." time="2m"/>
                  <Notification variant="info"    title="Invoice paid"   description="$2,400 from Supabase."        time="14m"/>
                  <Notification variant="warning" title="Card expiring"  description="Lin Lao's card expires soon." time="1h"/>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="members">
              <TabsList>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="empty">Empty</TabsTrigger>
              </TabsList>
              <TabsContent value="members">
                <DataTable
                  data={rows}
                  columns={[
                    { key: "name",  header: "Name" },
                    { key: "email", header: "Email" },
                    { key: "plan",  header: "Plan", render: (r) => <Badge variant="accent">{r.plan}</Badge> },
                    { key: "mrr",   header: "MRR", align: "right",
                      render: (r) => <span className="font-mono tabular-nums">${r.mrr.toLocaleString()}</span> },
                  ]}
                />
              </TabsContent>
              <TabsContent value="invoices">
                <DataTable data={[]} columns={[]} emptyState={
                  <EmptyState
                    icon={Inbox}
                    title="No invoices yet"
                    description="When you bill a customer, the invoice will appear here."
                    action={<Button size="sm">Create invoice</Button>}
                  />
                }/>
              </TabsContent>
              <TabsContent value="empty">
                <EmptyState
                  icon={Inbox}
                  title="Nothing here"
                  description="This tab intentionally left blank."
                />
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Quick form composition example.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 lg:grid-cols-2">
                <FormField label="Workspace name" hint="Shown to your team." htmlFor="name">
                  <Input id="name" placeholder="Acme Inc." defaultValue="Checkgrow"/>
                </FormField>
                <FormField label="Region" htmlFor="region">
                  <Select id="region">
                    <option>US-East</option><option>EU-West</option><option>AP-Sydney</option>
                  </Select>
                </FormField>
                <FormField label="Allow public sharing" hint="Anyone with a link can view.">
                  <div className="flex items-center gap-2"><Switch defaultChecked/><Label>Enabled</Label></div>
                </FormField>
                <FormField label="Domain" error="That domain is already in use.">
                  <Input defaultValue="checkgrow.app"/>
                </FormField>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Command palette</CardTitle>
                <CardDescription>Press <Kbd>⌘</Kbd><Kbd>K</Kbd> anywhere.</CardDescription>
              </CardHeader>
              <CardContent>
                <Command
                  items={[
                    { id: "1", label: "Create invoice",   hint: "I",   group: "Actions" },
                    { id: "2", label: "Invite member",    hint: "M",   group: "Actions" },
                    { id: "3", label: "Open billing",     hint: "B",   group: "Navigate" },
                    { id: "4", label: "Open settings",    hint: ",",   group: "Navigate" },
                  ]}
                />
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </FlavorProvider>
  );
}
