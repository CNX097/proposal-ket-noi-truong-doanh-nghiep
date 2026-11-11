import { Phone, User, Clock3, ShieldCheck } from 'lucide-react'
import { CONTACT, type PackageId } from '../data/packages'
import { RegisterForm } from './RegisterForm'

interface Props {
  selected: PackageId[]
  onSelectedChange: (ids: PackageId[]) => void
  onSuccess: () => void
}

export function ContactSection({ selected, onSelectedChange, onSuccess }: Props) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div className="contact-copy">
          <span className="section-label section-label-dark">Liên hệ báo giá</span>
          <h2 className="contact-title" id="contact-title">
            Sẵn sàng đưa thương hiệu tuyển dụng vào giảng đường?
          </h2>
          <p className="contact-sub">
            Báo giá được tư vấn riêng theo gói, quy mô sinh viên và hoạt động tùy chọn của doanh nghiệp. Chọn gói quan tâm và
            để lại thông tin – chúng tôi sẽ liên hệ lại.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-icon">
                <User size={20} aria-hidden="true" />
              </span>
              <div>
                <small>Người liên hệ</small>
                <b>{CONTACT.name}</b>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Phone size={20} aria-hidden="true" />
              </span>
              <div>
                <small>Hotline / Zalo</small>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Clock3 size={20} aria-hidden="true" />
              </span>
              <div>
                <small>Thời gian chương trình</small>
                <b>Theo kế hoạch của Nhà trường</b>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <ShieldCheck size={20} aria-hidden="true" />
              </span>
              <div>
                <small>Đơn vị tổ chức</small>
                <b>Vieclam24h phối hợp cùng Quý Trường</b>
              </div>
            </li>
          </ul>
        </div>
        <RegisterForm selected={selected} onSelectedChange={onSelectedChange} onSuccess={onSuccess} />
      </div>
    </section>
  )
}
