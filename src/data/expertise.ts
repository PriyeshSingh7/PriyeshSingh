export type ExpertiseArea = {
  id: string
  index: string
  title: string
  description: string
  /** Short capability keywords, all supported by the source profile. */
  keywords: string[]
  /** Icon key resolved in components/ui/Icon.tsx */
  icon: 'plc' | 'crosshair' | 'shield' | 'grid'
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'ot-ics',
    index: '01',
    title: 'OT / ICS',
    description:
      'Security assessments across PLC-driven industrial control environments, SCADA, EWS and OWS.',
    keywords: ['PLC logic', 'SCADA', 'IEC 62443', 'Passive monitoring'],
    icon: 'plc',
  },
  {
    id: 'red-team',
    index: '02',
    title: 'Red Team',
    description:
      'Adversary-minded testing across internal networks, Active Directory, web and enterprise attack paths.',
    keywords: ['Active Directory', 'MITRE ATT&CK', 'Lateral movement', 'Post-exploitation'],
    icon: 'crosshair',
  },
  {
    id: 'vapt',
    index: '03',
    title: 'VAPT',
    description:
      'Network, web and mobile penetration testing with evidence-led vulnerability validation and remediation.',
    keywords: ['Network', 'Web', 'Mobile', 'Report writing'],
    icon: 'shield',
  },
  {
    id: 'critical-infrastructure',
    index: '04',
    title: 'Critical Infrastructure',
    description:
      'Air-gapped networks, solar plants and high-risk environments where availability and trust matter.',
    keywords: ['Air-gapped', 'Solar FAT/SAT', 'Segmentation', 'Healthcare OT'],
    icon: 'grid',
  },
]
