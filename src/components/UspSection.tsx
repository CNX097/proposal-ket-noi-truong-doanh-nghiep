import { FileSignature, CalendarRange, Settings2, BarChart3, Sparkles } from 'lucide-react'

const POINTS = [
  { icon: FileSignature, title: 'Làm việc & ký kết với Nhà trường', text: 'Vieclam24h chủ động kết nối, ký kết và thống nhất kế hoạch cùng Quý Trường.' },
  { icon: CalendarRange, title: 'Kế hoạch, timeline & truyền thông', text: 'Lên kế hoạch triển khai, thiết kế ấn phẩm, truyền thông trên kênh trường và Vieclam24h.' },
  { icon: Settings2, title: 'Vận hành trọn gói tại chương trình', text: 'Setup booth, backdrop, standee; điều phối TNV/CTV, check-in, xử lý phát sinh, quay chụp.' },
  { icon: BarChart3, title: 'Báo cáo kết quả sau chương trình', text: 'Tổng hợp hình ảnh, gửi báo cáo, thư cảm ơn và đề xuất hoạt động hợp tác tiếp theo.' },
]

export function UspSection() {
  return (
    <section className="section usp" aria-labelledby="usp-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Sparkles size={14} aria-hidden="true" /> Vì sao chọn Vieclam24h
          </span>
          <h2 className="section-title" id="usp-title">
            Một đối tác – 3 cách tiếp cận sinh viên
          </h2>
          <p className="section-subtitle">
            Doanh nghiệp chỉ cần chuẩn bị nội dung tuyển dụng và nhân sự tham dự. Toàn bộ khâu làm việc với Nhà trường và
            vận hành do Vieclam24h đảm nhận.
          </p>
        </div>
        <div className="usp-grid">
          {POINTS.map(({ icon: Icon, title, text }, i) => (
            <article className="usp-card" key={title}>
              <div className="usp-step">0{i + 1}</div>
              <div className="usp-icon">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
