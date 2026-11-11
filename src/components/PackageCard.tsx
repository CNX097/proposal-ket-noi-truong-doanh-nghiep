import { Store, Presentation, Radio, Check, Users, Clock, ArrowRight, type LucideIcon } from 'lucide-react'
import type { Package, PackageId } from '../data/packages'

export const PACKAGE_ICONS: Record<PackageId, LucideIcon> = {
  jobfair: Store,
  workshop: Presentation,
  livestream: Radio,
}

export function PackageCard({ pkg, onQuote }: { pkg: Package; onQuote: (id: PackageId) => void }) {
  const Icon = PACKAGE_ICONS[pkg.id]
  return (
    <article className={`pkg-card pkg-${pkg.id}`} aria-labelledby={`pkg-${pkg.id}-title`}>
      <div className="pkg-card-top">
        <div className="pkg-icon">
          <Icon size={26} aria-hidden="true" />
        </div>
        <p className="pkg-subtitle">{pkg.subtitle}</p>
        <h3 className="pkg-name" id={`pkg-${pkg.id}-title`}>
          {pkg.name}
        </h3>
        <p className="pkg-tagline">{pkg.tagline}</p>
        <div className="pkg-meta">
          <span>
            <Users size={16} aria-hidden="true" /> {pkg.scale}
          </span>
          <span>
            <Clock size={16} aria-hidden="true" /> {pkg.duration}
          </span>
        </div>
      </div>

      <div className="pkg-card-body">
        <p className="pkg-format">{pkg.format}</p>
        <p className="pkg-list-title">Quyền lợi doanh nghiệp</p>
        <ul className="pkg-benefits">
          {pkg.benefits.map((b) => (
            <li key={b}>
              <Check size={18} aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pkg-card-foot">
        <p className="pkg-price">Liên hệ báo giá</p>
        <button type="button" className="btn btn-primary pkg-cta" onClick={() => onQuote(pkg.id)}>
          Nhận báo giá <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
