# Cambios

## 1.0.1

Correcciones de accesibilidad encontradas al usar la biblioteca en la app Sora (auditoría con axe-core).

- **Contraste del color de acción (WCAG 1.4.3).** `colors.action.primary` pasa de coral-sora `#E4555D`
  (3.65:1 con texto blanco) a coral-texto `#C23B47` (5.24:1). Hover `#B8353F` (5.8:1) y pressed `#A52F3A` (6.6:1),
  nuevos en la paleta como `coralProfundo` y `coralPresionado`. Afecta a `Button` primario, `SOSButton` y `Avatar` coral.
  `palette.coralSora` se conserva para usos decorativos sin texto encima.
- **Nombre accesible del `SOSButton` (WCAG 2.5.3).** Ya no usa un `aria-label` fijo distinto del texto visible:
  el nombre se forma con lo que se ve ("SOS", "Mantén 3 s") más una instrucción oculta para lectores de pantalla.
- Pruebas nuevas: contraste del color de acción y nombre accesible del `SOSButton`.

## 1.0.0

Versión inicial.
