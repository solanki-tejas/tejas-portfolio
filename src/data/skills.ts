import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    id: 'languages-frameworks',
    label: 'Languages & frameworks',
    items: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'NestJS',
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
      'PostgreSQL',
      'MongoDB',
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
]
