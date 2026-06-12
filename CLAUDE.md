# CLAUDE.md

This repo is the **Checkgrow Design System**. Before writing any UI in
this repo (or in any project that consumes this package), read
**`.ai/rules.md`** — it tells you which flavor to pick, what's allowed,
and what's forbidden.

TL;DR for AI agents:

1. Ask which flavor: **Institutional** (web / marketing / presentations)
   or **Platform** (dashboards / app). If the prompt makes it obvious,
   skip the question.
2. Wrap the tree in `<FlavorProvider flavor="...">`.
3. Compose from the listed components — don't reinvent.
4. Font = Geist. Icons = Lucide (UI) + `<SocialIcon />` (brands).
5. Accent colors are exactly `#E4EAFD` and `#9BA6FF`. No others.

See also:
- `README.md` — full system overview and visual presentation.
- `docs/FOUNDATION.md` — tokens (colors, type, spacing, radius, shadows).
- `docs/INSTITUTIONAL.md` — when and how to use Institutional components.
- `docs/PLATFORM.md` — when and how to use Platform components.
- `docs/USAGE.md` — install + integration in consuming projects.
