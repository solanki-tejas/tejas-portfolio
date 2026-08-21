import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    id: 'languages-frameworks',
    label: 'Languages & frameworks',
    items: [
      'JavaScript',
      'TypeScript',
      '**React.js**',
      '**Next.js**',
      '**Node.js**',
      '**NestJS**',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    id: 'interface-data',
    label: 'Interface & data',
    items: [
      'Tailwind CSS',
      'ShadCN',
      '**PostgreSQL**',
      '**MongoDB**',
      'Redis',
      'TypeORM',
      'Authentication',
      'RBAC',
    ],
  },
  {
    id: 'platform-tooling',
    label: 'Platform & tooling',
    items: ['Docker', 'AWS (EC2, S3)', 'PWA', 'Git', 'Jest', 'GitHub Actions'],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    items: [
      'Integrated **Stripe**, **Razorpay**, **Google Search**, **Google Maps**, **Auth0**, **Resend**, **SendGrid**, **AWS (S3, SES)**, **Twilio**, **Sentry**, and **Algolia**.',
      'Integrated **OpenAI**, **Gemini**, **Claude**, **ElevenLabs**, **Sarvam**, **Deepgram**, and **Grok** APIs.',
      'Used **Cursor**, **Antigravity**, and **Codex** IDE for development with proper planning and code reviewing.',
    ],
  },
]
