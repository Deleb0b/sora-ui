import type { SVGProps } from 'react';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

function Svg({ size = 24, color = 'currentColor', strokeWidth = 2, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (p: IconProps) => (
  <Svg strokeWidth={2.6} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);
export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 7l10 10M17 7L7 17" />
  </Svg>
);
export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);
export const AlertCircleIcon = (p: IconProps) => (
  <Svg strokeWidth={1.8} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 7.5v5.5M12 16.5v.01" />
  </Svg>
);
export const CheckCircleIcon = (p: IconProps) => (
  <Svg strokeWidth={1.8} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12.5l3 3 5-6" />
  </Svg>
);
export const WarningMarkIcon = ({ color = 'currentColor', ...p }: IconProps) => (
  <Svg strokeWidth={2.5} color={color} {...p}>
    <path d="M12 5v9" />
    <circle cx="12" cy="19" r="1.6" fill={color} stroke="none" />
  </Svg>
);
export const InfoMarkIcon = ({ color = 'currentColor', ...p }: IconProps) => (
  <Svg strokeWidth={2.5} color={color} {...p}>
    <circle cx="12" cy="5.5" r="1.6" fill={color} stroke="none" />
    <path d="M12 10v9" />
  </Svg>
);

/* Íconos de navegación (estilo akar-icons, Figma: Barras de navegación) */
export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 19.2V12.5C21 12 20.9 11.4 20.7 10.9C20.5 10.4 20.1 10 19.8 9.6L13.4 3.5C13 3.2 12.5 3 12 3C11.5 3 11 3.2 10.6 3.5L4.2 9.6C3.9 10 3.5 10.4 3.3 10.9C3.1 11.4 3 12 3 12.5V19.2C3 19.8 3.2 20.3 3.6 20.7C4 21 4.5 21.2 5 21.2H19C19.5 21.2 20 21 20.4 20.7C20.8 20.3 21 19.8 21 19.2Z" />
    <path d="M9 15.2C9 14.7 9.2 14.2 9.6 13.8C10 13.5 10.5 13.2 11 13.2H13C13.5 13.2 14 13.5 14.4 13.8C14.8 14.2 15 14.7 15 15.2V21.2H9V15.2Z" />
  </Svg>
);
export const RouteIcon = ({ color = 'currentColor', ...p }: IconProps) => (
  <Svg strokeWidth={1.5} color={color} {...p}>
    <circle cx="19.3" cy="5.7" r="2.7" fill={color} fillOpacity={0.2} />
    <circle cx="5.7" cy="18.4" r="2.7" fill={color} fillOpacity={0.2} />
    <path d="M16.6 5.7H6.9C5.3 5.7 4 7 4 8.5C4 9.9 5 11 6.4 11.1L18.4 13.4C19.8 13.6 20.8 14.8 20.6 16.2C20.5 17.4 19.4 18.4 18.1 18.4H8.4" />
  </Svg>
);
export const PeopleIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6.7" cy="6" r="3" />
    <circle cx="16.7" cy="6" r="3" />
    <path d="M9.7 13H5.5C4 13 2.7 14.1 2.5 15.5L2 18.7C1.8 19.9 2.8 21 4 21H8.7M21.3 18.7L20.8 15.5C20.6 14.1 19.3 13 17.8 13H15.5C14 13 12.7 14.1 12.5 15.5L12 18.7C11.8 19.9 12.8 21 14 21H19.3C20.5 21 21.5 19.9 21.3 18.7Z" />
  </Svg>
);
export const SettingsIcon = ({ color = 'currentColor', ...p }: IconProps) => (
  <Svg strokeWidth={1.5} color={color} {...p}>
    <path
      fill={color}
      fillOpacity={0.2}
      d="M10.3 3.3c.4-1.7 3-1.7 3.4 0a1.7 1.7 0 0 0 2.6 1.1c1.5-.9 3.3.8 2.4 2.4a1.7 1.7 0 0 0 1 2.6c1.8.4 1.8 2.9 0 3.4a1.7 1.7 0 0 0-1 2.6c.9 1.5-.9 3.3-2.4 2.4a1.7 1.7 0 0 0-2.6 1c-.4 1.8-3 1.8-3.4 0a1.7 1.7 0 0 0-2.6-1c-1.5.9-3.3-.9-2.4-2.4a1.7 1.7 0 0 0-1-2.6c-1.8-.5-1.8-3 0-3.4a1.7 1.7 0 0 0 1-2.6c-.9-1.6.9-3.3 2.4-2.4a1.7 1.7 0 0 0 2.6-1.1Z"
    />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);
export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.6 6.2L7.2 2.3C6.8 1.9 6.1 1.9 5.7 2.3L2.8 5.2C2.2 5.8 2 6.8 2.4 7.6C4.6 13.1 8.9 17.4 14.4 19.6C15.2 20 16.2 19.8 16.8 19.2L19.7 16.3C20.1 15.9 20.1 15.2 19.7 14.8L16.3 11.4C15.9 11 15.3 11 14.9 11.4L13.5 12.8C13.4 12.9 13.2 13 13 12.9C10.9 11.7 9.3 10.1 8.1 8C8 7.8 8.1 7.6 8.2 7.5L9.6 6.1" />
  </Svg>
);
export const MessageIcon = ({ color = 'currentColor', ...p }: IconProps) => (
  <Svg strokeWidth={1.5} color={color} {...p}>
    <path
      fill={color}
      fillOpacity={0.2}
      d="M12.4 21.9C17.8 21.9 22.2 17.5 22.2 12.1C22.2 6.7 17.8 2.3 12.4 2.3C7 2.3 2.6 6.7 2.6 12.1C2.6 13.6 2.9 14.6 2.9 15.5C2.9 16.4 1.4 20 2.4 21.5C3.4 22.4 6.5 21.4 7.5 21.4C8.4 21.4 10.4 21.9 12.4 21.9Z"
    />
    <path d="M7.7 9.9H17.2M7.7 14.3H15.3" />
  </Svg>
);
