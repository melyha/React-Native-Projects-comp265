/**
 * Design tokens: Colors
 * Extracted from Figma design (dsgn210-a3) + Material Design 3
 */

export const colors = {
  // ── Primary ──────────────────────────────────────────────
  primary: '#6750A4',
  onPrimary: '#FFFFFF',
  primaryContainer: '#EADDFF',
  onPrimaryContainer: '#21005D',

  // ── Secondary ────────────────────────────────────────────
  secondary: '#625B71',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#E8DEF8',
  onSecondaryContainer: '#1D192B',

  // ── Tertiary ─────────────────────────────────────────────
  tertiary: '#7D5260',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFD8E4',
  onTertiaryContainer: '#31111D',

  // ── Error ────────────────────────────────────────────────
  error: '#B3261E',
  onError: '#FFFFFF',
  errorContainer: '#F9DEDC',
  onErrorContainer: '#410E0B',

  // ── Surfaces ─────────────────────────────────────────────
  surface: '#FFFBFE',
  onSurface: '#1D1B20',
  onSurfaceVariant: '#49454F',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F7F2FA',
  surfaceContainer: '#F3EDF7',
  surfaceContainerHigh: '#ECE6F0',
  surfaceContainerHighest: '#E6E0E9',

  // ── Outline ──────────────────────────────────────────────
  outline: '#79747E',
  outlineVariant: '#CAC4D0',

  // ── Background ───────────────────────────────────────────
  background: '#FFFBFE',
  onBackground: '#1D1B20',

  // ── Inverse ──────────────────────────────────────────────
  inverseSurface: '#313033',
  inverseOnSurface: '#F4EFF4',
  inversePrimary: '#D0BCFF',

  // ── Custom: Header gradient (from Figma design) ─────────
  headerGradientStart: '#6750A4',
  headerGradientEnd: '#7E67C1',

  // ── Custom: Card button purple (from Figma) ─────────────
  buttonPrimary: '#6B46C1',

  // ── Custom: Icon / secondary text (from Figma) ──────────
  iconDefault: '#6A7282',
  textSecondary: '#6A7282',

  // ── Custom: Status badge colors (inferred from design) ──
  badgeCourse: '#6750A4',
  badgeUrgent: '#E8590C',
  badgeDefault: '#49454F',

  // ── Misc ─────────────────────────────────────────────────
  white: '#FFFFFF',
  black: '#000000',
  scrim: '#000000',
  shadow: '#000000',
} as const;

export type ColorToken = keyof typeof colors;
