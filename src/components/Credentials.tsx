import { useState } from 'react'
import {
  credentialGroups,
  education,
  primaryCertifications,
  secondaryCredentials,
  service,
  type CredentialStatus,
  type PrimaryCertification,
} from '../data/credentials'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Credentials() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="credentials" className="section">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Credentials"
          title="Proof over labels."
          subtitle="Practical, hands-on certifications — every one of them independently verifiable. Follow the links; they go to the issuer, not to a screenshot."
        />

        {/* ---------- Primary certifications ---------- */}
        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2">
          {primaryCertifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 90} className="h-full">
              <PrimaryCard cert={cert} />
            </Reveal>
          ))}
        </div>

        {/* ---------- Secondary credentials ---------- */}
        <Reveal className="mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-10">
          <div>
            <h3 className="t-h3 text-fg">Further certifications & training</h3>
            <p className="mt-2 text-[15px] text-fg-muted">
              {secondaryCredentials.length} additional credentials across offensive security,
              networking and threat-informed defence.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            aria-expanded={showAll}
            aria-controls="secondary-credentials"
            className="btn btn-ghost btn-sm"
          >
            {showAll ? 'Collapse' : 'Show all'}
            <span aria-hidden="true">{showAll ? '↑' : '↓'}</span>
          </button>
        </Reveal>

        <div id="secondary-credentials" hidden={!showAll} className="mt-10 space-y-10">
          {credentialGroups.map((group) => {
            const items = secondaryCredentials.filter((c) => c.group === group.id)
            if (items.length === 0) return null

            return (
              <div key={group.id}>
                <div className="flex items-center gap-3">
                  <h4 className="label-mono text-fg-muted">{group.label}</h4>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  <span className="label-mono">{String(items.length).padStart(2, '0')}</span>
                </div>

                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {items.map((credential) => (
                    <li
                      key={`${credential.name}-${credential.issued}`}
                      className="card-flat flex items-start justify-between gap-4 px-4 py-3.5"
                    >
                      <div className="min-w-0">
                        <p className="text-[14.5px] font-medium leading-snug text-fg text-pretty">
                          {credential.name}
                        </p>
                        <p className="mt-1 text-[13px] text-fg-subtle">{credential.issuer}</p>
                        {credential.credentialId ? (
                          <p className="mt-1 truncate font-mono text-[11px] text-fg-subtle/80">
                            ID {credential.credentialId}
                          </p>
                        ) : null}
                      </div>
                      <span className="label-mono shrink-0 pt-0.5">{credential.issued}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* ---------- Education & service ---------- */}
        <div className="mt-20 grid gap-10 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="label-mono">Education</h3>
            <ul className="mt-5 space-y-4">
              {education.map((entry) => (
                <li key={entry.institution} className="border-l border-line pl-5">
                  <p className="text-[15.5px] font-semibold tracking-tight text-fg">
                    {entry.institution}
                  </p>
                  <p className="mt-1 text-[14px] text-fg-muted">
                    {entry.qualification} — {entry.field}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="label-mono">Service</h3>
            <ul className="mt-5 space-y-4">
              {service.map((entry) => (
                <li key={entry.role} className="border-l border-line pl-5">
                  <p className="text-[15.5px] font-semibold tracking-tight text-fg">{entry.role}</p>
                  <p className="mt-1 text-[14px] text-fg-muted">
                    {entry.organisation}
                    <span className="text-fg-subtle"> · {entry.period}</span>
                  </p>
                  {entry.note ? (
                    <p className="mt-1.5 text-[13px] text-fg-subtle text-pretty">{entry.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function PrimaryCard({ cert }: { cert: PrimaryCertification }) {
  const expired = cert.status === 'expired'

  return (
    <article
      className={`card group flex h-full flex-col p-6 sm:p-8 ${
        expired ? 'opacity-95' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-[-0.03em] text-fg sm:text-[1.75rem]">
            {cert.abbr}
          </h3>
          <p className="mt-1.5 text-[15px] leading-snug text-fg-muted text-pretty">{cert.name}</p>
        </div>
        <StatusChip status={cert.status} />
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-line py-5">
        <Field label="Issuer" value={cert.issuer} />
        <Field label="Issued" value={cert.issued} />
        <Field label="Validity" value={cert.validity} accent={expired} />
        {cert.credentialId ? (
          <Field label="Credential ID" value={cert.credentialId} mono />
        ) : null}
      </dl>

      <p className="mt-5 text-[14.5px] leading-relaxed text-fg-muted text-pretty">{cert.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {cert.skills.map((skill) => (
          <li key={skill} className="tag">
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-sm ${expired ? 'btn-ghost' : 'btn-primary'}`}
        >
          {cert.verifyLabel}
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        {expired ? (
          <p className="text-[12.5px] text-amber">Listed for completeness — no longer current.</p>
        ) : null}
      </div>
    </article>
  )
}

function Field({
  label,
  value,
  mono = false,
  accent = false,
}: {
  label: string
  value: string
  mono?: boolean
  accent?: boolean
}) {
  return (
    <div className="min-w-0">
      <dt className="label-mono">{label}</dt>
      <dd
        className={`mt-1.5 truncate text-[13.5px] ${mono ? 'font-mono text-[12px]' : ''} ${
          accent ? 'text-amber' : 'text-fg'
        }`}
        title={value}
      >
        {value}
      </dd>
    </div>
  )
}

function StatusChip({ status }: { status: CredentialStatus }) {
  const config: Record<CredentialStatus, { label: string; className: string; icon: 'verified' | 'expired' }> = {
    active: {
      label: 'Active',
      className: 'border-mint/35 bg-mint/10 text-mint',
      icon: 'verified',
    },
    lifetime: {
      label: 'No expiry',
      className: 'border-cyan/35 bg-cyan/10 text-cyan',
      icon: 'verified',
    },
    expired: {
      label: 'Expired',
      className: 'border-amber/40 bg-amber/10 text-amber',
      icon: 'expired',
    },
  }

  const { label, className, icon } = config[status]

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] ${className}`}
    >
      <Icon name={icon} size={12} />
      {label}
    </span>
  )
}
