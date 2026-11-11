import { Workflow, Gift, FileSearch, MessagesSquare, UserRoundCheck } from 'lucide-react'
import { AgendaTabs } from './AgendaTabs'

const PHASES = [
  {
    phase: 'Trước chương trình',
    v24h: [
      'Làm việc, ký kết với Nhà trường',
      'Xây dựng kế hoạch triển khai và timeline',
      'Thiết kế sơ đồ gian hàng, slide, ấn phẩm truyền thông',
      'Tạo group Zalo điều phối, thu thập logo, JD, thông tin DN',
      'Phối hợp truyền thông cùng Nhà trường và kênh Vieclam24h',
    ],
    business: [
      'Xác nhận tham gia và thanh toán chi phí',
      'Cung cấp logo, JD, bài giới thiệu doanh nghiệp',
      'Cung cấp thông tin nhân sự tham dự / lên sóng',
      'Gửi file nội dung chia sẻ để Vieclam24h thiết kế',
      'Đăng ký hoạt động tùy chọn, chuẩn bị quà tặng (nếu có)',
    ],
  },
  {
    phase: 'Trong chương trình',
    v24h: [
      'Điều phối vận hành và kịch bản chương trình',
      'Check-in doanh nghiệp, hỗ trợ setup gian hàng',
      'Điều phối TNV/CTV hỗ trợ, xử lý phát sinh',
      'Quản lý link/mã QR nhận CV (Livestream)',
      'Chụp ảnh, quay phim, truyền thông trực tiếp',
    ],
    business: [
      'Cử nhân sự trực gian hàng / lên sóng',
      'Tư vấn tuyển dụng cho sinh viên',
      'Thu nhận CV, phỏng vấn nhanh (nếu có)',
      'Tổ chức Mini game / Lucky Draw, CV Review, Mock Interview',
      'Phát quà tặng và tài liệu tuyển dụng',
    ],
  },
  {
    phase: 'Sau chương trình',
    v24h: [
      'Tổng hợp hình ảnh chương trình',
      'Chuyển danh sách CV cho doanh nghiệp',
      'Gửi báo cáo kết quả và thư cảm ơn',
      'Thu phản hồi từ doanh nghiệp và Nhà trường',
      'Đề xuất hoạt động hợp tác tiếp theo',
    ],
    business: [
      'Theo dõi ứng viên sau chương trình',
      'Liên hệ phỏng vấn và tuyển dụng',
      'Phản hồi chất lượng chương trình',
      'Chia sẻ kết quả tuyển dụng (nếu có)',
    ],
  },
]

const OPTIONAL = [
  { icon: Gift, title: 'Mini game / Lucky Draw', text: 'Tăng tương tác, thu hút sinh viên ghé gian hàng hoặc bình luận trên sóng.' },
  { icon: FileSearch, title: 'CV Review', text: 'Nhà tuyển dụng nhận xét CV trực tiếp, sinh viên chỉnh hồ sơ ngay.' },
  { icon: MessagesSquare, title: 'Mock Interview', text: 'Thực hành phỏng vấn, giúp doanh nghiệp đánh giá nhanh ứng viên.' },
  { icon: UserRoundCheck, title: 'Tư vấn nghề nghiệp 1:1', text: 'Định hướng nghề nghiệp, giới thiệu lộ trình phát triển tại doanh nghiệp.' },
]

export function ProcessSection() {
  return (
    <section className="section section-light" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Workflow size={14} aria-hidden="true" /> Quy trình triển khai
          </span>
          <h2 className="section-title" id="process-title">
            Rõ vai trò – trước, trong và sau chương trình
          </h2>
          <p className="section-subtitle">
            Vieclam24h điều phối toàn bộ chương trình; Nhà trường cung cấp địa điểm, studio và kênh truyền thông; Doanh nghiệp
            tập trung vào nội dung tuyển dụng.
          </p>
        </div>

        <ol className="process-grid">
          {PHASES.map((p, i) => (
            <li className="process-card" key={p.phase}>
              <div className="process-head">
                <span className="process-num">{i + 1}</span>
                <h3>{p.phase}</h3>
              </div>
              <div className="process-cols">
                <div>
                  <p className="process-role role-v24h">Vieclam24h</p>
                  <ul>
                    {p.v24h.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="process-role role-business">Doanh nghiệp</p>
                  <ul>
                    {p.business.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <AgendaTabs />

        <div className="optional">
          <h3 className="optional-title">Hoạt động tùy chọn</h3>
          <p className="optional-sub">Đăng ký thêm theo nhu cầu của doanh nghiệp và Nhà trường.</p>
          <div className="optional-grid">
            {OPTIONAL.map(({ icon: Icon, title, text }) => (
              <div className="optional-card" key={title}>
                <Icon size={24} aria-hidden="true" />
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
