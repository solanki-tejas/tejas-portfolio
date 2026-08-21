import type { TooltipRenderProps } from 'react-joyride'
import { cn } from '@/lib/utils'

/** Paper card for Joyride — same type, margin line, and stamp buttons as the site. */
export function TourTooltip({
  backProps,
  primaryProps,
  skipProps,
  tooltipProps,
  index,
  size,
  isLastStep,
  step,
}: TooltipRenderProps) {
  return (
    <div {...tooltipProps} className="notebook-tour">
      <button type="button" {...skipProps} className="notebook-tour-skip">
        Skip
      </button>

      {step.title ? <p className="notebook-tour-title">{step.title}</p> : null}

      <div className="notebook-tour-body">{step.content}</div>

      <div className="notebook-tour-footer">
        <span className="notebook-tour-progress">
          {String(index + 1).padStart(2, '0')} / {String(size).padStart(2, '0')}
        </span>
        <div className="notebook-tour-actions">
          {index > 0 ? (
            <button type="button" {...backProps} className="notebook-tour-back">
              Back
            </button>
          ) : null}
          <button
            type="button"
            {...primaryProps}
            className={cn('notebook-tour-next', isLastStep && 'is-done')}
          >
            {isLastStep ? 'Done' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
