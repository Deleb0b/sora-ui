import { forwardRef } from 'react';
import { cx, useSoraStyles } from '../../utils';
import { CheckIcon, CloseIcon, InfoMarkIcon, WarningMarkIcon } from '../../icons';
import type { AlertProps, AlertType } from './Alert.types';

const icons: Record<AlertType, React.ReactElement> = {
  success: <CheckIcon size={16} strokeWidth={2.5} />,
  warning: <WarningMarkIcon size={18} />,
  error: <CloseIcon size={18} strokeWidth={2.5} />,
  info: <InfoMarkIcon size={18} />,
};

/** Aviso con ícono, título, mensaje y cierre opcional. */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { type = 'info', title, message, children, onClose, action, className, ...rest },
  ref,
) {
  useSoraStyles();
  return (
    <div
      ref={ref}
      role={type === 'error' || type === 'warning' ? 'alert' : 'status'}
      className={cx('sora-reset', 'sora-alert', className)}
      data-type={type}
      {...rest}
    >
      <span className="sora-alert__icon" aria-hidden="true">
        {icons[type]}
      </span>
      <div className="sora-alert__content">
        <p className="sora-alert__title">{title}</p>
        {(message ?? children) && <div className="sora-alert__message">{message ?? children}</div>}
        {action && <div className="sora-alert__action">{action}</div>}
      </div>
      {onClose && (
        <button type="button" className="sora-alert__close" aria-label="Cerrar aviso" onClick={onClose}>
          <CloseIcon size={24} />
        </button>
      )}
    </div>
  );
});
