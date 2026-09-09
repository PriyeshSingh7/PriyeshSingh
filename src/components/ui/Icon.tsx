import type { ReactElement, SVGProps } from 'react'

export type IconName =
  | 'plc'
  | 'crosshair'
  | 'shield'
  | 'grid'
  | 'arrow-up-right'
  | 'linkedin'
  | 'x'
  | 'menu'
  | 'close'
  | 'verified'
  | 'expired'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
}

/**
 * Minimal line-icon set. Stroke-based, inherits `currentColor`,
 * always decorative unless the caller supplies a label.
 */
export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

const paths: Record<IconName, ReactElement> = {
  // Programmable logic controller: rack with I/O terminals
  plc: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M7 6v12M11 6v12" />
      <path d="M14.5 9.5h4M14.5 12h4M14.5 14.5h4" />
      <circle cx="5" cy="9" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  // Targeting reticle
  crosshair: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
    </>
  ),
  // Shield with validation tick
  shield: (
    <>
      <path d="M12 2.75 4.5 5.75v5.6c0 4.4 3.1 8.15 7.5 9.9 4.4-1.75 7.5-5.5 7.5-9.9v-5.6L12 2.75Z" />
      <path d="M9 12.1l2.1 2.1L15.2 10" />
    </>
  ),
  // Segmented network / zoned infrastructure
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" />
      <path d="M10 6.5h4M6.5 10v4" strokeDasharray="1.5 1.8" />
    </>
  ),
  'arrow-up-right': <path d="M7 17 17 7M8.5 7H17v8.5" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.5 10.5v6" />
      <circle cx="7.5" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.2 16.5v-6M11.2 12.6c0-1.2.9-2.1 2.2-2.1s2.4.9 2.4 2.6v3.4" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4 4 20" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  verified: (
    <>
      <path d="M12 2.6l2.3 1.7 2.8-.3 1 2.7 2.4 1.5-.9 2.7.9 2.7-2.4 1.5-1 2.7-2.8-.3L12 19.7l-2.3-1.7-2.8.3-1-2.7-2.4-1.5.9-2.7-.9-2.7 2.4-1.5 1-2.7 2.8.3L12 2.6Z" />
      <path d="M9.2 11.9l2 2 3.6-3.9" />
    </>
  ),
  expired: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l2.8 1.8" />
    </>
  ),
}
