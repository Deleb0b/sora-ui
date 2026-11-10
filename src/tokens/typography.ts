/** Figma: estilos de texto Heading / Body / Label */
export const fontFamilies = {
  heading: "'Nunito', 'Nunito Sans', system-ui, sans-serif",
  body: "'Nunito Sans', 'Nunito', system-ui, sans-serif",
} as const;

export const fontWeights = {
  regular: 400,
  bold: 700,
  extraBold: 800,
} as const;

export const typography = {
  h1: { fontFamily: fontFamilies.heading, fontWeight: 800, fontSize: 40, lineHeight: 48 },
  h2: { fontFamily: fontFamilies.heading, fontWeight: 700, fontSize: 28, lineHeight: 36 },
  h3: { fontFamily: fontFamilies.heading, fontWeight: 700, fontSize: 20, lineHeight: 28 },
  body: { fontFamily: fontFamilies.body, fontWeight: 400, fontSize: 16, lineHeight: 24 },
  bodyBold: { fontFamily: fontFamilies.body, fontWeight: 700, fontSize: 16, lineHeight: 20 },
  note: { fontFamily: fontFamilies.body, fontWeight: 400, fontSize: 13, lineHeight: 18 },
  button: { fontFamily: fontFamilies.body, fontWeight: 700, fontSize: 16, lineHeight: 20 },
  buttonLarge: { fontFamily: fontFamilies.body, fontWeight: 700, fontSize: 18, lineHeight: 24 },
} as const;

export type TypographyVariant = keyof typeof typography;
