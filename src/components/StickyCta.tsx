import { Phone } from 'lucide-react'
import { CONTACT } from '../data/packages'

/** Thanh CTA cố định đáy màn hình — chỉ hiện trên mobile (CSS), ẩn khi đã cuộn tới form. */
export function StickyCta({ onQuote, hidden }: { onQuote: () => void; hidden: boolean }) {
  return (
    <div className={`sticky-cta ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
      <a href={CONTACT.phoneHref} className="btn sticky-call" tabIndex={hidden ? -1 : 0} aria-label={`Gọi ${CONTACT.phoneDisplay}`}>
        <Phone size={18} aria-hidden="true" />
      </a>
      <button type="button" className="btn btn-primary sticky-quote" onClick={onQuote} tabIndex={hidden ? -1 : 0}>
        Nhận báo giá
      </button>
    </div>
  )
}
