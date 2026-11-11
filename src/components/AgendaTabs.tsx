import { useRef, useState, type KeyboardEvent } from 'react'
import { Clock } from 'lucide-react'
import { PACKAGES, type PackageId } from '../data/packages'
import { PACKAGE_ICONS } from './PackageCard'

export function AgendaTabs() {
  const [active, setActive] = useState<PackageId>('jobfair')
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const pkg = PACKAGES.find((p) => p.id === active)!

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const i = PACKAGES.findIndex((p) => p.id === active)
    const next = PACKAGES[(i + (e.key === 'ArrowRight' ? 1 : PACKAGES.length - 1)) % PACKAGES.length]
    setActive(next.id)
    tabRefs.current[next.id]?.focus()
  }

  return (
    <div className="agenda">
      <h3 className="agenda-title">Agenda dự kiến theo từng gói</h3>
      <div className="agenda-tabs" role="tablist" aria-label="Chọn gói để xem agenda" onKeyDown={onKeyDown}>
        {PACKAGES.map((p) => {
          const Icon = PACKAGE_ICONS[p.id]
          const selected = p.id === active
          return (
            <button
              key={p.id}
              ref={(el) => {
                tabRefs.current[p.id] = el
              }}
              type="button"
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={selected}
              aria-controls={`panel-${p.id}`}
              tabIndex={selected ? 0 : -1}
              className={`agenda-tab ${selected ? 'is-active' : ''}`}
              onClick={() => setActive(p.id)}
            >
              <Icon size={18} aria-hidden="true" /> {p.name}
            </button>
          )
        })}
      </div>

      <div className="agenda-panel" role="tabpanel" id={`panel-${pkg.id}`} aria-labelledby={`tab-${pkg.id}`}>
        <ol className="agenda-list">
          {pkg.agenda.map((item, i) => (
            <li key={item.content}>
              <span className="agenda-index">{i + 1}</span>
              <span className="agenda-duration">{item.duration}</span>
              <span className="agenda-content">{item.content}</span>
            </li>
          ))}
        </ol>
        <p className="agenda-total">
          <Clock size={16} aria-hidden="true" /> Tổng thời lượng dự kiến: {pkg.totalDuration}
        </p>
      </div>
    </div>
  )
}
