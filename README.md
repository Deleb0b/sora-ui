# @sora-app/ui

Biblioteca de componentes **React** del Design System **Sora**, la app de emergencia para mujeres. Los componentes se construyeron a partir del archivo de Figma *Sora Design* (páginas **Fundamentos** y **Componentes**).

```bash
npm install @sora-app/ui
```

```tsx
import { Button, Input, Card, Checkbox, Select, Modal } from '@sora-app/ui';

export default function App() {
  return <Button variant="primary" onClick={() => alert('¡Hola!')}>Guardar</Button>;
}
```

Solo hace falta instalar la dependencia. Los estilos se insertan solos la primera vez que se usa un componente, y las fuentes Nunito y Nunito Sans se cargan desde Google Fonts. Funciona con Vite, Create React App y Next.js (los componentes ya traen `'use client'`). Requiere React 18 o superior.

---

## Componentes

| Componente | Equivalente en Figma | Variantes (props) | Estados |
|---|---|---|---|
| `Button` | Button | `variant`: `primary` · `secondary` · `tonal` — `size`: `small` · `medium` · `large` | default, hover, pressed, focus, `disabled`, `loading`, `success` |
| `Input` (alias `TextField`) | Text field | `label`, `helperText`, `icon` | default, hover, focus, filled, `error`, `success`, `disabled`, validación con `validate` |
| `Checkbox` | Checkbox | `label` | default, hover, focus, `checked`, `disabled`, `error` |
| `Switch` (alias `Toggle`) | Toggle | `label`, `labelPosition` | off, on (`checked`), hover, focus, `disabled` |
| `Select` | *(nuevo, con el estilo de Text field)* | `options`, `placeholder` | default, hover, focus, abierto, opción activa, `selected`, `error`, `success`, `disabled` |
| `Modal` | *(nuevo, con los tokens del sistema)* | `size`: `small` · `medium` · `large` | `open`/cerrado, foco atrapado, cierre con X, Esc o fondo |
| `Card` | Tarjetas | `variant`: `elevated` · `outlined` · `filled` — `padding` | hover, pressed y focus cuando es interactiva, `selected`, `disabled` |
| `Alert` | Alert | `type`: `success` · `warning` · `error` · `info` | con o sin cierre (`onClose`) |
| `Avatar` | Avatar | `size`: `md` · `lg` · `xl` — `color`: `malva` · `coral` | `showStatus` |
| `Badge` | Chip "Disponible" de Tarjetas | `variant`: `success` · `warning` · `error` · `info` · `neutral` | `dot` |
| `Navbar` (alias `BottomNav`) | Barras de navegación | `items`, `fixed` | default, hover, focus, selected (Active), `disabled` |
| `SOSButton` | SOS Button | `size`, `holdDuration` | Default, Holding (cuenta regresiva + anillo), Sent |
| `ContactCard` | Tarjetas | `available`, `avatarColor` | Compuesto con Card + Avatar + Badge + Button |
| `Text` | Estilos Heading / Body / Label | `variant`: `h1` · `h2` · `h3` · `body` · `bodyBold` · `note` · `button` · `buttonLarge` | — |
| `Spinner` | Icon/Spinner | `size`, `color` | — |

### Relación entre Figma y React

```text
Figma                                 React
Button                                <Button
├── Type = Primary                     variant="primary"
├── Type = Secondary                   variant="secondary"
├── State = Hover / Pressed            :hover / :active (automático)
├── State = Disabled                   disabled
├── State = Loading                    loading
└── State = Success                    success />

Text field                            <Input
├── State = Focus / Filled             automático
├── State = Error                      error="Mensaje"
├── State = Success                    success="Mensaje"
└── State = Disabled                   disabled />

Alert → Type = Success|Warning|...    <Alert type="success" | "warning" | "error" | "info" />
Avatar → Size = Md|Lg|Xl              <Avatar size="md" | "lg" | "xl" color="malva" | "coral" />
SOS Button → Default|Holding|Sent     <SOSButton onTrigger={...} sent={...} />
```

---

## Ejemplos

```tsx
import { useState } from 'react';
import { Button, Input, Checkbox, Switch, Select, Modal, Alert, Card } from '@sora-app/ui';

function Ejemplo() {
  const [accepted, setAccepted] = useState(false);
  const [contacto, setContacto] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Validación integrada: se revisa al salir del campo */}
      <Input
        label="Correo electrónico"
        type="email"
        validate={(v) => (v.includes('@') ? undefined : 'El correo no es válido')}
      />

      <Select
        label="Contacto de emergencia"
        value={contacto}
        onChange={setContacto}
        options={[
          { value: 'mama', label: 'Mamá' },
          { value: 'hermana', label: 'Hermana' },
        ]}
      />

      <Checkbox
        label="Acepto términos y privacidad"
        checked={accepted}
        onChange={(e) => setAccepted(e.target.checked)}
      />

      <Switch label="Compartir ubicación" defaultChecked onCheckedChange={(on) => console.log(on)} />

      <Button variant="primary" disabled={!accepted} onClick={() => setOpen(true)}>
        Guardar
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="¿Guardar contacto?"
        footer={<Button onClick={() => setOpen(false)}>Confirmar</Button>}
      >
        Avisaremos a esta persona cuando actives una alerta.
      </Modal>

      <Card variant="outlined">Contenido de la tarjeta</Card>
      <Alert type="success" title="Estás a salvo" message="Avisamos a tu red que llegaste bien." />
    </>
  );
}
```

### Componentes controlados y no controlados

`Checkbox`, `Switch`, `Select`, `Input` y `Navbar` funcionan de las dos formas:

- **Controlado:** `checked` / `value` + `onChange`.
- **No controlado:** `defaultChecked` / `defaultValue`.

Todos los componentes también aceptan `className` y los atributos HTML normales (`id`, `aria-*`, `style`…).

---

## Fundamentos (tokens)

Los valores salen de las variables y estilos de Figma y se exportan para usarlos en tu propio código:

```tsx
import { colors, palette, spacing, radius, shadows, typography, sizes } from '@sora-app/ui';

colors.action.primary   // '#E4555D' (coral-sora)
spacing.lg              // 16
radius.md               // 12
typography.h1           // { fontFamily, fontWeight: 800, fontSize: 40, lineHeight: 48 }
```

| Grupo | Archivo | Valores |
|---|---|---|
| Colores | `src/tokens/colors.ts` | Primitivos (coral-sora, ciruela-noche, malva-abrazo, violeta-voz, durazno-calma…) y semánticos (`bg`, `text`, `action`, `border`, `state`) |
| Tipografía | `src/tokens/typography.ts` | H1 40/48 ExtraBold · H2 28/36 · H3 20/28 · Body 16/24 · Note 13/18 · Button 16/20 · Button Large 18/24 |
| Espaciado | `src/tokens/spacing.ts` | xs 4 · sm 8 · md 12 · lg 16 · xl 24 · 2xl 32 · 3xl 48 |
| Radios | `src/tokens/radius.ts` | sm 8 · md 12 · lg 16 · full 999 |
| Sombras | `src/tokens/shadows.ts` | Shadow/Card: `0 4px 12px` ciruela-noche al 12 % |
| Tamaños | `src/tokens/sizes.ts` | Button 36/48/56 · Input 48 · Checkbox 24 · Switch 52×30 · Avatar 40/56/80 · SOS 240 |

### Personalizar el tema

Los tokens también se generan como variables CSS (`--sora-*`). Puedes sobrescribirlas sin tocar el código de la biblioteca:

```css
:root {
  --sora-color-action-primary: #D7263D;
  --sora-radius-lg: 20px;
}
```

Si prefieres cargar el CSS de forma explícita en lugar de la inyección automática: `import '@sora-app/ui/styles.css';`

---

## Arquitectura

```text
src/
├── components/            Un directorio por componente
│   ├── Button/
│   │   ├── Button.tsx          Componente
│   │   ├── Button.types.ts     Tipos / props
│   │   ├── Button.styles.ts    Estilos (usan variables --sora-*)
│   │   └── index.ts            Exportaciones
│   ├── Input/  Checkbox/  Switch/  Select/  Modal/  Card/
│   ├── Alert/  Avatar/  Badge/  Navbar/  SOSButton/  ContactCard/  Text/  Spinner/
│   └── index.ts
├── tokens/                Fundamentos del Design System (colors, typography, spacing, radius, shadows, sizes)
├── styles/                Variables CSS generadas desde los tokens, estilos base y hoja final
├── icons/                 Íconos SVG
├── utils/                 cx, useControllableState, injectStyles
├── __tests__/             Pruebas de interacción (Vitest + Testing Library)
└── index.ts               Punto de entrada del paquete
playground/                App de desarrollo para ver todos los componentes (npm run dev)
scripts/                   Generación de dist/styles.css
tsup.config.ts             Configuración del build (ESM + CJS + tipos .d.ts)
```

## Desarrollo

```bash
npm install
npm run dev         # playground en http://localhost:5173
npm test            # pruebas de interacción
npm run typecheck   # revisión de tipos
npm run build       # genera dist/ (ESM, CommonJS, tipos y styles.css)
```

## Publicación en npm

```text
Código fuente → npm run build → npm publish → npm install @sora-app/ui → proyecto React independiente
```

```bash
npm login
npm version minor       # o patch / major
npm publish             # corre typecheck, pruebas y build antes de subir
```

Configuración relevante del `package.json`:

- `main` / `module` / `types` / `exports`: entradas CommonJS, ESM y tipos.
- `files`: solo se publica `dist/`.
- `peerDependencies`: `react` y `react-dom` los pone el proyecto que instala la biblioteca; no tiene dependencias de producción.
- `prepublishOnly`: impide publicar si fallan los tipos o las pruebas.

## Licencia

MIT
