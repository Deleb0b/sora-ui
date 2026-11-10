import { cx } from '../../utils';
import { Card } from '../Card';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { MessageIcon, PhoneIcon } from '../../icons';
import type { ContactCardProps } from './ContactCard.types';

/** Tarjeta de contacto de confianza (Figma: Tarjetas). Compuesta con Card, Avatar, Badge y Button. */
export function ContactCard({
  name,
  relation = 'Contacto de confianza',
  available = true,
  avatarSrc,
  avatarColor = 'coral',
  variant = 'elevated',
  onCall,
  onMessage,
  callLabel = 'Llamar',
  messageLabel = 'Mensaje',
  className,
}: ContactCardProps) {
  return (
    <Card variant={variant} padding="small" className={cx('sora-contact-card', className)}>
      <div className="sora-contact-card__header">
        <Avatar name={name} src={avatarSrc} color={avatarColor} showStatus={available} />
        <div className="sora-contact-card__info">
          <p className="sora-contact-card__name">{name}</p>
          <p className="sora-contact-card__relation">{relation}</p>
        </div>
        <Badge variant={available ? 'success' : 'neutral'}>{available ? 'Disponible' : 'No disponible'}</Badge>
      </div>
      {(onCall || onMessage) && (
        <div className="sora-contact-card__actions">
          {onCall && (
            <Button variant="tonal" size="small" fullWidth icon={<PhoneIcon size={20} />} onClick={onCall} aria-label={`${callLabel} a ${name}`}>
              {callLabel}
            </Button>
          )}
          {onMessage && (
            <Button variant="tonal" size="small" fullWidth icon={<MessageIcon size={20} />} onClick={onMessage} aria-label={`${messageLabel} a ${name}`}>
              {messageLabel}
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
