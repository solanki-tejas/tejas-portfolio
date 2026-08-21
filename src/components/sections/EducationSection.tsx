import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { useSite } from '@/context/site-context'

export function EducationSection() {
  const { education, sections } = useSite()
  const index = sections.findIndex((section) => section.id === 'school')
  const meta = sections[index]

  return (
    <Section id="school" index={index + 1} title={meta.title} note={meta.note}>
      <ol className="space-y-11">
        {education.map((entry) => (
          <li
            key={entry.id}
            className="border-t border-ink/10 pt-8 first:border-t-0 first:pt-0"
          >
            <Reveal>
              <h3 className="text-heading font-semibold text-balance">{entry.institution}</h3>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/10 pt-6 xl:grid-cols-4">
                <div>
                  <dt className="font-mono text-micro uppercase text-ink-faint">
                    Degree
                  </dt>
                  <dd className="mt-1.5 font-display text-subheading text-ink">{entry.degree}</dd>
                </div>
                <div>
                  <dt className="font-mono text-micro uppercase text-ink-faint">
                    Location
                  </dt>
                  <dd className="mt-1.5 font-display text-subheading text-ink">{entry.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-micro uppercase text-ink-faint">
                    {entry.start ? 'Duration' : 'Finished'}
                  </dt>
                  <dd className="mt-1.5 font-display text-subheading tabular-nums text-ink">
                    {entry.start ? `${entry.start} — ${entry.end}` : entry.end}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-micro uppercase text-ink-faint">
                    {entry.gradeLabel}
                  </dt>
                  <dd className="mt-1.5 font-display text-subheading font-semibold tabular-nums text-ink">
                    {entry.grade}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
