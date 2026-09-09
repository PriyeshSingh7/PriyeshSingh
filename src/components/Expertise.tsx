import { expertiseAreas } from '../data/expertise'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Expertise"
          title="Where I operate."
          subtitle="A security practice built around offensive validation, industrial environments, and practical risk reduction."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {expertiseAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 90} className="h-full">
              <article className="card group flex h-full flex-col p-6 lg:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface-3 text-fg-muted transition-colors duration-500 group-hover:border-accent/50 group-hover:text-accent">
                    <Icon name={area.icon} size={20} />
                  </span>
                  <span className="label-mono transition-colors duration-500 group-hover:text-accent">
                    {area.index}
                  </span>
                </div>

                <h3 className="t-h3 mt-6 text-fg">{area.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted text-pretty">
                  {area.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {area.keywords.map((keyword) => (
                    <li key={keyword} className="tag">
                      {keyword}
                    </li>
                  ))}
                </ul>

                {/* Corner tick — quiet geometric detail */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-line-strong transition-colors duration-500 group-hover:border-accent/70"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
