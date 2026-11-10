import { useInsertionEffect } from 'react';
import { sheet } from '../styles';

const STYLE_ID = 'sora-ui-styles';

/**
 * Inserta la hoja de estilos de la biblioteca una sola vez en <head>.
 * Así el proyecto que instala el paquete no tiene que importar ningún CSS.
 */
export function injectStyles(doc: Document | undefined = typeof document !== 'undefined' ? document : undefined) {
  if (!doc || doc.getElementById(STYLE_ID)) return;
  const el = doc.createElement('style');
  el.id = STYLE_ID;
  el.textContent = sheet;
  doc.head.insertBefore(el, doc.head.firstChild);
}

/** Hook que usan todos los componentes para garantizar que los estilos existan. */
export function useSoraStyles() {
  useInsertionEffect(() => {
    injectStyles();
  }, []);
}
