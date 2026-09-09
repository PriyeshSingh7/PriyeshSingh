import { heroMetrics, site, socials } from '../data/site'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Terminal } from './Terminal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Ambient light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-accent animate-drift -top-52 left-[6%] h-[24rem] w-[24rem] bg-accent/12" />
        <div className="glow-accent bottom-[-10rem] right-[4%] h-[22rem] w-[22rem] bg-cyan/8" />
      </div>

      <div className="shell relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
        {/* ---------------- Left ---------------- */}
        <div>
          <Reveal className="badge">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint" />
            <span className="label-mono text-fg-muted">Security Consultant / Researcher</span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="t-display mt-7 text-balance">
              <span className="block text-fg">Breaking systems.</span>
              <span className="block text-gradient-accent">Protecting what matters.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="t-lead mt-7 max-w-xl text-pretty">{site.heroLead}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#contact" className="btn btn-primary">
                Start a Conversation
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Icon name="linkedin" size={17} />
                View LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={310}>
            <p className="label-mono mt-10 leading-loose">
              {site.location}
              <span aria-hidden="true"> · </span>
              Open to engagements
            </p>
          </Reveal>
        </div>

        {/* ---------------- Right ---------------- */}
        <div className="lg:pl-4">
          <Reveal delay={200}>
            <Terminal />
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="bg-surface px-3 py-5 text-center sm:px-4">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="block text-xl font-bold tracking-tight text-fg sm:text-2xl">
                      {metric.value}
                    </span>
                    <span className="mt-2 block text-[11px] leading-tight text-fg-subtle">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={380}>
            <p className="label-mono mt-4 text-center leading-relaxed">
              Figures reflect professional experience to date
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
