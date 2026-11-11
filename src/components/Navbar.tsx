import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoUrl from '../assets/vieclam24h-logo.png'

const LINKS = [
  { href: '#packages', label: 'Các gói' },
  { href: '#values', label: 'Giá trị' },
  { href: '#process', label: 'Quy trình' },
  { href: '#contact', label: 'Liên hệ' },
]

export function Navbar({ onQuote }: { onQuote: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="header-logo" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="Vieclam24h" width="150" height="48" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Mở menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>

        <div id="nav-menu" data-testid="nav-menu" className={`nav-menu ${open ? 'open' : ''}`}>
          <nav aria-label="Điều hướng trang">
            <ul className="nav-links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="btn btn-primary header-cta"
            onClick={() => {
              setOpen(false)
              onQuote()
            }}
          >
            Nhận báo giá
          </button>
        </div>
      </div>
    </header>
  )
}
