/**
 * Design tokens: Spacing, Border Radius & Elevation
 * Inferred from Figma layout (node positions / sizes) + M3 guidelines
 */

import { ViewStyle } from 'react-native';

// ── Spacing scale (4-pt grid) ──────────────────────────────
export const spacing = {
  /** 0 */
  none: 0,
  /** 4 */
  xxs: 4,
  /** 8 */
  xs: 8,
  /** 12 */
  sm: 12,
  /** 16 — default screen horizontal padding */
  md: 16,
  /** 19 — screen horizontal padding from Figma */
  screenPadding: 19,
  /** 20 */
  lg: 20,
  /** 24 */
  xl: 24,
  /** 30 — gap between section header and content (Figma) */
  sectionGap: 30,
  /** 32 */
  xxl: 32,
  /** 14 — gap between cards (Figma) */
  cardGap: 14,
  /** 48 */
  xxxl: 48,
} as const;

// ── Border radius (M3 shape scale) ────────────────────────
export const borderRadius = {
  /** 0 — sharp corners */
  none: 0,
  /** 4 — extra small (badges) */
  xs: 4,
  /** 8 — small (chips, small cards) */
  sm: 8,
  /** 12 — medium (cards, dialogs) */
  md: 12,
  /** 16 — large (FABs, nav bar indicator) */
  lg: 16,
  /** 28 — extra large (search bar, bottom sheets) */
  xl: 28,
  /** 9999 — full / pill shape */
  full: 9999,
} as const;

// ── Elevation / shadows (M3 levels for Android) ───────────
export const elevation: Record<string, ViewStyle> = {
  /** Level 0 — flat, no shadow */
  level0: {
    elevation: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  /** Level 1 — cards, navigation bar */
  level1: {
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  /** Level 2 — raised cards, FABs */
  level2: {
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  /** Level 3 — navigation drawers, modals */
  level3: {
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  /** Level 4 — dialogs */
  level4: {
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  /** Level 5 — top app bar scroll */
  level5: {
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
  },
} as const;

// ── Common layout values from Figma ───────────────────────
export const layout = {
  /** Screen width used in design */
  screenWidth: 412,
  /** Content area width */
  contentWidth: 375,
  /** Card height for class/deadline cards */
  cardHeight: 98,
  /** Section header height */
  sectionHeaderHeight: 42,
  /** Bottom navigation bar height */
  bottomNavHeight: 69,
  /** Status bar height */
  statusBarHeight: 52,
  /** Top app bar height (including welcome area) */
  topAppBarHeight: 275,
} as const;

export type SpacingToken = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ElevationToken = keyof typeof elevation;
