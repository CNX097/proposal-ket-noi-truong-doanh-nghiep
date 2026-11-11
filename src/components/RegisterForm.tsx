import { useRef, useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { PACKAGES, CONTACT, type PackageId } from '../data/packages'
import { submitQuote, normalizePhone, isValidVnPhone, type SubmitResult } from '../lib/submitQuote'

type FieldErrors = Partial<Record<'company' | 'email' | 'phone' | 'contactName' | 'packages', string>>

interface Props {
  selected: PackageId[]
  onSelectedChange: (ids: PackageId[]) => void
  onSuccess: () => void
  submit?: (data: FormData) => Promise<SubmitResult>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function RegisterForm({ selected, onSelectedChange, onSuccess, submit = submitQuote }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [networkError, setNetworkError] = useState(false)
  const inFlight = useRef(false)

  const toggle = (id: PackageId) => {
    const next = selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]
    onSelectedChange(next)
    if (next.length) setErrors((e) => ({ ...e, packages: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inFlight.current) return
    const form = e.currentTarget
    const raw = new FormData(form)
    const value = (k: string) => String(raw.get(k) ?? '').trim()
    const phone = normalizePhone(value('phone'))

    const next: FieldErrors = {}
    if (!value('company')) next.company = 'Vui lòng nhập tên doanh nghiệp'
    if (!EMAIL_RE.test(value('email'))) next.email = 'Email không hợp lệ'
    if (!isValidVnPhone(phone)) next.phone = 'Số điện thoại không hợp lệ'
    if (!value('contactName')) next.contactName = 'Vui lòng nhập người liên hệ'
    if (selected.length === 0) next.packages = 'Vui lòng chọn ít nhất 1 gói quan tâm'
    setErrors(next)
    if (Object.keys(next).length) return

    const payload = new FormData()
    payload.set('company', value('company'))
    payload.set('email', value('email'))
    payload.set('phone', phone)
    payload.set('contactName', value('contactName'))
    payload.set('packages', PACKAGES.filter((p) => selected.includes(p.id)).map((p) => p.name).join(', '))
    payload.set('submittedAt', new Date().toISOString())

    inFlight.current = true
    setIsSubmitting(true)
    setNetworkError(false)
    try {
      const result = await submit(payload)
      if (result === 'error') {
        setNetworkError(true)
        return
      }
      form.reset()
      onSelectedChange([])
      onSuccess()
    } finally {
      inFlight.current = false
      setIsSubmitting(false)
    }
  }

  const field = (name: keyof FieldErrors, label: string, type: string, placeholder: string, autoComplete: string) => (
    <div className="form-field">
      <label htmlFor={`f-${name}`}>
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={`f-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={type === 'tel' ? 'tel' : undefined}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `e-${name}` : undefined}
      />
      {errors[name] && (
        <p className="form-error" id={`e-${name}`}>
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <form className="quote-form" noValidate onSubmit={handleSubmit}>
      <h3 className="quote-form-title">Nhận báo giá</h3>
      <p className="quote-form-desc">Để lại thông tin, chúng tôi sẽ gửi báo giá chi tiết và tư vấn gói phù hợp.</p>

      <div className="form-grid">
        {field('company', 'Tên doanh nghiệp', 'text', 'Công ty CP ABC', 'organization')}
        {field('contactName', 'Người liên hệ', 'text', 'Họ và tên', 'name')}
        {field('email', 'Email liên hệ', 'email', 'hr@congty.vn', 'email')}
        {field('phone', 'Số điện thoại', 'tel', '09xx xxx xxx', 'tel')}
      </div>

      <fieldset className="form-packages" aria-describedby={errors.packages ? 'e-packages' : undefined}>
        <legend>
          Gói quan tâm <span aria-hidden="true">*</span>
        </legend>
        <div className="form-packages-options">
          {PACKAGES.map((p) => (
            <label key={p.id} className={`pkg-option ${selected.includes(p.id) ? 'is-checked' : ''}`}>
              <input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggle(p.id)} />
              <span>{p.name}</span>
            </label>
          ))}
        </div>
        {errors.packages && (
          <p className="form-error" id="e-packages">
            {errors.packages}
          </p>
        )}
      </fieldset>

      {networkError && (
        <div className="form-alert" role="alert">
          Hệ thống đang bận, chưa gửi được thông tin. Vui lòng gọi hotline{' '}
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> ({CONTACT.name}) để được hỗ trợ ngay.
        </div>
      )}

      <button type="submit" className="btn btn-primary quote-submit" disabled={isSubmitting}>
        {isSubmitting ? (
          'Đang gửi...'
        ) : (
          <>
            Nhận báo giá <Send size={18} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
