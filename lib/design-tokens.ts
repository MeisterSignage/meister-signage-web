/* Single source of truth for design values.
 * globals.css uses these via CSS custom properties.
 * Import here when you need values in TypeScript (e.g. for dynamic styles). */

export const colors = {
  navy:     "#1a2744",
  magenta:  "#fe019a",
  magentaHover: "#d60080",
  gold:     "#C9A84C",
  offwhite: "#f5f5f7",
  cgray:    "#6B7280",
  white:    "#ffffff",
} as const;

export const borders = {
  subtle: "rgba(26, 39, 68, 0.10)",
  hover:  "rgba(26, 39, 68, 0.25)",
} as const;

export const transitions = {
  fast: "150ms ease",
  base: "200ms ease",
  slow: "300ms ease",
} as const;

export const shadows = {
  cardHover: "0 4px 16px rgba(26, 39, 68, 0.10)",
} as const;

export const zIndex = {
  dropdown:   10,
  mobileMenu: 40,
  header:     50,
  floating:   50,
  modal:      100,
} as const;

export const radii = {
  btn:   "7px",
  card:  "10px",
  badge: "20px",
} as const;

export const maxWidths = {
  content:       "1200px",
  prose:         "640px",
  sectionHeader: "48rem",
} as const;

export const spacing = {
  sectionY:        { mobile: "3.5rem", desktop: "5rem"  },
  sectionYCompact: { mobile: "2.5rem", desktop: "3.5rem" },
  cardPadding:     { mobile: "1.25rem", desktop: "1.5rem" },
} as const;
