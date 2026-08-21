import type { Experience } from '@/data'

type YearMonth = {
  year: number
  month: number
}

function parseYearMonth(value: string, now: Date): YearMonth | null {
  if (value.toLowerCase() === 'present') {
    return { year: now.getFullYear(), month: now.getMonth() + 1 }
  }

  const [month, year] = value.split('/').map(Number)
  if (!Number.isFinite(month) || !Number.isFinite(year)) return null
  if (month < 1 || month > 12) return null

  return { year, month }
}

function monthIndex(date: YearMonth) {
  return date.year * 12 + date.month
}

/**
 * Months worked, from the job list. Ranges that touch or overlap are merged so
 * a job that ends the month another starts is not counted twice. A current role
 * runs through this month, so the figure moves on its own as the calendar does.
 */
export function totalExperienceMonths(jobs: Experience[], now = new Date()): number {
  const ranges = jobs
    .map((job) => {
      const start = parseYearMonth(job.start, now)
      const end = parseYearMonth(job.end, now)
      if (!start || !end) return null

      const from = monthIndex(start)
      // End is exclusive. "Present" is this month, so the exclusive end is next month.
      const to = monthIndex(end) + (job.current || job.end.toLowerCase() === 'present' ? 1 : 0)
      if (to <= from) return null

      return { from, to }
    })
    .filter((range): range is { from: number; to: number } => range !== null)
    .sort((a, b) => a.from - b.from)

  if (ranges.length === 0) return 0

  const merged = [{ ...ranges[0] }]
  for (const range of ranges.slice(1)) {
    const last = merged[merged.length - 1]
    if (range.from <= last.to) {
      last.to = Math.max(last.to, range.to)
    } else {
      merged.push({ ...range })
    }
  }

  return merged.reduce((sum, range) => sum + (range.to - range.from), 0)
}

export function formatExperience(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const yearLabel = years === 0 ? null : years === 1 ? '1 year' : `${years} years`
  const monthLabel = months === 0 ? null : months === 1 ? '1 month' : `${months} months`

  return [yearLabel, monthLabel].filter(Boolean).join(' ') || '0 months'
}
