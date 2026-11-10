/**
 * Colores del Design System Sora.
 * Fuente: Figma "Sora Design" → colecciones de variables "Primitives" y "Color".
 */

/** Primitivos (Figma: Primitives/brand, support, status, neutral, derived) */
export const palette = {
  coralSora: '#E4555D',
  ciruelaNoche: '#3B1F4E',
  malvaAbrazo: '#8E5FA8',
  violetaVoz: '#A23FD7',
  duraznoCalma: '#FFF3EC',
  lavandaBrisa: '#EDE4F7',
  arenaRosa: '#F7C6B3',
  coralTexto: '#C23B47',
  grisHumo: '#6B6475',
  verdeRefugio: '#23785E',
  ambarAviso: '#E8A23A',
  white: '#FFFFFF',
  coralHover: '#D44A53',
  violetaHover: '#9334C9',
  violetaPressed: '#8029B3',
} as const;

/** Semánticos (Figma: Color/bg, text, action, border, state) */
export const colors = {
  bg: {
    default: palette.duraznoCalma,
    surface: palette.white,
    subtle: palette.lavandaBrisa,
  },
  text: {
    primary: palette.ciruelaNoche,
    secondary: palette.grisHumo,
    onAction: palette.white,
    link: palette.coralTexto,
  },
  action: {
    primary: palette.coralSora,
    primaryHover: palette.coralHover,
    primaryPressed: palette.coralTexto,
    secondary: palette.violetaVoz,
    secondaryHover: palette.violetaHover,
    secondaryPressed: palette.violetaPressed,
    disabledBg: palette.lavandaBrisa,
    disabledText: palette.grisHumo,
  },
  border: {
    default: palette.malvaAbrazo,
    focus: palette.violetaVoz,
    error: palette.coralTexto,
  },
  state: {
    success: palette.verdeRefugio,
    warning: palette.ambarAviso,
    error: palette.coralTexto,
    info: palette.violetaVoz,
  },
} as const;

export type Palette = typeof palette;
export type Colors = typeof colors;
