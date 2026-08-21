import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { useSite } from '@/context/site-context'

export function Skills() {
  const { skills, sections } = useSite()
  const index = sections.findIndex((section) => section.id === 'notes')
  const meta = sections[index]

  return (
    <Section id="notes" index={index + 1} title={meta.title} note={meta.note}>
      <div className="grid grid-cols-2 gap-px border border-ink/12 bg-ink/12 xl:grid-cols-4">
        {skills.map((group, position) => (
          <Reveal
            key={group.id}
            delay={position * 0.05}
            className="flex flex-col bg-paper p-4 sm:p-5 lg:p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-micro tabular-nums text-margin">
                {String(position + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-micro tabular-nums text-ink-faint">
                {String(group.items.length).padStart(2, '0')}
              </span>
            </div>

            <h3 className="mt-2.5 font-display text-subheading font-semibold text-balance text-ink">
              {group.label}
            </h3>

            <ul className="mt-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2.5 border-b border-dashed border-ink/15 py-2 text-ink-soft last:border-b-0"
                >
                  <span aria-hidden className="size-1 shrink-0 rounded-full bg-tag-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
