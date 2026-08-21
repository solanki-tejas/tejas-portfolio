import { Fragment } from 'react'

const SEGMENT = /(\*\*[^*]+\*\*)/g

/**
 * Renders content strings that mark their key words with `**double asterisks**`,
 * so the copy in `src/data` stays plain, editable text.
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(SEGMENT).map((segment, index) =>
        segment.startsWith('**') && segment.endsWith('**') ? (
          <strong key={index} className="font-semibold text-ink">
            {segment.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={index}>{segment}</Fragment>
        ),
      )}
    </>
  )
}
