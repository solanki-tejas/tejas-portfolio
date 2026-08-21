# Tejas Solanki — Portfolio

Personal portfolio of [Tejas Solanki](https://in.linkedin.com/in/tejas-solanki-4160a0161), a full stack developer based in Ahmedabad. Single page covering work, projects, published npm packages, education, and contact.

Built with React 18, Vite, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually http://localhost:5173).

## Scripts

| Script              | What it does                       |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server               |
| `npm run build`     | Typecheck and build to `dist/`     |
| `npm run preview`   | Serve the production build locally |
| `npm run typecheck` | Run TypeScript with no output      |

## Editing the content

All page copy lives in typed files under `src/data`. Change the data, not the components.

| File                     | Holds                                      |
| ------------------------ | ------------------------------------------ |
| `src/data/profile.ts`    | Name, role, intro, languages, contact, resume |
| `src/data/experience.ts` | Jobs and bullets                           |
| `src/data/education.ts`  | Schools                                    |
| `src/data/projects.ts`   | Projects                                   |
| `src/data/skills.ts`     | Skill groups                               |
| `src/data/packages.ts`   | Published npm packages                     |
| `src/data/sections.ts`   | Section order, tab labels, and headings    |
| `src/data/types.ts`      | The shape of all of the above              |

Key words in those strings can be wrapped in `**double asterisks**` to render bold.

### Adding a project

Push another object onto the array in `src/data/projects.ts`. It renders automatically.

```ts
{
  id: 'my-project',
  name: 'Project name',
  kind: 'client',
  tags: ['Client project'],
  summary: 'One line about what it is.',
  highlights: ['Something it does.'],
  stack: ['React', 'NestJS'],
  links: [{ label: 'Live', href: 'https://example.com' }],
}
```

### Replacing the resume

Overwrite `public/resume.pdf`. The download buttons on the page use that file.

## npm packages

- [`react-fullscreen-image-viewer`](https://www.npmjs.com/package/react-fullscreen-image-viewer)
- [`@tejas.solanki/file-viewer`](https://www.npmjs.com/package/@tejas.solanki/file-viewer)
