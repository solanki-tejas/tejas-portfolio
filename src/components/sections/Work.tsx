import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'
import { RichText } from '@/components/ui/rich-text'
import { useSite } from '@/context/site-context'

export function Work() {
  const { experience, sections } = useSite()
  const index = sections.findIndex((section) => section.id === 'work')
  const meta = sections[index]

  return (
    <Section id="work" index={index + 1} title={meta.title} note={meta.note}>
      <ol className="space-y-10 lg:space-y-12">
        {experience.map((job) => (
          <li
            key={job.id}
            className="border-t border-ink/10 pt-7 first:border-t-0 first:pt-0"
          >
            <Reveal className="grid gap-x-10 gap-y-4 lg:grid-cols-[minmax(0,15rem)_1fr]">
              <div>
                <h3 className="font-display text-subheading font-semibold text-ink">
                  {job.company}
                </h3>
                <p className="mt-1 text-ink-soft">{job.title}</p>
                <p className="mt-3 font-mono text-caption tabular-nums text-ink">
                  {job.start} — {job.end}
                </p>
                <p className="mt-0.5 font-mono text-caption text-ink-faint">{job.location}</p>
                {job.current ? (
                  <Badge variant="sage" className="mt-3">
                    Current
                  </Badge>
                ) : null}
              </div>

              <ul className="2xl:columns-2 2xl:gap-x-12">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative mb-3 break-inside-avoid pl-5 text-ink-soft last:mb-0 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-margin/70"
                  >
                    <RichText text={bullet} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
