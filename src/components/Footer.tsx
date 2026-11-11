import { CONTACT } from '../data/packages'
import logoUrl from '../assets/vieclam24h-logo.png'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <img src={logoUrl} alt="Vieclam24h" width="120" height="38" className="footer-logo" />
        <p>
          Liên hệ: <b>{CONTACT.name}</b> · <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
        </p>
        <p className="footer-copy">© 2026 Vieclam24h. All rights reserved.</p>
      </div>
    </footer>
  )
}
