import { useState } from 'react';
import { cx, useSoraStyles } from '../../utils';
import type { AvatarProps } from './Avatar.types';

/** Avatar con inicial o foto y punto de estado. */
export function Avatar({ name, src, size = 'md', color = 'malva', showStatus = false, className, ...rest }: AvatarProps) {
  useSoraStyles();
  const [imgFailed, setImgFailed] = useState(false);
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <span
      role="img"
      aria-label={showStatus ? `${name}, disponible` : name}
      className={cx('sora-reset', 'sora-avatar', className)}
      data-size={size}
      data-color={color}
      {...rest}
    >
      <span className="sora-avatar__circle">
        {src && !imgFailed ? <img src={src} alt="" onError={() => setImgFailed(true)} /> : initial}
      </span>
      {showStatus && <span className="sora-avatar__status" />}
    </span>
  );
}
