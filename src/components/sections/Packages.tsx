import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { RichText } from '@/components/ui/rich-text'
import { useSite } from '@/context/site-context'
import { useSound } from '@/context/sound-context'

function InstallCommand({ command }: { command: string }) {
  const { play } = useSound()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      play('copy')
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      data-sound="none"
      onClick={handleCopy}
      className="group flex w-full items-center justify-between gap-4 border border-ink/15 bg-paper-sunk/40 px-4 py-3 text-left transition-colors hover:border-ink/30"
    >
      <code className="truncate font-mono text-caption text-ink-soft">{command}</code>
      <span className="flex shrink-0 items-center gap-1.5 font-mono text-micro uppercase text-ink-faint transition-colors group-hover:text-ink">
        {copied ? <Check aria-hidden className="size-3.5" /> : <Copy aria-hidden className="size-3.5" />}
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  )
}

export function Packages() {
  const { packages, sections } = useSite()
  const index = sections.findIndex((section) => section.id === 'packages')
  const meta = sections[index]

  return (
    <Section id="packages" index={index + 1} title={meta.title} note={meta.note}>
      <p className="max-w-[56ch] text-ink-soft">
        Two React components I put on npm and still use in my own work.
      </p>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {packages.map((pkg, position) => (
          <Reveal
            key={pkg.id}
            delay={position * 0.06}
            // min-w-0 lets the card shrink with the column; without it the long
            // install command sets a floor wider than a phone screen.
            className="paper-card flex min-w-0 flex-col p-5 sm:p-6 lg:p-7"
          >
            <div className="flex items-start justify-between gap-5">
              <h3 className="font-mono text-[0.9375rem] leading-snug text-ink">{pkg.name}</h3>
              <a
                href={pkg.npmUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-sound="link"
                className="ink-link inline-flex shrink-0 items-center gap-1 font-mono text-micro uppercase"
              >
                npm
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </div>

            <p className="mt-4 text-ink-soft">
              <RichText text={pkg.description} />
            </p>

            <ul className="mt-4 space-y-2.5">
              {pkg.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-ink-soft before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-margin/70"
                >
                  <RichText text={point} />
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <InstallCommand command={pkg.install} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
