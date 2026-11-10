/**
 * @sora-app/ui — Biblioteca de componentes React del Design System Sora.
 *
 *   import { Button, Input, Card, Checkbox, Select, Modal } from '@sora-app/ui';
 */
export * from './components';
export * from './tokens';
export * from './icons';
export { injectStyles } from './utils/injectStyles';
export { cssVariables } from './styles';
export type { IconProps } from './icons';

/** Alias con el nombre del componente en Figma (Text field). */
export { Input as TextField } from './components/Input';
