# University Management System — Frontend UI/UX Design System

> **Stack assumed:** Next.js App Router · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · fetch · React Hook Form + Zod · Recharts · Lucide · Sonner.
> **Backend:** the 38-endpoint University Management System API (`{{baseUrl}}/api/v1/...`). Roles: `ADMIN`, `FACULTY`, `STUDENT`.

---

## 0. How to use this document (read first)

1. **Step 0 — before any UI:** call every endpoint you will use (Postman / curl / a scratch script), save one real JSON response per endpoint, and write the TypeScript types from those real responses into `types/`. **Never guess field names.** If a field this spec mentions does not exist in the real response, drop that UI element; do not invent data.
2. Build in this order: tokens → fonts → shadcn theme mapping → primitives (Section 5) → app shells (Section 6) → modules (Section 9), one module at a time.
3. Every page must ship with all five states: **loading (skeleton) · empty · error · populated · partial/edge** (Section 7.6).
4. If this file and the project requirements conflict, the requirements win on *functionality* (routes, auth, payment, 18+ pages) and this file wins on *appearance*.
5. **Do not add decoration that this file does not list.** No gradients as backgrounds, no glassmorphism, no emoji in UI chrome, no random illustrations, no lorem ipsum.

### 0.1 The one-sentence design idea

> *A calm, paper-and-ink academic workspace whose single memorable feature is the **arch** — a nod to the colonnaded arches of old South Asian university halls — and whose three roles each get their own quiet accent color and information density.*

- **Student** = spacious, friendly, card-based, "my academic passport".
- **Faculty** = a workbench: medium density, forms and rosters, sticky action bars.
- **Admin** = a registry office: compact, table-first, border-only cards, audit-minded.
- **Transcript & invoices** = the only places that look like *paper documents* (serif, sharp corners). Everything else is UI.

### 0.2 Where boldness is spent (and where it is not)

- **Bold (one place):** the **arch motif** (Section 4.4) — logo, hero, empty states, grade badges, avatar crop, payment-success moment.
- **Quiet everywhere else:** flat neutrals, one accent per role, restrained shadows, no entrance animations on every card.
- **Forbidden "AI-default" looks:** cream background + terracotta accent; near-black background + neon accent; every card the same radius and the same grey shadow; tracked-out ALL-CAPS eyebrow labels above headings; "Label — fragment" titles; `→` appended to every link; middle-dot meta strings (`A · B · C`); one word in a headline colored or italicised for emphasis.

### 0.3 Brand constants

Create `lib/brand.ts` and import from it everywhere (never hard-code the name in JSX):

```ts
export const BRAND = {
  name: "Bangladesh University",
  short: "Bangladesh",
  tagline: "Your academic record, in one place.",
  supportEmail: "registrar@Bangladesh.edu",
  timezone: "Asia/Dhaka",
  currency: "BDT",
  locale: "en-BD",
} as const;
```

The owner may rename it; the design does not depend on the name.

---

## 1. Design tokens (copy into `app/globals.css`)

### 1.1 Base, brand and role scales

```css
:root {
  /* ── Paper & ink (neutrals are cool, blue-tinted — NOT cream, NOT pure grey) ── */
  --paper: #F5F6FA;           /* app background */
  --surface: #FFFFFF;         /* cards, tables, inputs */
  --surface-sunken: #ECEEF5;  /* table header, skeleton base, segmented-control track */
  --line: #DDE1EC;            /* default 1px borders, dividers */
  --line-strong: #C5CBDC;     /* input borders, hover borders */
  --ink: #16203B;             /* primary text (deep indigo-navy, not black) */
  --ink-muted: #4F5874;       /* secondary text, table headers */
  --ink-subtle: #66708C;      /* placeholders, helper text, captions (min allowed text grey) */

  /* ── Lapis (brand + STUDENT accent) ── */
  --lapis-50:#EEF2FC; --lapis-100:#DCE5F8; --lapis-200:#BBCBF0; --lapis-300:#8FA8E3; --lapis-400:#5F80D0;
  --lapis-500:#3F61B8; --lapis-600:#2A4BA0; --lapis-700:#213C82; --lapis-800:#192E66; --lapis-900:#12234D;

  /* ── Verdigris (FACULTY accent) ── */
  --verdigris-50:#E8F6F6; --verdigris-100:#CDEBEC; --verdigris-500:#13959F; --verdigris-600:#0E7C86;
  --verdigris-700:#0A636B; --verdigris-800:#084C52;

  /* ── Aubergine (ADMIN accent) ── */
  --aubergine-50:#F6EDFB; --aubergine-100:#EBD9F5; --aubergine-500:#8A3FB4; --aubergine-600:#6B2D8F;
  --aubergine-700:#54226F; --aubergine-800:#3F1A55;

  /* ── Saffron (attention accent — max ONE saffron element per viewport, never as text on white) ── */
  --saffron-50:#FFF8E6; --saffron-100:#FDEDBF; --saffron-300:#F8CF63; --saffron-500:#F2A413;
  --saffron-600:#C98009; --saffron-700:#9A5F06;

  /* ── Semantic (each has solid / soft background / readable text) ── */
  --success-solid:#1F9D63; --success-soft:#DDF3E8; --success-text:#14704A;
  --warning-solid:#E0A100; --warning-soft:#FDF0D2; --warning-text:#8A5A00;
  --danger-solid:#D64545;  --danger-soft:#FBE3E3;  --danger-text:#A32A2A;
  --info-solid:#2B7FD6;    --info-soft:#E0EDFB;    --info-text:#1F5FA8;
  --neutral-solid:#7C85A0; --neutral-soft:#E8EAF2; --neutral-text:#4A5270;

  /* ── Payment provider (use ONLY on payment surfaces) ── */
  --bkash:#E2136E; --bkash-soft:#FCE4EF;

  /* ── Role theme defaults (public + auth pages use student/lapis) ── */
  --role:#2A4BA0; --role-strong:#213C82; --role-soft:#EEF2FC; --role-tint:#DCE5F8;

  /* ── Shape ── */
  --radius-control: 10px;   /* buttons, inputs, selects, tabs */
  --radius-card: 16px;      /* cards, popovers */
  --radius-sheet: 24px;     /* dialogs, sheets, big hero panels */
  --radius-paper: 4px;      /* transcript / receipt "documents" ONLY */
  --radius-pill: 999px;     /* badges, chips */
  --radius-arch: 999px 999px 14px 14px; /* the signature arch */

  /* ── Elevation (shadows are ink-tinted, never pure black/grey) ── */
  --shadow-xs: 0 1px 1px rgba(22,32,59,.05);
  --shadow-card: 0 1px 2px rgba(22,32,59,.05), 0 8px 24px -12px rgba(22,32,59,.14);
  --shadow-pop: 0 12px 32px -8px rgba(22,32,59,.24);

  /* ── Focus ── */
  --ring: 0 0 0 2px var(--surface), 0 0 0 4px var(--role);

  /* ── Motion ── */
  --ease-out: cubic-bezier(.2,.7,.2,1);
  --dur-fast: 120ms; --dur-base: 200ms; --dur-slow: 320ms;
}

/* ── Role themes: set data-role on the dashboard layout root element ── */
[data-role="student"] { --role:var(--lapis-600);      --role-strong:var(--lapis-700);      --role-soft:var(--lapis-50);      --role-tint:var(--lapis-100); }
[data-role="faculty"] { --role:var(--verdigris-600);  --role-strong:var(--verdigris-700);  --role-soft:var(--verdigris-50);  --role-tint:var(--verdigris-100); }
[data-role="admin"]   { --role:var(--aubergine-600);  --role-strong:var(--aubergine-700);  --role-soft:var(--aubergine-50);  --role-tint:var(--aubergine-100); }

/* ── shadcn/ui variable mapping (keep shadcn's names so its components theme automatically) ── */
:root {
  --background: var(--paper);      --foreground: var(--ink);
  --card: var(--surface);          --card-foreground: var(--ink);
  --popover: var(--surface);       --popover-foreground: var(--ink);
  --primary: var(--role);          --primary-foreground: #FFFFFF;
  --secondary: var(--surface-sunken); --secondary-foreground: var(--ink);
  --muted: var(--surface-sunken);  --muted-foreground: var(--ink-muted);
  --accent: var(--role-soft);      --accent-foreground: var(--role-strong);
  --destructive: var(--danger-solid);
  --border: var(--line);           --input: var(--line-strong);
  --ring-color: var(--role);       --radius: var(--radius-control);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```

Expose the tokens to Tailwind v4 with `@theme inline { --color-paper: var(--paper); --color-surface: var(--surface); --color-ink: var(--ink); --color-role: var(--role); --color-role-soft: var(--role-soft); ... }` so classes like `bg-paper`, `text-ink`, `bg-role`, `text-role`, `bg-role-soft` work. **Never write raw hex values inside components.** Only tokens.

### 1.2 Color rules (most common mistakes)

| Rule | Detail |
|---|---|
| Role accent is for **interaction and identity** | primary buttons, active nav item, links, focus ring, selected tab, progress fill. Not for large backgrounds. |
| Text on role-accent fills | always `#FFFFFF`. |
| **Saffron** | fill only; text on saffron is always `--ink`. Allowed uses: current-semester pill, CGPA ring arc, the small crest in the logo, one featured callout. **Max one per viewport.** |
| Text colors | body `--ink`; secondary `--ink-muted`; helper/placeholder/caption `--ink-subtle`. Never lighter than `--ink-subtle` for readable text. |
| Status colors | always the **soft bg + text** pair for badges/alerts (`bg-[var(--success-soft)] text-[var(--success-text)]`). Solid colors only for icons, dots, chart fills, and solid buttons. |
| Never color-only | every status has an **icon + text label** in addition to color (color-blind safety). |
| Contrast | body text ≥ 4.5:1, large text/icons ≥ 3:1. Do not put `--ink-muted` on `--surface-sunken` below 14px. |
| Borders | `1px solid var(--line)`. Hover on interactive containers → `--line-strong`. |
| Dark mode | **Optional, phase 2.** If built: paper `#0E1324`, surface `#151B31`, sunken `#0A0E1C`, line `#27304D`, ink `#E8EBF5`, muted `#A4ACC6`; role accents step to their `-300/-400` shade. Do not ship a half-finished dark mode. |

### 1.3 Semantic status dictionary (used by `<StatusBadge>`)

Build **one** `StatusBadge` component with a lookup map. Match **case-insensitively**, trim, replace `_`/`-` with space. **Unknown values fall back to `neutral` and show the raw value in sentence case** (never crash, never blank).

| Domain | Value (as returned by API) | Tone | Icon (Lucide) | Label |
|---|---|---|---|---|
| Attendance | `PRESENT` | success | `Check` | Present |
| Attendance | `ABSENT` | danger | `X` | Absent |
| Attendance | `LATE` | warning | `Clock` | Late |
| Fee / Payment | paid / completed / success | success | `CircleCheck` | Paid |
| Fee / Payment | unpaid / pending / initiated | warning | `Hourglass` | Unpaid / Pending |
| Fee | overdue (due date < today and unpaid) | danger | `AlertCircle` | Overdue |
| Payment | failed | danger | `CircleX` | Failed |
| Payment | cancelled / canceled | neutral | `Ban` | Cancelled |
| User | active (true) | success | `CircleCheck` | Active |
| User | inactive (false) | neutral | `CirclePause` | Deactivated |
| Admin type | `SUPER` | danger | `ShieldAlert` | Super admin |
| Admin type | `VC` / `REGISTRAR` / `FINANCE` | info | `ShieldCheck` | Vice chancellor / Registrar / Finance |
| Exam type | `MIDTERM` | info | `FileText` | Midterm |
| Exam type | `FINAL` | danger-soft but use **aubergine-soft** | `GraduationCap` | Final |
| Exam type | `QUIZ` | success | `Zap` | Quiz |
| Exam type | anything else | neutral | `FileText` | Sentence-cased value |
| Notification | unread | role | dot only | — |

Badge anatomy: height 24px, padding `2px 10px`, radius `--radius-pill`, font 12px / weight 600, icon 14px with 6px gap. **No ALL-CAPS** — sentence case labels.

### 1.4 Department chips (semester filter uses `department=CSE`)

Departments are free strings. Do **not** hard-code a list. Derive a color deterministically: `hash(departmentString) % 6` → pick from the **categorical chart palette** below, render as soft-tint chip (`bg` = color at 12% opacity, text = color's darkest step). Same department = same color everywhere.

### 1.5 Categorical chart palette (Recharts / any chart)

In this order: `#2A4BA0` lapis · `#0E7C86` verdigris · `#6B2D8F` aubergine · `#F2A413` saffron · `#E8695A` coral · `#7A86A8` slate.
Rules: max 6 series; add direct labels or a legend; gridlines `--line` dashed `3 3`; axis text 12px `--ink-subtle`; tooltip = white card, `--shadow-pop`, radius 12, 13px text; **every chart has a visually hidden `<table>` fallback or `aria-label` summary**; never use red/green as the only distinction between two series.

### 1.6 Grade colors (results & transcript)

Map by the **first letter** of the grade string the API returns (do not compute grades on the client unless the API omits them):

| Starts with | Tone |
|---|---|
| A | success |
| B | info |
| C | warning |
| D | `#C25E12` on `#FCE9DA` |
| F | danger |
| anything else / null | neutral, show "—" |

---

## 2. Typography

### 2.1 Families (load with `next/font/google`, `display: "swap"`, subsets `["latin"]`)

| Role | Family | Why |
|---|---|---|
| **Display & headings & big numbers & transcript body** | **Literata** (variable, include `opsz` axis) | A bookish, warm serif made for long reading — it gives the "university" voice. |
| **UI, body, forms, tables, buttons** | **Figtree** (variable 400–700) | Friendly geometric sans with clear numerals; pairs cleanly with Literata. |
| **Bangla fallback** | **Hind Siliguri** (400, 500, 600) | For Bangla text in names/notifications. Add to the end of both font stacks. |
| **Code / JSON diff in audit logs only** | system `ui-monospace, SFMono-Regular, Menlo, monospace` | Mono is **only** for literal code-like content. Not for IDs, dates, labels or numbers in general UI. |

```ts
// app/fonts.ts
import { Literata, Figtree, Hind_Siliguri } from "next/font/google";
export const display = Literata({ subsets:["latin"], variable:"--font-display", display:"swap", axes:["opsz"] });
export const sans = Figtree({ subsets:["latin"], variable:"--font-sans", display:"swap" });
export const bangla = Hind_Siliguri({ subsets:["bengali"], weight:["400","500","600"], variable:"--font-bangla", display:"swap" });
```

Body: `font-family: var(--font-sans), var(--font-bangla), system-ui, sans-serif;`
Headings: `font-family: var(--font-display), var(--font-bangla), Georgia, serif;`

### 2.2 Type scale (desktop / mobile)

| Token | Family | Size / line-height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display` | Literata | 56/60 → **38/42** | 600 | -0.02em | Public hero headline only |
| `h1` | Literata | 32/38 → **26/32** | 600 | -0.015em | Page title (one per page) |
| `h2` | Literata | 24/30 → **21/28** | 600 | -0.01em | Section title |
| `h3` | Figtree | 18/26 | 600 | 0 | Card title |
| `stat` | Literata | 40/44 → 32/36 | 600 | -0.02em | Big numbers (CGPA, revenue, counts) |
| `body-lg` | Figtree | 16/26 | 400 | 0 | Public page paragraphs, lead text |
| `body` | Figtree | 15/24 | 400 | 0 | Default dashboard text |
| `small` | Figtree | 13/20 | 400/500 | 0 | Table cells in dense mode, helper text |
| `caption` | Figtree | 12/16 | 500 | 0.01em | Badges, timestamps, chart axes. **Never below 12px.** |

Rules:
- **Sentence case everywhere** (buttons, tab labels, table headers, menu items). Title Case only for proper nouns and names.
- Table header cells: 12px / 600 / `--ink-muted` / sentence case (not uppercase).
- Numbers in tables, stats, money, marks, GPA: `font-variant-numeric: tabular-nums lining-nums;` (add `tabular-nums` Tailwind class). Right-align numeric columns.
- Line length: body copy `max-w-[68ch]`; public marketing paragraphs `max-w-[62ch]`. Serif long text gets `line-height: 1.65`.
- Headings `text-wrap: balance`; paragraphs `text-wrap: pretty`.
- One `<h1>` per page. Heading levels never skip.
- Never italicise or recolor a single word inside a headline for emphasis.
- Truncation: single-line `truncate` + tooltip/`title` with full text; multi-line `line-clamp-2`.
- Minimum input font size **16px on mobile** (prevents iOS zoom).

---

## 3. Spacing, layout and shape

### 3.1 Spacing scale (4px base — use ONLY these values)

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96` → Tailwind `1 · 2 · 3 · 4 · 5 · 6 · 8 · 10 · 12 · 16 · 20 · 24`.
Never use arbitrary values like `p-[13px]`, `mt-7`, `gap-9`.

| Situation | Value |
|---|---|
| Icon ↔ label gap | 8px (badges: 6px) |
| Label ↔ input | 6px; input ↔ helper/error 6px |
| Between form fields | 20px |
| Between form sections | 32px (with a `--line` divider + h3) |
| Card padding | student **24**, faculty **20**, admin **16–20** (mobile always 16) |
| Gap between cards in a grid | 16 (mobile) / 24 (≥ md) |
| Page padding (content area) | 16 (mobile) / 24 (md) / 32 (lg+) |
| Page title block → content | 24 |
| Public-page section vertical rhythm | 64 (mobile) / 96 (desktop) |
| Sticky action bar height | 64 + `env(safe-area-inset-bottom)` |

### 3.2 Breakpoints & grid

`sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`. **Design mobile-first** (write base styles for 360px wide, then `md:`/`lg:`).

| Context | Container |
|---|---|
| Public pages | `mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8` |
| Dashboard content | `max-w-[1200px]` inside the shell, left-aligned (not centered) when the sidebar is present |
| Reading pages (transcript, receipt) | `max-w-[820px]` centered |
| Forms | single column `max-w-[560px]`; two columns only ≥ `md` and only for short paired fields (date+time, first+last name) |

Grid: 4 columns on mobile (gutter 16), 12 columns ≥ lg (gutter 24). Stat cards: `grid-cols-2 lg:grid-cols-4` (never 1 column of tiny cards on mobile; 2 is correct).

### 3.3 Shape rules (radius varies by hierarchy — this is intentional)

| Element | Radius |
|---|---|
| Buttons, inputs, selects, tabs, segmented controls | 10px |
| Cards, popovers, dropdown menus, table containers | 16px |
| Dialogs, sheets, hero panels | 24px |
| Badges, chips, avatars (when round), switches | pill |
| Transcript / receipt paper | 4px |
| Grade badge, hero image frames, empty-state illustrations | **arch** `999px 999px 14px 14px` |

Elevation by role (this is how roles *feel* different):
- **Student:** cards use `shadow-card` and **no border**.
- **Faculty:** cards use `1px border --line` + `shadow-xs`.
- **Admin:** cards and tables use **border only, no shadow** (compact, registry look).
- Popovers, dropdowns, dialogs, sheets: `shadow-pop` + 1px `--line` border in all roles.
- Never stack a shadow on a shadow (card inside a card → the inner one is `bg-[var(--surface-sunken)]`, no shadow, no border).

### 3.4 Density modes (set `data-density` on the shell)

| Mode | Used by | Table row | Input height | Button height | Card padding |
|---|---|---|---|---|---|
| `comfortable` | Student, public | 56px | 44px | 44px | 24px |
| `standard` | Faculty | 48px | 44px | 40px | 20px |
| `compact` | Admin | 40px (44px on touch devices) | 40px | 36px | 16px |

**Touch target minimum is 44×44px on mobile in every mode** (use padding/hit-area expansion; admin compact mode returns to 44px below `md`).

---

## 4. Visual language

### 4.1 Iconography

Lucide only. Stroke width **1.75**, sizes **16 / 20 / 24** (16 inline with text, 20 in buttons/nav, 24 in empty states/feature tiles). Icons inherit `currentColor`. Icon-only buttons **must** have `aria-label` and a tooltip.

| Module | Icon |
|---|---|
| Dashboard | `LayoutDashboard` |
| Users | `Users` |
| Faculty | `Presentation` |
| Semesters | `CalendarRange` |
| Fees | `ReceiptText` |
| Payments | `CreditCard` |
| Enrollments / courses | `BookOpenCheck` |
| Attendance | `CalendarCheck` |
| Exams | `ClipboardList` |
| Results | `Award` |
| Transcript | `ScrollText` |
| Notifications | `Bell` |
| Audit logs | `History` |
| Settings / profile | `UserRound` |
| Logout | `LogOut` |

### 4.2 Imagery rules

- All images via `next/image` with explicit `width`/`height` (or `fill` + sized parent), meaningful `alt`, and `sizes`.
- **No stock-photo placeholders, no gray boxes, no `via.placeholder`.** For decorative visuals use the **arch SVG pattern** (4.4) — it is real, brand-specific, and needs no photo.
- User avatars: arch-cropped (`rounded-t-full rounded-b-[14px]`), 40px in tables, 96px on profile. No photo → initials (first letter of first + last name) on `--role-tint` with `--role-strong` text, Figtree 600.

### 4.3 Elevation & borders summary

Flat by default. Borders do the structural work. Shadow only for: student cards, floating layers, sticky bars (shadow upward: `0 -8px 24px -12px rgba(22,32,59,.18)`).

### 4.4 The arch motif (signature — implement exactly once as reusable components)

1. `<ArchMark />` — the logo crest: a 28×32 SVG, arch outline 2px `--role`-independent **lapis-700**, with a 6px saffron-500 dot centered in the opening. Next to it the wordmark in Literata 600 18px.
2. `<ArchFrame>` — wrapper applying `border-radius: var(--radius-arch); overflow: hidden;` for images/avatars/grade badges.
3. `<ArchPattern />` — SVG background of repeating arches (each 48×64, 1.5px stroke `--lapis-200` on transparent, 24px gap). Used: public hero right side (opacity 100%), auth page side panel (on lapis-800 with `--lapis-600` strokes), empty-state backdrop (opacity 60%, 160×120 crop). **Never as a full-page background behind text.**
4. `<GradeBadge grade="A+">` — 48×56 arch, letter in Literata 600 24px, colors from 1.6.
5. Payment success: a 96×112 arch draws its outline (stroke-dashoffset animation, 600ms, once) then a check mark fades in. Reduced-motion: show final state immediately.

### 4.5 Motion (restraint)

- **Allowed:** responses to user action — button press (scale .98, 120ms), dialog/sheet open (opacity + translateY 8px, 200ms), accordion expand (height 200ms), toast enter/exit, skeleton shimmer (1.4s linear infinite, **disabled under reduced motion**), tab underline slide (200ms), the payment-success arch draw (once).
- **Forbidden:** fade-up on every section/card, hover-lift on every card, parallax, bouncing, auto-playing carousels, count-up numbers on every stat.
- **One** orchestrated load moment is allowed: the public home hero (headline block + arch pattern fade in together, 320ms, once).
- Easing `--ease-out`. Nothing longer than 320ms except the arch draw.
- Always honor `prefers-reduced-motion` (handled globally in 1.1; do not override).

### 4.6 Microcopy & voice

Plain, specific, sentence case, active voice, no exclamation marks except the payment-success screen. Errors say **what happened + what to do**; they never apologise or blame. Keep **one verb per action across the whole flow** (button → toast → audit text).

| Action | Button | Success toast | Notes |
|---|---|---|---|
| Sign in | Sign in | — | "Demo" buttons: "Sign in as student" |
| Create account | Create account | "Account created. Check your email for a code." | |
| Verify | Verify email | "Email verified." | |
| Pay | Pay with bKash | — (redirects) | |
| Enroll | Enroll in semester | "You're enrolled." | |
| Record attendance | Save attendance | "Attendance saved for 14 Oct." | Upsert → never say "Created" |
| Create exam | Create exam | "Exam created." | |
| Edit | Save changes | "Changes saved." | |
| Delete exam | Delete exam | "Exam deleted." | Confirm dialog first |
| Save result | Save result | "Result saved. Transcript updated." | Because backend recalculates |
| Deactivate user | Deactivate user | "{Name} deactivated." | Confirm dialog |
| Activate user | Activate user | "{Name} activated." | |
| Mark read | (tap row) | — silent | |
| Create faculty | Create faculty account | "Faculty account created." | |
| Promote | Make department head | "{Name} is now a department head." | |

Error pattern: title (what failed) + one line (why/what to do): *"Couldn't load fees. Check your connection and try again."* + a **Try again** button. For API errors, show the API's own `message` when present, truncated to 140 chars; otherwise the generic line. Never show raw stack traces, status codes alone, or "Something went wrong" with no action.

Empty state pattern: arch-pattern backdrop + 24px Lucide icon in a `--role-tint` circle + h3 (what is empty) + one sentence (why/what to do) + primary action when one exists.
Examples: "No fees yet — Invoices for your semesters will appear here." · "No enrollments yet — Pay your semester fee, then enroll." · "No results published yet — Results appear after your faculty publish them." · "No notifications — You're all caught up."

Formats (write helpers in `lib/format.ts`, use everywhere):
- Money: `new Intl.NumberFormat("en-BD",{style:"currency",currency:"BDT",maximumFractionDigits:0}).format(n)` → "৳12,500" (show decimals only if the value has them).
- Date: `14 Oct 2026`; date+time `14 Oct 2026, 3:30 pm`; always in `Asia/Dhaka` (pass `timeZone`). Relative ("2 hours ago") only in notifications and audit logs, with absolute time in a tooltip.
- Percent: one decimal max ("87.5%"). GPA/CGPA: **two decimals** ("3.67").
- Never render `undefined`, `null`, `NaN`, `[object Object]`, or raw ISO strings. Missing value → "—".---

## 5. Component primitives (build these first; every page reuses them)

Put in `components/ui` (shadcn) and `components/shared`. **No page may re-implement any of these inline.**

### 5.1 Button

| Variant | Look | Use |
|---|---|---|
| `primary` | bg `--role`, text white, hover `--role-strong` | one per view/section |
| `secondary` | bg `--surface`, 1px `--line-strong`, text `--ink`, hover bg `--surface-sunken` | alternative action |
| `ghost` | transparent, text `--ink-muted`, hover bg `--surface-sunken` | toolbar/icon actions |
| `danger` | bg `--danger-solid`, text white, hover `#B93A3A` | destructive confirm only |
| `link` | text `--role`, underline on hover | inline |
| `bkash` | bg `--bkash`, text white | **only** "Pay with bKash" |

Sizes: `sm` 36px (px 12, 14px text) · `md` 44px default (px 16, 15px text, weight 600) · `lg` 52px (px 24, 16px text). Icon 20px, gap 8px. Radius 10px.
States: hover, `active:scale-[.98]`, **focus-visible** = `--ring`, disabled = 50% opacity + `cursor-not-allowed` + no hover, **loading** = spinner replaces the leading icon, label stays, width does **not** jump, `aria-busy="true"`, button is `disabled`.
Rules: a button that triggers a network call **must** show loading and block double-clicks. Labels are verbs ("Save changes"), never "Submit"/"OK"/"Click here". Destructive confirm buttons are on the **right** in dialogs; cancel on the left of it (mobile: stacked, primary on top).

### 5.2 Inputs

Height by density (44/40), padding `0 14px`, bg `--surface`, border `1px --line-strong`, radius 10, text 16px (mobile) / 15px (≥ md), placeholder `--ink-subtle`.
Focus: border `--role` + `--ring`. Error: border `--danger-solid`, message below in `--danger-text` 13px with a 16px `AlertCircle`, linked by `aria-describedby`, input gets `aria-invalid="true"`. Disabled: bg `--surface-sunken`, text `--ink-subtle`.
Every input has a visible `<label>` above it (13px / 600 / `--ink`). Placeholders are **examples**, never labels. Required fields: add "(optional)" on optional ones instead of asterisks on required ones.
Types & attributes: email → `type="email" autocomplete="email" inputmode="email"`; password → show/hide toggle button (`aria-label="Show password"`), `autocomplete="current-password"` or `"new-password"`; numbers (marks, amount) → `inputmode="decimal"`, no spinner arrows, right-aligned, tabular-nums; phone → `inputmode="tel"`; dates → shadcn Popover + Calendar (not native `<input type=date>` on desktop) but keyboard-typeable; OTP → Section 9.1.
Select: shadcn `Select` for ≤ 8 options, `Combobox` (Command + Popover) for > 8 or searchable lists (students, semesters).
Search input: leading `Search` icon 16px, trailing clear (×) button when non-empty, **debounced 400ms**, writes to URL.

### 5.3 Card

`bg --surface`, radius 16, padding by density (3.1). Header: h3 left, optional action right. No card inside a card except a `--surface-sunken` inner block. Clickable cards are real `<a>`/`<button>` with focus ring, never a `div onClick`. Hover on clickable card: border → `--line-strong` (admin/faculty) or shadow → `0 1px 2px …, 0 12px 28px -12px …` (student). No translateY.

### 5.4 StatCard

Layout: top row = 13px `--ink-muted` label + 20px icon in a 36px rounded-10 `--role-tint` tile (icon color `--role-strong`); below = `stat` number; below = optional 13px context line. **Never invent trend deltas** ("+12% vs last month") — the API gives aggregates only. Skeleton = same box with shimmering bars. Money stat uses Literata with "৳" at 60% size.

### 5.5 DataTable (admin-heavy; faculty/student use it for lists too)

- Container: `bg --surface`, radius 16, `1px --line`, `overflow-hidden`. Header row bg `--surface-sunken`, 12px/600 `--ink-muted`, height = row height. Sticky header on vertical scroll within the container.
- Rows: bottom border `--line`, **no zebra stripes**, hover bg `--role-soft` at 60%, selected bg `--role-soft`.
- Alignment: text left, numbers/money right, status/actions **left for status, right for actions**. Actions column = a `⋯` icon button opening a dropdown (aria-label "Row actions").
- Sortable headers are `<button>` with an up/down chevron; `aria-sort` set; click cycles asc → desc → none; writes `sortBy` & `sortOrder` to the URL.
- Cell overflow: `truncate` + `max-w` + tooltip. Never wrap IDs/emails mid-word.
- **Below `md`: convert each row into a stacked card** (primary field as card title, 2–3 secondary fields as label/value pairs, actions menu top-right). Do **not** rely on horizontal scroll, except audit logs (scroll allowed, with a visible scroll hint shadow on the right edge).
- Footer: `<Pagination>` (5.6).
- Loading: skeleton with the **same number of columns and 8 rows**; no spinner.
- Empty: empty state (4.6) *inside* the table container, with "Clear filters" if filters are active, else the creation action.

### 5.6 Pagination (URL-synced)

Layout (desktop): left "Showing 11–20 of 134" (13px `--ink-muted`), right = page-size select (10/20/50) + Previous / numbered pages (current, first, last, ±1, ellipsis) / Next. Mobile: "Page 2 of 14" + Previous/Next only.
Buttons 40px square, current page = bg `--role` white text + `aria-current="page"`. Disabled at ends.
Rules: params are `page` and `limit`; **changing any filter/search/sort resets `page` to 1**; clamp out-of-range `page` from the URL to the last valid page; invalid/non-numeric → 1; default `limit=10`; scroll to the top of the table container (not the window) after a page change. Use the API's pagination `meta` (total, page, limit, totalPage) — verify real field names in Step 0.

### 5.7 URL state hook (required by the project rules)

Write `useQueryParams()` wrapping `useSearchParams`, `usePathname`, `useRouter`:
- `set({ page: 2, role: "STUDENT" })` merges into existing params, removes keys whose value is `""`/`undefined`/default, and uses `router.replace(..., { scroll:false })` for filters/typing and `router.push` only for page changes.
- Any component using `useSearchParams` **must be inside `<Suspense fallback={<TableSkeleton/>}>`** or the production build fails. This is the #1 Next.js App Router mistake — do it on every such page.
- The URL is the single source of truth: filters are read from the URL on render; never mirror them into `useState`.
- The table shouldn't flash empty between pages (show a subtle 2px top progress bar on the container while `isFetching`).

### 5.8 Badges, Alerts, Toasts

- `StatusBadge`: Section 1.3.
- `Alert` (inline, for blocking conditions a toast would lose): soft bg + 1px border of the tone at 30%, 20px icon, title 14px/600, body 14px, optional action button. Use for: "Fee unpaid — can't enroll", "Account deactivated", API field-level errors, "You're offline".
- Toasts (Sonner): bottom-center on mobile, **top-right on desktop**, 4s (errors 6s), max 3 visible, `richColors` **off** (we style with tokens), radius 12, with icon. Toast text obeys the verb table (4.6). Every failed mutation → error toast **and** (for forms) inline field errors. Never toast for background refetch failures that have cached data — show a small "Couldn't refresh · Retry" inline strip instead.

### 5.9 Dialog, Sheet, Dropdown

- Dialog (confirmations, ≤ 2 fields): max-w 440, radius 24, padding 24, title h3, description 14px `--ink-muted`, footer buttons right-aligned. Focus is trapped, `Esc` closes, initial focus on the **cancel** button for destructive confirms.
- Sheet (create/edit forms with > 2 fields): right side, width `min(480px, 100vw)`, radius 24 on the left edge (desktop), full-screen on mobile with a sticky footer for actions. Dirty-form close → confirm "Discard changes?".
- Destructive dialogs: red icon tile, title "Delete this exam?", body states consequence ("Students will no longer see it. This can't be undone."), button "Delete exam".
- Dropdown menus: radius 12, item height 36, icons 16px, destructive item in `--danger-text` separated by a divider at the bottom.

### 5.10 Skeletons

Base `--surface-sunken`, shimmer highlight `rgba(255,255,255,.6)`, radius matches the real element. Skeleton must match final layout (same card count/columns) so the page doesn't jump (CLS). Text lines: 14px high, widths 90% / 70% / 40%. **Every data-fetching route has a `loading.tsx`** that renders the page's own skeleton, not a generic spinner.

### 5.11 Other shared pieces

`PageHeader` (h1 + description + right-aligned primary action; on mobile the action becomes full-width under the text) · `SearchInput` · `FilterBar` (segmented control + selects; wraps; "Clear filters" link appears only when a filter is active) · `ConfirmDialog` · `EmptyState` · `ErrorState` (for `error.tsx` and inline query errors, always with "Try again") · `Money` · `DateText` · `Avatar` · `ProgressBar` (6px high, radius pill, fill `--role`; 100% = success-solid) · `Stepper` (wizard) · `CopyButton` · `OtpInput` · `RoleGuard`.

---

## 6. App shells and navigation

### 6.1 Public shell (Home, About, Academics, Contact, FAQ, Login, Register)

Header 72px sticky, `bg --surface` at 92% with 1px bottom `--line` (no blur). Left: `ArchMark` + name. Center (≥ lg): nav links (15px/500). Right: "Sign in" (secondary) + "Create account" (primary); if logged in → "Go to dashboard" (role-based). Mobile: hamburger → full-height sheet. Footer: 4 columns → stacked; includes an **API status dot** (from `GET /` health check, fetched server-side with `revalidate: 60`; green "All systems normal" / amber "Service may be slow"; if the check fails just hide the dot — never block render).

### 6.2 Auth layout (Login / Register / Verify)

Desktop: two panels. Left 45% = `--lapis-800` panel with `ArchPattern` (strokes `--lapis-600`), wordmark in white, a Literata 32px statement (real copy, e.g., "Fees, classes, results and transcripts — in one calm place."), and three short proof-points with 20px icons. Right 55% = `--surface` with the form in a `max-w-[420px]` column, vertically centered. Mobile: left panel hidden; a 64px lapis band with the wordmark on top, form below.

### 6.3 Dashboard shell (Student / Faculty / Admin)

Set `<div data-role="student|faculty|admin" data-density="...">` on the shell root.

```
Desktop ≥ lg                                  Mobile < lg
┌────────┬───────────────────────────────┐   ┌─────────────────────────┐
│Sidebar │ Topbar (64)  [search?] 🔔 avatar│   │ Topbar (56) ☰  title  🔔 │
│ 264px  ├───────────────────────────────┤   ├─────────────────────────┤
│        │ PageHeader                    │   │ PageHeader              │
│        │ Content (max 1200)            │   │ Content                 │
│        │                               │   ├─────────────────────────┤
└────────┴───────────────────────────────┘   │ Bottom tabs (64) — STUDENT only │
                                              └─────────────────────────┘
```

- **Role identity strip:** a 3px bar in `--role` across the very top of the topbar, plus a small role chip in the sidebar header ("Student portal" / "Faculty workspace" / "Administration") — 12px/600, `--role-soft` bg, `--role-strong` text.
- **Sidebar:** bg `--surface`, right border `--line`. Item height 40 (admin) / 44, radius 10, icon 20 + label 15/500. Inactive `--ink-muted`; hover bg `--surface-sunken`; **active** = bg `--role-soft`, text `--role-strong`, weight 600, and a 3px `--role` bar on the left inside the item. Group labels (admin only) 12px/600 `--ink-subtle`, sentence case. Collapsible to 72px (icons + tooltips) on `lg`; remembered in `localStorage` (wrapped in try/catch).
- **Mobile nav:** Student gets a **bottom tab bar** (5 items: Home, Fees, Courses, Attendance, More→sheet with the rest). Faculty and Admin get a slide-in drawer sidebar (hamburger).
- **Topbar right:** notification bell (badge, Section 9.8), avatar menu (Profile, Sign out). Avatar = arch-crop initials.
- **Breadcrumbs** on detail pages only (Exam detail, Semester detail, Transcript of a student): 13px, `/` separator, last item not a link.
- **Route protection:** middleware redirects unauthenticated users to `/login?next=<path>`; wrong-role access → redirect to the user's own home with a toast "You don't have access to that page." **Also** hide nav items and buttons the role cannot use (conditional rendering) — middleware alone is not enough and UI-only hiding alone is not enough; do both.

### 6.4 Navigation maps

| Student | Faculty | Admin |
|---|---|---|
| Overview · Fees · Courses (enrollments) · Attendance · Exams · Results · Transcript · Notifications · Profile | Overview · Attendance · Exams · Results · Transcripts · Notifications · Profile | **Overview** · **People:** Users, Create faculty, Create admin · **Academics:** Semesters · **Finance:** Fees, Payments lookup · **System:** Audit logs · Notifications · Profile |

---

## 7. Cross-cutting UX rules

### 7.1 Forms (RHF + Zod — all of them)

- Validate **on blur first, then on change** (`mode: "onTouched"`). Show errors only after a field is touched or the user submits. On submit with errors: focus the first invalid field and scroll it into view below the sticky topbar (`scroll-margin-top: 88px`).
- Submit button is **never disabled for being invalid** (users can't learn why). It is disabled **only while submitting**.
- Zod messages are human: "Enter a valid email address", "Password must be at least 8 characters", "Marks can't be more than the exam's total (100)". Never "Invalid input" / "Required".
- Trim strings before validation. Convert number inputs with `z.coerce.number()` and reject `NaN`.
- Server errors: map field errors returned by the API onto fields via `setError`; anything unmapped → an `Alert` at the top of the form.
- **Dirty guard:** leaving a dirty form (route change, close sheet) asks "Discard changes?".
- **PATCH forms send only changed fields** (`formState.dirtyFields`). If nothing changed, the "Save changes" button shows a "No changes to save" toast and does not call the API.
- After success: reset the form, invalidate the related query keys (list **and** detail), toast, and (for creates) navigate or close the sheet.
- **Multi-step wizard** (required at least once — use it for *Create exam*, Section 9.6): stepper on top (numbered 1-2-3 is valid here because it *is* a sequence), each step validates before Next, Back preserves entered data, final step shows a read-only review summary, progress saved in component state only.
- Autofocus the first field in dialogs/sheets and on Login.

### 7.2 Loading

Initial load → skeleton (`loading.tsx`). Refetch → keep old data + 2px top progress bar on the container. Mutation → button spinner. Never a full-page spinner. Never a blank page. Images → `placeholder="blur"` where possible or fixed-size box.

### 7.3 Errors (by HTTP status)

| Status | Behavior |
|---|---|
| Network / offline | Persistent inline `Alert` "You're offline. Changes can't be saved." + Retry. |
| 400/422 | Field errors inline + summary alert if unmapped. |
| 401 | Try `POST /auth/refresh-token` **once**, replay the request; if it fails → clear session, redirect `/login?next=…`, toast "Your session expired. Sign in again." Guard against refresh loops (single in-flight refresh promise shared by all requests). |
| 403 | `ErrorState` "You don't have access to this" with a button to the user's home. |
| 404 | Section-level `ErrorState` "We couldn't find that" (for `[id]` pages call `notFound()`). |
| 409 | Toast with the API message (duplicates). |
| 429 | Toast + disable the triggering button with a visible countdown ("Try again in 28s"). Payments initiate is rate-limited — this **will** happen. |
| 5xx | `ErrorState` + "Try again"; toast for mutations. |

`error.tsx` at app root and per dashboard segment: shows `ErrorState` with "Try again" (`reset()`) and a "Go to dashboard" link. `not-found.tsx`: arch-pattern illustration, h1 "We can't find that page", link home.

### 7.4 Accessibility floor (non-optional even though the brief says optional)

- Visible focus on everything (`--ring`, 2px + 2px offset). Never `outline: none` without a replacement.
- Semantic landmarks: `header`, `nav` (aria-label "Primary"), `main` (id for skip link), `footer`. "Skip to content" link, first focusable element.
- Tables use real `<table>`, `<th scope="col">`; card-stack variants keep reading order.
- Dialogs/sheets: focus trap, return focus to trigger, `aria-labelledby`.
- Toasts: `aria-live="polite"` (errors `assertive`).
- Charts: `aria-label` summary + hidden data table.
- Forms: label ↔ input via `htmlFor`; errors via `aria-describedby`; OTP inputs have `aria-label="Digit 1 of 6"`.
- Color never the only signal. Targets ≥ 44px on touch. Respect reduced motion. Zoom to 200% without horizontal scroll.
- Language: `<html lang="en">`; wrap Bangla strings with `lang="bn"`.

### 7.5 Responsive behavior

Test at 360, 390, 768, 1024, 1280, 1536 px. No horizontal page scroll at any width (only inside designated containers). Images and cards never overflow. Text never below 12px. Sticky bars respect `env(safe-area-inset-bottom)`. On mobile, primary actions in page headers become full-width below the title; filter bars collapse into a "Filters" button opening a bottom sheet (with applied-filter count badge).

### 7.6 The five-state checklist (every page, every list)

1. **Loading** — skeleton that mirrors the layout.
2. **Empty** — illustrated (arch) + explanation + action.
3. **Error** — inline `ErrorState` with retry (+ toast for mutations).
4. **Populated** — the designed view.
5. **Edge** — very long names (truncate), single item, 500+ items (pagination), missing optional fields ("—"), zero amounts, past dates, future dates, deactivated user, soft-deleted record.

### 7.7 Auth/session UX

Tokens are handled per the project's auth approach (httpOnly cookie via route handlers preferred; never put the token in `localStorage` for the session, and never log it). After login redirect by role: `ADMIN → /admin`, `FACULTY → /faculty`, `STUDENT → /student`; honor `?next=` only if it belongs to the same role area. Logout: `POST /auth/logout`,  redirect `/login`, toast "You've been signed out." Show the current user (from `GET /auth/me`) in the avatar menu; while `me` loads show an avatar skeleton, not initials of "undefined".---

## 8. Page inventory (maps to the 38 endpoints; 30+ pages, project minimum is 18)

| Area | Route | Endpoints used | Shell / density |
|---|---|---|---|
| Public | `/` Home | `GET /` (status dot) | public |
| Public | `/about` · `/academics` · `/contact` · `/faq` | none (real written content, no lorem) | public |
| Auth | `/login` (with 3 demo buttons) | `POST /auth/login` | auth |
| Auth | `/register` | `POST /auth/register` | auth |
| Auth | `/verify-email` | `POST /auth/verify-email` | auth |
| Student | `/student` overview | `GET /fees/my`, `/enrollments/my`, `/attendance/my`, `/transcripts/my`, `/notifications/my` | comfortable |
| Student | `/student/fees` | `GET /fees/my`, `POST /payments/initiate` | comfortable |
| Student | `/student/payments/[paymentId]` (receipt) | `GET /payments/{id}` | paper |
| Student | `/student/courses` | `GET /enrollments/my`, `POST /enrollments`, `GET /semesters` | comfortable |
| Student | `/student/attendance` | `GET /attendance/my` | comfortable |
| Student | `/student/results` | `GET /results/my`, links to `GET /exams/{id}` | comfortable |
| Student | `/student/exams/[examId]` | `GET /exams/{id}` | comfortable |
| Student | `/student/transcript` | `GET /transcripts/my` | paper |
| Student | `/student/notifications` | `GET /notifications/my`, `PATCH …/read` | comfortable |
| Student | `/student/profile` (read-only) | `GET /auth/me` | comfortable |
| Faculty | `/faculty` overview | `GET /auth/me`, `GET /notifications/my` | standard |
| Faculty | `/faculty/attendance` | `POST /attendance`, `GET /attendance/{id}` | standard |
| Faculty | `/faculty/exams` · `/faculty/exams/new` (wizard) · `/faculty/exams/[examId]` | `POST/GET/PATCH/DELETE /exams` | standard |
| Faculty | `/faculty/results` | `POST /results`, `PATCH /results/{id}` | standard |
| Faculty | `/faculty/transcripts` · `/faculty/transcripts/[studentProfileId]` | `GET /transcripts/{id}` | paper |
| Faculty | `/faculty/notifications` · `/faculty/profile` | notifications, `GET /auth/me` | standard |
| Admin | `/admin` overview | `GET /admin/dashboard-stats` | compact |
| Admin | `/admin/users` | `GET /admin/users`, `PATCH /admin/users/{id}/status`, `PATCH …/department-head` | compact |
| Admin | `/admin/users/new-faculty` · `/admin/users/new-admin` | `POST /admin/faculty`, `POST /admin/admins` | compact |
| Admin | `/admin/semesters` · `/admin/semesters/[semesterId]` | `GET/PATCH /semesters` | compact |
| Admin | `/admin/fees` (create invoice) | `POST /fees`, `GET /semesters`, `GET /admin/users` | compact |
| Admin | `/admin/payments` (lookup by payment ID) | `GET /payments/{id}` | compact |
| Admin | `/admin/audit-logs` | `GET /admin/audit-logs` | compact |
| Admin | `/admin/notifications` · `/admin/profile` | notifications, `GET /auth/me` | compact |
| Payment | `/payment/success` · `/payment/cancel` · `/payment/failed` | `GET /payments/{id}` | minimal centered |
| Utility | `not-found.tsx`, `error.tsx`, `loading.tsx` per segment | — | — |

`/auth/logout` and `/auth/refresh-token` have no page — they are handled by the session layer (7.3, 7.7). `GET /payments/callback` is called by bKash/back-end, **not** by your UI (see 9.11).

### 8.1 API gaps the UI must design around (do NOT invent endpoints)

The endpoint list has **no list endpoints** for exams, attendance records, results, or a student roster, and **no profile-update or password endpoints**. Design accordingly:

| Gap | Required UI behavior |
|---|---|
| No "list exams" | Exams are reached by ID: from the creation redirect, from a result row's exam link (student), or the "Open an exam" ID input on `/faculty/exams`. `/faculty/exams` shows "Recently opened" from `localStorage` (try/catch, per-user convenience only, labeled "Recently opened on this device"). |
| No roster endpoint | Faculty attendance/results forms use a **Combobox over whatever real data exists** (e.g. `/admin/users?role=STUDENT` is admin-only → faculty cannot call it). If faculty cannot list students, render a clear **ID field** ("Student profile ID") with paste support and a helper line. Decide in Step 0 from the real responses, write the decision in the README, and keep the UI honest. |
| No profile update | `/…/profile` is **read-only** (avatar, name, email, role, department etc. from `GET /auth/me`). Add a note "To change your details, contact the registrar." Do not render fake edit forms or a fake change-password form. |
| Admin stats are aggregates | Charts only from returned counts/revenue (bar/donut of counts). No time-series, no fake trends. |
| Fee list for admin missing | `/admin/fees` is a **create-invoice** page (+ success summary card after creation), not a table. |

---

## 9. Module-by-module design (UI varies by API use case)

Format per module: *purpose → layout → components → states → edge cases*.

### 9.1 Auth — `POST /auth/login`, `/register`, `/verify-email` (+ `GET /auth/me`)

**Tone:** welcoming, unhurried. Auth layout (6.2). Headline Literata 32: "Sign in to your account". One column, 420px.

```
┌ Sign in to your account ──────────────┐
│ Email            [__________________] │
│ Password         [__________ 👁]      │
│                  [   Sign in   ]      │
│ ──────── or try a demo account ───────│
│ ┌ Student ─────┐┌ Faculty ─────┐┌ Admin ────┐
│ │ [icon] Sign in as student ...        │
└───────────────────────────────────────┘
```

- **Demo login (mandatory):** three equal-width buttons (stacked on mobile) below a divider "or try a demo account". Each is a `secondary` button, 52px tall, with the role's accent icon tile (Student=lapis `GraduationCap`, Faculty=verdigris `Presentation`, Admin=aubergine `ShieldCheck`) + label "Student" / "Faculty" / "Admin" + 13px caption ("View fees, results, transcript" / "Take attendance, publish results" / "Manage users and finance"). Click → logs in with the seeded demo credentials (env vars) → role redirect. **Each button has its own loading state**; while one loads, the others are disabled. If the seeded account doesn't exist → error toast "Demo account isn't available. Use the form above."
- Form: email + password, "Sign in" primary full-width. No "Remember me"/"Forgot password" unless endpoints exist (they do not — omit).
- Errors: 401 → inline `Alert` "Email or password is incorrect." (never reveal which). Unverified email → `Alert` with a **Verify your email** button → `/verify-email?email=…`. Deactivated account → `Alert` "This account is deactivated. Contact the registrar."
- **Register:** fields as the API requires (Step 0). Password rules shown live as a 3-item checklist with check icons. After success → `/verify-email?email=…`. Only show role fields the API accepts (registration is for students unless the API says otherwise — do not offer an ADMIN/FACULTY choice).
- **Verify email (OTP):** 6 single-digit boxes (52×56, radius 10, Literata 24, centered), auto-advance, backspace goes back, **paste of "123456" fills all boxes**, `inputmode="numeric"`, `autocomplete="one-time-code"`, auto-submit on the 6th digit. "Resend code" link disabled with a **30s countdown** (only if a resend endpoint exists; otherwise omit the link). Wrong code → boxes shake once (reduced-motion: red border only) + message "That code didn't work. Check the email and try again."
- After login: fetch `GET /auth/me`, store role, redirect. Do not flash the login form for logged-in visitors (middleware redirects them away from `/login`).

### 9.2 Public pages (Home, About, Academics, Contact, FAQ)

Content must be **real, specific and written** — no lorem, no "Feature 1". Write ~120–200 words per page of believable university copy using `BRAND`.

- **Home hero (the one orchestrated moment):** left = h `display` headline ("Everything about your semester, in one place." or similar plain-spoken line), one `body-lg` sentence, two buttons ("Sign in" primary, "See how it works" secondary). Right = `ArchPattern` with one `ArchFrame` (an inline SVG/illustrated campus scene — never a stock photo) sitting over it. Below: a 3-column "What you can do" band for the three roles (Student / Faculty / Admin) each with icon tile, 2-line description, and its own role accent color on the icon tile (this previews the role theming). Then a plain 4-step "How a semester works" — *this one is a real sequence*, so numbering is allowed: Fee → Enroll → Attend and sit exams → Results and transcript. Closing CTA band (`--lapis-800`, white text).
- **About:** story + values (3 cards, border-only), leadership as arch-cropped initials tiles only if real names are provided; otherwise omit.
- **Academics:** departments listed as chips (static content), semester calendar explainer, fee/payment explainer mentioning bKash.
- **Contact:** form (name, email, message; RHF+Zod) → since no contact endpoint exists, the form uses `mailto:` composition or is replaced by a contact details card + map-free address block. **Do not fake a submit success.**
- **FAQ:** shadcn Accordion, 8–10 real Q&As (how to pay with bKash, what if payment fails, how enrollment works, how results become a transcript, forgot password = contact registrar).
- SEO: each page exports `metadata` (title, description, openGraph). Titles `"Page · Brand"`. `lang`, canonical, one h1.

### 9.3 Semesters — `GET /semesters`, `GET /semesters/{id}`, `PATCH /semesters/{id}`

**Feel:** a calendar-like reference list. Admin = table; student = read-only cards within the enroll flow.

- **Admin list (`/admin/semesters`)**: filter bar = Department select (options derived from real data + "All departments") + sort order toggle; URL params `page, limit, department, sortOrder`. Columns: Semester name · Department (chip 1.4) · Start date · End date · Status/Current (if derivable from dates → `Current` saffron-soft pill; **max one saffron per viewport**, so only the single current row) · actions (`View`, `Edit`).
- **Detail (`/admin/semesters/[id]`)**: breadcrumb; header with name + department chip; a two-column "facts" card (label/value pairs); a timeline bar showing start→end with today's marker (only if dates exist); "Edit semester" opens a Sheet.
- **Edit (PATCH partial):** only changed fields are sent; date range validation (end after start); show the API error inline; success → invalidate list+detail.
- Edge: invalid `semesterId` → `notFound()`. Overlapping dates: show whatever the API errors, don't pre-validate rules you don't know. Dates display `Asia/Dhaka`, but **send ISO strings exactly as the API expects** (check Step 0).

### 9.4 Fees — `POST /fees` (admin), `GET /fees/my` (student)

**Feel:** invoices as *paper tickets* — this is the only place the student UI gets a playful physical metaphor.

**Student `/student/fees`:**
- Top summary strip (3 stats): *Total due*, *Paid this year*, *Next due date*. Compute from the returned page only if the list is complete; if paginated, label "On this page" or omit — **never present partial sums as totals**.
- List of **invoice tickets** (cards, radius 16, student card shadow). Anatomy:

```
┌──────────────────────────────┬──────────┐
│ Tuition · Fall 2026          │  ৳45,000 │
│ Due 15 Oct 2026   [Unpaid]   │ [Pay with bKash] │
└───────────────┬──────────────┴──────────┘
   perforation (dashed 1.5px --line, 12px notches cut with radial-gradient mask)
```

  Left = title (h3), semester, due date, `StatusBadge`; right = amount (`stat` size 28, Literata, tabular) and the action. Paid tickets: action becomes "View receipt" (link to `/student/payments/[id]` if a payment id is present, else omit) and a small success "Paid on 10 Oct" line. Overdue: left edge 4px `--danger-solid` spine + danger badge.
- **Pay with bKash** = `bkash` button → `POST /payments/initiate` → show loading ("Redirecting to bKash…") → `window.location.assign(checkoutUrl)`. Never open in a popup. Disable all other pay buttons during the call. On failure: toast + keep on page. **429:** countdown (7.3). Show a 13px note under the button: "You'll be redirected to bKash to finish payment."
- Filters: `sortOrder` toggle (Newest/Oldest) + `page/limit` in URL.
- Empty: "No fees yet".
- **Admin `/admin/fees` (create invoice):** single-column form (max 560) inside a card: Student (Combobox from `GET /admin/users?role=STUDENT&searchTerm=` — async, debounced, shows name + email), Semester (Combobox from `GET /semesters`), Fee type/title if API has it, Amount (BDT, prefix "৳", `inputmode=decimal`, > 0, max 2 decimals), Due date (date picker, not in the past unless API allows). Live "Invoice preview" card beside it on ≥ lg (same ticket design, read-only). Success → replace the form with a summary ticket + "Create another invoice" button. Duplicate invoice error → inline Alert with API message.

### 9.5 Enrollments — `POST /enrollments`, `GET /enrollments/my`

**Feel:** course cards like a "course shelf"; the enroll step is gated by payment.

- `/student/courses`: top card **"Enroll in a semester"**: Semester select (from `GET /semesters`, current first). Below the select, a **gate panel** that changes by state:
  - Fee **paid** → success `Alert` "Your fee is paid. You can enroll." + primary "Enroll in semester".
  - Fee **unpaid/missing** → warning `Alert` with lock icon "Pay your semester fee to enroll." + secondary button "Go to fees". The enroll button is **disabled** and its tooltip explains why. (The API also enforces this — if it returns an error anyway, show the API message inline in the same panel.)
  - Already enrolled → info `Alert` "You're already enrolled in this semester." and hide the button.
  Derive the fee state from `GET /fees/my` for the chosen semester; if it can't be derived, let the user click and surface the API error inline.
- **Enrolled courses grid:** `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`, gap 16/24. Card: 4px left spine in the department color (1.4), course code (13px `--ink-muted`), course title (h3, 2-line clamp), credit chip, semester, instructor if present. No fake progress bars.
- Empty: "No enrollments yet — Pay your semester fee, then enroll." with action "Go to fees".
- After enroll success: toast "You're enrolled.", invalidate enrollments, scroll the grid into view.

### 9.6 Exams — `POST /exams`, `GET /exams/{id}`, `PATCH`, `DELETE` (soft)

**Feel:** scheduled events — date blocks and type colors.

- **Create = 3-step wizard** (`/faculty/exams/new`): (1) *Basics*: title, type (segmented control with icons: Midterm / Final / Quiz / + any other values the API lists — Step 0), course/semester; (2) *Schedule & marks*: date, start time, duration (minutes), room/venue, total marks, pass marks (pass ≤ total); (3) *Review*: read-only summary card with "Edit" links per group → "Create exam". Stepper shows 3 labeled steps with done/current/upcoming states. Success → redirect to `/faculty/exams/[id]` + toast.
- **Detail page (all roles, read-only for students):** left date block (48×56 block: month abbreviated 12px, day Literata 28, weekday 12px, role-tint bg, radius 10), title h1, type `StatusBadge`, facts grid (venue, duration, total/pass marks, course/semester), status line "In 3 days" / "Today" / "Finished". Faculty/admin see action buttons: **Edit exam** (Sheet, PATCH partial) and **Delete exam** (danger, top-right overflow menu).
- **Delete (soft):** `ConfirmDialog` — "Delete this exam?" — "Students will no longer see it. Results already saved stay in the audit log." Button "Delete exam". After success navigate to `/faculty/exams`, toast "Exam deleted." If the user reloads the old URL, the API may return 404 → show the 404 `ErrorState`.
- Edge: date in the past on create → warning text (allowed but flagged) ; pass marks > total → inline error; very long titles clamp; student opening another faculty's exam id → show the API's 403/404 states.
- `/faculty/exams` index: "Create exam" primary, "Open an exam by ID" input, "Recently opened on this device" list (see 8.1).

### 9.7 Attendance — `POST /attendance` (faculty, upsert per day), `GET /attendance/my` (student), `GET /attendance/{id}` (faculty/admin)

**Faculty = roll-call workbench.**

```
Attendance                         [Save attendance]
Course [▾]   Date [14 Oct 2026]    Mark all present
──────────────────────────────────────────────────
 Student              [ Present | Absent | Late ]
 A. Rahman            [  ●     |        |      ]
 ...
Sticky bar:  12 present · 2 absent · 1 late       [Save attendance]
```

- Controls row: Course/class select, Date picker (default today in `Asia/Dhaka`, **future dates blocked**), "Mark all present" ghost button.
- Each student row: avatar (arch) + name + ID (13px) + **3-option segmented control** (Present=success, Absent=danger, Late=warning; selected = solid tone with white text + icon; unselected = `--surface-sunken`). Hit areas ≥ 44px. Keyboard: arrow keys move inside a row; `P`/`A`/`L` set the focused row.
- **Sticky bottom action bar** (64px, upward shadow): live counts + "Save attendance". Save disabled only while submitting. Unsaved-changes guard on leave.
- **Upsert semantics:** saving twice for the same day *updates*. If a record already exists for that course+date (from a prior response/GET), show an info banner "Attendance for 14 Oct was already saved. Saving will update it." Toast always says "Attendance saved for 14 Oct." — never "created".
- Because of API gaps (8.1), if no roster can be fetched, use the ID-entry variant: repeatable rows (Student profile ID + status), "Add another student" button, max 50 rows, duplicates blocked inline.
- **Attendance detail (`GET /attendance/{id}`)** opens in a Sheet: student, course, date, status badge, marked by, last updated.

**Student `/student/attendance` = "how am I doing":**
- Top: **overall attendance ring** (120px, stroke 10, track `--surface-sunken`, arc `--role`; turns `--warning-solid` below 75% and `--danger-solid` below 60% — make `ATTENDANCE_WARN=75`, `ATTENDANCE_DANGER=60` constants and label them "Minimum required 75%" only if the owner confirms the policy; otherwise omit the threshold text) with the percent in Literata 32 at center and counts (Present / Late / Absent) as three small stats beside it.
- Month calendar (Mon–Sun, ≥ 40×40 cells, 1px `--line`): each attended day has a 10px tone dot **plus** a letter (P/A/L) inside at 11px for color-blind users; today ringed with `--role`; days without class are muted; legend below. Mobile: switch to a **grouped list by date** (date header + rows).
- Per-course breakdown: rows with course name, `ProgressBar`, "18 of 20 classes", percent. Sort by lowest percent first.
- Empty: "No attendance recorded yet".

### 9.8 Notifications — `GET /notifications/my`, `PATCH /notifications/{id}/read`

- **Bell in topbar:** 20px icon button (44px target). Unread count badge: 16px min-width pill, bg `--danger-solid`, white 11px/700, "9+" cap, positioned top-right of the icon; hidden when 0. The API has no unread-count endpoint → derive from page 1, and poll page 1 every 60s (`refetchInterval`, `refetchOnWindowFocus`). Clicking opens a popover (width 380, max-height 440, scroll) with the 5 latest + "View all".
- **Full page:** inbox list inside one card. Row = 40px icon tile (tone by type if available, else `Bell` on `--role-tint`), title (15/600 if unread else 500), body (14px `--ink-muted`, 2-line clamp), relative time (13px, absolute in tooltip), unread = 8px `--role` dot at the left + bg `--role-soft` at 50%.
- Interaction: clicking a row → `PATCH …/read` with **optimistic update** (dot disappears immediately, rolls back with a toast on failure) and navigates to a related route if the notification carries a link/type you can map (fees → `/student/fees`, results → `/student/results`); otherwise just expands the row. No "mark all read" button unless an endpoint exists.
- Pagination + `sortOrder` in URL. Empty: "No notifications — You're all caught up."
- Edge: marking an already-read row must not error visibly; a notification the user doesn't own → API error toast, list refetch.

### 9.9 Results — `POST /results` (faculty upsert), `PATCH /results/{id}`, `GET /results/my`

**Faculty `/faculty/results` = marks entry.** Card form: Exam (Combobox by ID/recent), Student (ID or combobox per 8.1), Marks obtained (right-aligned number; shows "out of {total}" suffix once the exam loads via `GET /exams/{id}`; must be 0 ≤ marks ≤ total), Remarks (optional textarea, 300 char counter). Button "Save result". After success show a **result summary card** with the values returned by the API (marks, grade, GPA points if present) and an inline note "Transcript recalculated." Re-saving the same exam+student updates it (copy "Save result", toast "Result saved. Transcript updated.").
- **Edit (PATCH) flow:** for an existing result show "Edit result" → Sheet → before saving, a `ConfirmDialog`: "This change is recorded in the audit log and recalculates the student's transcript." Button "Save changes". Send only changed fields.
- Do **not** compute the grade in the browser unless the API omits it; if you show a preview, label it "Preview" and never save it.

**Student `/student/results` = "my grades":**
- Group by semester (accordion, first expanded, semester header shows semester GPA if provided). Each result row: exam title + type badge, marks bar (`ProgressBar`, value = marks/total), "78 / 100", `GradeBadge` (arch, 4.6/1.6), pass/fail text with icon. Row links to the exam detail page.
- Top card: CGPA **only** if returned by the transcript endpoint (use `GET /transcripts/my` data), shown Literata 40 with a saffron arc ring (the allowed saffron element on this page).
- Empty: "No results published yet".
- Edge: exams soft-deleted after results exist → row shows "Exam unavailable" instead of a broken link. Missing grade → "—" neutral badge.

### 9.10 Transcripts — `GET /transcripts/my`, `GET /transcripts/{studentProfileId}`

**This is the only true "paper document" view.** Everything here is formal: serif, sharp corners, no shadows on inner content.

```
        ┌───────── paper (max 820, bg #FFF, radius 4, 1px --line, shadow-card) ─────────┐
        │ [ArchMark] Bangladesh University          Academic transcript     │
        │ ─────────────────────────────────────────────────────────────── │
        │ Name  …     Student ID …     Department …     Issued 14 Oct 2026│
        │                                                                 │
        │ Fall 2025                                          Semester GPA 3.50
        │  Course / Exam       Marks   Grade   Points                      │
        │  ……                                                              │
        │ Spring 2026  …                                                   │
        │ ─────────────────────────────────────────────────────────────── │
        │ Cumulative GPA (CGPA)                                   3.67     │
        │ Footer: Generated on … by {BRAND.name}. Not valid without registrar stamp. │
        └──────────────────────────────────────────────────────────────────┘
```

- Typography inside the paper: Literata 15/24 body, semester headings Literata 18/600, table numerals tabular, CGPA Literata 40. Table: header underlined with 1.5px `--ink`, rows hairline `--line`, no fills.
- Toolbar above paper (sticky, not printed): Back, "Print / Save as PDF" (`window.print()`).
- **Print stylesheet (required):** `@media print { header, nav, aside, .no-print { display:none } body { background:#fff } .paper { box-shadow:none; border:0; max-width:none; } @page { size: A4; margin: 18mm } tr, .semester-block { break-inside: avoid } }`. Colors degrade to black/grey; grade badges print as bordered text.
- Faculty/admin view (`/faculty/transcripts/[studentProfileId]`): same component plus a top `Alert` (info) "Viewing {student}'s transcript (read-only)". Index page = ID lookup form; invalid/unknown ID → `ErrorState`.
- Live-update: after results change, the transcript query is invalidated (`["transcript", ...]`), so a student who stays on the page sees it refresh on refocus.
- Empty (no results yet): paper with the header and a centered line "No results have been published yet." — never an empty table.
- Edge: a semester with missing GPA shows "—"; very long course titles wrap inside the cell (transcripts may wrap; tables elsewhere may not).

### 9.11 Payments — `POST /payments/initiate`, `GET /payments/callback` (back-end), `GET /payments/{id}`

**Feel:** reassurance and clarity at a stressful moment. Minimal centered layout (no sidebar), 480px card, lots of white space.

- **Initiate:** see 9.4. Pre-redirect confirmation **dialog is optional**; if used it shows amount, fee title, and "Continue to bKash".
- **bKash identity:** only here you may use `--bkash` (pink) — the button, a small "bKash" chip on receipts, and the `--bkash-soft` panel behind the payment summary. Do not recolor anything else pink.
- **Landing pages (`/payment/success`, `/payment/cancel`, `/payment/failed`)**: read `paymentID` and `status` from the query string. **Never trust the URL alone**: call `GET /payments/{paymentID}` and render from the API's real status. States:
  1. **Verifying** — arch outline animating softly + "Confirming your payment…" (skeleton lines). Timeout after 15s → "Still confirming. Check your fees in a minute." + link.
  2. **Success** (API says paid) — the arch-draw animation (4.4), h1 "Payment received", summary list (Fee, Amount, Paid on, bKash transaction ID with `CopyButton`, Payment ID), buttons "View receipt" (primary) and "Back to fees".
  3. **Cancelled** — neutral `Ban` icon, h1 "Payment cancelled", "You weren't charged. Your fee is still unpaid.", buttons "Try again" (primary → fees) and "Back to dashboard".
  4. **Failed** — danger icon, h1 "Payment didn't go through", show API reason if present, "Try again", contact email `BRAND.supportEmail`.
  5. **Mismatch** (URL says success but API says pending/failed) → render the API truth, add info `Alert` "We're still waiting for bKash to confirm." with a "Refresh status" button (manual refetch; also auto-poll every 4s up to 5 times).
  6. **Missing/invalid `paymentID`** → `ErrorState` "We couldn't find that payment" + link to fees.
- **Receipt** (`/student/payments/[paymentId]`, admin lookup `/admin/payments`): paper style (`--radius-paper`), brand crest, "Payment receipt", rows (Receipt for, Fee, Semester, Amount, Method "bKash", Transaction ID, Paid on, Status badge), Print button with the same print rules as 9.10. Admin lookup = simple ID input → same receipt inside the admin shell.
- Edge: double-click on Pay (guard), user presses browser Back from bKash (landing on fees page must refetch fees — set `staleTime: 0` for fees), refreshing the success page (idempotent because it only reads), opening the success page while logged out (the page is reachable without auth per the callback, but `GET /payments/{id}` requires auth → show "Sign in to view your receipt" with `?next=` back to the same URL).

### 9.12 Admin — users & accounts — `GET /admin/users`, `PATCH …/status`, `POST /admin/faculty`, `POST /admin/admins`, `PATCH …/department-head`

**Feel:** a registry — dense, scannable, safe.

- **Users table (`/admin/users`)**: toolbar = search (`searchTerm`), segmented role filter (All · Students · Faculty · Admins → `role`), sort menu (`sortBy`, `sortOrder`). Columns: User (arch avatar 32 + name 14/600 + email 13 muted, truncate) · Role badge · Status badge · Joined · Actions. Mobile: stacked cards.
- **Status toggle:** shadcn `Switch` in the Status column **or** row action "Deactivate user/Activate user" → `ConfirmDialog` for deactivation ("{Name} won't be able to sign in. You can reactivate them later.") — activation needs no confirm. After the call: optimistic switch, rollback + toast on error. **Disable the control for the signed-in admin's own row** with tooltip "You can't change your own status."
- **Promote to department head:** row action visible only for FACULTY rows → `ConfirmDialog` "Make {Name} a department head?" → `PATCH` with the faculty profile id (from the user's faculty profile field — verify in Step 0). If already head → item disabled with "Already a department head".
- **Create faculty** (`/admin/users/new-faculty`) and **Create admin** (`/admin/users/new-admin`): single-column forms in a card (max 560). Faculty: name, email, temporary password (with "Generate" button + show/hide + copy), department, designation if API needs. Admin: same + `adminType` **radio cards** (VC, REGISTRAR, FINANCE, SUPER) each with a one-line description; selecting SUPER shows a warning `Alert` "Super admins have full access." Success → summary card with "Copy email" / "Copy temporary password" (shown **once**), then "Create another".
- Edge: 409 duplicate email → inline error on the email field; search with no results → empty state with "Clear search"; deactivated users rendered with 60% opacity text + badge (still readable); role filter combined with search keeps `page=1`.

### 9.13 Admin — dashboard — `GET /admin/dashboard-stats`

Compact, information-first.

```
Overview                                          [date label]
┌StatCard┐┌StatCard┐┌StatCard┐┌StatCard┐   4 cols ≥ lg, 2 cols mobile
┌────────── Revenue (hero card, 2 cols) ──────┐┌ Users by role (donut) ┐
│ ৳ 12,45,000   Total collected               ││                        │
└─────────────────────────────────────────────┘└────────────────────────┘
┌ Records overview (horizontal bar chart of counts) ─────────────────────┐
```

- Stat cards for each count the API returns (students, faculty, admins, semesters, enrollments, pending fees, etc. — **only real fields**), icon per 4.1, 2-column mobile.
- Revenue = hero `stat` number with BDT formatting; no sparkline unless data exists.
- Charts: donut for the role split (use 3 role accent colors — lapis/verdigris/aubergine — consistent with role theming), horizontal bar for other counts with direct value labels. Chart card title + one-line caption describing what it shows. Fixed height 280; `ResponsiveContainer`.
- Loading: skeleton of the same grid. Error: `ErrorState` for the whole page with retry. Zero values render "0", not "—".
- Large numbers: `Intl.NumberFormat("en-BD")` (lakh grouping is expected in Bangladesh: 12,45,000).

### 9.14 Admin — audit logs — `GET /admin/audit-logs`

**Feel:** forensic and quiet. Densest table in the product.

- Toolbar: entity filter (Select of real entity names + "All entities"; writes `entity`), sort order, page size. URL-synced.
- Columns: When (relative + absolute tooltip) · Actor (name/email) · Action (badge: create=success, update=info, delete=danger, other=neutral) · Entity (chip) · Entity ID (truncate middle, `CopyButton`) · Details (chevron).
- **Expandable row** (or Sheet on mobile): shows `before` / `after` (or whatever the API has) as two side-by-side code blocks (system mono 12px, `--surface-sunken`, radius 10, changed lines highlighted with `--warning-soft`) — this is the only place monospace is used. If there is no diff data, show key/value pairs.
- Read-only: no edit/delete controls. Table container allows horizontal scroll on mobile (exception to 5.5) with a right-edge fade.
- Empty: "No audit entries match these filters" + "Clear filters".
- Edge: huge JSON → max-height 240 with internal scroll; null actor (system action) → "System".

---

## 10. Mistake catalogue — things a weaker model will get wrong (check each)

**Design-system mistakes**
1. Using raw hex / Tailwind default palette (`blue-500`, `gray-200`) instead of tokens. → Use only tokens from Section 1.
2. Making every card `rounded-xl shadow-md` identical. → Follow 3.3: radius and elevation change by element and by role.
3. Using ALL-CAPS for table headers/labels/badges. → Sentence case only.
4. Adding gradients, blurred blobs, glass cards, or emoji as icons. → Not in this system.
5. Using saffron as text or more than once per viewport.
6. Using the bKash pink anywhere outside payment surfaces.
7. Mixing more than two font families; using mono for IDs/dates/labels.
8. Text under 12px, or placeholder/helper text lighter than `--ink-subtle`.
9. Making the admin UI spacious or the student UI cramped — respect density (3.4).
10. Forgetting the role accent: the sidebar active state, focus ring and primary buttons **must** change with `data-role`.
11. Status shown by color alone; badges without icons; unknown statuses crashing the badge.
12. Using a spinner page instead of a matching skeleton; skeleton that doesn't match the final layout (layout shift).

**Behavior mistakes**
13. Filters/search/sort/page held in `useState` instead of the URL; forgetting to reset `page` to 1 on filter change; forgetting `Suspense` around `useSearchParams` (build breaks).
14. Search firing an API call on every keystroke (debounce 400ms) or debounce + URL push causing input cursor jumps (keep a local input state for typing, sync to URL on debounce).
15. Table flashing empty between pages (use `keepPreviousData`).
16. Double-submitting buttons (no loading/disabled). Especially Pay, Save attendance, Save result, Create invoice.
17. Disabling the submit button when the form is invalid (users can't see why).
18. Sending unchanged fields in PATCH forms; not invalidating both list and detail queries after mutation.
19. Saying "created" when the API upserts (attendance, results). Use "saved".
20. Showing the enroll button as usable when the semester fee is unpaid; relying only on a toast for this (needs persistent inline Alert).
21. Trusting `?status=success` on the payment landing page without calling `GET /payments/{id}`.
22. Computing grades, CGPA or attendance % in the UI without being asked, presenting partial-page sums as totals, or inventing trend percentages.
23. Building pages for endpoints that don't exist (profile edit, change password, exam list, student roster, "mark all read"). See 8.1.
24. Not handling 401 → refresh → retry exactly once (infinite loops) or several parallel refreshes racing.
25. Showing admin-only buttons to faculty/students (or vice-versa), or relying on UI hiding without middleware.
26. Letting an admin deactivate themselves.
27. Rendering dates in the viewer's timezone instead of `Asia/Dhaka`, or sending non-ISO dates.
28. Showing `undefined`, `null`, `NaN`, raw ISO timestamps, or raw enums (`PRESENT`) to users. Format everything.
29. Horizontal page scroll on mobile; tables that overflow instead of stacking; touch targets under 44px.
30. Missing `alt`, missing labels, `outline:none`, unreachable custom controls by keyboard, dialogs without focus trap.
31. Forgetting `loading.tsx`, `error.tsx`, `not-found.tsx` for any segment; leaving a blank screen on failure.
32. Turning everything into a client component; fetching on the client when a Server Component can do it (keep interactive islands small;).
33. Persisting JWTs in `localStorage`; logging tokens; leaving demo credentials hard-coded in JSX (use env vars).
34. Placeholder copy ("Lorem ipsum", "Coming soon", "Feature title"), gray placeholder image boxes, or fake success on the contact form.
35. Using `any`. Every API response and form value has a named type from Step 0 real responses.
36. Animating everything (fade-up on all sections, hover-lift on all cards, bounce). See 4.5.
37. Making a wizard that loses data on Back, or validates only on the last step.
38. Printing the transcript with nav/sidebar visible or with colored backgrounds (implement the print stylesheet).
39. Numbers misaligned in tables (forgot `tabular-nums` and right-align), money without ৳, GPA not at two decimals.
40. Long names/emails breaking layouts (no truncate, no tooltip), or a single-item list looking broken (test with 1, 0, 100+ items).

---

## 11. Definition of done (per page — run this checklist before moving on)

- [ ] Uses only tokens; correct `data-role` and `data-density`.
- [ ] Skeleton (`loading.tsx`), empty, error, populated, and edge states implemented and visually checked.
- [ ] All controls keyboard-operable with visible focus; labels, aria attributes, headings in order; one h1.
- [ ] Works at 360 / 768 / 1024 / 1440 widths; no horizontal page scroll; targets ≥ 44px on mobile.
- [ ] Filters/search/sort/pagination in URL; `Suspense` present; page resets to 1 on filter change.
- [ ] Every mutation: loading state, double-submit guard, success toast (per 4.6 verbs), error toast + inline errors, query invalidation.
- [ ] Copy matches the vocabulary table; sentence case; no placeholder text.
- [ ] Money/date/percent/GPA formatting via helpers; `Asia/Dhaka`; `—` for missing values.
- [ ] Role guard works in middleware **and** UI; wrong role redirected with toast.
- [ ] No `any`; types come from real API responses; no console errors; Lighthouse accessibility ≥ 95 on the page.
- [ ] `metadata` exported for public pages; `next/image` for all images; Server Component by default.

## 12. Suggested folder structure

```
app/
  (public)/ page.tsx about/ academics/ contact/ faq/
  (auth)/ login/ register/ verify-email/
  (student)/student/ …     (faculty)/faculty/ …     (admin)/admin/ …
  payment/success|cancel|failed/
  error.tsx  not-found.tsx  loading.tsx  globals.css  fonts.ts
components/
  ui/ (shadcn)   shared/ (DataTable, Pagination, StatusBadge, StatCard, EmptyState, ErrorState,
                  ConfirmDialog, PageHeader, SearchInput, FilterBar, Money, DateText, OtpInput, CopyButton)
  brand/ (ArchMark, ArchFrame, ArchPattern, GradeBadge)
  shells/ (PublicShell, AuthLayout, DashboardShell, Sidebar, Topbar, BottomTabs)
features/ fees/ enrollments/ attendance/ exams/ results/ transcripts/ payments/ notifications/ admin/ auth/
  (each: api.ts, types.ts, schemas.ts (Zod), hooks.ts , components/)
hooks/ useQueryParams.ts useDebounce.ts useAuth.ts usePagination.ts useCountdown.ts
lib/ brand.ts format.ts api-client.ts (401 refresh, single-flight) constants.ts
types/ (from real API responses)
middleware.ts
```