# Cambios

## 1.0.2

Alineación del `SOSButton` con el Manual de Identidad Visual.

- **`SOSButton` vuelve a Coral Sora `#E4555D`**, el color que el manual asigna al botón SOS (en 1.0.1 había pasado a
  Coral Texto junto con el resto de los botones). Nuevos tokens `colors.action.sos`, `sosHover` y `sosPressed`
  (`--sora-color-action-sos*`). Los demás botones primarios siguen en Coral Texto `#C23B47`.
- **Texto del `SOSButton` de al menos 19 px en negrita** ("Mantén 3 s", "Suelta para cancelar", "Alerta enviada"):
  así todo su texto es *texto grande* según WCAG y Coral Sora con blanco (3.65:1) cumple el mínimo de 3:1.
- Prueba nueva que verifica el color y el contraste del SOS.

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
