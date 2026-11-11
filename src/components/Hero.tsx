import { ArrowRight, Store, Presentation, Radio, GraduationCap, FileText, Handshake } from 'lucide-react'

export function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <GraduationCap size={16} aria-hidden="true" /> Proposal hợp tác Doanh nghiệp – Nhà trường
          </span>
          <h1 className="hero-title">
            Kết nối doanh nghiệp với sinh viên <span className="hero-highlight">ngay tại trường</span>
          </h1>
          <p className="hero-sub">
            Vieclam24h phối hợp cùng Nhà trường tổ chức Job Fair, Workshop và Livestream tuyển dụng – giúp doanh nghiệp
            tiếp cận nguồn nhân lực trẻ và nhận CV ngay tại chương trình.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-light" onClick={onQuote}>
              Nhận báo giá <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a href="#packages" className="btn hero-secondary">
              Xem 3 gói hợp tác
            </a>
          </div>
          <ul className="hero-facts">
            <li>
              <strong>100 – 1.000</strong>
              <span>sinh viên mỗi chương trình</span>
            </li>
            <li>
              <strong>3</strong>
              <span>hình thức kết nối</span>
            </li>
            <li>
              <strong>Trọn gói</strong>
              <span>từ ký kết đến báo cáo</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card-1">
            <Store size={22} />
            <div>
              <b>Job Fair</b>
              <small>Gian hàng tuyển dụng tại trường</small>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <Presentation size={22} />
            <div>
              <b>Workshop kết hợp tuyển dụng</b>
              <small>Chuyên đề + phỏng vấn trực tiếp</small>
            </div>
          </div>
          <div className="hero-card hero-card-3">
            <Radio size={22} />
            <div>
              <b>Livestream kết hợp tuyển dụng</b>
              <small>Lên sóng kênh trường & Vieclam24h</small>
            </div>
          </div>
          <div className="hero-badge hero-badge-cv">
            <FileText size={18} /> Nhận CV ngay tại chương trình
          </div>
          <div className="hero-badge hero-badge-partner">
            <Handshake size={18} /> Nhà trường · Doanh nghiệp · Vieclam24h
          </div>
        </div>
      </div>
    </section>
  )
}
