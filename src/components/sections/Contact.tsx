import { Download, Linkedin, Mail, Phone } from 'lucide-react'
import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { useSite } from '@/context/site-context'

export function Contact() {
  const { profile, sections } = useSite()
  const index = sections.findIndex((section) => section.id === 'hello')
  const meta = sections[index]

  const channels = [
    {
      key: 'phone',
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
      external: false,
    },
    {
      key: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: profile.linkedin.label,
      href: profile.linkedin.href,
      external: true,
    },
  ]

  return (
    <Section id="hello" index={index + 1} title={meta.title} note={meta.note}>
      <Reveal>
        <p className="max-w-[52ch] text-ink-soft">
          Email is the fastest way to reach me. Happy to talk about work, something you are
          planning, or anything on this page.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-7 block border-y border-ink/12 py-6 transition-colors hover:border-highlight/60"
        >
          <span className="font-mono text-micro uppercase text-ink-faint">Email</span>
          <span className="mt-2 flex items-center gap-3 font-display text-heading font-semibold text-ink">
            <Mail
              aria-hidden
              className="size-5 shrink-0 text-ink-faint transition-colors group-hover:text-margin"
            />
            <span className="break-all">{profile.email}</span>
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {channels.map((channel) => (
            <div key={channel.key}>
              <dt className="flex items-center gap-2 font-mono text-micro uppercase text-ink-faint">
                <channel.icon aria-hidden className="size-3.5" />
                {channel.label}
              </dt>
              <dd className="mt-1.5">
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: '_blank', rel: 'noreferrer noopener', 'data-sound': 'link' }
                    : {})}
                  className="ink-link break-all"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button asChild>
            <a href={profile.resumeUrl} download={profile.resumeFileName}>
              <Download aria-hidden />
              Download resume
            </a>
          </Button>
          <span aria-hidden className="-rotate-2 font-hand text-xl text-margin">
            thanks for reading
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
