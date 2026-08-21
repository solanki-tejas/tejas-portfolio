# Portfolio — Design System (Notebook Theme)

A light-only, paper-and-ink aesthetic. The screen should feel like an actual
open notebook — ruled lines, slight paper texture, handwritten accents mixed
with a clean modern grotesk for readability.

---

## 1. Concept

- Theme: physical notebook / journal, viewed in daylight.
- No dark mode. Ever. Light theme is the identity, not a default.
- Every section reads like a "page" — subtle margins, a binding edge, faint
  horizontal rule lines behind text blocks (like notebook paper).
- Personality: warm, tactile, slightly imperfect (small rotations, sticky-note
  elements, torn-paper edges) — not a sterile SaaS dashboard.

---

## 2. Typography

- Primary typeface: **Geist Sans** — used for all UI text, nav, body copy,
  buttons.
- Secondary typeface: **Geist Mono** — used for meta info (dates, tags,
  labels, code-like project stats, timestamps) to mimic typewriter/annotation
  text on a notebook page.
- Accent typeface (optional, sparing use): a handwriting-style font (e.g.
  "Caveat" or "Kalam") ONLY for small doodle-like annotations, underlines-as-
  text, or margin notes — never for primary content. Max one or two words at
  a time.
- Do not use system default fonts (Arial, Times, generic sans) anywhere.
- Type scale should feel editorial: large confident headings, generous line
  height on body text (like reading lined paper), and a clear hierarchy of
  4–5 sizes total (display, heading, subheading, body, caption).
- Body copy stays left-aligned, never justified — keeps it feeling like
  natural handwriting/typing flow rather than a printed brochure.

---

## 3. Color Palette (Light Only)

- Base/background: warm off-white / cream paper tone — not pure white,
  should feel like real paper (slightly warm, slightly textured).
- Primary ink: near-black warm charcoal for text — not pure #000, mimics
  actual pen/ink on paper.
- Rule lines: soft muted blue-grey, low opacity — classic "notebook line"
  color, always subtle, never competing with content.
- Margin line: a thin red/coral vertical line echoing a classic ruled
  notebook margin — used sparingly as a structural accent, not decoration.
- Accent color (1 only): a single highlighter-style color (amber/yellow or
  soft coral) used for links, active states, and small highlight marks —
  like a highlighter pen used deliberately.
- Secondary accent: muted sage or dusty blue for tags/pills — feels like
  different pen colors, not neon.
- Avoid gradients, glassmorphism, neon, or heavy shadows — everything should
  look like it could exist on physical paper.

---

## 4. Texture & Surface

- Background: faint paper grain/noise texture, barely visible, adds
  tactility without looking dirty.
- Cards/sections: look like separate "pages" or "sticky notes" — slight
  rotation (1–2°) on a few elements for handcrafted feel, subtle drop shadow
  like a piece of paper resting on a desk (short, soft, warm-toned shadow,
  never harsh black).
- Occasional torn-edge or folded-corner detail on featured cards (project
  highlights, resume download) — used sparingly, not on every element.
- Dividers between sections: hand-drawn-style horizontal rule (slightly
  wavy/imperfect line) instead of a straight CSS border.

---

## 5. Layout & Spacing

- Single-column reading flow, generous vertical rhythm — like turning pages
  in a notebook, not a dense dashboard grid.
- Consistent page margin on all sides, with the red margin-line accent
  running down the left edge of main content on wider screens.
- Section spacing should be noticeably generous — whitespace is part of the
  "page" feeling, avoid cramming.
- Project/work items presented as index-card or sticky-note style blocks in
  a loose grid, each with a slight independent rotation for a handcrafted,
  non-uniform layout — but keep alignment on a base grid so it doesn't feel
  sloppy.
- Navigation: minimal, tab-like or "bookmark tab" styling on the side or top,
  mimicking notebook tab dividers.

---

## 6. Iconography & Imagery

- Icons: thin-line, hand-drawn-feeling icon set (not filled, not glossy).
- Avoid stock 3D icons or heavy gradients.
- Photos/screenshots shown as "taped" or "pinned" polaroid-style elements
  (small rotation, thin white border) when used, rather than full-bleed
  images.
- Small doodle accents (arrows, underlines, stars) in the handwriting font
  can point to key CTAs (e.g. "download resume →") — used very sparingly.

---

## 7. Interaction & Motion

- Motion should feel like flipping a page or pen strokes — soft ease
  curves, no bouncy/playful spring animations.
- Hover states: subtle highlight-marker underline sweep, or slight
  rotation-to-flat straightening (as if picking up a tilted card).
- Page/section transitions: gentle fade + slight vertical shift, like
  turning a notebook page — avoid slide-in-from-side app-style transitions.
- Buttons: styled like a stamped/underlined label rather than a rounded
  SaaS pill — favor understated hover feedback (ink underline, highlight
  sweep) over color-flip states.

---

## 8. Voice & Content Tone

- Section labels can read like journal entries or margin notes ("Things
  I've built", "Currently exploring", "Say hello") rather than generic
  portfolio headers ("Projects", "About", "Contact").
- Dates/timestamps styled in Geist Mono to look like a logbook entry.
- Keep copy warm, first-person, and conversational — matches the personal,
  handwritten feel of the visual design.

---

## 9. What to Avoid

- No dark mode / no theme toggle.
- No default system fonts.
- No glossy gradients, neumorphism, or glassmorphism.
- No sharp, high-contrast black shadows.
- No dense dashboard-style grids — this is a personal notebook, not an
  admin panel.
- No more than one bold accent color — restraint keeps the "real notebook"
  illusion believable.
