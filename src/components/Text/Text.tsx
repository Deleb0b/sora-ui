import { forwardRef } from 'react';
import { cx, useSoraStyles } from '../../utils';
import type { TextProps } from './Text.types';

const defaultTag = { h1: 'h1', h2: 'h2', h3: 'h3' } as const;

/** Texto con los estilos tipográficos del Design System. */
export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant = 'body', as, color = 'primary', className, ...rest },
  ref,
) {
  useSoraStyles();
  const Tag = as ?? (defaultTag as Record<string, string>)[variant] ?? 'p';
  return <Tag ref={ref} className={cx('sora-text', className)} data-variant={variant} data-color={color} {...rest} />;
});
