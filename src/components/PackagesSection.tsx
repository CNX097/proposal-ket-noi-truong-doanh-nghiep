import { LayoutGrid } from 'lucide-react'
import { PACKAGES, type PackageId } from '../data/packages'
import { PackageCard } from './PackageCard'
import { CompareTable } from './CompareTable'

export function PackagesSection({ onQuote }: { onQuote: (id: PackageId) => void }) {
  return (
    <section className="section section-light" id="packages" aria-labelledby="packages-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <LayoutGrid size={14} aria-hidden="true" /> 3 gói hợp tác
          </span>
          <h2 className="section-title" id="packages-title">
            Chọn cách doanh nghiệp gặp sinh viên
          </h2>
          <p className="section-subtitle">
            Mỗi gói đều có truyền thông trên kênh Nhà trường và Vieclam24h, nhận CV ứng viên và báo cáo kết quả sau chương
            trình. Báo giá được tư vấn theo quy mô và nhu cầu tuyển dụng.
          </p>
        </div>
        <div className="pkg-grid">
          {PACKAGES.map((p) => (
            <PackageCard key={p.id} pkg={p} onQuote={onQuote} />
          ))}
        </div>
        <CompareTable />
      </div>
    </section>
  )
}
