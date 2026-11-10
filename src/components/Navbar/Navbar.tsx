import { cx, useControllableState, useSoraStyles } from '../../utils';
import { HomeIcon, PeopleIcon, RouteIcon, SettingsIcon } from '../../icons';
import type { NavbarItem, NavbarProps } from './Navbar.types';

export const defaultNavbarItems: NavbarItem[] = [
  { value: 'inicio', label: 'Inicio', icon: <HomeIcon /> },
  { value: 'trayecto', label: 'Trayecto', icon: <RouteIcon /> },
  { value: 'red', label: 'Mi red', icon: <PeopleIcon /> },
  { value: 'ajustes', label: 'Ajustes', icon: <SettingsIcon /> },
];

/**
 * Barra de navegación inferior (Figma: Barras de navegación → Default | Active).
 * Estados por elemento: default, hover, focus, selected (activo) y disabled.
 */
export function Navbar({ items = defaultNavbarItems, value, defaultValue, onChange, fixed = false, className, ...rest }: NavbarProps) {
  useSoraStyles();
  const [current, setCurrent] = useControllableState<string>(value, defaultValue ?? items[0]?.value ?? '', onChange);

  return (
    <nav className={cx('sora-reset', 'sora-navbar', className)} data-fixed={fixed || undefined} aria-label="Navegación principal" {...rest}>
      <ul className="sora-navbar__list">
        {items.map((item) => {
          const selected = item.value === current;
          return (
            <li key={item.value}>
              <button
                type="button"
                className="sora-navbar__item"
                aria-current={selected ? 'page' : undefined}
                data-selected={selected || undefined}
                disabled={item.disabled}
                onClick={() => !selected && setCurrent(item.value)}
              >
                {item.icon && <span className="sora-navbar__icon">{item.icon}</span>}
                <span className="sora-navbar__label">{item.label}</span>
                <span className="sora-navbar__indicator" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Alias con el nombre de Figma. */
export const BottomNav = Navbar;
