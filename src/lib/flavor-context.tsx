"use client";

import * as React from "react";
import type { Flavor } from "./utils";

const FlavorContext = React.createContext<Flavor>("platform");

/**
 * Wrap your tree once at the app root. Every primitive that calls
 * `useFlavor()` will pick up the right styling rules — Institutional
 * (web, marketing, presentations) or Platform (dashboard, app).
 *
 * Also attaches the `cg-institutional` / `cg-platform` class on the
 * wrapper element so the CSS scopes in `institutional.css` /
 * `platform.css` activate.
 */
export function FlavorProvider({
  flavor,
  children,
  asChild = false,
}: {
  flavor: Flavor;
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const className = flavor === "institutional" ? "cg-institutional" : "cg-platform";
  return (
    <FlavorContext.Provider value={flavor}>
      {asChild ? (
        children
      ) : (
        <div className={className} data-cg-flavor={flavor}>
          {children}
        </div>
      )}
    </FlavorContext.Provider>
  );
}

export function useFlavor(): Flavor {
  return React.useContext(FlavorContext);
}
