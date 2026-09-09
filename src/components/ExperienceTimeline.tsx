import { useState } from 'react'
import { CONFIDENTIAL_EMPLOYER, experience, phaseProgression } from '../data/experience'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** Roles shown before the "earlier roles" disclosure. */
const INITIAL_COUNT = 6

export function ExperienceTimeline() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? experience : experience.slice(0, INITIAL_COUNT)
  const hiddenCount = experience.length - INITIAL_COUNT

  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Built from the field."
          subtitle="Five years of progression, from security fundamentals through offensive testing to industrial control and consulting."
        />

        {/* Progression rail */}
        <Reveal delay={120}>
          <ol className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3">
            {phaseProgression.map((phase, i) => (
              <li key={phase} className="flex items-center gap-2">
                <span
                  className={`rounded-md border px-2.5 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase ${
                    i === phaseProgression.length - 1
                      ? 'border-accent/50 bg-accent/10 text-accent'
                      : 'border-line bg-surface-2 text-fg-subtle'
                  }`}
                >
                  {phase}
                </span>
                {i < phaseProgression.length - 1 ? (
                  <span aria-hidden="true" className="text-fg-subtle">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Timeline */}
        {/* Held to a readable column rather than the full 84rem shell. */}
        <ol className="relative mt-14 max-w-4xl lg:mt-16">
          {/* Spine */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-line-strong via-line to-transparent sm:block"
          />

          {visible.map((role, i) => (
            <Reveal key={role.id} as="li" delay={Math.min(i * 50, 200)}>
              <article className="relative pb-10 sm:pl-10">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-2 hidden h-[15px] w-[15px] items-center justify-center rounded-full border sm:flex ${
                    role.current
                      ? 'border-accent bg-base shadow-[0_0_0_4px_rgba(10,132,255,0.16)]'
                      : 'border-line-strong bg-surface-2'
                  }`}
                >
                  {role.current ? <span className="h-[5px] w-[5px] rounded-full bg-accent" /> : null}
                </span>

                <div className="card-flat p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-tight text-fg">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted">
                        {role.company ?? (
                          <span className="italic text-fg-subtle">{CONFIDENTIAL_EMPLOYER}</span>
                        )}
                        <span className="text-fg-subtle"> · {role.employment}</span>
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="font-mono text-[12px] tracking-[0.06em] text-fg-muted">
                        {role.period}
                      </p>
                      {role.location ? (
                        <p className="mt-1 text-[12px] text-fg-subtle">{role.location}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="tag">{role.phase}</span>
                    {role.current ? (
                      <span className="tag border-mint/30 text-mint">Current</span>
                    ) : null}
                  </div>

                  {/* Capped measure — full-width bullets ran to ~150 characters per line. */}
                  <ul className="mt-5 max-w-[74ch] space-y-2.5 border-t border-line pt-5">
                    {role.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3 text-[14.5px] leading-relaxed text-fg-muted">
                        <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                        <span className="text-pretty">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        {hiddenCount > 0 ? (
          <div className="sm:pl-10">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="btn btn-ghost btn-sm"
            >
              {expanded ? 'Show fewer roles' : `Show ${hiddenCount} earlier roles`}
              <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
