import { ArrowDown, Download, Mail } from 'lucide-react'
import { Reveal } from '@/components/layout/Reveal'
import { Button } from '@/components/ui/button'
import { RichText } from '@/components/ui/rich-text'
import { useSite } from '@/context/site-context'
import { scrollToSection } from '@/lib/scroll-to-section'
import { formatExperience, totalExperienceMonths } from '@/lib/total-experience'

export function Hero() {
  const { profile, experience } = useSite()

  const current = experience.find((job) => job.current)
  const tenure = formatExperience(totalExperienceMonths(experience))

  const facts = [
    current ? { label: 'Now', value: `${current.title}, ${current.company}` } : null,
    { label: 'Experience', value: tenure },
    { label: 'Based in', value: profile.location },
    { label: 'Speaks', value: profile.languages.join(', ') },
  ].filter((fact): fact is { label: string; value: string } => fact !== null)

  return (
    <section
      id="cover"
      aria-labelledby="cover-title"
      className="scroll-mt-28 pb-12 pt-10 sm:pt-14 lg:scroll-mt-10 lg:pb-20 lg:pt-20"
    >
      <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-micro uppercase text-ink-faint">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-tag-sage" />
                Portfolio
              </span>
              <span aria-hidden>/</span>
              <span>{profile.location}</span>
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1
              id="cover-title"
              className="mt-5 text-hero font-semibold"
              style={{ fontVariationSettings: "'SOFT' 40, 'WONK' 1" }}
            >
              Tejas <span className="italic text-ink-soft">Solanki</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 font-display text-display font-medium">
              <span className="marker">{profile.role}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="lg:col-span-5">
          <p className="paper-ruled max-w-[54ch] text-ink-soft">
            <RichText text={profile.intro} />
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.24}>
        <dl className="mt-11 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink/12 pt-7 xl:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-micro uppercase text-ink-faint">{fact.label}</dt>
              <dd className="mt-1.5 font-display text-subheading font-medium text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button asChild>
            <a href={profile.resumeUrl} download={profile.resumeFileName}>
              <Download aria-hidden />
              Download resume
            </a>
          </Button>

          <Button asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden />
              Say hello
            </a>
          </Button>

          <Button variant="ghost" onClick={() => scrollToSection('work')}>
            <ArrowDown aria-hidden />
            Read on
          </Button>

          <span aria-hidden className="hidden -rotate-3 font-hand text-xl text-margin xl:inline">
            ← start here
          </span>
        </div>
      </Reveal>
    </section>
  )
}
