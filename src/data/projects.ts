/**
 * Representative engagement / capability entries.
 * Client identities are deliberately withheld — these describe the work, not the customer.
 */

export type Project = {
  id: string
  index: string
  title: string
  description: string
  tags: string[]
  /** Short right-hand descriptor shown on wide screens. */
  domain: string
}

export const projects: Project[] = [
  {
    id: 'plc-testing',
    index: '01',
    title: 'PLC / Industrial Control Security Testing',
    description:
      'Penetration testing of PLC-based industrial control systems, including validation of access to read, modify and write PLC logic — turning theoretical exposure into a measured, demonstrable risk.',
    tags: ['PLC', 'OT/ICS', 'Pentest'],
    domain: 'Industrial control',
  },
  {
    id: 'ot-gap',
    index: '02',
    title: 'OT Security GAP & Vulnerability Assessments',
    description:
      'OT/ICS assessments covering critical healthcare technology, passive network monitoring and air-gapped networks, aligned with IEC 62443 and OT cybersecurity standards.',
    tags: ['Healthcare OT', 'IEC 62443', 'GAP Assessment'],
    domain: 'Assessment',
  },
  {
    id: 'scada-review',
    index: '03',
    title: 'SCADA / EWS / OWS Security Reviews',
    description:
      'Architecture and segmentation reviews, insecure remote-access evaluation, risk impact analysis, hardening recommendations and prioritised remediation.',
    tags: ['SCADA', 'Segmentation', 'Remote Access'],
    domain: 'Architecture',
  },
  {
    id: 'solar-fat-sat',
    index: '04',
    title: 'Solar Plant FAT / SAT Security Validation',
    description:
      'Factory and Site Acceptance Testing focused on secure configurations, network segmentation and cybersecurity compliance before production deployment.',
    tags: ['Solar', 'FAT/SAT', 'Pre-production'],
    domain: 'Commissioning',
  },
  {
    id: 'vapt',
    index: '05',
    title: 'Network, Web & Mobile Penetration Testing',
    description:
      'Comprehensive VAPT work across 50+ clients including regulated financial institutions and enterprise environments, with remediation guidance and compliance-aligned reporting.',
    tags: ['Network', 'Web', 'Mobile', 'VAPT'],
    domain: 'Offensive testing',
  },
  {
    id: 'network-governance',
    index: '06',
    title: 'Centralised Network Security Management',
    description:
      'Implemented a centralised network security management solution using AlgoSec for an environment managing 1000+ firewalls, switches and routers, improving policy governance and configuration compliance.',
    tags: ['AlgoSec', 'Policy Governance', 'Compliance'],
    domain: 'Enterprise scale',
  },
  {
    id: 'ctf-machine',
    index: '07',
    title: 'CTF Machine Development',
    description:
      'Designed a vulnerable Ubuntu-based training machine with FTP, SSH, encryption and privilege-escalation paths to simulate a full penetration-testing workflow: recon, scanning, enumeration, exploitation and privilege escalation.',
    tags: ['Ubuntu', 'CTF', 'Training'],
    domain: 'Research',
  },
]
