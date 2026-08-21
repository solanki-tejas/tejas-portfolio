import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'nirmaan',
    name: 'Nirmaan — AI Floor Plan Generator',
    kind: 'personal',
    tags: ['Personal', 'Live'],
    summary:
      'Say or type what you want, and it draws you a **floor plan**. It listens in **Gujarati, Hindi, Hinglish, or English**.',
    highlights: [
      'Draws the plan on a **live canvas** you can see straight away.',
      'Saves your chats, exports to **PDF**, and keeps count of tokens used.',
      'Separate apps for **people and admins**.',
    ],
    stack: [
      'React (Vite)',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Konva',
      'Gemini',
      'Sarvam AI',
      'Razorpay',
      'Resend',
    ],
    links: [
      { label: 'User frontend', href: 'https://nirmaanclub.in' },
      { label: 'Admin frontend', href: 'https://admin.nirmaanclub.in' },
    ],
  },
  {
    id: 'cake-n-joy',
    name: 'Cake N Joy — Bakery Franchise Portal',
    kind: 'client',
    tags: ['Personal', 'Client project'],
    summary:
      'The **stock and billing system** behind a bakery chain with **more than 30 shops**.',
    highlights: [
      '**Live stock and orders** in every branch at once.',
      'Billing and reports that cut the manual work by **85%**.',
    ],
    stack: ['Next.js', 'React', 'MongoDB', 'Socket.IO'],
    links: [],
  },
]
