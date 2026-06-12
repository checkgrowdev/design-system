import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SocialIcon — renders a brand mark from `social-media/svg/{variant}/{Name}_{variant}.svg`.
 *
 * For ANY social-media-related UI in this design system, ALWAYS use
 * this component (or the raw SVGs under `social-media/`). Do not pull
 * brand marks from Lucide — Lucide is for non-brand UI icons only.
 *
 * Usage (Vite/Next/etc — make sure your bundler serves `social-media/`
 * as a static folder, or pass an absolute URL via `basePath`):
 *
 *   <SocialIcon name="Instagram" variant="black" />
 *   <SocialIcon name="Github" variant="white" className="h-5 w-5" />
 *   <SocialIcon name="Figma" variant="color" basePath="/static" />
 */

export type SocialVariant = "black" | "white" | "color";

export interface SocialIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Brand name (matches the SVG filename prefix, e.g. "Instagram", "Github"). */
  name: string;
  /** Color variant — black on light bg, white on dark bg, or full color. */
  variant?: SocialVariant;
  /**
   * Optional URL prefix where `social-media/` is served from. Defaults
   * to "/social-media", which assumes your app exposes the package's
   * `social-media/` folder at that path (e.g. via Next `public/` or
   * Vite `publicDir`).
   */
  basePath?: string;
}

export function SocialIcon({
  name,
  variant = "black",
  basePath = "/social-media",
  className,
  alt,
  ...props
}: SocialIconProps) {
  const file = `${name}_${variant}.svg`;
  const src = `${basePath.replace(/\/$/, "")}/svg/${variant}/${file}`;
  return (
    <img
      src={src}
      alt={alt ?? `${name} logo`}
      className={cn("inline-block h-4 w-4 shrink-0", className)}
      {...props}
    />
  );
}
