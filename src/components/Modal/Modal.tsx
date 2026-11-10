import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cx, useSoraStyles } from '../../utils';
import { CloseIcon } from '../../icons';
import type { ModalProps } from './Modal.types';

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])';

/**
 * Ventana modal accesible: se renderiza en un portal, bloquea el scroll,
 * atrapa el foco y lo devuelve al elemento anterior al cerrarse.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  className,
}: ModalProps) {
  useSoraStyles();
  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const dialog = dialogRef.current;
    const first = dialog?.querySelector<HTMLElement>(FOCUSABLE);
    (first ?? dialog)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) {
        e.stopPropagation();
        onCloseRef.current();
      }
      if (e.key === 'Tab' && dialog) {
        const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (!items.length) return;
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, [open, closeOnEsc]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="sora-reset sora-modal__overlay"
      onMouseDown={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        tabIndex={-1}
        className={cx('sora-modal', className)}
        data-size={size}
      >
        {(title || showCloseButton) && (
          <div className="sora-modal__header">
            {title && (
              <h2 id={titleId} className="sora-modal__title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button type="button" className="sora-modal__close" aria-label="Cerrar" onClick={onClose}>
                <CloseIcon size={24} />
              </button>
            )}
          </div>
        )}
        {description && (
          <p id={descId} className="sora-modal__description">
            {description}
          </p>
        )}
        {children && <div className="sora-modal__body">{children}</div>}
        {footer && <div className="sora-modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
