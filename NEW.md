# AI-Friendly Component Library

## The Problem

Current architecture is optimized for human developers (DRY, reusable, flexible) but this makes AI editing fail. AI can't trace through ThemeProvider indirection, 40+ prop interfaces, nested component layers, and custom Tailwind scales. It hallucinates because it can't see the actual output.

## The Solution

Shift from human-optimized to AI-optimized code:
- **Explicit over implicit** - All styles visible in file, no ThemeProvider magic
- **Flat over nested** - Direct components, no wrapper layers to trace through
- **Concrete over abstract** - Actual Tailwind classes, not prop names that map to hidden styles
- **Standard over custom** - Default Tailwind values AI already knows
- **Simple over flexible** - One way to do things, not 11 variants

Components become templates that AI reads, understands, and edits directly.

---

## 1. Backend-Driven Sections

Generated website repository only contains what is used, plus general UI components. Section components are stored on the backend and injected when needed, not bundled in the boilerplate.

**Alternative:** If backend approach takes too long, keep all sections in the boilerplate but with the new simplified structure defined below.

---

## 2. Props & Structure

Remove all styling/className props. AI edits classes directly in the component file.

**Option A - Minimal props:** Keep text, links, assets, arrays, icons as props. Backend passes content, AI edits props in page file.

**Option B - No props:** All content hardcoded in section file. Backend injects entire file with content baked in. AI edits section file directly. Maximum explicitness.

**Flat structure:** Sections use direct components (TextAnimation, Button, MediaContent) not wrapper components like TextBox that nest other components inside.

---

## 3. Framer Motion for Element Animations

Replace GSAP (ScrollTrigger, `gsap.context()`, `ctx.revert()`) with Framer Motion `motion` divs for cards, buttons, tags, and other elements. Use `whileInView` for scroll-triggered animations.

---

## 4. Simplified Tailwind & Single CSS File

Remove all custom Tailwind values (spacing, widths, gaps). Use default Tailwind classes.

**Keep:**
- Content width approach (for page width and carousels)
- Fluid font sizes (AI picks bad font sizes otherwise)

**One globals.css file with:**
- Color variables in `:root`
- `--radius` variable, applied globally via `@layer base`
- Card styles
- Button styles
- Utility classes (masks, animations) - consolidated, fewer variants
- Base styling (body defaults, scrollbar, heading font-family)

AI picks from a reference list of available styles and writes them directly to globals.css.

---

## 5. Remove ThemeProvider

Delete the entire ThemeProvider system. No dynamic style injection.

**Card/button styles:** AI chooses on backend, adds one card style, one primary button style, one secondary button style to globals.css.

**Text animations:** Remove TextBox component. Use simple `TextAnimation` component in section files with `text` and `animationType` props.

**Button:** Single `components/ui/Button.tsx` with `text`, `href`, and `className` (e.g. `primary-button` defined in globals.css).

**Content width:** Fixed value in globals.css.

**Text sizing:** Fixed values in globals.css. Future: AI picks from 3 presets on backend and adds to globals.css.

**Background components:** Remove all (aurora, grid, floatingGradient, etc.).

**Fonts:** Keep current logic.

---

## 6. New Folder Structure

```
src/
├── app/                    # Pages
├── components/
│   ├── ui/                 # Atomic UI components
│   └── [sections]          # Section components flat, not nested (injected from backend)
├── hooks/                  # Common hooks
├── lib/                    # Utilities
└── styles/
    └── globals.css         # Single CSS file
```

Remove: `providers/themeProvider/`, multiple CSS files, `button/` variants folder, `text/` folder, `background/` folder.

---

## 7. Atomic UI Components

Add simple, single-purpose components to `components/ui/`:

Button, TextAnimation, MediaContent, Toggle, Dropdown, Accordion, Avatar, Badge, Breadcrumb, Calendar, Chart, Checkbox, Form, Input, Label, Tooltip

Expand as needed.

---

## 8. Simplify Complex Components

**Navbar:** Separate navbar components instead of one with variants. AI chooses which one. Reduce to 4 navbars for now.

**CardStack → GridLayout:** Replace complex CardStack (mode, gridVariant, carouselThreshold, ~40 props) with simple wrapper. Children as items. Single prop: items per row (3 or 4). Under = grid, over = carousel. Carousel mode keeps controls (prev/next, progress bar). No title/description/animation props - sections handle all that directly. Remove timelines, grid configs, auto-carousel variants for now, refactor later.

**TextBox:** Remove completely. Use TextAnimation and Button directly in sections.

---

## 9. Consistent File Patterns

Every section file follows the EXACT same structure. AI sees one section, knows how all work.

**Template:**
```
1. IMPORTS (same order: react, framer-motion, ui components, icons)
2. CONTENT (variables at top if Option B)
3. COMPONENT (predictable JSX order)
4. EXPORT (always at bottom)
```

**JSX order:** tag → title → description → buttons → media (always same sequence)

---

## 10. Short Files, No Sub-components

**Line limits:**
- Sections: under 100 lines
- UI components: under 50 lines

**Key rule:** Don't split into sub-components to achieve this. Sub-components add nesting/indirection. Instead, simplify the section itself.

If a section is too long, it's too complex. Simplify the design, don't extract parts.

---

## 11. Content at Top

If using Option B (no props), put all editable content as variables at the very top of the file.

AI immediately knows: "edit content? check the top."

---

## 12. Remove Complex Components

Remove overly complex components for now. Add back simplified versions later if needed.

---

## 13. CSS Class Organization

**Consistent class order:** layout → spacing → sizing → typography → colors → effects

**Keep className short.** Too many classes = section too complex. Use global CSS (`.card`, `.btn-primary`) for repeated patterns.

**No dynamic classes in sections.** Avoid `cls(condition && "class")`. Keep it explicit.

**One line if short, split by category if long.**

---

## Implementation Roadmap

### Phase 1: Foundation (Delete)
- Delete `providers/themeProvider/` (13 files)
- Delete `components/background/` (27 files)
- Delete `components/Textbox.tsx`
- Delete `components/text/` (GSAP TextAnimation)
- Consolidate all CSS → single `styles/globals.css`

### Phase 2: Core Simplification
- Button → single `ui/Button.tsx` (50 lines max)
- Navbar → 4 separate components, no animation hooks
- TextAnimation → new Framer Motion version
- CardStack → simple GridLayout wrapper

### Phase 3: Section Refactoring
- Remove all className/containerClassName props
- Remove useTheme() calls
- Each section under 100 lines
- Content variables at top (if Option B)
- Flat structure, no nested wrappers

### Phase 4: Organize
- Create `components/ui/` with atomic components
- Move hooks to `hooks/` folder
- Update all imports

---

## Current → Target

| Metric | Current | Target |
|--------|---------|--------|
| Total files | ~270 | ~100 |
| Lines of code | ~25,000 | ~10,000 |
| Props per section | 20-40 | 5-10 |
| CSS files | 37 | 1 |
| Button variants | 11 | 1 |
| Navbar variants | 5 | 4 |

---
