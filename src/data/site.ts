/**
 * Core site + identity data.
 * Every value here is taken from the supplied profile. Nothing is invented.
 */

export const site = {
  name: 'Priyesh Singh',
  monogram: 'PS',
  wordmark: 'PRIYESH.',
  role: 'Security Consultant / Researcher',
  location: 'Ahmedabad, Gujarat, India',
  title: 'Priyesh Singh | Security Consultant & Researcher',
  description:
    'Priyesh Singh is a Security Consultant and Researcher specializing in OT/ICS security, Red Teaming, VAPT, SCADA security and critical infrastructure.',
  heroLead:
    'Offensive security and OT/ICS specialist focused on finding exploitable paths, validating real-world risk, and helping critical environments become harder to compromise.',
} as const

export const socials = {
  linkedin: 'https://www.linkedin.com/in/priyeshsingh7',
  twitter: 'https://twitter.com/priyeshsingh77',
} as const

export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Selected Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export type Metric = {
  value: string
  label: string
  note?: string
}

/**
 * Experience figures only. Wording preserved from the source profile.
 */
export const heroMetrics: Metric[] = [
  { value: 'OT/ICS', label: 'Core domain', note: 'SCADA, PLC, air-gapped' },
  { value: '50+', label: 'VAPT clients', note: 'Network, web & mobile' },
  {
    value: '1000+',
    label: 'Firewalls, switches & routers',
    note: 'Centralised policy governance',
  },
]

export const marqueeItems: string[] = [
  'OT / ICS SECURITY',
  'SCADA',
  'RED TEAMING',
  'VAPT',
  'ACTIVE DIRECTORY',
  'NETWORK SECURITY',
  'SOLAR CYBERSECURITY',
  'MITRE ATT&CK',
  'OT GAP ASSESSMENT',
]

/** Lines rendered in the hero terminal. */
export type TerminalLine =
  | { kind: 'command'; text: string }
  | { kind: 'response'; text: string }
  | { kind: 'field'; label: string; value: string }
  | { kind: 'spacer' }

export const terminalLines: TerminalLine[] = [
  { kind: 'command', text: 'whoami' },
  { kind: 'response', text: 'priyesh — security consultant / researcher' },
  { kind: 'spacer' },
  { kind: 'field', label: 'specialization', value: 'OT/ICS · SCADA · Red Team · VAPT' },
  { kind: 'field', label: 'approach', value: 'recon → exploit → validate → reduce risk' },
  { kind: 'field', label: 'focus', value: 'critical infrastructure & high-risk networks' },
]
