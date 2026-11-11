import { Building2, School, GraduationCap, HeartHandshake } from 'lucide-react'

const GROUPS = [
  {
    icon: Building2,
    who: 'Doanh nghiệp',
    tone: 'value-business',
    items: [
      'Tiếp cận nguồn nhân lực trẻ tiềm năng, đúng chuyên ngành',
      'Gia tăng nhận diện thương hiệu tuyển dụng',
      'Thu nhận CV và tuyển dụng ngay tại chương trình',
      'Xuất hiện trên kênh Nhà trường và Vieclam24h',
    ],
  },
  {
    icon: School,
    who: 'Nhà trường',
    tone: 'value-school',
    items: [
      'Nâng cao tỷ lệ kết nối việc làm cho sinh viên',
      'Mở rộng mạng lưới doanh nghiệp đồng hành',
      'Thêm kênh truyền thông hình ảnh và hoạt động hướng nghiệp',
      'Nhận báo cáo kết quả và đề xuất hợp tác tiếp theo',
    ],
  },
  {
    icon: GraduationCap,
    who: 'Sinh viên',
    tone: 'value-student',
    items: [
      'Tiếp cận trực tiếp nhà tuyển dụng và nhu cầu thực tế',
      'Xem trước vị trí và JD để chuẩn bị hồ sơ phù hợp',
      'Nộp CV, phỏng vấn nhanh, thực hành phỏng vấn',
      'Gia tăng cơ hội thực tập và việc làm khi còn đi học',
    ],
  },
]

const AUDIENCE = ['Sinh viên năm 3, năm 4', 'Sinh viên chuẩn bị thực tập', 'Sinh viên mới tốt nghiệp', 'Sinh viên ngành phù hợp nhu cầu tuyển dụng']

export function ValueSection() {
  return (
    <section className="section" id="values" aria-labelledby="values-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <HeartHandshake size={14} aria-hidden="true" /> Giá trị mang lại
          </span>
          <h2 className="section-title" id="values-title">
            Một chương trình – lợi ích cho cả 3 bên
          </h2>
          <p className="section-subtitle">
            Chương trình được thiết kế linh hoạt cho Ngày hội việc làm, Lễ tốt nghiệp, chương trình hướng nghiệp và các hoạt
            động kết nối doanh nghiệp của Nhà trường.
          </p>
        </div>

        <div className="value-grid">
          {GROUPS.map(({ icon: Icon, who, tone, items }) => (
            <article className={`value-card ${tone}`} key={who}>
              <div className="value-head">
                <span className="value-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>Đối với {who}</h3>
              </div>
              <ul>
                {items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="audience">
          <p className="audience-title">Sinh viên tham gia</p>
          <ul className="audience-chips">
            {AUDIENCE.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
