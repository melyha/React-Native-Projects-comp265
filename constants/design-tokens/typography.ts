/**
 * Design tokens: Typography
 * Extracted from Figma variables (Roboto, M3 type scale)
 */

import { TextStyle } from 'react-native';

const fontFamily = 'Roboto';

export const fontWeights = {
  regular: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
};

/**
 * Material Design 3 type scale — values taken directly from the
 * Figma variable definitions where available; remaining levels
 * follow the canonical M3 spec.
 */
export const typography = {
  // ── Display ────────────────────────────────────────────
  displayLarge: {
    fontFamily,
    fontSize: 57,
    fontWeight: fontWeights.regular,
    lineHeight: 64,
    letterSpacing: -0.25,
  } satisfies TextStyle,

  displayMedium: {
    fontFamily,
    fontSize: 45,
    fontWeight: fontWeights.regular,
    lineHeight: 52,
    letterSpacing: 0,
  } satisfies TextStyle,

  displaySmall: {
    fontFamily,
    fontSize: 36,
    fontWeight: fontWeights.regular,
    lineHeight: 44,
    letterSpacing: 0,
  } satisfies TextStyle,

  // ── Headline ───────────────────────────────────────────
  headlineLarge: {
    fontFamily,
    fontSize: 32,
    fontWeight: fontWeights.regular,
    lineHeight: 40,
    letterSpacing: 0,
  } satisfies TextStyle,

  headlineMedium: {
    fontFamily,
    fontSize: 28,
    fontWeight: fontWeights.regular,
    lineHeight: 36,
    letterSpacing: 0,
  } satisfies TextStyle,

  headlineSmall: {
    fontFamily,
    fontSize: 24,
    fontWeight: fontWeights.regular,
    lineHeight: 32,
    letterSpacing: 0,
  } satisfies TextStyle,

  // ── Title ──────────────────────────────────────────────
  // Figma: Static/Title Large → 22 / Regular / 28 / 0
  titleLarge: {
    fontFamily,
    fontSize: 22,
    fontWeight: fontWeights.regular,
    lineHeight: 28,
    letterSpacing: 0,
  } satisfies TextStyle,

  // Figma: Static/Title Medium → 16 / Medium / 24 / 0.15
  titleMedium: {
    fontFamily,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
    letterSpacing: 0.15,
  } satisfies TextStyle,

  titleSmall: {
    fontFamily,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
    letterSpacing: 0.1,
  } satisfies TextStyle,

  // ── Body ───────────────────────────────────────────────
  // Figma: Static/Body Large → 16 / Regular / 24 / 0.5
  bodyLarge: {
    fontFamily,
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    letterSpacing: 0.5,
  } satisfies TextStyle,

  // Figma: Static/Body Large Emphasized → 16 / Medium / 24 / 0.5
  bodyLargeEmphasized: {
    fontFamily,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
    letterSpacing: 0.5,
  } satisfies TextStyle,

  // Figma: Static/Body Medium → 14 / Regular / 20 / 0.25
  bodyMedium: {
    fontFamily,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
    letterSpacing: 0.25,
  } satisfies TextStyle,

  // Figma: Static/Body Small → 12 / Regular / 16 / 0.4
  bodySmall: {
    fontFamily,
    fontSize: 12,
    fontWeight: fontWeights.regular,
    lineHeight: 16,
    letterSpacing: 0.4,
  } satisfies TextStyle,

  // ── Label ──────────────────────────────────────────────
  // Figma: Static/Label Large → 14 / Medium / 20 / 0.1
  labelLarge: {
    fontFamily,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
    letterSpacing: 0.1,
  } satisfies TextStyle,

  // Figma: Static/Label Medium → 12 / Medium / 16 / 0.5
  labelMedium: {
    fontFamily,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
    letterSpacing: 0.5,
  } satisfies TextStyle,

  labelSmall: {
    fontFamily,
    fontSize: 11,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
    letterSpacing: 0.5,
  } satisfies TextStyle,
} as const;

export type TypographyToken = keyof typeof typography;
