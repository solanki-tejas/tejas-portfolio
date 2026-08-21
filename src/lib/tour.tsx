import type { Step } from 'react-joyride'
import { RichText } from '@/components/ui/rich-text'
import { experience, profile, projects, skills } from '@/data'
import { formatExperience, totalExperienceMonths } from '@/lib/total-experience'

export const TOUR_STORAGE_KEY = 'tejas-portfolio:tour'

export function hasSeenTour() {
  try {
    return window.localStorage.getItem(TOUR_STORAGE_KEY) === 'seen'
  } catch {
    return false
  }
}

export function markTourSeen() {
  try {
    window.localStorage.setItem(TOUR_STORAGE_KEY, 'seen')
  } catch {
    // Private mode can refuse storage; the tour just runs again next time.
  }
}

/** Six stops over the main facts. Copy is taken from the live data files. */
export function getTourSteps(): Step[] {
  const keySkills = skills[0]
  const tenure = formatExperience(totalExperienceMonths(experience))

  return [
    {
      target: '[data-tour="intro"]',
      placement: 'bottom-start',
      title: profile.name,
      content: <p className="notebook-tour-role">{profile.role}</p>,
    },
    {
      target: '[data-tour="experience"]',
      placement: 'bottom-start',
      title: 'Experience',
      content: (
        <>
          <p className="notebook-tour-stat">{tenure}</p>
          <p className="notebook-tour-note">Counted from the first job through this month.</p>
        </>
      ),
    },
    {
      target: '[data-tour="key-skills"]',
      placement: 'bottom-start',
      title: keySkills.label,
      content: (
        <ul className="notebook-tour-list">
          {keySkills.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      target: '[data-tour="work"]',
      placement: 'bottom-start',
      title: 'Where I have worked',
      content: (
        <ul className="notebook-tour-list">
          {experience.map((job) => (
            <li key={job.id}>
              <strong>{job.company}</strong>
              <span className="notebook-tour-meta">
                {job.title} · {job.start} — {job.end}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      target: '[data-tour="built"]',
      placement: 'bottom-start',
      title: 'Things I have built',
      content: (
        <ul className="notebook-tour-list">
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong>
            </li>
          ))}
        </ul>
      ),
    },
    {
      target: '[data-tour="connect"]',
      placement: 'bottom-start',
      scrollOffset: 120,
      blockTargetInteraction: false,
      title: 'Resume and LinkedIn',
      content: (
        <div className="notebook-tour-links">
          <a href={profile.resumeUrl} download={profile.resumeFileName}>
            Download resume
          </a>
          <a href={profile.linkedin.href} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </div>
      ),
    },
  ]
}
