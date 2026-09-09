import { site, socials } from '../data/site'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal>
          <div className="card card-static relative overflow-hidden px-6 py-14 sm:px-10 md:px-14 md:py-20">
            {/* Ambient wash */}
            <div
              aria-hidden="true"
              className="glow-accent -top-24 left-1/4 h-72 w-72 bg-accent/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '28px 28px',
                maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 70% 80% at 50% 50%, #000, transparent 75%)',
              }}
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <span className="label-mono">06 / Contact</span>

              <h2 className="t-h2 mt-6 text-balance text-fg">
                Have a difficult <span className="text-gradient-accent">security problem</span>?
              </h2>

              <p className="t-lead mx-auto mt-6 max-w-xl text-pretty">
                Open to conversations around OT/ICS security, offensive security, VAPT, red teaming
                and critical infrastructure.
              </p>

              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Connect with Priyesh
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <Icon name="linkedin" size={17} />
                  LinkedIn
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <Icon name="x" size={15} />
                  X / Twitter
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>

              <p className="label-mono mt-10 leading-relaxed">
                {site.location}
                <span aria-hidden="true"> · </span>
                Available for OT/ICS &amp; offensive security engagements
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
