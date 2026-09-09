/**
 * Career history. Roles, dates, locations and responsibilities are taken
 * verbatim in substance from the supplied profile.
 */

export type Phase =
  | 'Security Consulting'
  | 'OT / ICS'
  | 'Enterprise Security'
  | 'Red Team'
  | 'VAPT'
  | 'Security Fundamentals'

/** Ordered oldest -> newest; used for the progression rail. */
export const phaseProgression: Phase[] = [
  'Security Fundamentals',
  'VAPT',
  'Red Team',
  'Enterprise Security',
  'OT / ICS',
  'Security Consulting',
]

export type Role = {
  id: string
  title: string
  /**
   * Omit to withhold the employer's name â€” the timeline then renders
   * "Confidential" in its place. Used for present-day engagements.
   * To reveal one later, just add `company: '...'` back to that entry.
   */
  company?: string
  employment: string
  period: string
  location?: string
  current?: boolean
  phase: Phase
  bullets: string[]
}

/** Shown wherever `company` is withheld. */
export const CONFIDENTIAL_EMPLOYER = 'Confidential'

export const experience: Role[] = [
  {
    id: 'role-consultant',
    title: 'Security Consultant',
    // company withheld â€” current employer
    employment: 'Full-time',
    period: 'Apr 2026 â€” Present',
    location: 'Ahmedabad, India Â· On-site',
    current: true,
    phase: 'Security Consulting',
    bullets: [
      'Conducted penetration testing of PLC-based industrial control systems, uncovering critical security weaknesses and validating access to read, modify and write PLC logic, enabling effective risk assessment and remediation of OT/ICS environments.',
    ],
  },
  {
    id: 'role-associate',
    title: 'Associate',
    // company withheld â€” current employer
    employment: 'Full-time',
    period: 'Feb 2025 â€” Mar 2026',
    location: 'Ahmedabad, India Â· On-site',
    phase: 'OT / ICS',
    bullets: [
      'Implemented a centralised network security management solution using AlgoSec for an environment managing 1000+ firewalls, switches and routers, enhancing policy governance and configuration compliance.',
      'Conducted OT Security GAP Assessments and Vulnerability Assessments across healthcare OT/ICS environments â€” ICU systems, MRI machines and bedside monitoring devices â€” implementing passive network monitoring for real-time traffic analysis and assessing air-gapped networks against IEC 62443 and OT cybersecurity standards.',
      'Deployed for three months as an OT Cybersecurity Specialist, performing EWS, OWS and SCADA security reviews, OT network architecture and segmentation assessments, insecure remote-access evaluations, and delivering risk impact analysis with prioritised remediation and hardening recommendations.',
      'Performed Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) for solar power plants, validating secure configurations, network segmentation and cybersecurity compliance before production deployment.',
    ],
  },
  {
    id: 'role-ot-intern',
    title: 'Intern',
    // company withheld â€” current employer
    employment: 'Internship',
    period: 'Oct 2024 â€” Jan 2025',
    location: 'Ahmedabad, India Â· On-site',
    phase: 'OT / ICS',
    bullets: ['VAPT and operational technology security, working alongside the consulting team.'],
  },
  {
    id: 'role-researcher',
    title: 'Security Researcher',
    // company withheld â€” ongoing engagement
    employment: 'Freelance',
    period: 'Apr 2024 â€” Present',
    location: 'Remote',
    current: true,
    phase: 'Enterprise Security',
    bullets: ['Ongoing freelance security research engagement.'],
  },
  {
    id: 'techdefence',
    title: 'VAPT Analyst',
    company: 'TechDefence',
    employment: 'Internship',
    period: 'Oct 2023 â€” May 2024',
    location: 'Ahmedabad, India Â· On-site',
    phase: 'VAPT',
    bullets: [
      'Conducted comprehensive network, web and mobile penetration testing for over 50 clients, including regulated financial institutions and enterprise clients.',
      'Performed security assessments, pinpointing critical vulnerabilities and recommending effective remediation strategies.',
      'Collaborated with cross-functional teams to implement security best practices and mitigate risks.',
      'Executed regular security audits, ensuring adherence to industry standards and regulatory compliance.',
    ],
  },
  {
    id: 'cybersapiens',
    title: 'Cyber Security Intern',
    company: 'CyberSapiens',
    employment: 'Apprenticeship',
    period: 'Oct 2023 â€” Apr 2024',
    location: 'Bengaluru, India Â· Remote',
    phase: 'VAPT',
    bullets: [
      'Conducted manual and automated security testing across 35+ web application vulnerabilities.',
      'Identified and analysed more than 35 web vulnerabilities through rigorous testing methodologies.',
      'Gained hands-on Vulnerability Assessment and Penetration Testing experience on live targets.',
      'Received company-wide recognition for contributions to cybersecurity projects.',
    ],
  },
  {
    id: 'hackersforyou',
    title: 'Penetration Testing Intern',
    company: 'HackersForYou',
    employment: 'Internship',
    period: 'Sep 2023 â€” Oct 2023',
    location: 'Remote',
    phase: 'VAPT',
    bullets: ['Penetration testing and adversary emulation.'],
  },
  {
    id: 'senselearner',
    title: 'Cyber Security Intern',
    company: 'Senselearner Technologies Pvt. Ltd.',
    employment: 'Internship',
    period: 'Sep 2023 â€” Oct 2023',
    location: 'Remote',
    phase: 'VAPT',
    bullets: ['Cybersecurity internship focused on practical assessment work.'],
  },
  {
    id: 'hackerbro',
    title: 'Red Team Engineer',
    company: 'HackerBro Technologies',
    employment: 'Internship',
    period: 'Jul 2023 â€” Sep 2023',
    location: 'Coimbatore, India Â· Remote',
    phase: 'Red Team',
    bullets: ['Penetration testing and red team engagement support.'],
  },
  {
    id: 'vtf-engineer',
    title: 'Cyber Security Engineer',
    company: 'Virtually Testing Foundation',
    employment: 'Internship',
    period: 'May 2022 â€” Jul 2022',
    location: 'Los Angeles, CA, United States',
    phase: 'Red Team',
    bullets: ['Cybersecurity engineering track within the foundation programme.'],
  },
  {
    id: 'vtf-pentest',
    title: 'Penetration Testing Intern',
    company: 'Virtually Testing Foundation',
    employment: 'Internship',
    period: 'Oct 2021 â€” Dec 2021',
    location: 'Los Angeles, CA, United States',
    phase: 'Security Fundamentals',
    bullets: [
      'OWASP Top 10 fundamentals and web application penetration testing labs.',
      'Professional use of penetration testing tooling, including Burp Suite.',
      'Vulnerability exploitation, a final CTF in a vulnerable environment, and professional pentest report writing.',
    ],
  },
  {
    id: 'fornsec',
    title: 'Cyber Forensic Intern',
    company: 'FORnSEC Solutions',
    employment: 'Internship',
    period: 'Sep 2021 â€” Oct 2021',
    location: 'Nagpur, India',
    phase: 'Security Fundamentals',
    bullets: ['Cyber forensics internship.'],
  },
  {
    id: 'gurugram-police',
    title: 'Gurugram Police Cyber Security Summer Intern',
    company: 'Haryana Police',
    employment: 'Internship',
    period: 'Jun 2021 â€” Jul 2021',
    location: 'India',
    phase: 'Security Fundamentals',
    bullets: [
      'Cyber security internship under Gurugram Police, in association with Safe House Technologies and the Society for Safe Gurgaon.',
      'Cybercrime awareness, case studies, ransomware and phishing analysis, social engineering and OSINT.',
      'IT governance rules 66, 66B and 66C, cybercrime investigation, device security and crime reporting.',
    ],
  },
  {
    id: 'vieh',
    title: 'Cyber Security Intern',
    company: 'VIEH Group',
    employment: 'Internship',
    period: 'Apr 2021 â€” Jul 2021',
    location: 'Mumbai, India',
    phase: 'Security Fundamentals',
    bullets: [
      'Research on the latest attack vectors and delivery of a cyber awareness programme.',
      'Performed a red team assessment and a network audit for a government data centre.',
      'Created a CTF machine on Ubuntu Server and solved 40+ HackTheBox labs with write-ups.',
    ],
  },
  {
    id: 'vtf-enterprise',
    title: 'Enterprise Tester',
    company: 'Virtually Testing Foundation',
    employment: 'Internship',
    period: 'Apr 2021 â€” Jun 2021',
    location: 'Los Angeles, CA, United States',
    phase: 'Security Fundamentals',
    bullets: [
      'Foundations of operationalising MITRE ATT&CK and application of the ATT&CK Navigator.',
      'FIN6 emulation plans; uniting threat and risk management with NIST 800-53 and MITRE ATT&CK.',
      'Threat alignment and emulation planning for purple teams; foundations of breach and attack simulation.',
    ],
  },
  {
    id: 'bluefire',
    title: 'VAPT Intern',
    company: 'Bluefire Redteam LLP',
    employment: 'Internship',
    period: 'Apr 2021 â€” Jun 2021',
    location: 'Ahmedabad, India',
    phase: 'Security Fundamentals',
    bullets: [
      'Understanding and implementing the five phases of VAPT, and post-exploitation technique.',
      'Wrote a blog on the EternalBlue attack and presented it at The Mainframe Talk.',
      'Researched the NoCry ransomware family and produced a report.',
    ],
  },
  {
    id: 'anti-phishing',
    title: 'Anti Phishing Intern',
    company: 'Anti Cyber Crime Society',
    employment: 'Internship',
    period: 'Apr 2021 â€” May 2021',
    location: 'India',
    phase: 'Security Fundamentals',
    bullets: ['Submitted 32 fake and spam websites for takedown within a single month.'],
  },
]
