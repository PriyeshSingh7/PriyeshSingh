import { principles } from '../data/philosophy'
import { Reveal } from './ui/Reveal'

export function Philosophy() {
  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="glow-accent left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 bg-accent/10"
      />

      <div className="shell relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal className="flex items-center gap-3">
            <span className="label-mono text-accent">05</span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span className="label-mono">Philosophy</span>
          </Reveal>

          {/* This statement is the section heading — the principles below are its h3s. */}
          <Reveal delay={90}>
            <h2 className="t-statement mt-7 text-balance text-fg">
              The goal isn&rsquo;t to <span className="text-accent">look secure</span>.
              <br />
              It&rsquo;s to understand{' '}
              <span className="text-accent">how compromise actually happens</span>.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="t-lead mt-8 max-w-lg text-pretty">
              Controls on a diagram and controls under pressure are different things. The work is to
              close that gap — safely, and with evidence.
            </p>
          </Reveal>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
          {principles.map((principle, i) => (
            <Reveal key={principle.index} as="li" delay={i * 80} className="bg-surface">
              <div className="group p-6 transition-colors duration-500 hover:bg-surface-2">
                <div className="flex items-baseline gap-4">
                  <span className="label-mono transition-colors duration-500 group-hover:text-accent">
                    {principle.index}
                  </span>
                  <h3 className="text-[16.5px] font-semibold tracking-tight text-fg">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-2.5 pl-10 text-[14.5px] leading-relaxed text-fg-muted text-pretty">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
