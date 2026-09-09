import { projects } from '../data/projects'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Selected Work"
          title="Security, tested in reality."
          subtitle="Representative engagements and capabilities. Client identities are withheld — the work is described, the customer is not."
        />

        <ol className="mt-14 border-t border-line lg:mt-16">
          {projects.map((project, i) => (
            <Reveal key={project.id} as="li" delay={Math.min(i * 60, 240)}>
              <article className="group relative grid gap-x-8 gap-y-4 border-b border-line py-8 transition-colors duration-500 hover:border-line-strong md:grid-cols-[auto_1fr_auto] md:py-10">
                {/* Accent rail that grows on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 top-0 hidden h-full w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100 lg:block"
                />

                <span className="label-mono pt-1 transition-colors duration-500 group-hover:text-accent md:w-12">
                  {project.index}
                </span>

                <div className="max-w-2xl">
                  <h3 className="t-h3 text-fg transition-colors duration-500 group-hover:text-accent-soft">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-muted text-pretty">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="label-mono self-start pt-1 md:text-right">{project.domain}</span>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
