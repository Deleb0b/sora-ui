/** Figma: estilo de efecto "Shadow/Card" → #3B1F4E 12 %, x 0, y 4, blur 12 */
export const shadows = {
  card: '0 4px 12px rgba(59, 31, 78, 0.12)',
  modal: '0 12px 32px rgba(59, 31, 78, 0.24)',
  focusRing: '0 0 0 3px rgba(162, 63, 215, 0.35)',
} as const;

export type ShadowToken = keyof typeof shadows;
