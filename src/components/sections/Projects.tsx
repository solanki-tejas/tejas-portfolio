import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'
import { RichText } from '@/components/ui/rich-text'
import { useSite } from '@/context/site-context'

export function Projects() {
  const { projects, sections } = useSite()
  const index = sections.findIndex((section) => section.id === 'built')
  const meta = sections[index]

  return (
    <Section id="built" index={index + 1} title={meta.title} note={meta.note}>
      <ol className="space-y-11 lg:space-y-14">
        {projects.map((project, position) => (
          <li
            key={project.id}
            className="border-t border-ink/10 pt-8 first:border-t-0 first:pt-0"
          >
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="font-mono text-micro tabular-nums text-ink-faint">
                  {String(position + 1).padStart(2, '0')}
                </span>
                <h3 className="text-heading font-semibold text-balance">{project.name}</h3>
              </div>

              <div className="mt-6 grid gap-x-12 gap-y-7 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="max-w-[62ch] text-ink-soft">
                    <RichText text={project.summary} />
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5 text-ink-soft before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-margin/70"
                      >
                        <RichText text={highlight} />
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="space-y-5 border-t border-ink/10 pt-5 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div>
                    <dt className="font-mono text-micro uppercase text-ink-faint">
                      Kind
                    </dt>
                    <dd className="mt-2.5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant={tag === 'Live' ? 'sage' : 'blue'}>
                          {tag}
                        </Badge>
                      ))}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-micro uppercase text-ink-faint">
                      Stack
                    </dt>
                    <dd className="mt-2.5 font-mono text-caption leading-relaxed text-ink-soft">
                      {project.stack.join('  ·  ')}
                    </dd>
                  </div>

                  {project.links.length > 0 ? (
                    <div>
                      <dt className="font-mono text-micro uppercase text-ink-faint">
                        Live
                      </dt>
                      <dd className="mt-2.5 flex flex-wrap gap-x-6 gap-y-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            data-sound="link"
                            className="ink-link inline-flex items-center gap-1 font-mono text-caption"
                          >
                            {link.label}
                            <ArrowUpRight aria-hidden className="size-3.5" />
                          </a>
                        ))}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
