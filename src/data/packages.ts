import type { PackageItem } from './types'

export const packages: PackageItem[] = [
  {
    id: 'react-fullscreen-image-viewer',
    name: 'react-fullscreen-image-viewer',
    install: 'npm install react-fullscreen-image-viewer',
    description:
      'A row of thumbnails for React. Click one and it opens **fullscreen**, ready to zoom.',
    points: [
      'Scroll to **zoom**, drag the row to look through the rest.',
      '**Arrow keys** move between images, **Escape** shuts it.',
      'Optional **download** button, and you choose the thumbnail size.',
    ],
    npmUrl: 'https://www.npmjs.com/package/react-fullscreen-image-viewer',
  },
  {
    id: 'file-viewer',
    name: '@tejas.solanki/file-viewer',
    install: 'npm install @tejas.solanki/file-viewer',
    description:
      'One React modal that opens **images, video, PDFs, and audio** — from a link or a Blob.',
    points: [
      'Works out the **file type** itself, so you just hand it a list.',
      '**Zoom and pan** on images, **page by page** on PDFs, normal controls for media.',
      'Thumbnail grid, keyboard shortcuts, and it fits small screens.',
    ],
    npmUrl: 'https://www.npmjs.com/package/@tejas.solanki/file-viewer',
  },
]
