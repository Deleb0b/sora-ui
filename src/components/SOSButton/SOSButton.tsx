import { useEffect, useRef, useState } from 'react';
import { cx, useSoraStyles } from '../../utils';
import { CheckIcon } from '../../icons';
import type { SOSButtonProps, SOSState } from './SOSButton.types';

/**
 * Botón de emergencia: hay que mantenerlo presionado `holdDuration` ms para enviar la alerta,
 * lo que evita activaciones accidentales. Funciona con mouse, toque y teclado (Espacio/Enter).
 */
export function SOSButton({
  onTrigger,
  onCancel,
  holdDuration = 3000,
  sent,
  disabled = false,
  size = 240,
  hint = 'Mantén 3 s',
  cancelHint = 'Suelta para cancelar',
  sentLabel = 'Alerta enviada',
  className,
}: SOSButtonProps) {
  useSoraStyles();
  const [state, setState] = useState<SOSState>(sent ? 'sent' : 'default');
  const [progress, setProgress] = useState(0);
  const frame = useRef<number>(0);
  const startedAt = useRef(0);

  useEffect(() => {
    if (sent !== undefined) setState(sent ? 'sent' : 'default');
  }, [sent]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const tick = () => {
    const p = Math.min(1, (performance.now() - startedAt.current) / holdDuration);
    setProgress(p);
    if (p >= 1) {
      setState('sent');
      onTrigger();
      return;
    }
    frame.current = requestAnimationFrame(tick);
  };

  const start = () => {
    if (disabled || state !== 'default') return;
    setState('holding');
    startedAt.current = performance.now();
    frame.current = requestAnimationFrame(tick);
  };

  const release = () => {
    if (state !== 'holding') return;
    cancelAnimationFrame(frame.current);
    setProgress(0);
    setState('default');
    onCancel?.();
  };

  const seconds = Math.max(1, Math.ceil((holdDuration * (1 - progress)) / 1000));
  const ring = size * (6 / 240);
  const r = size / 2 - ring / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <button
      type="button"
      className={cx('sora-reset', 'sora-sos', className)}
      data-state={state}
      style={{ width: size, height: size, ['--sora-sos-size' as string]: `${size}px` }}
      disabled={disabled}
      aria-label={state === 'sent' ? sentLabel : `SOS. Mantén presionado ${Math.round(holdDuration / 1000)} segundos para enviar una alerta`}
      aria-live="polite"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture?.(e.pointerId);
        start();
      }}
      onPointerUp={release}
      onPointerCancel={release}
      onKeyDown={(e) => {
        if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
          e.preventDefault();
          start();
        }
      }}
      onKeyUp={(e) => {
        if (e.key === ' ' || e.key === 'Enter') release();
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <span className="sora-sos__halo" aria-hidden="true" />
      {state === 'holding' && (
        <svg className="sora-sos__ring" width={size} height={size} aria-hidden="true">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={ring}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
      )}
      <span className="sora-sos__core">
        {state === 'sent' ? (
          <CheckIcon size={size * 0.23} strokeWidth={3.2} />
        ) : (
          <span className="sora-sos__label">{state === 'holding' ? seconds : 'SOS'}</span>
        )}
        <span className="sora-sos__hint">{state === 'sent' ? sentLabel : state === 'holding' ? cancelHint : hint}</span>
      </span>
    </button>
  );
}
