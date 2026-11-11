import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { CONTACT } from '../data/packages'

interface Props {
  open: boolean
  onClose: () => void
}

export function ThankYouModal({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" data-testid="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <CheckCircle2 size={64} className="modal-icon" aria-hidden="true" />
        <h3 id="modal-title" className="modal-title">
          Gửi yêu cầu báo giá thành công!
        </h3>
        <p className="modal-text">
          Cảm ơn Quý Doanh nghiệp đã quan tâm. {CONTACT.name} sẽ liên hệ để gửi báo giá và tư vấn gói phù hợp trong thời
          gian sớm nhất.
        </p>
        <button ref={closeRef} type="button" className="btn btn-primary" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  )
}
