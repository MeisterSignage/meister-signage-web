export const colors = {
  navy: {
    50:  "#eef2f8",
    100: "#d5dff0",
    200: "#abbfe1",
    300: "#7d9dd0",
    400: "#4f7bbf",
    500: "#2a5ba8",
    600: "#1e4687",
    700: "#163468",
    800: "#0e2248",
    900: "#07112a",
  },
  magenta: {
    50:  "#fce8f3",
    100: "#f9c8e4",
    200: "#f390ca",
    300: "#ec55ac",
    400: "#e31d8e",
    500: "#c4007a",
    600: "#9c0062",
    700: "#74004a",
    800: "#4d0031",
    900: "#260018",
  },
  gold: {
    50:  "#fdf8ec",
    100: "#faefd0",
    200: "#f5dfa1",
    300: "#efcb6a",
    400: "#e8b535",
    500: "#d49d10",
    600: "#aa7d0c",
    700: "#7f5e09",
    800: "#553e06",
    900: "#2a1f03",
  },
  white: "#ffffff",
  gray: {
    50:  "#f8f9fa",
    100: "#f1f3f5",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#868e96",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
} as const;

export const maxWidths = {
  sm:   "640px",
  md:   "768px",
  lg:   "1024px",
  xl:   "1280px",
  "2xl": "1440px",
  content: "1152px",
  prose:   "720px",
} as const;

export const spacing = {
  sectionY: {
    sm:  "py-12",
    md:  "py-20",
    lg:  "py-28",
    xl:  "py-36",
  },
  containerX: {
    sm:  "px-4",
    md:  "px-6",
    lg:  "px-12",
  },
} as const;

export const borderRadius = {
  none:  "0px",
  sm:    "4px",
  md:    "8px",
  lg:    "12px",
  xl:    "16px",
  "2xl": "24px",
  full:  "9999px",
} as const;

export const shadows = {
  none: "none",
  sm:   "0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.05)",
  md:   "0 4px 12px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.05)",
  lg:   "0 10px 32px rgba(0,0,0,.10), 0 4px 12px rgba(0,0,0,.06)",
  xl:   "0 20px 48px rgba(0,0,0,.12), 0 8px 20px rgba(0,0,0,.08)",
  card: "0 2px 8px rgba(7,17,42,.06), 0 1px 3px rgba(7,17,42,.04)",
} as const;

export const transitions = {
  fast:    "150ms ease",
  default: "250ms ease",
  slow:    "400ms ease",
  smooth:  "300ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const containerWidths = {
  narrow:  "max-w-2xl",
  text:    "max-w-3xl",
  default: "max-w-5xl",
  wide:    "max-w-6xl",
  full:    "max-w-7xl",
} as const;
