import { site, socials } from '../data/site'
import { Icon } from './ui/Icon'

const DISCIPLINES = ['OT/ICS', 'RED TEAM', 'VAPT', 'CRITICAL INFRASTRUCTURE']

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-md border border-line-strong bg-surface-2 font-mono text-[12px] text-fg-muted"
            >
              {site.monogram}
            </span>
            <p className="text-[13px] font-semibold tracking-[0.06em] text-fg">
              © {new Date().getFullYear()} PRIYESH SINGH
            </p>
          </div>

          <p className="label-mono mt-4">Security Consultant / Researcher</p>

          <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
            {DISCIPLINES.map((discipline, i) => (
              <li key={discipline} className="label-mono flex items-center gap-2">
                {discipline}
                {i < DISCIPLINES.length - 1 ? (
                  <span aria-hidden="true" className="text-accent">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Priyesh Singh on LinkedIn (opens in a new tab)"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface-2 text-fg-muted transition-colors duration-300 hover:border-accent/60 hover:text-accent"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Priyesh Singh on X (opens in a new tab)"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface-2 text-fg-muted transition-colors duration-300 hover:border-accent/60 hover:text-accent"
          >
            <Icon name="x" size={16} />
          </a>
          <a href="#top" className="btn btn-ghost btn-sm ml-2">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
