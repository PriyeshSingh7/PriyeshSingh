export type Principle = {
  index: string
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    index: '01',
    title: 'Think like an attacker',
    body: 'Findings only matter once someone has walked the path end to end. Enumerate, chain, and prove the route a real adversary would take.',
  },
  {
    index: '02',
    title: 'Respect the environment',
    body: 'In OT and critical infrastructure, availability is the safety property. Test with methods the plant can survive — passive first, disruptive never by accident.',
  },
  {
    index: '03',
    title: 'Make risk actionable',
    body: 'A report is a decision tool. Prioritised remediation, business impact and hardening steps beat a stack of undifferentiated severity ratings.',
  },
  {
    index: '04',
    title: 'Keep learning',
    body: 'Attack surfaces move. Practical certifications, labs and research keep the methodology current rather than remembered.',
  },
]
