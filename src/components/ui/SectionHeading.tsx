import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  /** e.g. "01" */
  index: string
  /** e.g. "EXPERTISE" */
  eyebrow: string
  title: ReactNode
  subtitle?: string
  /** Constrain the subtitle measure. */
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <Reveal className="flex items-center gap-3">
        <span className="label-mono text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
        <span className="label-mono">{eyebrow}</span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="t-h2 mt-6 text-fg text-balance">{title}</h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={140}>
          <p className="t-lead mt-5 max-w-2xl text-pretty">{subtitle}</p>
        </Reveal>
      ) : null}
    </header>
  )
}
