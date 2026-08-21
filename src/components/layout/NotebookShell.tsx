import type { ReactNode } from 'react'

/**
 * The page is the paper: full bleed, no floating card. A coral margin rule runs
 * down the left of the text column for the whole length of the notebook.
 */
export function NotebookShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-10 pl-rail">
      <div className="mx-auto w-full max-w-page px-5 sm:px-8 lg:px-10 2xl:px-14">
        <div className="border-l border-margin/40 pl-5 sm:pl-9 lg:pl-11 2xl:pl-16">
          {children}
        </div>
      </div>
    </main>
  )
}
