import type { Experience } from './types'

export const experience: Experience[] = [
  {
    id: 'nuestack',
    company: 'Nuestack Solutions',
    title: 'SDE 2',
    location: 'Remote — Texas, USA',
    start: '12/2025',
    end: 'Present',
    current: true,
    bullets: [
      'Rebuilt a **US casino platform** from the ground up on NestJS, React, and PostgreSQL.',
      'Built both the player app and the admin app — sign-in, **roles and permissions**, and support tools.',
      'Plugged in game providers, **IDComply** for identity checks, and **GeoComply** for location rules.',
      'Shipped the money features: **daily bonuses, jackpots, vaults, and rewards**.',
      'Moved slow work into background queues with **BullMQ, Redis, and Docker**, so pages stopped waiting on it.',
      'Turned Gold Machine into a **PWA** people can install like a normal app.',
    ],
  },
  {
    id: 'seven-square',
    company: 'Seven Square Technosoft',
    title: 'Software Engineer',
    location: 'Ahmedabad, GJ, India',
    start: '02/2023',
    end: '12/2025',
    current: false,
    bullets: [
      'Built an **insurance case portal** with its own roles, reports, and multi-step approvals.',
      'Built a **CMS in several languages** where the team makes up its own fields and content types.',
      'Added live **shipment tracking and billing** over Socket.IO, which **halved** the manual tracking work.',
      'Made a tool for **filling and editing data straight on a PDF**, drawn with Konva.',
      'Worked on an **AI summary tool** that transcribes video and audio using OpenAI and Deepgram.',
      'Built a **shipping system** where access can be locked down to a single field.',
      'Built a **salon booking app** that keeps slots live and refuses double bookings.',
      '**Led a small team** on two projects, from planning to launch.',
    ],
  },
  {
    id: 'provitious',
    company: 'Provitious Technologies',
    title: 'Software Engineer',
    location: 'Ahmedabad, GJ, India',
    start: '05/2022',
    end: '02/2023',
    current: false,
    bullets: [
      'Where I started. Built an **HRMS** for attendance, leave, and onboarding in React and Redux.',
      'Built a **Kanban board** for tasks that the office ended up using across several projects.',
    ],
  },
]
