/**
 * Credentials.
 *
 * `primaryCertifications` are rendered first, as large verifiable cards, in
 * exactly this order: PT1, PJPT, CRTA, CEH Practical.
 * Verification URLs are reproduced exactly as supplied in the source profile.
 */

export type CredentialStatus = 'active' | 'lifetime' | 'expired'

export type PrimaryCertification = {
  id: string
  abbr: string
  name: string
  issuer: string
  issued: string
  /** Human-readable validity line. */
  validity: string
  status: CredentialStatus
  credentialId?: string
  verifyUrl: string
  verifyLabel: string
  summary: string
  skills: string[]
}

export const primaryCertifications: PrimaryCertification[] = [
  {
    id: 'pt1',
    abbr: 'PT1',
    name: 'Jr Penetration Tester',
    issuer: 'TryHackMe',
    issued: 'August 2025',
    validity: 'Expires August 2028',
    status: 'active',
    credentialId: '68a988360b9ddfada2e9b24c',
    verifyUrl: 'https://www.credly.com/badges/e2e88adf-7c75-4d1a-8660-a918864f69e4/public_url',
    verifyLabel: 'Verify PT1',
    summary:
      'A 48-hour hands-on practical exam in three sections, assessing the ability to identify, exploit and report vulnerabilities across a realistic penetration test.',
    skills: [
      'Active Directory Exploitation',
      'Network Penetration Testing',
      'Exploitation & Post-Exploitation',
      'Reconnaissance & Enumeration',
      'Web Application Testing',
      'Reporting',
    ],
  },
  {
    id: 'pjpt',
    abbr: 'PJPT',
    name: 'Practical Junior Penetration Tester',
    issuer: 'TCM Security',
    issued: 'June 2024',
    validity: 'Does not expire',
    status: 'lifetime',
    credentialId: '107333032',
    verifyUrl:
      'https://certified.tcm-sec.com/9a9c1b5f-9eea-4577-b2bb-12598b2a93ce?key=69203f2be518111af662f8093c0d776c7ea2a32e76e9a27cbead11c6d3b08533#acc.DtQ0UxZX',
    verifyLabel: 'Verify PJPT',
    summary:
      'A practical internal network penetration test: leverage Active Directory exploitation to move laterally and vertically, compromise the domain controller, and deliver a professional report.',
    skills: [
      'Active Directory Exploitation',
      'Lateral Movement',
      'Domain Compromise',
      'Enumeration',
      'Professional Reporting',
    ],
  },
  {
    id: 'crta',
    abbr: 'CRTA',
    name: 'Certified Red Team Analyst',
    issuer: 'CyberWarFare Labs',
    issued: 'November 2025',
    validity: 'Issued November 2025',
    status: 'active',
    credentialId: '691873dcedd0dfac26107a8d',
    verifyUrl: 'https://labs.cyberwarfare.live/credential/achievement/691873dcedd0dfac26107a8d',
    verifyLabel: 'Verify CRTA',
    summary:
      'Earned by completing the Red Team Analyst course, 30 days of practice labs and a six-hour practical examination covering enterprise red team methodology.',
    skills: [
      'Red Team Methodologies',
      'MITRE ATT&CK TTPs',
      'Kerberos Attacks',
      'Network Pivoting',
      'Adversary Simulation',
      'Windows Security',
    ],
  },
  {
    id: 'ceh-practical',
    abbr: 'CEH Practical',
    name: 'Certified Ethical Hacker (Practical)',
    issuer: 'EC-Council',
    issued: 'July 2022',
    validity: 'Expired July 2025',
    status: 'expired',
    credentialId: 'ECC5932041786',
    verifyUrl:
      'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=+jCN5lA8Jzs/sWCwiCo0e5zWzTPuC6chp+UzJwpKl7o=',
    verifyLabel: 'Verify CEH Practical',
    summary:
      'A practical exam in an environment mimicking a real corporate network, using live virtual machines, networks and applications. Listed here for completeness — this credential has lapsed.',
    skills: [
      'Threat Vector Identification',
      'Network Scanning',
      'OS Detection',
      'Vulnerability Analysis',
      'System Hacking',
      'Web App Hacking',
    ],
  },
]

/* ------------------------------------------------------------------ */

export type CredentialGroupId =
  | 'offensive'
  | 'networking'
  | 'threat-informed'
  | 'foundations'

export type Credential = {
  name: string
  issuer: string
  issued: string
  credentialId?: string
  group: CredentialGroupId
}

export const credentialGroups: { id: CredentialGroupId; label: string }[] = [
  { id: 'offensive', label: 'Offensive Security & Red Team' },
  { id: 'networking', label: 'Networking & Infrastructure' },
  { id: 'threat-informed', label: 'Threat-Informed Defence' },
  { id: 'foundations', label: 'Foundations & Programmes' },
]

export const secondaryCredentials: Credential[] = [
  // Offensive security & red team
  {
    name: 'Certified Web Red Team Analyst',
    issuer: 'CyberWarFare Labs',
    issued: 'Jun 2026',
    credentialId: '6a1d9dc1aae6178221fd782e',
    group: 'offensive',
  },
  {
    name: 'Certified Red Team Infra Dev',
    issuer: 'CyberWarFare Labs',
    issued: 'May 2026',
    credentialId: '6a117720561ddc10b08f3739',
    group: 'offensive',
  },
  {
    name: 'Jr Penetration Tester (learning path)',
    issuer: 'TryHackMe',
    issued: 'Jun 2022',
    credentialId: 'THM-2CGSNBCQG4',
    group: 'offensive',
  },
  {
    name: 'Certified Information Security & Ethical Hacker',
    issuer: 'Pristine InfoSolutions',
    issued: 'Mar 2019',
    group: 'offensive',
  },

  // Networking & infrastructure
  {
    name: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco',
    issued: 'Apr 2024',
    group: 'networking',
  },
  { name: 'Network Support and Security', issuer: 'Cisco', issued: 'Oct 2023', group: 'networking' },
  { name: 'Networking Basics', issuer: 'Cisco', issued: 'Oct 2023', group: 'networking' },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    issued: 'Jul 2023',
    group: 'networking',
  },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', issued: 'Dec 2020', group: 'networking' },
  { name: 'Introduction to IoT', issuer: 'Cisco', issued: 'Nov 2020', group: 'networking' },

  // Threat-informed defence
  {
    name: 'Foundations of Breach & Attack Simulation',
    issuer: 'AttackIQ',
    issued: 'Jun 2021',
    group: 'threat-informed',
  },
  {
    name: 'Emulation Planning for Purple Teams',
    issuer: 'AttackIQ',
    issued: 'May 2021',
    group: 'threat-informed',
  },
  {
    name: 'Intermediate Purple Teaming',
    issuer: 'AttackIQ',
    issued: 'May 2021',
    group: 'threat-informed',
  },
  {
    name: 'Threat Alignment for Purple Teams',
    issuer: 'AttackIQ',
    issued: 'May 2021',
    group: 'threat-informed',
  },
  {
    name: 'Foundations of Purple Teaming',
    issuer: 'AttackIQ',
    issued: 'May 2021',
    group: 'threat-informed',
  },
  {
    name: 'Uniting Threat and Risk Management with NIST 800-53 and MITRE ATT&CK',
    issuer: 'AttackIQ',
    issued: 'Apr 2021',
    group: 'threat-informed',
  },
  {
    name: 'Introduction to FIN6 Emulation Plans',
    issuer: 'AttackIQ',
    issued: 'Apr 2021',
    group: 'threat-informed',
  },
  {
    name: 'Application of ATT&CK Navigator',
    issuer: 'AttackIQ',
    issued: 'Apr 2021',
    group: 'threat-informed',
  },
  {
    name: 'Foundations of Operationalizing MITRE ATT&CK',
    issuer: 'AttackIQ',
    issued: 'Apr 2021',
    group: 'threat-informed',
  },

  // Foundations & programmes
  {
    name: 'Penetration Testing, Incident Response and Forensics',
    issuer: 'IBM',
    issued: 'May 2021',
    group: 'foundations',
  },
  {
    name: 'Introduction to Cybersecurity Tools & Cyber Attacks',
    issuer: 'IBM',
    issued: 'Feb 2021',
    group: 'foundations',
  },
  {
    name: 'Cyber Network Security',
    issuer: 'Cybrary',
    issued: 'Nov 2020',
    credentialId: 'CC-7523fd81-a183-48b1-85a8-5c6069f81f86',
    group: 'foundations',
  },
  {
    name: 'Introduction to IT & Cybersecurity',
    issuer: 'Cybrary',
    issued: 'Nov 2020',
    credentialId: 'CC-481353ba-ec62-4496-aa3b-c765873168f8',
    group: 'foundations',
  },
  {
    name: 'Penetration Testing Internship (Oct–Dec 2021)',
    issuer: 'Virtually Testing Foundation',
    issued: 'Dec 2021',
    group: 'foundations',
  },
  {
    name: 'Beginner Track Internship (Apr–Jun 2021)',
    issuer: 'Virtually Testing Foundation',
    issued: 'Jun 2021',
    group: 'foundations',
  },
  {
    name: 'Gurugram Police Cyber Security Summer Internship',
    issuer: 'Haryana Police',
    issued: 'Jul 2021',
    group: 'foundations',
  },
  {
    name: 'Judge — Global OSINT Search Party CTF',
    issuer: 'Trace Labs',
    issued: 'Aug 2021',
    group: 'foundations',
  },
]

/* ------------------------------------------------------------------ */

export type Education = {
  institution: string
  qualification: string
  field: string
}

export const education: Education[] = [
  {
    institution: 'Amrita Vishwa Vidyapeetham',
    qualification: 'Bachelor of Computer Application',
    field: 'Cyber Security & Applications',
  },
  {
    institution: 'Indian Institute of Technology, Roorkee',
    qualification: 'Advanced Certification Program',
    field: 'Cyber Security',
  },
  {
    institution: 'Kendriya Vidyalaya',
    qualification: 'Higher Secondary',
    field: 'Computer Science',
  },
]

export type Service = {
  role: string
  organisation: string
  period: string
  note?: string
}

export const service: Service[] = [
  {
    role: 'Cyber Volunteer',
    organisation: 'Ministry of Home Affairs, Government of India',
    period: 'Aug 2021 — Present',
  },
  {
    role: 'Judge — Global OSINT Search Party CTF',
    organisation: 'Trace Labs',
    period: 'Aug 2021',
    note: 'Validating OSINT submissions on missing-persons cases. DEF CON edition.',
  },
]
